import { graphql as gql } from './__generated__'

export const SIGN_IN = gql(`
  mutation LoginUser($input: LoginInput!) {
  loginUser(input: $input) {
    access_token
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