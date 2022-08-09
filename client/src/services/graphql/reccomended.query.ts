import { gql } from "@apollo/client";
import { CORE_SELECTED_MOVIE_FIELDS } from "./fragment";

export const GET_RECOMMENDED = gql`
  ${CORE_SELECTED_MOVIE_FIELDS}
  query Recommended {
    getRecommended {
      title
      _id
      movies {
        ...CoreSelectedMovieFields
      }
      createdData
    }
  }
`;
