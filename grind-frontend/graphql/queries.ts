import { gql } from "@apollo/client";

export const ERRANDS_QUERY = gql`
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
      }
      stamps {
        _id
      }
      label {
        _id
      }
      createdBy {
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

export const MILESTONES_QUERY = gql`
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

export const MEDIAS_QUERY = gql`
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
`

export const SCHEMES_QUERY = gql`
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
`

export const SCHEME_QUERY = gql`
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
`

export const POSTERS_QUERY = gql`
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
`

export const STAMPS_QUERY = gql`
  query getStamps {
    stamps {
      _id
      title
      category
    }
  }
`

export const LABELS_QUERY = gql`
  query getLabels {
    labels {
      _id
      title
      category
    }
  }`