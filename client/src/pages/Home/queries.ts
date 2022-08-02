import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query Movies($page: Int) {
    movies(page: $page) {
      page
      totalResults
      totalPages
      results {
        adult
        title
        releaseDate
        poster
        voteCount
        voteAverage
        backdropPath
        id
      }
    }
  }
`;
