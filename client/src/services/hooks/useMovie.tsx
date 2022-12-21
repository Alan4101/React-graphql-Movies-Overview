import { toast, ToastOptions } from 'react-toastify'
import { useQuery, useMutation } from '@apollo/client'

import { toastOptions } from '../helpers/helper'
import { ADD_MOVIE_TO_SELECTED, GET_GENRES, GET_SELECTED_MOVIES, REMOVE_MOVIE } from '../../graphql'
import { useSelectedMovies } from './../../graphql/hooks'
import { GenresQuery, Movie } from '../../__generated__/graphql'

export const useMovie = () => {
  const { selectedMovies } = useSelectedMovies()

  const [deleteMovie] = useMutation(
    REMOVE_MOVIE
    //   {
    //   update(cache, {data: { deleteMovie }}){
    //     cache.modify({
    //       fields: {
    //         getSelectedMovies(currentMovies = []){
    //           return currentMovies.filter(movie => movie.ref !== ``)
    //         }
    //       }
    //     })
    //   }
    // }
  )
  const [createMovie] = useMutation(ADD_MOVIE_TO_SELECTED, {
    refetchQueries: [
      { query: GET_SELECTED_MOVIES }, // DocumentNode object parsed with gql
      'GetMovies' // Query name
    ]
  })
  const { data: genres, error: genresError } = useQuery<GenresQuery>(GET_GENRES)

  const getGenresName = (genresIds: number[]) => {
    if (!genresIds && !genres) {
      return []
    }
    if (genresError) {
      return []
    }
    if (genres) {
      return genresIds.map(id => genres.genres.find(item => +item.id === id)?.name)
    }
  }

  const handleSelecMovie = (movie: Movie) => {
    const isNew = selectedMovies && selectedMovies.some(item => item.movieId === movie.id)

    if (!isNew) {
      createMovie({
        variables: {
          ...movie,
          // genres: getGenresName(movie.genreIds) ? getGenresName(movie.genreIds) : '',
          genres: '',
          movieId: movie.id,
          userDescription: '',
          voteCount: movie.voteCount
        }
      }).then(() => {
        toast.success('Movie added!', toastOptions as ToastOptions)
        // refetch()
      })
    }
  }

  const handleDeleteMove = (id: string) => {
    if (!selectedMovies) return undefined
    // const filteredMovies = selectedMovies.filter(item => item.movieId !== id)
    const deletetId = selectedMovies.find(item => item.movieId === id)?._id
    // setSelectedMovies([...filteredMovies])
    deleteMovie({ variables: { id: deletetId } })
  }

  const handleClearList = () => {
    // setSelectedMovies([])
  }
  return {
    selectedMovies,
    handleDeleteMove,
    handleSelecMovie,
    handleClearList
  }
}
