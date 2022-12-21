import { useLazyQuery } from '@apollo/client'
import { GET_MOVIE_BY_ID } from '../movies.query'

const useGetSelectedMoviesById = () => {
  const [getMovie, { data, loading, error }] = useLazyQuery(GET_MOVIE_BY_ID)
  return {
    getMovie,
    movie: data?.movieById,
    loading,
    error
  }
}
export default useGetSelectedMoviesById
