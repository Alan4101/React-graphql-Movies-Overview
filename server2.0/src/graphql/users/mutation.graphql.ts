export const UsersMutation = `#graphql
type Mutation{
  signIn(email: String!, password: String!): AccessToken!
  signUp(email: String!, password: String!): AccessToken!
  logout()
}
`