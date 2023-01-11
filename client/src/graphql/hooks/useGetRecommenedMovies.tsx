import { useQuery } from '@apollo/client'
import { GET_RECOMMENDED } from '../recommended.query'

const useGetRecommenedMovies = () => {
  const { loading, error, data, refetch } = useQuery(GET_RECOMMENDED)
  return {
    loading,
    error,
    refetchRecList: refetch,
    movies: data?.getRecommended
  }
}
export default useGetRecommenedMovies