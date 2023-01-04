import { useQuery } from '@apollo/client'
import { GET_RECOMMENDED } from '../recommended.query'

const useGetReccomenedMovies = () => {
  const { loading, error, data } = useQuery(GET_RECOMMENDED)
  return {
    loading,
    error,
    movies: data?.getRecommended
  }
}
export default useGetReccomenedMovies