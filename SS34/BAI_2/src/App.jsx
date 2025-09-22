import { useState } from "react"
import { Button } from "@mui/material"
import StudentTable from "./features/students/StudentTable"
import StudentForm from "./features/students/StudentForm"
import { Student } from "./features/students/studentTypes"

export default function App() {
  const [editing, setEditing] = useState<Student|null>(null)
  return (
    <div className="p-5 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Quản lý sinh viên</h1>
      <div className="flex items-center gap-3 mb-4">
        <Button variant="contained" onClick={()=>setEditing(null)}>THÊM MỚI SINH VIÊN</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2"><StudentTable onEdit={(s)=>setEditing(s)} /></div>
        <div><StudentForm editing={editing} onDone={()=>setEditing(null)} /></div>
      </div>
    </div>
  )
}
