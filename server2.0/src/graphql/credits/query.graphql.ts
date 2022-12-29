export const CreditsQuery= `#graphql
type Query{
  credits(movieId: ID!, language: String!): Credits!
}
`