import { IErrand } from "./errand"
import { IUser } from "./user"

export interface IMilestone {
  __typename?: string
  _id: string
  errand?: IErrand
  title: string
  description?: string
  createdBy?: IUser
  createdAt?: string
  assignee?: IUser
  complete?: boolean
  pop?: boolean
}