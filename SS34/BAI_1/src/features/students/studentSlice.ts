import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Student {
  id: string;
  name: string;
  age: number;
  gender: "Nam" | "Nữ";
  birth?: string;
  place?: string;
  address?: string;
}

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
    { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action: PayloadAction<Student>) => {
      const index = state.students.findIndex(s => s.id === action.payload.id);
      if (index !== -1) state.students[index] = action.payload;
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
