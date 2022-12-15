/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { toast, ToastOptions } from 'react-toastify'
import { useQuery, useMutation } from '@apollo/client'

import { IMovie, ISelectedMovie } from '../models/models'
import { toastOptions } from '../helpers/helper'
import { ADD_MOVIE_TO_SELECTED, GET_GENRES, GET_SELECTED_MOVIES, REMOVE_MOVIE } from '../graphql'

const MAX_SELECTED = 5

export const useMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState<ISelectedMovie[]>([])
  const { data, refetch } = useQuery(GET_SELECTED_MOVIES)
  const [deleteMovie] = useMutation(REMOVE_MOVIE)
  const [createMovie] = useMutation(ADD_MOVIE_TO_SELECTED)
  const { data: genres } = useQuery(GET_GENRES)

  useEffect(() => {
    if (data) {
      const arr = data.getSelectedMovies.map((item: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { __typename, ...partial } = item
        return partial
      })
      setSelectedMovies(arr)
    }
  }, [data])

  const getGenresName = (genresIds: number[] | undefined) => {
    if (!genresIds) {
      return null
    }

    return genresIds.map(id => genres.genres.find((item: any) => +item.id === id).name)
  }
  const handleAddMovieToSelected = (movie: IMovie) => {
    createMovie({
      variables: {
        ...movie,
        genres: getGenresName(movie.genreIds),
        movieId: movie.id,
        userDescription: '',
        voteCount: movie.voteCount
      }
    }).then(() => {
      toast.success('Movie added!', toastOptions as ToastOptions)
      refetch()
    })
  }
  const handleSelecMovie = (movie: IMovie) => {
    const isNew = selectedMovies.some(item => item.movieId === movie.id)

    if (!isNew && selectedMovies.length < MAX_SELECTED) {
      handleAddMovieToSelected(movie)
    } else {
      toast.warn(isNew ? 'Movie is exist!' : '🦄 Take it easy! Only 5 films', toastOptions as ToastOptions)
    }
  }

  const handleDeleteMove = (id: string) => {
    console.log(id)
    const filteredMovies = selectedMovies.filter(item => item.movieId !== id)
    const deletetId = selectedMovies.find(item => item.movieId === id)
    console.log('here')
    setSelectedMovies([...filteredMovies])
    deleteMovie({ variables: { deletetId } })
  }

  const handleClearList = () => {
    setSelectedMovies([])
  }
  return {
    selectedMovies,
    handleDeleteMove,
    handleSelecMovie,
    handleClearList
  }
}
