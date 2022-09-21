import { IUser } from "./user"

export interface IStamp {
    _id:string
    title: string
    createdBy: IUser
  }