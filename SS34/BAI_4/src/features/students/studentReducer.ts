import { Student } from "./types"

export interface State { list: Student[] }

const initialState: State = {
  list: [
    { id:"SV001", name:"Nguyễn Văn A", age:20, gender:"Nam", dateOfBirth:"2005-01-01", placeOfBirth:"Hà Nội", address:"Cầu Giấy" },
    { id:"SV002", name:"Nguyễn Văn B", age:21, gender:"Nữ", dateOfBirth:"2004-02-01", placeOfBirth:"Đà Nẵng", address:"Hải Châu" },
    { id:"SV003", name:"Nguyễn Văn C", age:19, gender:"Nam", dateOfBirth:"2006-03-01", placeOfBirth:"HCM", address:"Q.1" }
  ],
}

export const ADD_STUDENT = "ADD_STUDENT"
export const addStudent = (student: Student) => ({ type: ADD_STUDENT, payload: student })

export const studentReducer = (state = initialState, action: any): State => {
  swi
