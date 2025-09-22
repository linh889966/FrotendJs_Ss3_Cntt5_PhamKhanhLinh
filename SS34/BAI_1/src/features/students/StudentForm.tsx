import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { deleteStudent } from "./studentSlice";
import { Button } from "@mui/material";

export default function StudentTable() {
  const students = useSelector((state: RootState) => state.students.students);
  const dispatch = useDispatch();

  return (
    <table className="table-auto border w-full mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th>#</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Tuổi</th>
          <th>Giới tính</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, index) => (
          <tr key={s.id} className="border">
            <td>{index + 1}</td>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.age}</td>
            <td>{s.gender}</td>
            <td className="space-x-2">
              <Button variant="contained" color="error" onClick={() => dispatch(deleteStudent(s.id))}>
                XÓA
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
