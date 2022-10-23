import { IUser } from "./user"

export interface ILabel {
    _id:string
    title: string
    category: string
    createdBy: IUser
  }