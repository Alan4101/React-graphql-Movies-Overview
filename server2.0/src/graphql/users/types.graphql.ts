export const UsersTypes =`#graphql
type User{
  _id: ID!
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  updatedAt: String!
  createdAt: String!
}
type AccessToken{
  accessToken: String!
}
`