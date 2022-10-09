import { gql } from "@apollo/client";

export const CREATE_ERRAND = gql`
  mutation addErrand($payload: CreateErrandInput!) {
    createErrand(createErrandInput: $payload){
      _id
      title
      description
    }
}
  `

export const UPDATE_ERRAND = gql`
  mutation editErrand($payload: UpdateErrandInput!) {
    updateErrand(updateErrandInput: $payload){
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
      }
      stamps {
        _id
      }
      assignee {
        _id
      }
      reporter {
        _id
      }
      members {
        _id
      }
      createdBy {
        _id
      }
    }
}
  `

export const CREATE_DISCUSSION = gql`
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
  `

  export const CREATE_MILESTONE = gql`
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
  `

export const UPDATE_MILESTONE = gql`
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
  }`

  export const REMOVE_MILESTONE = gql`
    mutation deleteMilestone($id: String!) {
      removeMilestone(id: $id) {
        __typename
        _id
      }
    }
  `