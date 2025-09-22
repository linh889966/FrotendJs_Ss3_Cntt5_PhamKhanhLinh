export type Gender = "Nam" | "Nữ"

export interface Student {
  id: string
  name: string
  age: number
  gender: Gender
  dateOfBirth: string
  placeOfBirth: string
  address: string
}
