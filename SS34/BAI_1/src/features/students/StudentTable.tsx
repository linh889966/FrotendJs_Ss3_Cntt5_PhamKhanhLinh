import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { Student, deleteStudent } from "./studentSlice";
import { Button } from "@mui/material";
import { useState } from "react";

export default function StudentTable({
  filter, sortKey, onView, onEdit,
}: {
  filter: string;
  sortKey: "id"|"name"|"age"|"gender";
  onView: (st: Student)=>void;
  onEdit: (st: Student)=>void;
}) {
  const list = useSelector((s:RootState)=>s.students.list);
  const dispatch = useDispatch();
  const [confirmId, setConfirmId] = useState<string|null>(null);

  const data = list
    .filter(s => {
      const q = filter.trim().toLowerCase();
      if (!q) return true;
      return [s.id, s.name, s.gender, String(s.age), s.place, s.address]
        .some(v => (v ?? "").toString().toLowerCase().includes(q));
    })
    .sort((a,b)=>{
      const av = (a as any)[sortKey], bv = (b as any)[sortKey];
      return av > bv ? 1 : av < bv ? -1 : 0;
    });

  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr className="[&>th]:py-2 [&>th]:px-3 text-left">
            <th>#</th><th>Mã sinh viên</th><th>Tên sinh viên</th>
            <th>Tuổi</th><th>Giới tính</th><th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s, idx)=>(
            <tr key={s.id} className="border-t [&>td]:py-2 [&>td]:px-3">
              <td>{idx+1}</td>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.gender}</td>
              <td className="space-x-2">
                <Button size="small" variant="contained" onClick={()=>onView(s)}>XEM</Button>
                <Button size="small" color="warning" variant="contained" onClick={()=>onEdit(s)}>SỬA</Button>
                <Button size="small" color="error" variant="contained" onClick={() => setConfirmId(s.id)}>XÓA</Button>
                {confirmId===s.id && (
                  <span className="ml-2">
                    <Button size="small" color="error" onClick={()=>{dispatch(deleteStudent(s.id)); setConfirmId(null);}}>OK</Button>
                    <Button size="small" onClick={()=>setConfirmId(null)}>HUỶ</Button>
                  </span>
                )}
              </td>
            </tr>
          ))}
          {data.length===0 && (
            <tr><td colSpan={6} className="text-center py-6 text-gray-500">Không có dữ liệu</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
