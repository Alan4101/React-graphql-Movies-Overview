import { FC } from 'react'
import { Grid, Box, CircularProgress, useMediaQuery } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { Carousel, MovieButton } from '../UI'
import SlideItem from '../SlideItem/SlideItem'

import { useMovie } from '../../../services/hooks'

import { useSelectedMovies } from '../../../graphql'
import * as M from './styles'

interface SelectedMoviePaperProps {
  onCreateList: () => void
}
export const SelectedMoviesPaper: FC<SelectedMoviePaperProps> = ({ onCreateList }) => {
  const { t } = useTranslation()
  const matches = useMediaQuery('(max-width:425px)')

  const { handleDeleteAllMovies } = useMovie()
  const { selectedMovies, loading, error } = useSelectedMovies()

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
  const renderSelectedMovies = () =>
    selectedMovies && selectedMovies.map(movie => <SlideItem key={movie._id} movie={movie} />)
  return (
    <Grid container sx={M.styles.wrapper}>
      <Grid container sx={M.styles.carouselWrapper}>
        {selectedMovies && selectedMovies.length > 3 ? (
          <Carousel count={matches ? 1 : 3}>{renderSelectedMovies()}</Carousel>
        ) : (
          <Grid container sx={M.styles.cardWrapper}>
            {renderSelectedMovies()}
          </Grid>
        )}
      </Grid>
      <Box sx={M.styles.controlButtonBox}>
        <MovieButton sx={M.styles.button} onClick={onCreateList} variant='outlined'>
          {t('content.button.createNewList')}
        </MovieButton>
        <MovieButton sx={M.styles.button} onClick={handleDeleteAllMovies} variant='outlined'>
          {t('content.button.clearList')}
        </MovieButton>
      </Box>
    </Grid>
  )
}
