import { gql } from "@apollo/client";

export const ERRANDS_QUERY = gql`
  query GetErrands {
    errands {
        _id
        title
        description
        startDate
        endDate
        createdBy {
          _id
          phone
        }
        createdAt
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
`

export const OCCURRENCIES_QUERY = gql`
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
      createdAt
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
        createdAt
      }
  }
`
