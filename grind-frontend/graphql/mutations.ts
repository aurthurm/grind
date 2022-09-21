import { gql } from "@apollo/client";

export const CREATE_ERRAND = gql`
  mutation addErrand($payload: CreateErrandInput!) {
    createErrand(createErrandInput: $payload){
      _id
      title
    }
}
  `

export const UPDATE_ERRAND = gql`
  mutation editErrand($payload: UpdateErrandInput!) {
    updateErrand(updateErrandInput: $payload){
      _id
      title
      description
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
  