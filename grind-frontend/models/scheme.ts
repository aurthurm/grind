import { IBoard } from "./board";
import { IUser } from "./user"

export interface IScheme {
  __typename?: string
  _id: string;
  title: string;
  description: string;
  assignee?: IUser;
  members?: IUser[];
  boards?: IBoard[];
  startDate?: Date | string | any;
  endDate?: Date | string | any;
  createdAt?: Date | string | any;
  updatedAt?: Date | string | any;
  createdBy: IUser;
  updatedBy: IUser;
}