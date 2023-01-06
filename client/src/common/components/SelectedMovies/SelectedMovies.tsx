import { FC } from 'react'
import { Grid, Box, CircularProgress, useMediaQuery } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { Carousel, MovieButton } from '../UI'
import SlideItem from '../SlideItem/SlideItem'


import { useSelectedMovies } from '../../../graphql'
import * as M from './styles'

interface SelectedMoviePaperProps {
  onCreateList: () => void
  onDeleteList: () => void
}
export const SelectedMovies: FC<SelectedMoviePaperProps> = ({ onCreateList, onDeleteList }) => {
  const { t } = useTranslation()
  const matches = useMediaQuery('(max-width:425px)')

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
          <Carousel config={{ countSlide: matches ? 1 : 3 }}>{renderSelectedMovies()}</Carousel>
        ) : (
          <M.CardWrapper count={selectedMovies ? selectedMovies.length : 3}>{renderSelectedMovies()}</M.CardWrapper>
        )}
      </Grid>
      <Box sx={M.styles.controlButtonBox}>
        <MovieButton sx={M.styles.button} onClick={onCreateList} variant='outlined'>
          {t('content.button.createNewList')}
        </MovieButton>
        <MovieButton sx={M.styles.button} onClick={onDeleteList} variant='outlined'>
          {t('content.button.clearList')}
        </MovieButton>
      </Box>
    </Grid>
  )
}
