export const SelectedMovieQuery = `#graphql
type Query {
  movieById(_id: ID!): MovieSelected!
  selectedMovies: [MovieSelected!]!
}
` 