import { Student } from "./studentTypes"

export interface StudentState { students: Student[] }

const initialState: StudentState = {
  students: [
    { id:1, fullName:"Nguyễn Văn A", age:20, gender:true,  dateOfBirth:"2005-01-01", placeOfBirth:"Hà Nội", address:"Cầu Giấy" },
    { id:2, fullName:"Nguyễn Văn B", age:21, gender:false, dateOfBirth:"2004-02-01", placeOfBirth:"Đà Nẵng", address:"Hải Châu" },
    { id:3, fullName:"Nguyễn Văn C", age:19, gender:true,  dateOfBirth:"2006-03-01", placeOfBirth:"HCM",    address:"Q.1" }
  ],
}

export const ADD_STUDENT = "ADD_STUDENT"
export const UPDATE_STUDENT = "UPDATE_STUDENT"
export const DELETE_STUDENT = "DELETE_STUDENT"

export const addStudent = (student: Student) => ({ type: ADD_STUDENT, payload: student })
export const updateStudent = (student: Student) => ({ type: UPDATE_STUDENT, payload: student })
export const deleteStudent = (id: number) => ({ type: DELETE_STUDENT, payload: id })

export const studentReducer = (state = initialState, action: any): StudentState => {
  switch (action.type) {
    case ADD_STUDENT: return { ...state, students: [...state.students, action.payload] }
    case UPDATE_STUDENT: return { ...state, students: state.students.map(s => s.id===action.payload.id ? action.payload : s) }
    case DELETE_STUDENT: return { ...state, students: state.students.filter(s => s.id!==action.payload) }
    default: return state
  }
}
