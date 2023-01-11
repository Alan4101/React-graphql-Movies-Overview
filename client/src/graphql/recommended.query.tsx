import { graphql as gql } from './__generated__'

export const GET_RECOMMENDED = gql(`
  query GetRecommended {
    getRecommended {
      title
      _id
      createdData
      description
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
        sequenceNumber

      }
    }
  }
`)
