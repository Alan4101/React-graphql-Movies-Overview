import { graphql as gql } from './__generated__'

export const SIGN_IN = gql(`
  mutation LoginUser($input: LoginInput!) {
  loginUser(input: $input) {
    access_token
    status
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
