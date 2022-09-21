import { IStamp } from "./stamp"
import { IUser } from "./user"

export interface IPoster {
  _id: string
  // category: PosterCategory
  title: string
  description: string
  stamps: IStamp[]
  createdBy: IUser
  assignedTo: IUser
  members: IUser[]
  status: string
}