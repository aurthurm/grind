import { IErrand } from "./errand"
import { IStamp } from "./stamp"
import { IUser } from "./user"

export interface IPoster {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  stamps?: IStamp[];
  assignee?: IUser;
  members?: IUser[];
  status?: string;
  errands?: IErrand[];
  createdAt?: Date;
  createdBy?: IUser;
  updatedAt?: Date;
}