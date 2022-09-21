import { gql } from "@apollo/client";

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
      assignedTo {
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
      category
      description
      members {
        _id
        email
        firstName
        lastName
        middleName
        name
      }
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
      status
      title
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