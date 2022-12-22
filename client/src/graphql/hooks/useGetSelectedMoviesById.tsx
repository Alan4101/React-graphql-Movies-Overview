import { useLazyQuery } from '@apollo/client'
import { GET_MOVIE_BY_ID } from '../movies.query'
import { useEffect } from 'react'

const useGetSelectedMoviesById = (id: string | undefined) => {
  const [getMovie, { data, loading, error, refetch }] = useLazyQuery(GET_MOVIE_BY_ID)
  useEffect(() => {
    if (id) {
      getMovie({ variables: { id } })
    }
  }, [id])
  return {
    movie: data?.movieById,
    loading,
    error,
    refetchMovie: refetch
  }
}
export default useGetSelectedMoviesById
