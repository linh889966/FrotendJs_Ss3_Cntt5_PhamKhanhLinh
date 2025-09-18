import { createSlice } from "@reduxjs/toolkit"

type RandomState = { numbers: number[] }
const initialState: RandomState = { numbers: [] }

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    addRandomNumber: state => {
      const num = Math.floor(Math.random() * 100)
      state.numbers.push(num)
    }
  }
})

export const { addRandomNumber } = randomSlice.actions
export default randomSlice.reducer
