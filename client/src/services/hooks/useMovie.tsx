import { toast, ToastOptions } from 'react-toastify'
import { useQuery, useMutation } from '@apollo/client'

import { toastOptions } from '../helpers/helper'
import {
  ADD_MOVIE_TO_SELECTED,
  DELETE_ALL_SELECTED_MOVIES,
  GenresQuery,
  GET_GENRES,
  GET_SELECTED_MOVIES,
  Movie,
  RemoveMovieMutation,
  REMOVE_MOVIE
} from '../../graphql'
import { useSelectedMovies } from './../../graphql/hooks'

export const useMovie = () => {
  const { selectedMovies } = useSelectedMovies()

  const { data: genres, error: genresError } = useQuery<GenresQuery>(GET_GENRES)

  const [deleteAll] = useMutation(DELETE_ALL_SELECTED_MOVIES, {
    update(cache) {
      cache.modify({
        fields: {
          getSelectedMovies() {
            return []
          }
        }
      })
    }
  })

  const [deleteMovie] = useMutation<RemoveMovieMutation>(REMOVE_MOVIE, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          getSelectedMovies(currentMovies = []) {
            return data
              ? currentMovies.filter(
                  (movie: { __ref: string }) => movie.__ref !== `MovieSelected:${data.deleteMovie._id}`
                )
              : currentMovies
          }
        }
      })
    }
  })

  const [createMovie] = useMutation(ADD_MOVIE_TO_SELECTED, {
    refetchQueries: [{ query: GET_SELECTED_MOVIES }, 'GetMovies']
  })

  const getGenresName = (genresIds: number[]) => {
    if (!genresIds && !genres) {
      return []
    }
    if (genresError) {
      return []
    }

    return genresIds.map(returnName)
  }
  const returnName = (id: number) => {
    if (genres && genres.genres) {
      const genreItem = genres.genres.find(item => +item.id === id)
      if (genreItem) {
        return genreItem.name
      }
    }
    return ''
  }

  const handleSelecMovie = (movie: Movie) => {
    const isNewMovie = selectedMovies && selectedMovies.some(item => item.movieId === movie.id)

    if (!isNewMovie) {
      createMovie({
        variables: {
          ...movie,
          genres: getGenresName(movie.genreIds),
          movieId: movie.id,
          userDescription: '',
          voteCount: movie.voteCount,
          backdropPath: movie.backdropPath,
          voteAverage: movie.voteAverage
        }
      }).then(() => {
        toast.success('Movie added!', toastOptions as ToastOptions)
      })
    }
  }

  const handleDeleteMove = (id: string) => {
    if (!selectedMovies) return undefined
    const deletetId = selectedMovies.find(item => item.movieId === id)?._id
    deleteMovie({ variables: { id: deletetId } })
  }

  const handleDeleteAllMovies = () => {
    deleteAll()
  }
  return {
    selectedMovies,
    handleDeleteMove,
    handleSelecMovie,
    handleDeleteAllMovies
  }
}
