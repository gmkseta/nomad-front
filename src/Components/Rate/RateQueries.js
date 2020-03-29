import { gql } from "apollo-boost";


export const ALL_BOOKS = gql`
    query AllBooks(
      $categoryId: String, $afterId: String
      ){
        allBooks(
          categoryId: $categoryId, afterId: $afterId
        ){
            id
            title
            author
        }
      }
`

export const RANDOM_BOOKS = gql`
    query randomBooks(
      $categoryId: String, $afterId: String
      ){
        randomBooks(
          categoryId: $categoryId, afterId: $afterId
        ){
            id
            title
            author
        }
      }
`

export const ADD_REVIEW = gql`
  mutation AddReview($bookId: String!, $rate: Int!){
    addReview(
      bookId: $bookId
      rate: $rate
    ){
      id
      rate
    }
  }
`
