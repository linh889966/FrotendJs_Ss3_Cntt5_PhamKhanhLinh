import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { Button } from "@mui/material"

export default function StudentTable() {
  const list = useSelector((s:RootState)=>s.students.list)
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr className="[&>th]:py-2 [&>th]:px-3 text-left">
            <th>#</th><th>Mã sinh viên</th><th>Tên sinh viên</th><th>Tuổi</th><th>Giới tính</th><th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {list.map((s,i)=>(
            <tr key={s.id} className="border-t [&>td]:py-2 [&>td]:px-3">
              <td>{i+1}</td><td>{s.id}</td><td>{s.name}</td><td>{s.age}</td><td>{s.gender}</td>
              <td className="space-x-2">
                <Button size="small" variant="contained">XEM</Button>
                <Button size="small" color="warning" variant="contained">SỬA</Button>
                <Button size="small" color="error" variant="contained">XÓA</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
