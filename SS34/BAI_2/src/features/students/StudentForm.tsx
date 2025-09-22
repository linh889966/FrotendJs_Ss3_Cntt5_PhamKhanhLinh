import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { TextField, MenuItem, Button, Card, CardContent, CardHeader } from "@mui/material"
import { Student } from "./studentTypes"
import { addStudent, updateStudent } from "./studentReducer"

const empty: Student = { id:0, fullName:"", age:18, gender:true, dateOfBirth:"", placeOfBirth:"", address:"" }

export default function StudentForm({ editing, onDone }: { editing?: Student|null; onDone?:()=>void }) {
  const [form, setForm] = useState<Student>(empty)
  const dispatch = useDispatch()
  useEffect(()=>{ setForm(editing ?? empty) }, [editing?.id])
  const set = <K extends keyof Student>(k:K, v:Student[K]) => setForm(p=>({ ...p, [k]:v }))
  const valid = form.id>0 && form.fullName && form.age>0
  const submit = () => { if(!valid) return; editing?dispatch(updateStudent(form)):dispatch(addStudent(form)); setForm(empty); onDone?.() }

  return (
    <Card className="shadow-sm">
      <CardHeader title="Thông Tin Sinh Viên" />
      <CardContent className="space-y-3">
        <TextField label="Mã sinh viên" size="small" type="number" value={form.id||""} onChange={e=>set("id", Number(e.target.value))} fullWidth />
        <TextField label="Tên sinh viên" size="small" value={form.fullName} onChange={e=>set("fullName", e.target.value)} fullWidth />
        <TextField label="Tuổi" size="small" type="number" value={form.age} onChange={e=>set("age", Number(e.target.value))} fullWidth />
        <TextField label="Giới tính" size="small" select value={form.gender?1:0} onChange={e=>set("gender", e.target.value==="1")} fullWidth>
          <MenuItem value={1}>Nam</MenuItem><MenuItem value={0}>Nữ</MenuItem>
        </TextField>
        <TextField label="Ngày sinh" size="small" type="da
