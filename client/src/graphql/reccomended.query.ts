import { gql } from '@apollo/client'

export const GET_RECOMMENDED = gql`
  query Recommended {
    getRecommended {
      title
      _id
      movies {
        _id
        title
        poster
        adult
        movieId
        genres
        releaseDate
        overview
        voteCount
        userDescription
      }
      createdData
    }
  }
`
