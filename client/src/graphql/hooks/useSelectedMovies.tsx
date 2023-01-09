import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GetMoviesQuery, MovieSelected } from '../__generated__/'
import { GET_SELECTED_MOVIES } from '../movies.query'

const useSelectedMovies = () => {
  const { data, loading, error } = useQuery<GetMoviesQuery>(GET_SELECTED_MOVIES)
  const [selectedMovies, setSelected] = useState<MovieSelected[] | []>([])
  useEffect(() => {
    setSelected(data ? data.selectedMovies : [])
  }, [data, loading, error])

  return {
    selectedLoading: loading,
    selectedError: error,
    selectedMovies
  }
}
export default useSelectedMovies
