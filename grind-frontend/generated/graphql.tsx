// THIS IS A GENERATED FILE, use `yarn codegwn` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Board = {
  __typename?: 'Board';
  _id: Scalars['ID'];
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** Created By */
  createdBy?: Maybe<User>;
  /** Board Description */
  description?: Maybe<Scalars['String']>;
  /** Board Scheme */
  scheme?: Maybe<Scheme>;
  /** Board Title */
  title: Scalars['String'];
  /** Updated At */
  updatedAt: Scalars['DateTime'];
  /** Updated By */
  updatedBy: User;
};

export type Community = {
  __typename?: 'Community';
  _id: Scalars['ID'];
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** Community Creator */
  createdBy: User;
  /** Community Description */
  description: Scalars['String'];
  /** Community Errands */
  errands: Array<Errand>;
  /** Community Members */
  members: Array<User>;
  /** Community Title */
  title: Scalars['String'];
  /** Updated At */
  updatedAt: Scalars['DateTime'];
  /** Updated By */
  updatedBy: User;
};

export type CreateBoardInput = {
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Board Description */
  description?: InputMaybe<Scalars['String']>;
  /** Board Scheme */
  scheme?: InputMaybe<Scalars['String']>;
  /** Board Title */
  title: Scalars['String'];
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateCommunityInput = {
  /** Community Creator */
  createdBy: Scalars['String'];
  /** Community Description */
  description: Scalars['String'];
  /** Community Title */
  title: Scalars['String'];
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateDiscussionInput = {
  /** Discusion Body */
  content: Scalars['String'];
  /** Discusion By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Discusion Errand */
  errand: Scalars['String'];
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateErrandInput = {
  /** Assigned To */
  assignee?: InputMaybe<Scalars['String']>;
  /** Errand Category */
  category?: InputMaybe<ErrandCategory>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Errand Description */
  description?: InputMaybe<Scalars['String']>;
  /** End Date */
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** Errand Label | Status */
  label?: InputMaybe<Scalars['String']>;
  /** Errand Members */
  members?: InputMaybe<Array<Scalars['String']>>;
  /** Errand Milestone */
  milestones?: InputMaybe<Array<Scalars['String']>>;
  /** Errand Poster */
  poster?: InputMaybe<Scalars['String']>;
  /** Errand Priority */
  priority?: InputMaybe<Scalars['String']>;
  /** Assigned To */
  reporter?: InputMaybe<Scalars['String']>;
  /** Errand Stamps | Tags */
  stamps?: InputMaybe<Array<Scalars['String']>>;
  /** Start Date */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Errand Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateLabelInput = {
  /** Label category */
  category: Scalars['String'];
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Label title */
  title: Scalars['String'];
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateMilestoneInput = {
  /** Assigned to */
  assignee?: InputMaybe<Scalars['String']>;
  /** Status */
  complete?: InputMaybe<Scalars['Boolean']>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Milestone Description */
  description?: InputMaybe<Scalars['String']>;
  /** Milestone Errand */
  errand: Scalars['String'];
  /** Milestone Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreatePosterFlowInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreatePosterInput = {
  /** Assigned To */
  assignee?: InputMaybe<Scalars['String']>;
  /** Poster Board */
  board?: InputMaybe<Scalars['String']>;
  /** Poster category */
  category?: InputMaybe<PosterCategory>;
  /** Poster Communities */
  communities?: InputMaybe<Array<Scalars['String']>>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Poster description */
  description?: InputMaybe<Scalars['String']>;
  /** Poster Members */
  members?: InputMaybe<Array<Scalars['String']>>;
  /** Poster label */
  stamps?: InputMaybe<Scalars['String']>;
  /** Poster status */
  status?: InputMaybe<Scalars['String']>;
  /** Poster Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateSchemeInput = {
  /** Assigned ti */
  assignee?: InputMaybe<Scalars['String']>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Scheme Description */
  description?: InputMaybe<Scalars['String']>;
  /** End Date */
  endDate?: InputMaybe<Scalars['DateTime']>;
  /** Scheme Members */
  members?: InputMaybe<Array<Scalars['String']>>;
  /** Start Date */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Scheme Title */
  title: Scalars['String'];
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateStampInput = {
  /** Stamp category */
  category: Scalars['String'];
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Stamp title */
  title: Scalars['String'];
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  address: Scalars['String'];
  completeness: Scalars['Float'];
  createdBy: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastLogin: Scalars['DateTime'];
  lastName: Scalars['String'];
  lastPasswordReset: Scalars['DateTime'];
  middleName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  pin: Scalars['String'];
  requirePasswordChange: Scalars['Boolean'];
  requirePinChange: Scalars['Boolean'];
  resetPasswordKey: Scalars['String'];
  resetPinKey: Scalars['String'];
  roles: Array<UserRole>;
  status: Scalars['String'];
  updatedBy: Scalars['String'];
  userName: Scalars['String'];
};

export type CreateWorkFlowInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Discussion = {
  __typename?: 'Discussion';
  _id: Scalars['ID'];
  /** Discusion Body */
  content: Scalars['String'];
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** Discusion By */
  createdBy?: Maybe<User>;
  /** Discusion Errand */
  errand: Errand;
  /** Updated At */
  updatedAt: Scalars['DateTime'];
};

export type Errand = {
  __typename?: 'Errand';
  _id: Scalars['ID'];
  /** Assigned To */
  assignee?: Maybe<User>;
  /** Errand category */
  category?: Maybe<ErrandCategory>;
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** Created By */
  createdBy?: Maybe<User>;
  /** Errand description */
  description?: Maybe<Scalars['String']>;
  /** End Date */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Errand label | Status */
  label?: Maybe<Label>;
  /** Errand Members */
  members?: Maybe<Array<User>>;
  /** Errand Poster */
  poster?: Maybe<Poster>;
  /** Errand priority */
  priority?: Maybe<Scalars['String']>;
  /** Errand Progress */
  progress?: Maybe<Scalars['Int']>;
  /** Reported By */
  reporter?: Maybe<User>;
  /** Errand stamps */
  stamps?: Maybe<Array<Stamp>>;
  /** Start Date */
  startDate?: Maybe<Scalars['DateTime']>;
  /** Errand Title */
  title?: Maybe<Scalars['String']>;
  /** Updated At */
  updatedAt: Scalars['DateTime'];
  /** Updated By */
  updatedBy?: Maybe<User>;
};

export enum ErrandCategory {
  Engagement = 'ENGAGEMENT',
  Message = 'MESSAGE',
  Project = 'PROJECT',
  Ticket = 'TICKET',
  Todo = 'TODO'
}

export type Label = {
  __typename?: 'Label';
  _id: Scalars['ID'];
  /** Label category */
  category?: Maybe<LabelCategory>;
  /** Created At */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Created By */
  createdBy?: Maybe<User>;
  /** Label title */
  title: Scalars['String'];
  /** Updated At */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Updated By */
  updatedBy?: Maybe<User>;
};

export enum LabelCategory {
  Ticket = 'TICKET'
}

export type Media = {
  __typename?: 'Media';
  _id: Scalars['ID'];
  /** Created At */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Actor */
  createdBy?: Maybe<User>;
  /** Media description */
  description?: Maybe<Scalars['String']>;
  /** Media destination */
  destination?: Maybe<Scalars['String']>;
  /** Media encoding */
  encoding?: Maybe<Scalars['String']>;
  /** Media filename */
  filename?: Maybe<Scalars['String']>;
  /** Media mimetype */
  mimetype?: Maybe<Scalars['String']>;
  /** Media originalname */
  originalname?: Maybe<Scalars['String']>;
  /** Media path */
  path?: Maybe<Scalars['String']>;
  /** Media size */
  size?: Maybe<Scalars['String']>;
  /** Media target */
  target?: Maybe<MediaTarget>;
  /** Media Target ID */
  targetId?: Maybe<Scalars['String']>;
  /** Updated At */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum MediaTarget {
  Errand = 'ERRAND'
}

export type Milestone = {
  __typename?: 'Milestone';
  _id: Scalars['ID'];
  /** Assigned to */
  assignee?: Maybe<User>;
  /** Milestone progress */
  complete?: Maybe<Scalars['Boolean']>;
  /** Created At */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Created By */
  createdBy?: Maybe<User>;
  /** Milestone Description */
  description?: Maybe<Scalars['String']>;
  /** Milestone Errand */
  errand?: Maybe<Errand>;
  /** Milestone Title */
  title?: Maybe<Scalars['String']>;
  /** Updated At */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Updated By */
  updatedBy?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createCommunity: Community;
  createDiscussion: Discussion;
  createErrand: Errand;
  createLabel: Label;
  createMilestone: Milestone;
  createPoster: Poster;
  createPosterFlow: PosterFlow;
  createScheme: Scheme;
  createStamp: Stamp;
  createUser: User;
  createWorkFlow: WorkFlow;
  removeBoard: Board;
  removeCommunity: Community;
  removeDiscussion: Discussion;
  removeErrand: Errand;
  removeLabel: Label;
  removeMilestone: Milestone;
  removePoster: Poster;
  removePosterFlow: PosterFlow;
  removeScheme: Scheme;
  removeStamp: Stamp;
  removeUser: User;
  removeWorkFlow: WorkFlow;
  updateBoard: Board;
  updateCommunity: Community;
  updateDiscussion: Discussion;
  updateErrand: Errand;
  updateLabel: Label;
  updateMilestone: Milestone;
  updatePoster: Poster;
  updatePosterFlow: PosterFlow;
  updateScheme: Scheme;
  updateStamp: Stamp;
  updateUser: User;
  updateWorkFlow: WorkFlow;
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationCreateCommunityArgs = {
  createCommunityInput: CreateCommunityInput;
};


export type MutationCreateDiscussionArgs = {
  createDiscussionInput: CreateDiscussionInput;
};


export type MutationCreateErrandArgs = {
  createErrandInput: CreateErrandInput;
};


export type MutationCreateLabelArgs = {
  createLabelInput: CreateLabelInput;
};


export type MutationCreateMilestoneArgs = {
  createMilestoneInput: CreateMilestoneInput;
};


export type MutationCreatePosterArgs = {
  createPosterInput: CreatePosterInput;
};


export type MutationCreatePosterFlowArgs = {
  createPosterFlowInput: CreatePosterFlowInput;
};


export type MutationCreateSchemeArgs = {
  createSchemeInput: CreateSchemeInput;
};


export type MutationCreateStampArgs = {
  createStampInput: CreateStampInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateWorkFlowArgs = {
  createWorkFlowInput: CreateWorkFlowInput;
};


export type MutationRemoveBoardArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveCommunityArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveDiscussionArgs = {
  id: Scalars['String'];
};


export type MutationRemoveErrandArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveLabelArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMilestoneArgs = {
  id: Scalars['String'];
};


export type MutationRemovePosterArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePosterFlowArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSchemeArgs = {
  id: Scalars['String'];
};


export type MutationRemoveStampArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveWorkFlowArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateBoardArgs = {
  updateBoardInput: UpdateBoardInput;
};


export type MutationUpdateCommunityArgs = {
  updateCommunityInput: UpdateCommunityInput;
};


export type MutationUpdateDiscussionArgs = {
  updateDiscussionInput: UpdateDiscussionInput;
};


export type MutationUpdateErrandArgs = {
  updateErrandInput: UpdateErrandInput;
};


export type MutationUpdateLabelArgs = {
  updateLabelInput: UpdateLabelInput;
};


export type MutationUpdateMilestoneArgs = {
  updateMilestoneInput: UpdateMilestoneInput;
};


export type MutationUpdatePosterArgs = {
  updatePosterInput: UpdatePosterInput;
};


export type MutationUpdatePosterFlowArgs = {
  updatePosterFlowInput: UpdatePosterFlowInput;
};


export type MutationUpdateSchemeArgs = {
  updateSchemeInput: UpdateSchemeInput;
};


export type MutationUpdateStampArgs = {
  updateStampInput: UpdateStampInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateWorkFlowArgs = {
  updateWorkFlowInput: UpdateWorkFlowInput;
};

export type Occurrence = {
  __typename?: 'Occurrence';
  _id: Scalars['ID'];
  /** Actor */
  actor?: Maybe<User>;
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** Poster description */
  description?: Maybe<Scalars['String']>;
  /** Poster category */
  target?: Maybe<OccurreneTarget>;
  /** Poster Title */
  targetId?: Maybe<Scalars['String']>;
  /** Updated At */
  updatedAt: Scalars['DateTime'];
};

export enum OccurreneTarget {
  Errand = 'ERRAND'
}

export type Poster = {
  __typename?: 'Poster';
  _id: Scalars['ID'];
  /** Assigned To */
  assignee?: Maybe<User>;
  /** Poster Board */
  board?: Maybe<Board>;
  /** Poster category */
  category?: Maybe<PosterCategory>;
  /** Created At */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Created By */
  createdBy?: Maybe<User>;
  /** Poster description */
  description?: Maybe<Scalars['String']>;
  errands?: Maybe<Array<Maybe<Errand>>>;
  /** Poster Members */
  members?: Maybe<Array<User>>;
  /** Poster label */
  stamps?: Maybe<Array<Stamp>>;
  /** Poster status */
  status?: Maybe<Scalars['String']>;
  /** Poster Title */
  title?: Maybe<Scalars['String']>;
  /** Updated At */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Updated By */
  updatedBy?: Maybe<User>;
  /** Poster Work Flow */
  workflow?: Maybe<Array<PosterFlow>>;
};

export enum PosterCategory {
  Engagement = 'ENGAGEMENT',
  Listing = 'LISTING',
  Mesage = 'MESAGE',
  Todo = 'TODO'
}

export type PosterFlow = {
  __typename?: 'PosterFlow';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  board: Board;
  boards: Array<Board>;
  communities: Array<Community>;
  community: Community;
  discussion: Discussion;
  discussions: Array<Discussion>;
  errand: Errand;
  errands: Array<Errand>;
  label: Label;
  labels: Array<Label>;
  medias: Array<Media>;
  milestone: Milestone;
  milestones: Array<Milestone>;
  occurrences: Array<Occurrence>;
  poster: Poster;
  posterFlow: PosterFlow;
  posters: Array<Poster>;
  query: Array<Label>;
  scheme: Scheme;
  schemes: Array<Scheme>;
  stamp: Stamp;
  stamps: Array<Stamp>;
  user: User;
  users: Array<User>;
  workFlow: WorkFlow;
};


export type QueryBoardArgs = {
  id: Scalars['Int'];
};


export type QueryCommunityArgs = {
  id: Scalars['Int'];
};


export type QueryDiscussionArgs = {
  id: Scalars['String'];
};


export type QueryDiscussionsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryErrandArgs = {
  id: Scalars['String'];
};


export type QueryErrandsArgs = {
  filters: CreateErrandInput;
};


export type QueryLabelArgs = {
  id: Scalars['Int'];
};


export type QueryMediasArgs = {
  target: Scalars['String'];
  targetId: Scalars['String'];
};


export type QueryMilestoneArgs = {
  id: Scalars['Int'];
};


export type QueryMilestonesArgs = {
  errand: Scalars['String'];
};


export type QueryOccurrencesArgs = {
  target: Scalars['String'];
  targetId: Scalars['String'];
};


export type QueryPosterArgs = {
  id: Scalars['Int'];
};


export type QueryPosterFlowArgs = {
  id: Scalars['Int'];
};


export type QueryPostersArgs = {
  board: Scalars['String'];
};


export type QueryQueryArgs = {
  category: Scalars['String'];
};


export type QuerySchemeArgs = {
  id: Scalars['String'];
};


export type QueryStampArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryWorkFlowArgs = {
  id: Scalars['Int'];
};

export type Scheme = {
  __typename?: 'Scheme';
  _id: Scalars['ID'];
  /** Assigned to */
  assignee?: Maybe<User>;
  boards?: Maybe<Array<Maybe<Board>>>;
  /** Created At */
  createdAt: Scalars['DateTime'];
  /** Created By */
  createdBy?: Maybe<User>;
  /** Scheme Description */
  description?: Maybe<Scalars['String']>;
  /** End Date */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Scheme Members */
  members?: Maybe<Array<User>>;
  /** Start Date */
  startDate?: Maybe<Scalars['DateTime']>;
  /** Scheme Title */
  title: Scalars['String'];
  /** Updated At */
  updatedAt: Scalars['DateTime'];
  /** Updated By */
  updatedBy?: Maybe<User>;
};

export type Stamp = {
  __typename?: 'Stamp';
  _id: Scalars['ID'];
  /** Stamp category */
  category?: Maybe<StampCategory>;
  /** Created At */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Created By */
  createdBy?: Maybe<User>;
  /** Stamp title */
  title: Scalars['String'];
  /** Updated At */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Updated By */
  updatedBy?: Maybe<User>;
};

export enum StampCategory {
  Project = 'PROJECT',
  Ticket = 'TICKET'
}

export type UpdateBoardInput = {
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Board Description */
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** Board Scheme */
  scheme?: InputMaybe<Scalars['String']>;
  /** Board Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateCommunityInput = {
  /** Community Creator */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Community Description */
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** Community Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateDiscussionInput = {
  /** Discusion Body */
  content?: InputMaybe<Scalars['String']>;
  /** Discusion By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Discusion Errand */
  errand?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateErrandInput = {
  /** Assigned To */
  assignee?: InputMaybe<Scalars['String']>;
  /** Errand Category */
  category?: InputMaybe<ErrandCategory>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Errand Description */
  description?: InputMaybe<Scalars['String']>;
  /** End Date */
  endDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** Errand Label | Status */
  label?: InputMaybe<Scalars['String']>;
  /** Errand Members */
  members?: InputMaybe<Array<Scalars['String']>>;
  /** Errand Milestone */
  milestones?: InputMaybe<Array<Scalars['String']>>;
  /** Errand Poster */
  poster?: InputMaybe<Scalars['String']>;
  /** Errand Priority */
  priority?: InputMaybe<Scalars['String']>;
  /** Assigned To */
  reporter?: InputMaybe<Scalars['String']>;
  /** Errand Stamps | Tags */
  stamps?: InputMaybe<Array<Scalars['String']>>;
  /** Start Date */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Errand Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateLabelInput = {
  /** Label category */
  category?: InputMaybe<Scalars['String']>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** Label title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateMilestoneInput = {
  /** Assigned to */
  assignee?: InputMaybe<Scalars['String']>;
  /** Status */
  complete?: InputMaybe<Scalars['Boolean']>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Milestone Description */
  description?: InputMaybe<Scalars['String']>;
  /** Milestone Errand */
  errand?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** Milestone Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdatePosterFlowInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdatePosterInput = {
  /** Assigned To */
  assignee?: InputMaybe<Scalars['String']>;
  /** Poster Board */
  board?: InputMaybe<Scalars['String']>;
  /** Poster category */
  category?: InputMaybe<PosterCategory>;
  /** Poster Communities */
  communities?: InputMaybe<Array<Scalars['String']>>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Poster description */
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** Poster Members */
  members?: InputMaybe<Array<Scalars['String']>>;
  /** Poster label */
  stamps?: InputMaybe<Scalars['String']>;
  /** Poster status */
  status?: InputMaybe<Scalars['String']>;
  /** Poster Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateSchemeInput = {
  /** Assigned ti */
  assignee?: InputMaybe<Scalars['String']>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Scheme Description */
  description?: InputMaybe<Scalars['String']>;
  /** End Date */
  endDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** Scheme Members */
  members?: InputMaybe<Array<Scalars['String']>>;
  /** Start Date */
  startDate?: InputMaybe<Scalars['DateTime']>;
  /** Scheme Title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateStampInput = {
  /** Stamp category */
  category?: InputMaybe<Scalars['String']>;
  /** Created By */
  createdBy?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  /** Stamp title */
  title?: InputMaybe<Scalars['String']>;
  /** Updated By */
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  completeness?: InputMaybe<Scalars['Float']>;
  createdBy?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastPasswordReset?: InputMaybe<Scalars['DateTime']>;
  middleName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pin?: InputMaybe<Scalars['String']>;
  requirePasswordChange?: InputMaybe<Scalars['Boolean']>;
  requirePinChange?: InputMaybe<Scalars['Boolean']>;
  resetPasswordKey?: InputMaybe<Scalars['String']>;
  resetPinKey?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<UserRole>>;
  status?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkFlowInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  completeness?: Maybe<Scalars['String']>;
  /** Created At */
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  hashed_password?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['String']>;
  is_superuser?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastPasswordReset: Scalars['DateTime'];
  middleName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pin?: Maybe<Scalars['String']>;
  requirePasswordChange?: Maybe<Scalars['String']>;
  requirePinChange?: Maybe<Scalars['String']>;
  resetPasswordKey?: Maybe<Scalars['String']>;
  resetPinKey?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<UserRole>>;
  status?: Maybe<Scalars['String']>;
  /** Updated At */
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  SuAdmin = 'SU_ADMIN',
  User = 'USER'
}

export type WorkFlow = {
  __typename?: 'WorkFlow';
  _id: Scalars['ID'];
  /** Created At */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Created By */
  createdBy?: Maybe<User>;
  /** WorkFlow description */
  description?: Maybe<Scalars['String']>;
  /** WorkFlow status */
  status?: Maybe<Scalars['String']>;
  /** WorkFlow category */
  target?: Maybe<WorkFlowTarget>;
  /** WorkFlow Title */
  title?: Maybe<Scalars['String']>;
  /** Updated At */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Updated By */
  updatedBy?: Maybe<User>;
};

export enum WorkFlowTarget {
  Poster = 'POSTER',
  Ticket = 'TICKET',
  Todo = 'TODO'
}

export type AddErrandMutationVariables = Exact<{
  payload: CreateErrandInput;
}>;


export type AddErrandMutation = { __typename?: 'Mutation', createErrand: { __typename?: 'Errand', _id: string, title?: string | null, description?: string | null, createdAt: any, poster?: { __typename?: 'Poster', _id: string } | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type EditErrandMutationVariables = Exact<{
  payload: UpdateErrandInput;
}>;


export type EditErrandMutation = { __typename?: 'Mutation', updateErrand: { __typename?: 'Errand', _id: string, title?: string | null, description?: string | null, category?: ErrandCategory | null, priority?: string | null, startDate?: any | null, endDate?: any | null, poster?: { __typename?: 'Poster', _id: string } | null, stamps?: Array<{ __typename?: 'Stamp', _id: string }> | null, label?: { __typename?: 'Label', _id: string } | null, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, reporter?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null }> | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type AddDscussionMutationVariables = Exact<{
  payload: CreateDiscussionInput;
}>;


export type AddDscussionMutation = { __typename?: 'Mutation', createDiscussion: { __typename: 'Discussion', _id: string, content: string, createdAt: any, updatedAt: any, errand: { __typename?: 'Errand', _id: string }, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type EditDscussionMutationVariables = Exact<{
  payload: UpdateDiscussionInput;
}>;


export type EditDscussionMutation = { __typename?: 'Mutation', updateDiscussion: { __typename: 'Discussion', _id: string, content: string, createdAt: any, updatedAt: any, errand: { __typename?: 'Errand', _id: string }, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type DeleteDiscussionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteDiscussionMutation = { __typename?: 'Mutation', removeDiscussion: { __typename: 'Discussion', _id: string } };

export type AddMilestoneMutationVariables = Exact<{
  payload: CreateMilestoneInput;
}>;


export type AddMilestoneMutation = { __typename?: 'Mutation', createMilestone: { __typename: 'Milestone', _id: string, title?: string | null, description?: string | null, createdAt?: any | null, complete?: boolean | null, errand?: { __typename?: 'Errand', _id: string } | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type EditMilestoneMutationVariables = Exact<{
  payload: UpdateMilestoneInput;
}>;


export type EditMilestoneMutation = { __typename?: 'Mutation', updateMilestone: { __typename: 'Milestone', _id: string, title?: string | null, description?: string | null, createdAt?: any | null, complete?: boolean | null, errand?: { __typename?: 'Errand', _id: string } | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type DeleteMilestoneMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMilestoneMutation = { __typename?: 'Mutation', removeMilestone: { __typename: 'Milestone', _id: string } };

export type AddSchemeMutationVariables = Exact<{
  payload: CreateSchemeInput;
}>;


export type AddSchemeMutation = { __typename?: 'Mutation', createScheme: { __typename: 'Scheme', _id: string, title: string, description?: string | null, startDate?: any | null, endDate?: any | null, createdAt: any, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null }> | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type EditSchemeMutationVariables = Exact<{
  payload: UpdateSchemeInput;
}>;


export type EditSchemeMutation = { __typename?: 'Mutation', updateScheme: { __typename?: 'Scheme', _id: string, title: string, description?: string | null, startDate?: any | null, endDate?: any | null, createdAt: any, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null }> | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type AddBoardMutationVariables = Exact<{
  payload: CreateBoardInput;
}>;


export type AddBoardMutation = { __typename?: 'Mutation', createBoard: { __typename: 'Board', _id: string, title: string, description?: string | null, createdAt: any, scheme?: { __typename?: 'Scheme', _id: string, title: string } | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type AddPosterMutationVariables = Exact<{
  payload: CreatePosterInput;
}>;


export type AddPosterMutation = { __typename?: 'Mutation', createPoster: { __typename: 'Poster', _id: string, title?: string | null, errands?: Array<{ __typename?: 'Errand', _id: string } | null> | null } };

export type AddLabelMutationVariables = Exact<{
  payload: CreateLabelInput;
}>;


export type AddLabelMutation = { __typename?: 'Mutation', createLabel: { __typename: 'Label', _id: string, title: string, category?: LabelCategory | null } };

export type AddStampMutationVariables = Exact<{
  payload: CreateStampInput;
}>;


export type AddStampMutation = { __typename?: 'Mutation', createStamp: { __typename: 'Stamp', _id: string, title: string, category?: StampCategory | null } };

export type GetErrandsQueryVariables = Exact<{
  filters: CreateErrandInput;
}>;


export type GetErrandsQuery = { __typename?: 'Query', errands: Array<{ __typename?: 'Errand', _id: string, title?: string | null, description?: string | null, category?: ErrandCategory | null, priority?: string | null, startDate?: any | null, endDate?: any | null, createdAt: any, poster?: { __typename?: 'Poster', _id: string, title?: string | null } | null, stamps?: Array<{ __typename?: 'Stamp', _id: string, title: string }> | null, label?: { __typename?: 'Label', _id: string, title: string } | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, reporter?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null }> | null }> };

export type GetErrandQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetErrandQuery = { __typename?: 'Query', errand: { __typename?: 'Errand', _id: string, title?: string | null, description?: string | null, category?: ErrandCategory | null, priority?: string | null, startDate?: any | null, endDate?: any | null, createdAt: any, poster?: { __typename?: 'Poster', _id: string, category?: PosterCategory | null, description?: string | null, status?: string | null, title?: string | null } | null, stamps?: Array<{ __typename?: 'Stamp', _id: string, title: string }> | null, label?: { __typename?: 'Label', _id: string, title: string } | null, assignee?: { __typename?: 'User', _id: string, email?: string | null, firstName?: string | null, lastName?: string | null, middleName?: string | null, name?: string | null } | null, reporter?: { __typename?: 'User', _id: string, email?: string | null, firstName?: string | null, lastName?: string | null, middleName?: string | null, name?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, email?: string | null, firstName?: string | null, lastName?: string | null, middleName?: string | null, name?: string | null }> | null, createdBy?: { __typename?: 'User', _id: string, email?: string | null, firstName?: string | null, lastName?: string | null, middleName?: string | null, name?: string | null } | null } };

export type GetOccurrenciesQueryVariables = Exact<{
  target: Scalars['String'];
  targetId: Scalars['String'];
}>;


export type GetOccurrenciesQuery = { __typename?: 'Query', occurrences: Array<{ __typename?: 'Occurrence', _id: string, description?: string | null, target?: OccurreneTarget | null, targetId?: string | null, createdAt: any, actor?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null }> };

export type GetMilestonesQueryVariables = Exact<{
  errand: Scalars['String'];
}>;


export type GetMilestonesQuery = { __typename?: 'Query', milestones: Array<{ __typename?: 'Milestone', _id: string, title?: string | null, description?: string | null, createdAt?: any | null, complete?: boolean | null, errand?: { __typename?: 'Errand', _id: string } | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null }> };

export type GetDiscussionsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetDiscussionsQuery = { __typename?: 'Query', discussions: Array<{ __typename?: 'Discussion', _id: string, content: string, createdAt: any, updatedAt: any, errand: { __typename?: 'Errand', _id: string }, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', _id: string, userName?: string | null, firstName?: string | null, lastName?: string | null, name?: string | null, email?: string | null, roles?: Array<UserRole> | null, requirePasswordChange?: string | null, requirePinChange?: string | null, status?: string | null, createdAt: any }> };

export type GetMediasQueryVariables = Exact<{
  target: Scalars['String'];
  targetId: Scalars['String'];
}>;


export type GetMediasQuery = { __typename?: 'Query', medias: Array<{ __typename?: 'Media', _id: string, target?: MediaTarget | null, targetId?: string | null, destination?: string | null, encoding?: string | null, filename?: string | null, mimetype?: string | null, originalname?: string | null, path?: string | null, size?: string | null, createdAt?: any | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null }> };

export type GetSchemesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchemesQuery = { __typename?: 'Query', schemes: Array<{ __typename?: 'Scheme', _id: string, title: string, description?: string | null, startDate?: any | null, endDate?: any | null, createdAt: any, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null }> | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null }> };

export type GetSchemeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetSchemeQuery = { __typename?: 'Query', scheme: { __typename?: 'Scheme', _id: string, title: string, description?: string | null, startDate?: any | null, endDate?: any | null, createdAt: any, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null }> | null, boards?: Array<{ __typename?: 'Board', _id: string, title: string, description?: string | null } | null> | null, createdBy?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null } };

export type GetPostersQueryVariables = Exact<{
  board: Scalars['String'];
}>;


export type GetPostersQuery = { __typename?: 'Query', posters: Array<{ __typename?: 'Poster', _id: string, title?: string | null, board?: { __typename?: 'Board', _id: string } | null, errands?: Array<{ __typename?: 'Errand', _id: string, title?: string | null, description?: string | null, priority?: string | null, startDate?: any | null, endDate?: any | null, progress?: number | null, poster?: { __typename?: 'Poster', _id: string } | null, stamps?: Array<{ __typename?: 'Stamp', _id: string, title: string }> | null, label?: { __typename?: 'Label', _id: string } | null, assignee?: { __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null } | null, members?: Array<{ __typename?: 'User', _id: string, firstName?: string | null, lastName?: string | null }> | null } | null> | null }> };

export type GetStampsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStampsQuery = { __typename?: 'Query', stamps: Array<{ __typename?: 'Stamp', _id: string, title: string, category?: StampCategory | null }> };

export type GetLabelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLabelsQuery = { __typename?: 'Query', labels: Array<{ __typename?: 'Label', _id: string, title: string, category?: LabelCategory | null }> };


export const AddErrandDocument = gql`
    mutation addErrand($payload: CreateErrandInput!) {
  createErrand(createErrandInput: $payload) {
    _id
    title
    description
    poster {
      _id
    }
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;
export type AddErrandMutationFn = Apollo.MutationFunction<AddErrandMutation, AddErrandMutationVariables>;

/**
 * __useAddErrandMutation__
 *
 * To run a mutation, you first call `useAddErrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddErrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addErrandMutation, { data, loading, error }] = useAddErrandMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddErrandMutation(baseOptions?: Apollo.MutationHookOptions<AddErrandMutation, AddErrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddErrandMutation, AddErrandMutationVariables>(AddErrandDocument, options);
      }
export type AddErrandMutationHookResult = ReturnType<typeof useAddErrandMutation>;
export type AddErrandMutationResult = Apollo.MutationResult<AddErrandMutation>;
export type AddErrandMutationOptions = Apollo.BaseMutationOptions<AddErrandMutation, AddErrandMutationVariables>;
export const EditErrandDocument = gql`
    mutation editErrand($payload: UpdateErrandInput!) {
  updateErrand(updateErrandInput: $payload) {
    _id
    title
    description
    category
    priority
    startDate
    endDate
    poster {
      _id
    }
    stamps {
      _id
    }
    label {
      _id
    }
    assignee {
      _id
      firstName
      lastName
    }
    reporter {
      _id
      firstName
      lastName
    }
    members {
      _id
      firstName
      lastName
    }
    createdBy {
      _id
      firstName
      lastName
    }
  }
}
    `;
export type EditErrandMutationFn = Apollo.MutationFunction<EditErrandMutation, EditErrandMutationVariables>;

/**
 * __useEditErrandMutation__
 *
 * To run a mutation, you first call `useEditErrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditErrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editErrandMutation, { data, loading, error }] = useEditErrandMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useEditErrandMutation(baseOptions?: Apollo.MutationHookOptions<EditErrandMutation, EditErrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditErrandMutation, EditErrandMutationVariables>(EditErrandDocument, options);
      }
export type EditErrandMutationHookResult = ReturnType<typeof useEditErrandMutation>;
export type EditErrandMutationResult = Apollo.MutationResult<EditErrandMutation>;
export type EditErrandMutationOptions = Apollo.BaseMutationOptions<EditErrandMutation, EditErrandMutationVariables>;
export const AddDscussionDocument = gql`
    mutation addDscussion($payload: CreateDiscussionInput!) {
  createDiscussion(createDiscussionInput: $payload) {
    __typename
    _id
    content
    createdAt
    updatedAt
    errand {
      _id
    }
    createdBy {
      _id
      firstName
      lastName
    }
  }
}
    `;
export type AddDscussionMutationFn = Apollo.MutationFunction<AddDscussionMutation, AddDscussionMutationVariables>;

/**
 * __useAddDscussionMutation__
 *
 * To run a mutation, you first call `useAddDscussionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDscussionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDscussionMutation, { data, loading, error }] = useAddDscussionMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddDscussionMutation(baseOptions?: Apollo.MutationHookOptions<AddDscussionMutation, AddDscussionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDscussionMutation, AddDscussionMutationVariables>(AddDscussionDocument, options);
      }
export type AddDscussionMutationHookResult = ReturnType<typeof useAddDscussionMutation>;
export type AddDscussionMutationResult = Apollo.MutationResult<AddDscussionMutation>;
export type AddDscussionMutationOptions = Apollo.BaseMutationOptions<AddDscussionMutation, AddDscussionMutationVariables>;
export const EditDscussionDocument = gql`
    mutation editDscussion($payload: UpdateDiscussionInput!) {
  updateDiscussion(updateDiscussionInput: $payload) {
    __typename
    _id
    content
    createdAt
    updatedAt
    errand {
      _id
    }
    createdBy {
      _id
      firstName
      lastName
    }
  }
}
    `;
export type EditDscussionMutationFn = Apollo.MutationFunction<EditDscussionMutation, EditDscussionMutationVariables>;

/**
 * __useEditDscussionMutation__
 *
 * To run a mutation, you first call `useEditDscussionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDscussionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDscussionMutation, { data, loading, error }] = useEditDscussionMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useEditDscussionMutation(baseOptions?: Apollo.MutationHookOptions<EditDscussionMutation, EditDscussionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditDscussionMutation, EditDscussionMutationVariables>(EditDscussionDocument, options);
      }
export type EditDscussionMutationHookResult = ReturnType<typeof useEditDscussionMutation>;
export type EditDscussionMutationResult = Apollo.MutationResult<EditDscussionMutation>;
export type EditDscussionMutationOptions = Apollo.BaseMutationOptions<EditDscussionMutation, EditDscussionMutationVariables>;
export const DeleteDiscussionDocument = gql`
    mutation deleteDiscussion($id: String!) {
  removeDiscussion(id: $id) {
    __typename
    _id
  }
}
    `;
export type DeleteDiscussionMutationFn = Apollo.MutationFunction<DeleteDiscussionMutation, DeleteDiscussionMutationVariables>;

/**
 * __useDeleteDiscussionMutation__
 *
 * To run a mutation, you first call `useDeleteDiscussionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDiscussionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDiscussionMutation, { data, loading, error }] = useDeleteDiscussionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDiscussionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDiscussionMutation, DeleteDiscussionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDiscussionMutation, DeleteDiscussionMutationVariables>(DeleteDiscussionDocument, options);
      }
export type DeleteDiscussionMutationHookResult = ReturnType<typeof useDeleteDiscussionMutation>;
export type DeleteDiscussionMutationResult = Apollo.MutationResult<DeleteDiscussionMutation>;
export type DeleteDiscussionMutationOptions = Apollo.BaseMutationOptions<DeleteDiscussionMutation, DeleteDiscussionMutationVariables>;
export const AddMilestoneDocument = gql`
    mutation addMilestone($payload: CreateMilestoneInput!) {
  createMilestone(createMilestoneInput: $payload) {
    __typename
    _id
    title
    description
    errand {
      _id
    }
    createdBy {
      _id
      firstName
      lastName
    }
    assignee {
      _id
      firstName
      lastName
    }
    createdAt
    complete
  }
}
    `;
export type AddMilestoneMutationFn = Apollo.MutationFunction<AddMilestoneMutation, AddMilestoneMutationVariables>;

/**
 * __useAddMilestoneMutation__
 *
 * To run a mutation, you first call `useAddMilestoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMilestoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMilestoneMutation, { data, loading, error }] = useAddMilestoneMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddMilestoneMutation(baseOptions?: Apollo.MutationHookOptions<AddMilestoneMutation, AddMilestoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMilestoneMutation, AddMilestoneMutationVariables>(AddMilestoneDocument, options);
      }
export type AddMilestoneMutationHookResult = ReturnType<typeof useAddMilestoneMutation>;
export type AddMilestoneMutationResult = Apollo.MutationResult<AddMilestoneMutation>;
export type AddMilestoneMutationOptions = Apollo.BaseMutationOptions<AddMilestoneMutation, AddMilestoneMutationVariables>;
export const EditMilestoneDocument = gql`
    mutation editMilestone($payload: UpdateMilestoneInput!) {
  updateMilestone(updateMilestoneInput: $payload) {
    __typename
    _id
    title
    description
    errand {
      _id
    }
    createdBy {
      _id
      firstName
      lastName
    }
    assignee {
      _id
      firstName
      lastName
    }
    createdAt
    complete
  }
}
    `;
export type EditMilestoneMutationFn = Apollo.MutationFunction<EditMilestoneMutation, EditMilestoneMutationVariables>;

/**
 * __useEditMilestoneMutation__
 *
 * To run a mutation, you first call `useEditMilestoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMilestoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMilestoneMutation, { data, loading, error }] = useEditMilestoneMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useEditMilestoneMutation(baseOptions?: Apollo.MutationHookOptions<EditMilestoneMutation, EditMilestoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditMilestoneMutation, EditMilestoneMutationVariables>(EditMilestoneDocument, options);
      }
export type EditMilestoneMutationHookResult = ReturnType<typeof useEditMilestoneMutation>;
export type EditMilestoneMutationResult = Apollo.MutationResult<EditMilestoneMutation>;
export type EditMilestoneMutationOptions = Apollo.BaseMutationOptions<EditMilestoneMutation, EditMilestoneMutationVariables>;
export const DeleteMilestoneDocument = gql`
    mutation deleteMilestone($id: String!) {
  removeMilestone(id: $id) {
    __typename
    _id
  }
}
    `;
export type DeleteMilestoneMutationFn = Apollo.MutationFunction<DeleteMilestoneMutation, DeleteMilestoneMutationVariables>;

/**
 * __useDeleteMilestoneMutation__
 *
 * To run a mutation, you first call `useDeleteMilestoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMilestoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMilestoneMutation, { data, loading, error }] = useDeleteMilestoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMilestoneMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMilestoneMutation, DeleteMilestoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMilestoneMutation, DeleteMilestoneMutationVariables>(DeleteMilestoneDocument, options);
      }
export type DeleteMilestoneMutationHookResult = ReturnType<typeof useDeleteMilestoneMutation>;
export type DeleteMilestoneMutationResult = Apollo.MutationResult<DeleteMilestoneMutation>;
export type DeleteMilestoneMutationOptions = Apollo.BaseMutationOptions<DeleteMilestoneMutation, DeleteMilestoneMutationVariables>;
export const AddSchemeDocument = gql`
    mutation addScheme($payload: CreateSchemeInput!) {
  createScheme(createSchemeInput: $payload) {
    __typename
    _id
    title
    description
    startDate
    endDate
    assignee {
      _id
      firstName
      lastName
    }
    members {
      _id
      firstName
      lastName
    }
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;
export type AddSchemeMutationFn = Apollo.MutationFunction<AddSchemeMutation, AddSchemeMutationVariables>;

/**
 * __useAddSchemeMutation__
 *
 * To run a mutation, you first call `useAddSchemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSchemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSchemeMutation, { data, loading, error }] = useAddSchemeMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddSchemeMutation(baseOptions?: Apollo.MutationHookOptions<AddSchemeMutation, AddSchemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSchemeMutation, AddSchemeMutationVariables>(AddSchemeDocument, options);
      }
export type AddSchemeMutationHookResult = ReturnType<typeof useAddSchemeMutation>;
export type AddSchemeMutationResult = Apollo.MutationResult<AddSchemeMutation>;
export type AddSchemeMutationOptions = Apollo.BaseMutationOptions<AddSchemeMutation, AddSchemeMutationVariables>;
export const EditSchemeDocument = gql`
    mutation editScheme($payload: UpdateSchemeInput!) {
  updateScheme(updateSchemeInput: $payload) {
    _id
    title
    description
    startDate
    endDate
    assignee {
      _id
      firstName
      lastName
    }
    members {
      _id
      firstName
      lastName
    }
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;
export type EditSchemeMutationFn = Apollo.MutationFunction<EditSchemeMutation, EditSchemeMutationVariables>;

/**
 * __useEditSchemeMutation__
 *
 * To run a mutation, you first call `useEditSchemeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSchemeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSchemeMutation, { data, loading, error }] = useEditSchemeMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useEditSchemeMutation(baseOptions?: Apollo.MutationHookOptions<EditSchemeMutation, EditSchemeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSchemeMutation, EditSchemeMutationVariables>(EditSchemeDocument, options);
      }
export type EditSchemeMutationHookResult = ReturnType<typeof useEditSchemeMutation>;
export type EditSchemeMutationResult = Apollo.MutationResult<EditSchemeMutation>;
export type EditSchemeMutationOptions = Apollo.BaseMutationOptions<EditSchemeMutation, EditSchemeMutationVariables>;
export const AddBoardDocument = gql`
    mutation addBoard($payload: CreateBoardInput!) {
  createBoard(createBoardInput: $payload) {
    __typename
    _id
    title
    description
    scheme {
      _id
      title
    }
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;
export type AddBoardMutationFn = Apollo.MutationFunction<AddBoardMutation, AddBoardMutationVariables>;

/**
 * __useAddBoardMutation__
 *
 * To run a mutation, you first call `useAddBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBoardMutation, { data, loading, error }] = useAddBoardMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddBoardMutation(baseOptions?: Apollo.MutationHookOptions<AddBoardMutation, AddBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBoardMutation, AddBoardMutationVariables>(AddBoardDocument, options);
      }
export type AddBoardMutationHookResult = ReturnType<typeof useAddBoardMutation>;
export type AddBoardMutationResult = Apollo.MutationResult<AddBoardMutation>;
export type AddBoardMutationOptions = Apollo.BaseMutationOptions<AddBoardMutation, AddBoardMutationVariables>;
export const AddPosterDocument = gql`
    mutation addPoster($payload: CreatePosterInput!) {
  createPoster(createPosterInput: $payload) {
    __typename
    _id
    title
    errands {
      _id
    }
  }
}
    `;
export type AddPosterMutationFn = Apollo.MutationFunction<AddPosterMutation, AddPosterMutationVariables>;

/**
 * __useAddPosterMutation__
 *
 * To run a mutation, you first call `useAddPosterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPosterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPosterMutation, { data, loading, error }] = useAddPosterMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddPosterMutation(baseOptions?: Apollo.MutationHookOptions<AddPosterMutation, AddPosterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPosterMutation, AddPosterMutationVariables>(AddPosterDocument, options);
      }
export type AddPosterMutationHookResult = ReturnType<typeof useAddPosterMutation>;
export type AddPosterMutationResult = Apollo.MutationResult<AddPosterMutation>;
export type AddPosterMutationOptions = Apollo.BaseMutationOptions<AddPosterMutation, AddPosterMutationVariables>;
export const AddLabelDocument = gql`
    mutation addLabel($payload: CreateLabelInput!) {
  createLabel(createLabelInput: $payload) {
    __typename
    _id
    title
    category
  }
}
    `;
export type AddLabelMutationFn = Apollo.MutationFunction<AddLabelMutation, AddLabelMutationVariables>;

/**
 * __useAddLabelMutation__
 *
 * To run a mutation, you first call `useAddLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLabelMutation, { data, loading, error }] = useAddLabelMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddLabelMutation(baseOptions?: Apollo.MutationHookOptions<AddLabelMutation, AddLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLabelMutation, AddLabelMutationVariables>(AddLabelDocument, options);
      }
export type AddLabelMutationHookResult = ReturnType<typeof useAddLabelMutation>;
export type AddLabelMutationResult = Apollo.MutationResult<AddLabelMutation>;
export type AddLabelMutationOptions = Apollo.BaseMutationOptions<AddLabelMutation, AddLabelMutationVariables>;
export const AddStampDocument = gql`
    mutation addStamp($payload: CreateStampInput!) {
  createStamp(createStampInput: $payload) {
    __typename
    _id
    title
    category
  }
}
    `;
export type AddStampMutationFn = Apollo.MutationFunction<AddStampMutation, AddStampMutationVariables>;

/**
 * __useAddStampMutation__
 *
 * To run a mutation, you first call `useAddStampMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStampMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStampMutation, { data, loading, error }] = useAddStampMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddStampMutation(baseOptions?: Apollo.MutationHookOptions<AddStampMutation, AddStampMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStampMutation, AddStampMutationVariables>(AddStampDocument, options);
      }
export type AddStampMutationHookResult = ReturnType<typeof useAddStampMutation>;
export type AddStampMutationResult = Apollo.MutationResult<AddStampMutation>;
export type AddStampMutationOptions = Apollo.BaseMutationOptions<AddStampMutation, AddStampMutationVariables>;
export const GetErrandsDocument = gql`
    query GetErrands($filters: CreateErrandInput!) {
  errands(filters: $filters) {
    _id
    title
    description
    category
    priority
    startDate
    endDate
    poster {
      _id
      title
    }
    stamps {
      _id
      title
    }
    label {
      _id
      title
    }
    createdBy {
      _id
      firstName
      lastName
    }
    assignee {
      _id
      firstName
      lastName
    }
    reporter {
      _id
      firstName
      lastName
    }
    members {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;

/**
 * __useGetErrandsQuery__
 *
 * To run a query within a React component, call `useGetErrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetErrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetErrandsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetErrandsQuery(baseOptions: Apollo.QueryHookOptions<GetErrandsQuery, GetErrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetErrandsQuery, GetErrandsQueryVariables>(GetErrandsDocument, options);
      }
export function useGetErrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetErrandsQuery, GetErrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetErrandsQuery, GetErrandsQueryVariables>(GetErrandsDocument, options);
        }
export type GetErrandsQueryHookResult = ReturnType<typeof useGetErrandsQuery>;
export type GetErrandsLazyQueryHookResult = ReturnType<typeof useGetErrandsLazyQuery>;
export type GetErrandsQueryResult = Apollo.QueryResult<GetErrandsQuery, GetErrandsQueryVariables>;
export const GetErrandDocument = gql`
    query GetErrand($id: String!) {
  errand(id: $id) {
    _id
    title
    description
    category
    priority
    startDate
    endDate
    poster {
      _id
      category
      description
      status
      title
    }
    stamps {
      _id
      title
    }
    label {
      _id
      title
    }
    assignee {
      _id
      email
      firstName
      lastName
      middleName
      name
    }
    reporter {
      _id
      email
      firstName
      lastName
      middleName
      name
    }
    members {
      _id
      email
      firstName
      lastName
      middleName
      name
    }
    createdBy {
      _id
      email
      firstName
      lastName
      middleName
      name
    }
    createdAt
  }
}
    `;

/**
 * __useGetErrandQuery__
 *
 * To run a query within a React component, call `useGetErrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetErrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetErrandQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetErrandQuery(baseOptions: Apollo.QueryHookOptions<GetErrandQuery, GetErrandQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetErrandQuery, GetErrandQueryVariables>(GetErrandDocument, options);
      }
export function useGetErrandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetErrandQuery, GetErrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetErrandQuery, GetErrandQueryVariables>(GetErrandDocument, options);
        }
export type GetErrandQueryHookResult = ReturnType<typeof useGetErrandQuery>;
export type GetErrandLazyQueryHookResult = ReturnType<typeof useGetErrandLazyQuery>;
export type GetErrandQueryResult = Apollo.QueryResult<GetErrandQuery, GetErrandQueryVariables>;
export const GetOccurrenciesDocument = gql`
    query getOccurrencies($target: String!, $targetId: String!) {
  occurrences(target: $target, targetId: $targetId) {
    _id
    description
    target
    targetId
    actor {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;

/**
 * __useGetOccurrenciesQuery__
 *
 * To run a query within a React component, call `useGetOccurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOccurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOccurrenciesQuery({
 *   variables: {
 *      target: // value for 'target'
 *      targetId: // value for 'targetId'
 *   },
 * });
 */
export function useGetOccurrenciesQuery(baseOptions: Apollo.QueryHookOptions<GetOccurrenciesQuery, GetOccurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOccurrenciesQuery, GetOccurrenciesQueryVariables>(GetOccurrenciesDocument, options);
      }
export function useGetOccurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOccurrenciesQuery, GetOccurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOccurrenciesQuery, GetOccurrenciesQueryVariables>(GetOccurrenciesDocument, options);
        }
export type GetOccurrenciesQueryHookResult = ReturnType<typeof useGetOccurrenciesQuery>;
export type GetOccurrenciesLazyQueryHookResult = ReturnType<typeof useGetOccurrenciesLazyQuery>;
export type GetOccurrenciesQueryResult = Apollo.QueryResult<GetOccurrenciesQuery, GetOccurrenciesQueryVariables>;
export const GetMilestonesDocument = gql`
    query getMilestones($errand: String!) {
  milestones(errand: $errand) {
    _id
    title
    description
    errand {
      _id
    }
    createdBy {
      _id
      firstName
      lastName
    }
    assignee {
      _id
      firstName
      lastName
    }
    createdAt
    complete
  }
}
    `;

/**
 * __useGetMilestonesQuery__
 *
 * To run a query within a React component, call `useGetMilestonesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMilestonesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMilestonesQuery({
 *   variables: {
 *      errand: // value for 'errand'
 *   },
 * });
 */
export function useGetMilestonesQuery(baseOptions: Apollo.QueryHookOptions<GetMilestonesQuery, GetMilestonesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMilestonesQuery, GetMilestonesQueryVariables>(GetMilestonesDocument, options);
      }
export function useGetMilestonesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMilestonesQuery, GetMilestonesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMilestonesQuery, GetMilestonesQueryVariables>(GetMilestonesDocument, options);
        }
export type GetMilestonesQueryHookResult = ReturnType<typeof useGetMilestonesQuery>;
export type GetMilestonesLazyQueryHookResult = ReturnType<typeof useGetMilestonesLazyQuery>;
export type GetMilestonesQueryResult = Apollo.QueryResult<GetMilestonesQuery, GetMilestonesQueryVariables>;
export const GetDiscussionsDocument = gql`
    query getDiscussions($id: String) {
  discussions(id: $id) {
    _id
    content
    createdAt
    updatedAt
    errand {
      _id
    }
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;

/**
 * __useGetDiscussionsQuery__
 *
 * To run a query within a React component, call `useGetDiscussionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDiscussionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDiscussionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDiscussionsQuery(baseOptions?: Apollo.QueryHookOptions<GetDiscussionsQuery, GetDiscussionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDiscussionsQuery, GetDiscussionsQueryVariables>(GetDiscussionsDocument, options);
      }
export function useGetDiscussionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDiscussionsQuery, GetDiscussionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDiscussionsQuery, GetDiscussionsQueryVariables>(GetDiscussionsDocument, options);
        }
export type GetDiscussionsQueryHookResult = ReturnType<typeof useGetDiscussionsQuery>;
export type GetDiscussionsLazyQueryHookResult = ReturnType<typeof useGetDiscussionsLazyQuery>;
export type GetDiscussionsQueryResult = Apollo.QueryResult<GetDiscussionsQuery, GetDiscussionsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    _id
    userName
    firstName
    lastName
    name
    email
    roles
    requirePasswordChange
    requirePinChange
    status
    createdAt
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetMediasDocument = gql`
    query getMedias($target: String!, $targetId: String!) {
  medias(target: $target, targetId: $targetId) {
    _id
    target
    targetId
    destination
    encoding
    filename
    mimetype
    originalname
    path
    size
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;

/**
 * __useGetMediasQuery__
 *
 * To run a query within a React component, call `useGetMediasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediasQuery({
 *   variables: {
 *      target: // value for 'target'
 *      targetId: // value for 'targetId'
 *   },
 * });
 */
export function useGetMediasQuery(baseOptions: Apollo.QueryHookOptions<GetMediasQuery, GetMediasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMediasQuery, GetMediasQueryVariables>(GetMediasDocument, options);
      }
export function useGetMediasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMediasQuery, GetMediasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMediasQuery, GetMediasQueryVariables>(GetMediasDocument, options);
        }
export type GetMediasQueryHookResult = ReturnType<typeof useGetMediasQuery>;
export type GetMediasLazyQueryHookResult = ReturnType<typeof useGetMediasLazyQuery>;
export type GetMediasQueryResult = Apollo.QueryResult<GetMediasQuery, GetMediasQueryVariables>;
export const GetSchemesDocument = gql`
    query GetSchemes {
  schemes {
    _id
    title
    description
    startDate
    endDate
    assignee {
      _id
      firstName
      lastName
    }
    members {
      _id
      firstName
      lastName
    }
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;

/**
 * __useGetSchemesQuery__
 *
 * To run a query within a React component, call `useGetSchemesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchemesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchemesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSchemesQuery(baseOptions?: Apollo.QueryHookOptions<GetSchemesQuery, GetSchemesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchemesQuery, GetSchemesQueryVariables>(GetSchemesDocument, options);
      }
export function useGetSchemesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchemesQuery, GetSchemesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchemesQuery, GetSchemesQueryVariables>(GetSchemesDocument, options);
        }
export type GetSchemesQueryHookResult = ReturnType<typeof useGetSchemesQuery>;
export type GetSchemesLazyQueryHookResult = ReturnType<typeof useGetSchemesLazyQuery>;
export type GetSchemesQueryResult = Apollo.QueryResult<GetSchemesQuery, GetSchemesQueryVariables>;
export const GetSchemeDocument = gql`
    query GetScheme($id: String!) {
  scheme(id: $id) {
    _id
    title
    description
    startDate
    endDate
    assignee {
      _id
      firstName
      lastName
    }
    members {
      _id
      firstName
      lastName
    }
    boards {
      _id
      title
      description
    }
    createdBy {
      _id
      firstName
      lastName
    }
    createdAt
  }
}
    `;

/**
 * __useGetSchemeQuery__
 *
 * To run a query within a React component, call `useGetSchemeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchemeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchemeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSchemeQuery(baseOptions: Apollo.QueryHookOptions<GetSchemeQuery, GetSchemeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchemeQuery, GetSchemeQueryVariables>(GetSchemeDocument, options);
      }
export function useGetSchemeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchemeQuery, GetSchemeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchemeQuery, GetSchemeQueryVariables>(GetSchemeDocument, options);
        }
export type GetSchemeQueryHookResult = ReturnType<typeof useGetSchemeQuery>;
export type GetSchemeLazyQueryHookResult = ReturnType<typeof useGetSchemeLazyQuery>;
export type GetSchemeQueryResult = Apollo.QueryResult<GetSchemeQuery, GetSchemeQueryVariables>;
export const GetPostersDocument = gql`
    query GetPosters($board: String!) {
  posters(board: $board) {
    _id
    title
    board {
      _id
    }
    errands {
      _id
      title
      description
      priority
      startDate
      endDate
      progress
      poster {
        _id
      }
      stamps {
        _id
        title
      }
      label {
        _id
      }
      assignee {
        _id
        firstName
        lastName
      }
      members {
        _id
        firstName
        lastName
      }
    }
  }
}
    `;

/**
 * __useGetPostersQuery__
 *
 * To run a query within a React component, call `useGetPostersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostersQuery({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useGetPostersQuery(baseOptions: Apollo.QueryHookOptions<GetPostersQuery, GetPostersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostersQuery, GetPostersQueryVariables>(GetPostersDocument, options);
      }
export function useGetPostersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostersQuery, GetPostersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostersQuery, GetPostersQueryVariables>(GetPostersDocument, options);
        }
export type GetPostersQueryHookResult = ReturnType<typeof useGetPostersQuery>;
export type GetPostersLazyQueryHookResult = ReturnType<typeof useGetPostersLazyQuery>;
export type GetPostersQueryResult = Apollo.QueryResult<GetPostersQuery, GetPostersQueryVariables>;
export const GetStampsDocument = gql`
    query getStamps {
  stamps {
    _id
    title
    category
  }
}
    `;

/**
 * __useGetStampsQuery__
 *
 * To run a query within a React component, call `useGetStampsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStampsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStampsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStampsQuery(baseOptions?: Apollo.QueryHookOptions<GetStampsQuery, GetStampsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStampsQuery, GetStampsQueryVariables>(GetStampsDocument, options);
      }
export function useGetStampsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStampsQuery, GetStampsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStampsQuery, GetStampsQueryVariables>(GetStampsDocument, options);
        }
export type GetStampsQueryHookResult = ReturnType<typeof useGetStampsQuery>;
export type GetStampsLazyQueryHookResult = ReturnType<typeof useGetStampsLazyQuery>;
export type GetStampsQueryResult = Apollo.QueryResult<GetStampsQuery, GetStampsQueryVariables>;
export const GetLabelsDocument = gql`
    query getLabels {
  labels {
    _id
    title
    category
  }
}
    `;

/**
 * __useGetLabelsQuery__
 *
 * To run a query within a React component, call `useGetLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLabelsQuery(baseOptions?: Apollo.QueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, options);
      }
export function useGetLabelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, options);
        }
export type GetLabelsQueryHookResult = ReturnType<typeof useGetLabelsQuery>;
export type GetLabelsLazyQueryHookResult = ReturnType<typeof useGetLabelsLazyQuery>;
export type GetLabelsQueryResult = Apollo.QueryResult<GetLabelsQuery, GetLabelsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    