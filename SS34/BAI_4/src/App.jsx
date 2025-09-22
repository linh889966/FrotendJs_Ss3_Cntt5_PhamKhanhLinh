import StudentForm from "./features/students/StudentForm"
import StudentTable from "./features/students/StudentTable"
import { Button, TextField } from "@mui/material"
import { useState } from "react"

export default function App() {
  const [q,setQ] = useState("")
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Thêm mới thông tin sinh viên</h1>
      <div className="flex items-center gap-2 mb-3">
        <Button variant="contained">THÊM MỚI SINH VIÊN</Button>
        <TextField size="small" placeholder="Search here" value={q} onChange={e=>setQ(e.target.value)} className="w-64" />
        <Button variant="outlined" size="small">SẮP XẾP</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2"><StudentTable/></div>
        <div><StudentForm/></div>
      </div>
    </div>
  )
}
