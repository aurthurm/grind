import { IUser } from "./user"

export interface IStamp {
    _id:string
    title: string
    category: string
    createdBy: IUser
  }