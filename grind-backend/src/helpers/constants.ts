import { registerEnumType } from '@nestjs/graphql';

export const jwtConstants = {
  secret: 'secretKey',
};

export const ERAND_CATEGORIES = [
  'message',
  'engagement',
  'ticket',
  'todo',
  'project',
];

export enum ErrandCategory {
  MESSAGE = 'message',
  ENGAGEMENT = 'engagement',
  TICKET = 'ticket',
  TODO = 'todo',
  PROJECT = 'project',
}

registerEnumType(ErrandCategory, {
  name: 'ErrandCategory',
});

export const POSTER_CATEGORIES = ['listing', 'engagement', 'todo', 'message'];

export enum PosterCategory {
  LISTING = 'listing',
  ENGAGEMENT = 'engagement',
  TODO = 'todo',
  MESAGE = 'message',
}

registerEnumType(PosterCategory, {
  name: 'PosterCategory',
});

export const USER_ROLES = ['SU_ADMIN', 'ADMIN', 'USER'];

export enum UserRole {
  SU_ADMIN = 'SU_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(UserRole, {
  name: 'UserRole',
});

export const OCCURRENCE_TARGET = ['errand'];

export enum OccurreneTarget {
  ERRAND = 'errand',
}

registerEnumType(OccurreneTarget, {
  name: 'OccurreneTarget',
});

export const MEDIA_TARGET = ['errand'];

export enum MediaTarget {
  ERRAND = 'errand',
}

registerEnumType(MediaTarget, {
  name: 'MediaTarget',
});

export const WORKFLOW_TARGETS = ['ticket', 'todo', 'poster'];

export enum WorkFlowTarget {
  TICKET = 'ticket',
  TODO = 'todo',
  POSTER = 'poster',
}

registerEnumType(WorkFlowTarget, {
  name: 'WorkFlowTarget',
});

export const LABEL_CATEGORIES = ['ticket'];

export enum LabelCategory {
  TICKET = 'ticket',
}

registerEnumType(LabelCategory, {
  name: 'LabelCategory',
});

export const STAMP_CATEGORIES = ['project', 'ticket'];

export enum StampCategory {
  PROJECT = 'project',
  TICKET = 'ticket',
}

registerEnumType(StampCategory, {
  name: 'StampCategory',
});
