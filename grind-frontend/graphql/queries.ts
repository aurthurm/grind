import { gql } from "@apollo/client";
import { IUser } from "../models/user";

export const ERRANDS_QUERY = gql`
  query GetErrands {
    errands {
        _id
        title
        description
        createdBy {
          _id
          phone
        }
      }
  }
`

export const ERRAND_QUERY = gql`
  query GetErrand($id: String!) {
    errand(id: $id) {
      _id
      title
      description
      category
      status
      priority
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
    }
  }
`

export const DISCUSSIONS_QUERY = gql`
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
    }
  }
`

export const USERS_QUERY = gql`
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
      }
  }
`