import { UserType } from "./UserType"

export type User = {
  firstName: string
  lastName: string
  phoneNumber: string
  type: UserType
  createdAt: string
  modifiedAt: string

  id?: number
}




