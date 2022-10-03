import { IStamp } from "./stamp"
import { IUser } from "./user"

export interface IOccurrence {
  _id: string
  target: string
  targetId: string
  description: string
  actor: IUser
  createdAt: string
}