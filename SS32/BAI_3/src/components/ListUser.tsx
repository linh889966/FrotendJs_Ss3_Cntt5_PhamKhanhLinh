import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../store"
import { removeUser, updateUser } from "../features/users/usersSlice"
import type { User } from "../types"

export default function ListUser() {
  const users = useSelector((s: RootState) => s.users.list)
  const dispatch = useDispatch<AppDispatch>()

  const handleEdit = (u: User) => {
    const userName = window.prompt("Tên", u.userName)?.trim()
    if (!userName) return
    const genderInput = window.prompt("Giới tính (Nam/Nữ)", u.gender)?.trim()
    const gender = (genderInput === "Nam" || genderInput === "Nữ" ? genderInput : u.gender) as User["gender"]
    const dateBirth = window.prompt("Ngày sinh (dd/mm/yyyy)", u.dateBirth)?.trim() || u.dateBirth
    const address = window.prompt("Địa chỉ", u.address)?.trim() || u.address
    dispatch(updateUser({ ...u, userName, gender, dateBirth, address }))
  }

  const th = { border: "1px solid #ddd", padding: "8px", background: "#f6f6f6" }
  const td = { border: "1px solid #eee", padding: "8px" }

  return (
    <div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
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
                <button onClick={() => handleEdit(u)} style={{ marginRight: 8 }}>Sửa</button>
                <button onClick={() => dispatch(removeUser(u.id))}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
