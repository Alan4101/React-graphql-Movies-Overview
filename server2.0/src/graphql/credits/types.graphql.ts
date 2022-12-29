export const CreditsTypes=`#graphql
type Cast {
  id: ID!
  creditId: ID!
  adult: Boolean!
  gender: Int
  knownForDepartment: String
  name: String!
  originalName: String!
  popularit: Float
  profilePath: String!
  castId: ID!
  character: String
  order: Int
}
type Crew {
  id: ID!
  creditId: ID!
  adult: Boolean!
  gender: Int
  knownForDepartment: String
  name: String!
  originalName: String!
  popularit: Float
  profilePath: String!
  department: String!
  job: String!
}
type Credits {
  id: ID!
  cast: [Cast!]!
  crew: [Crew!]!
}
`