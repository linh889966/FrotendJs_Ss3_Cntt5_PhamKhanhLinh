import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../app/store"
import { Student } from "./studentTypes"
import { deleteStudent } from "./studentReducer"
import { Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material"
import { useMemo, useState } from "react"

export default function StudentTable({ onEdit }: { onEdit:(s:Student)=>void }) {
  const list = useSelector((s:RootState)=>s.students.students)
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const [view, setView] = useState<Student|null>(null)
  const [sortKey, setSortKey] = useState<"id"|"fullName"|"age">("id")

  const data = useMemo(()=>{
    const q = query.trim().toLowerCase()
    return list.filter(s => q ? [s.id,s.fullName,s.gender?"nam":"nữ",s.age,s.placeOfBirth,s.address].join(" ").toLowerCase().includes(q) : true)
               .sort((a,b)=>{const av=(a as any)[sortKey],bv=(b as any)[sortKey];return av>bv?1:av<bv?-1:0})
  },[list,query,sortKey])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <TextField size="small" placeholder="Search here" value={query} onChange={e=>setQuery(e.target.value)} className="w-64" />
        <Button variant="outlined" size="small" onClick={()=>setSortKey("id")}>Sắp xếp: ID</Button>
        <Button variant="outlined" size="small" onClick={()=>setSortKey("fullName")}>Sắp xếp: Tên</Button>
        <Button variant="outlined" size="small" onClick={()=>setSortKey("age")}>Sắp xếp: Tuổi</Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr className="[&>th]:py-2 [&>th]:px-3 text-left">
              <th>#</th><th>Mã sinh viên</th><th>Tên sinh viên</th><th>Tuổi</th><th>Giới tính</th><th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s,i)=>(
              <tr key={s.id} className="border-t [&>td]:py-2 [&>td]:px-3">
                <td>{i+1}</td><td>{s.id}</td><td>{s.fullName}</td><td>{s.age}</td><td>{s.gender?"Nam":"Nữ"}</td>
                <td className="space-x-2">
                  <Button size="small" variant="contained" onClick={()=>setView(s)}>XEM</Button>
                  <Button size="small" color="warning" variant="contained" onClick={()=>onEdit(s)}>SỬA</Button>
                  <Button size="small" color="error" variant="contained" onClick={()=>dispatch(deleteStudent(s.id))}>XÓA</Button>
                </td>
              </tr>
            ))}
            {data.length===0&&<tr><td colSpan={6} className="text-center py-6 text-gray-500">Không có dữ liệu</td></tr>}
          </tbody>
        </table>
      </div>
      <Dialog open={!!view} onClose={()=>setView(null)} fullWidth maxWidth="sm">
        <DialogTitle>Chi tiết sinh viên</DialogTitle>
        <DialogContent className="space-y-2">
          {view&&<div className="text-sm space-y-2">
            <p><b>Mã SV:</b> {view.id}</p>
            <p><b>Họ tên:</b> {view.fullName}</p>
            <p><b>Tuổi:</b> {view.age}</p>
            <p><b>Giới tính:</b> {view.gender?"Nam":"Nữ"}</p>
            <p><b>Ngày sinh:</b> {view.dateOfBirth}</p>
            <p><b>Nơi sinh:</b> {view.placeOfBirth}</p>
            <p><b>Địa chỉ:</b> {view.address}</p>
          </div>}
        </DialogContent>
      </Dialog>
    </div>
  )
}
