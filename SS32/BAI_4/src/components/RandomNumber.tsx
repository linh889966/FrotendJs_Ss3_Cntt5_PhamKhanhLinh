import { useDispatch, useSelector } from "react-redux"
import { addRandomNumber } from "../features/random/randomSlice"
import type { RootState, AppDispatch } from "../store"

export default function RandomNumber() {
  const numbers = useSelector((s: RootState) => s.random.numbers)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <div style={{ fontSize: 24, marginBottom: 20 }}>
        [{numbers.join(", ")}]
      </div>
      <button onClick={() => dispatch(addRandomNumber())}>
        Generate Random Number
      </button>
    </div>
  )
}
