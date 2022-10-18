import { IScheme } from "./scheme";
import { IUser } from "./user"

export interface IBoard {
  __typename?: string
  _id: string;
  title: string;
  description: string;
  scheme: IScheme;
  createdAt?: Date | string | any;
  updatedAt?: Date | string | any;
  createdBy: IUser;
  updatedBy: IUser;
}