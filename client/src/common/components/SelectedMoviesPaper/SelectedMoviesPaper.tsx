import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
// mui
import { Grid, Box, IconButton, CircularProgress, Tooltip, useMediaQuery } from '@mui/material'
// lib
import { useMutation } from '@apollo/client'
// components
// other
import { useMovie } from '../../../services/hooks'

import { Carousel, MovieButton } from '../UI'
import * as M from './styles'
import { useTranslation } from 'react-i18next'
import { DeleteOutline } from '@mui/icons-material'
import { MovieSelected } from '../../../__generated__/graphql'
import { DELETE_ALL_SELECTED_MOVIES } from '../../../graphql'
import useSelectedMovies from './../../../graphql/hooks/useSelectedMovies';

interface SelectedMoviePaperProps {
  onCreateList: () => void
}
export const SelectedMoviesPaper: FC<SelectedMoviePaperProps> = ({ onCreateList }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const matches = useMediaQuery('(max-width:425px)')
  const { handleDeleteMove, handleClearList } = useMovie()
  const {selectedMovies, loading, error} = useSelectedMovies()

  const [deleteAll] = useMutation(DELETE_ALL_SELECTED_MOVIES)

  const handleOpenMoviePage = (movie: MovieSelected) => {
    navigate(`${movie._id}`)
  }
  const handleCleanList = () => {
    deleteAll()
    handleClearList()
  }
  const onDeleteMovie = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation()
    handleDeleteMove(id)
  }
  if (error) {
    return null
  }

  if (loading && !selectedMovies) {
    return (
      <M.Loading>
        <CircularProgress />
      </M.Loading>
    )
  }

  return (
    <Grid container sx={M.styles.wrapper}>
      <Grid container sx={M.styles.carouselWrapper}>
        {selectedMovies && selectedMovies.length > 3 ? (
          <Carousel count={matches ? 1 : 3}>
            {selectedMovies.map(movie => (
              <Tooltip key={movie && movie._id} title='Open movie page'>
                <Grid sx={M.styles.carouselItem} onClick={() => handleOpenMoviePage(movie)}>
                  <Box component='img' src={movie.poster} sx={M.styles.img} />
                  <Box sx={M.styles.buttonWrapper}>
                    <Tooltip title='Remove movie' placement='bottom'>
                      <IconButton
                        onClick={(e: React.MouseEvent<HTMLElement>) => onDeleteMovie(e, movie.movieId ?? movie._id)}
                      >
                        <DeleteOutline />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Grid>
              </Tooltip>
            ))}
          </Carousel>
        ) : (
          <Grid container sx={M.styles.cardWrapper}>
            {selectedMovies && selectedMovies.map(movie => (
              <Tooltip key={movie._id} title='Open movie page'>
                <Grid sx={M.styles.carouselItem} onClick={() => handleOpenMoviePage(movie)}>
                  <Box component='img' src={movie.poster} sx={M.styles.img} />
                  <Box sx={M.styles.buttonWrapper}>
                    <Tooltip title='Remove movie' placement='bottom'>
                      <IconButton
                        onClick={(e: React.MouseEvent<HTMLElement>) => onDeleteMovie(e, movie.movieId ?? movie._id)}
                      >
                        <DeleteOutline />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Grid>
              </Tooltip>
            ))}
          </Grid>
        )}
      </Grid>
      <Box sx={M.styles.controlButtonBox}>
        <MovieButton sx={M.styles.button} onClick={onCreateList} variant='outlined'>
          {t('content.button.createNewList')}
        </MovieButton>
        <MovieButton sx={M.styles.button} onClick={handleCleanList} variant='outlined'>
          {t('content.button.clearList')}
        </MovieButton>
      </Box>
    </Grid>
  )
}
