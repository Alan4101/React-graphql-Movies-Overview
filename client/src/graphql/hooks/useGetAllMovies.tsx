import { useQuery } from '@apollo/client'
import { MoviesQuery } from '../__generated__/'
import { GET_ALL_MOVIES } from '../movies.query'

const useGetAllMovies = (page: number, language: string) => {
  const { loading, error, data } = useQuery<MoviesQuery>(GET_ALL_MOVIES, { variables: { page, language } })
  return {
    loading,
    error,
    movies: data?.movies
  }
}
export default useGetAllMovies