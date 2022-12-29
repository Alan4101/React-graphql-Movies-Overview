export const SelectedMoviesTypes = `#graphql
type MovieSelected {
  _id: ID!
  title: String!
  releaseDate: String!
  poster: String!
  genres: [String!]!
  adult: Boolean
  movieId: String!
  overview: String
  voteCount: Int
  voteAverage: Float
  userDescription: String
  backdropPath: String
}
input MovieSelectedInput {
  _id: ID!
  title: String!
  releaseDate: String!
  poster: String!
  genres: [String]!
  adult: Boolean
  movieId: String!
  overview: String
  voteCount: Int
  voteAverage: Float
  userDescription: String
  backdropPath: String
}
type DeleteResponse {
  success: Boolean!
  message: String
}
`