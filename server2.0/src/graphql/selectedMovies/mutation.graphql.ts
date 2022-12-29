export const SelectedMovieMutation = `#graphql
type Mutation {
  createMovie(
    title: String!
    poster: String!
    genres: [String]
    adult: Boolean
    releaseDate: String
    movieId: String
    overview: String
    voteCount: Int
    userDescription: String
    backdropPath: String!
    voteAverage: Float
  ): MovieSelected!

  deleteMovie(_id: ID!): MovieSelected!

  addDescription(_id: ID!, userDescription: String!): MovieSelected!
  deleteAll: DeleteResponse!
}
` 