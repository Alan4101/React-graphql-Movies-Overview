import { useQuery } from '@apollo/client'
import { GetMoviesQuery } from '../../__generated__/graphql'
import { GET_SELECTED_MOVIES } from '../movies.query'

const useSelectedMovies = () => {
  const { data, loading, error } = useQuery<GetMoviesQuery>(GET_SELECTED_MOVIES)
  return {
    loading,
    error,
    selectedMovies: data?.selectedMovies
  }
}
export default useSelectedMovies
