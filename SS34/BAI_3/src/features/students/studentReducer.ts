import { Student } from "./types"

export interface State { list: Student[] }

const initialState: State = {
  list: [
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
    { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
  ],
}

export const studentReducer = (state = initialState) => state
