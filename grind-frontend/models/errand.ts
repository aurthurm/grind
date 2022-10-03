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
  priority?: string
  poster?: IPoster
  createdBy?: IUser
  assignee?: IUser
  reporter?: IUser
  members?: IUser[] | string[]
  memberIds?:  string[]
  startDate?: Date | string | any,
  endDate?: Date | string | any
}