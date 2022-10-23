import { ILabel } from "./label"
import { IPoster } from "./poster"
import { IStamp } from "./stamp"
import { IUser } from "./user"

export interface IErrand {
  __typename?: string
  _id: string
  title: string
  description?: string
  category?: string
  stamps?: IStamp[]
  stampIds?: string[]
  label?: ILabel
  priority?: string
  poster?: IPoster
  createdBy?: IUser
  assignee?: IUser
  reporter?: IUser
  members?: IUser[] | string[]
  memberIds?:  string[]
  startDate?: Date | string | any,
  endDate?: Date | string | any
  createdAt?: Date | string | any;
  progress?: number
}