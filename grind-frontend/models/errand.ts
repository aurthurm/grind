import { IPoster } from "./poster"
import { IStamp } from "./stamp"
import { IUser } from "./user"

export interface IErrand {
  __typename?: string
  _id: string
  // category: ErrandCategory
  title: string
  description?: string
  stamps?: IStamp[]
  status?: string
  poster?: IPoster
  createdBy?: IUser
  assignedTo?: IUser
  members?: IUser[]
}