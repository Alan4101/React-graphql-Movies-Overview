import { graphql as gql } from './__generated__'

export const SIGN_IN = gql(`
  mutation LoginUser($input: LoginInput!) {
  loginUser(input: $input) {
    status
    user {
      authToken
      lastName
      _id
      firstName
      picture
      recomendedList {
        _id
        createdData
        description
        movies {
          _id
          adult
          backdropPath
          genres
          overview
          poster
          releaseDate
          title
          sequenceNumber
          userDescription
          voteAverage
          voteCount
          movieId
        }
        title
      }
      role
    }
  }
}
`)
export const SIGN_UP = gql(`
mutation SignUpUser($input: SingUpInput!) {
  signUpUser(input: $input) {
    user {
      createdAt
      firstName
      email
      age
      _id
      lastName
      password
      picture
      role
      updatedAt
      verified
    }
    status
  }
}
`)
// {
//   "input": {
//     "email": "example@email.com",
//     "password": "qwerty135",
//   }
// }
