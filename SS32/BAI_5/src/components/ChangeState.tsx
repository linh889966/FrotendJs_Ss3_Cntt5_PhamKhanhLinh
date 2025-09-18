import { useDispatch, useSelector } from "react-redux"
import { changeCompany } from "../features/company/companySlice"
import type { AppDispatch, RootState } from "../store"

export default function ChangeState() {
  const name = useSelector((s: RootState) => s.company.name)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <div style={{ fontSize: 32, marginBottom: 20 }}>{name}</div>
      <button onClick={() => dispatch(changeCompany())}>Change state</button>
    </div>
  )
}
