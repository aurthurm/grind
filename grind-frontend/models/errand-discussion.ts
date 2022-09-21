import { IErrand } from "./errand";
import { IUser } from "./user"

export interface IErrandDiscussion {
  __typename?: string
  _id: string;
  content: string;
  errand: IErrand | string;
  createdBy: IUser;
  createdAt: string;
  updatedAt: string;
}