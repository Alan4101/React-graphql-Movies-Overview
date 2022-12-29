export const MovieQuery = `#graphql
type Query {
  movies(page: Int, language: String): Movies!
}
`;
