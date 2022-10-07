import { IUser } from "./user"

export interface IMediaFile {
  _id: string
  target: string
  targetId: string
  destination: string
  encoding: string
  filename: string
  mimetype: string
  originalname: string
  path: string
  size: string
  createdAt: string
  createdBy: IUser
}