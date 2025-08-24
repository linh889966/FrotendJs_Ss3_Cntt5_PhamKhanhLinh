import { useEffect, useMemo, useState } from "react";

const LS_KEY = "students.v1";

/* ---------- tiện ích nhỏ ---------- */
const uid = () => Math.random().toString(36).slice(2, 9);
const STATUS = {
  studying: { text: "Đang học", color: "#16a34a" },
  paused:   { text: "Tạm ngừng", color: "#f59e0b" },
  left:     { text: "Nghỉ học",  color: "#ef4444" },
};

/* ---------- Modal đơn giản ---------- */
function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <b>{title}</b>
          <button onClick={onClose} style={styles.iconBtn}>×</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
function StatusBadge({ value }) {
  const s = STATUS[value] ?? STATUS.studying;
  return (
    <span style={{
      padding: "2px 8px",
      borderRadius: 10,
      background: `${s.color}22`,
      color: s.color,
      fontSize: 12,
      whiteSpace: "nowrap",
    }}>
      {s.text}
    </span>
  );
}

/* ---------- Phân trang ---------- */
function Pagination({ page, pageCount, onPage }) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 12 }}>
      {pages.map(p => (
        <button key={p}
          onClick={() => onPage(p)}
          style={{ ...styles.pageBtn, ...(p === page ? styles.pageBtnActive : {}) }}>
          {p}
        </button>
      ))}
    </div>
  );
}

/* ---------- Form thêm/sửa ---------- */
function StudentForm({ initial, onSubmit }) {
  const [form, setForm] = useState(() => initial ?? {
    id: "", name: "", dob: "", email: "", status: "studying"
  });
  useEffect(() => { if (initial) setForm(initial); }, [initial]);

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name || !form.email) return alert("Vui lòng nhập đủ Mã SV, Họ tên, Email.");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
      <label>Mã sinh viên
        <input value={form.id} onChange={e => update("id", e.target.value)} placeholder="SV001" />
      </label>
      <label>Họ và tên
        <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Nguyễn Văn A" />
      </label>
      <label>Ngày sinh
        <input type="date" value={form.dob ?? ""} onChange={e => update("dob", e.target.value)} />
      </label>
      <label>Email
        <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="abc@gmail.com" />
      </label>
      <label>Trạng thái
        <select value={form.status} onChange={e => update("status", e.target.value)}>
          <option value="studying">Đang học</option>
          <option value="paused">Tạm ngừng</option>
          <option value="left">Nghỉ học</option>
        </select>
      </label>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 4 }}>
        <button type="submit" style={styles.primary}>Lưu</button>
      </div>
    </form>
  );
}

/* ---------- Ứng dụng chính ---------- */
export default function StudentApp() {
  const [rows, setRows] = useState(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
    // dữ liệu mẫu
    return [
      { _k: uid(), id: "SV001", name: "Nguyễn Văn A", dob: "2003-12-12", email: "nva@gmail.com", status: "studying" },
      { _k: uid(), id: "SV002", name: "Nguyễn Thị B", dob: "2002-07-21", email: "ntb@gmail.com", status: "paused" },
      { _k: uid(), id: "SV003", name: "Phạm Minh C", dob: "2004-03-05", email: "pmc@gmail.com", status: "left" },
    ];
  });
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(rows));
  }, [rows]);

  // UI state
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState("id_asc");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  // modal state
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  // lọc + tìm + sắp xếp
  const filtered = useMemo(() => {
    let data = [...rows];
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(r =>
        r.id.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q)
      );
    }
    if (status !== "all") data = data.filter(r => r.status === status);

    const [key, dir] = sortBy.split("_");
    const cmp = (a, b) => {
      const va = (a[key] ?? "").toString().toLowerCase();
      const vb = (b[key] ?? "").toString().toLowerCase();
      return va.localeCompare(vb);
    };
    data.sort(cmp);
    if (dir === "desc") data.reverse();

    return data;
  }, [rows, query, status, sortBy]);

  // phân trang
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  useEffect(() => { if (page > pageCount) setPage(pageCount); }, [pageCount, page]);

  // CRUD
  const onCreate = () => { setEditing(null); setOpen(true); };
  const onEdit = (item) => { setEditing(item); setOpen(true); };
  const onDelete = (k) => {
    if (confirm("Xoá sinh viên này?")) setRows(rs => rs.filter(r => r._k !== k));
  };
  const onSubmitForm = (data) => {
    if (editing) {
      setRows(rs => rs.map(r => r._k === editing._k ? { ...editing, ...data } : r));
    } else {
      if (rows.some(r => r.id === data.id)) {
        alert("Mã sinh viên đã tồn tại!");
        return;
      }
      setRows(rs => [{ _k: uid(), ...data }, ...rs]);
      setPage(1);
    }
    setOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={{ margin: 0 }}>Quản lý sinh viên</h3>
        <button onClick={onCreate} style={styles.primary}>Thêm mới sinh viên</button>
      </div>

      <div style={styles.toolbar}>
        <input
          placeholder="Tìm theo mã, tên, email…"
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1); }}
          style={styles.input}
        />
        <select value={status} onChange={e => { setStatus(e.target.value); setPage(1); }}>
          <option value="all">Tất cả trạng thái</option>
          <option value="studying">Đang học</option>
          <option value="paused">Tạm ngừng</option>
          <option value="left">Nghỉ học</option>
        </select>
        <select value={sortBy} onChange={e => setSo
