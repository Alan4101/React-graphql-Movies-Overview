export const MovieTypes = `#graphql
type Movies {
  page: Int!
  totalResults: Int!
  totalPages: Int!
  results: [Movie!]!
}
type Movie {
  id: ID!
  title: String!
  releaseDate: String!
  poster: String!
  genreIds: [Int!]!
  adult: Boolean
  overview: String
  originalLanguage: String
  backdropPath: String
  voteCount: Int
  video: Boolean
  voteAverage: Float
}
`
