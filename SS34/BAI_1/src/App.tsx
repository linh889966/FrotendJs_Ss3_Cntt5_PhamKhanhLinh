import { useMemo, useState } from "react";
import StudentTable from "./features/students/StudentTable";
import StudentForm from "./features/students/StudentForm";
import SearchBar from "./components/SearchBar";
import SortButton, { SortKey } from "./components/SortButton";
import { Button, Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";
import { Student } from "./features/students/studentSlice";

export default function App() {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [editing, setEditing] = useState<Student|null>(null);
  const [viewing, setViewing] = useState<Student|null>(null);

  const title = useMemo(()=> editing ? "Cập nhật sinh viên" : "Thêm mới sinh viên", [editing]);

  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">[Bài tập] Clone giao diện quản lý sinh viên</h1>

      <div className="flex items-center gap-3 mb-3">
        <Button variant="contained" onClick={()=>setEditing(null)}>THÊM MỚI SINH VIÊN</Button>
        <SearchBar value={query} onChange={setQuery} className="w-64" />
        <SortButton value={sortKey} onChange={setSortKey} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <StudentTable
            filter={query}
            sortKey={sortKey}
            onView={(s)=>setViewing(s)}
            onEdit={(s)=>setEditing(s)}
          />
        </div>
        <div>
          <h2 className="text-sm font-medium mb-2">{title}</h2>
          <StudentForm editing={editing} onDone={()=>setEditing(null)} />
        </div>
      </div>

      <Dialog open={!!viewing} onClose={()=>setViewing(null)} fullWidth maxWidth="sm">
        <DialogTitle>Chi tiết sinh viên</DialogTitle>
        <DialogContent className="space-y-2">
          {viewing && (
            <>
              <Row label="Mã SV" value={viewing.id} />
              <Row label="Họ tên" value={viewing.name} />
              <Row label="Tuổi" value={String(viewing.age)} />
              <Row label="Giới tính" value={viewing.gender} />
              <Row label="Ngày sinh" value={viewing.birth || ""} />
              <Row label="Nơi sinh" value={viewing.place || ""} />
              <Row label="Địa chỉ" value={viewing.address || ""} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Row({label, value}:{label:string; value:string}) {
  return (
    <div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm">{value || "-"}</div>
      <Divider className="!my-2" />
    </div>
  );
}
