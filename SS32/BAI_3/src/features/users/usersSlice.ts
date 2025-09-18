import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../../types"

type UsersState = { list: User[] }
const initialState: UsersState = {
  list: [
    { id: 1, userName: "Nguyễn Văn A", gender: "Nam", dateBirth: "20/11/2023", address: "Thanh Xuân, Hà Nội" },
    { id: 2, userName: "Nguyễn Thị B", gender: "Nữ", dateBirth: "20/11/2023", address: "Cầu Giấy, Hà Nội" },
    { id: 3, userName: "Trần Văn C", gender: "Nam", dateBirth: "18/05/1998", address: "Đống Đa, Hà Nội" }
  ]
}

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload)
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const i = state.list.findIndex(u => u.id === action.payload.id)
      if (i > -1) state.list[i] = action.payload
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(u => u.id !== action.payload)
    }
  }
})

export const { addUser, updateUser, removeUser } = slice.actions
export default slice.reducer
