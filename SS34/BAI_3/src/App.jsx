import StudentTable from "./features/students/StudentTable"
import { Button, TextField } from "@mui/material"

export default function App() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Hiển thị danh sách sinh viên</h1>
      <div className="flex items-center gap-2 mb-3">
        <Button variant="contained">THÊM MỚI SINH VIÊN</Button>
        <TextField size="small" placeholder="Search here" className="w-64" />
        <Button variant="outlined" size="small">SẮP XẾP</Button>
      </div>
      <StudentTable />
    </div>
  )
}
