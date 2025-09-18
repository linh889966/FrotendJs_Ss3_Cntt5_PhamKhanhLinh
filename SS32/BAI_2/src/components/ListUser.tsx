import { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addUser, deleteUser, updateUser } from '../features/users/userSlice';
import type { User } from '../features/users/types';

const emptyForm: Omit<User, 'id'> = {
  userName: '',
  gender: 'Nam',
  dateBirth: '',
  address: '',
};

export default function ListUser() {
  const users = useAppSelector(s => s.users);
  const dispatch = useAppDispatch();

  const nextId = useMemo(
    () => (users.length ? Math.max(...users.map(u => u.id)) + 1 : 1),
    [users]
  );

  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<Omit<User, 'id'>>(emptyForm);

  const startEdit = (u: User) => {
    setEditingId(u.id);
    setForm({
      userName: u.userName,
      gender: u.gender,
      dateBirth: u.dateBirth,
      address: u.address,
    });
  };

  const reset = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateUser({ id: editingId, ...form }));
    } else {
      dispatch(addUser({ id: nextId, ...form }));
    }
    reset();
  };

  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ marginBottom: 8 }}>Danh sách người dùng</h2>

      {/* Form thêm / sửa */}
      <form onSubmit={submit} style={{ display: 'grid', gap: 8, maxWidth: 720, marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 160px 180px', gap: 8 }}>
          <input
            placeholder="Họ và tên"
            value={form.userName}
            onChange={e => setForm({ ...form, userName: e.target.value })}
            required
          />
          <select
            value={form.gender}
            onChange={e => setForm({ ...form, gender: e.target.value as User['gender'] })}
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
          <input
            type="date"
            value={form.dateBirth}
            onChange={e => setForm({ ...form, dateBirth: e.target.value })}
            required
          />
        </div>
        <input
          placeholder="Địa chỉ"
          value={form.address}
          onChange={e => setForm({ ...form, address: e.target.value })}
          required
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit">{editingId ? 'Cập nhật' : 'Thêm mới'}</button>
          {editingId && <button type="button" onClick={reset}>Huỷ</button>}
        </div>
      </form>

      {/* Bảng */}
      <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 1000 }}>
        <thead>
          <tr>
            <th style={th}>Id</th>
            <th style={th}>Tên</th>
            <th style={th}>Giới tính</th>
            <th style={th}>Ngày sinh</th>
            <th style={th}>Địa chỉ</th>
            <th style={th}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td style={td}>{u.id}</td>
              <td style={td}>{u.userName}</td>
              <td style={td}>{u.gender}</td>
              <td style={td}>{u.dateBirth}</td>
              <td style={td}>{u.address}</td>
              <td style={td}>
                <button onClick={() => startEdit(u)} style={{ marginRight: 8 }}>Sửa</button>
                <button onClick={() => dispatch(deleteUser(u.id))}>Xóa</button>
              </td>
            </tr>
          ))}
          {!users.length && (
            <tr><td style={td} colSpan={6}>Chưa có dữ liệu</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const th: React.CSSProperties = { border: '1px solid #ddd', padding: 8, background: '#f7f7f7', textAlign: 'left' };
const td: React.CSSProperties = { border: '1px solid #ddd', padding: 8 };
