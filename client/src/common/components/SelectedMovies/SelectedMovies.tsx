import { FC } from 'react'
import { Grid, Box, useMediaQuery, Skeleton } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { Carousel, MovieButton } from '../UI'
import SlideItem from '../SlideItem/SlideItem'

import { MovieSelected } from '../../../graphql'
import { styles, CardWrapper } from './styles'

interface SelectedMoviePaperProps {
  movies: MovieSelected[]
  loading: boolean
  onCreateList: () => void
  onDeleteList: () => void
}
export const SelectedMovies: FC<SelectedMoviePaperProps> = ({ movies, loading, onCreateList, onDeleteList }) => {
  const { t } = useTranslation()
  const matches = useMediaQuery('(max-width:425px)')
  
  if (movies.length === 0) {
    return null
  }
  
  if (loading) {
    return (
      <Box sx={styles.loadWrapper}>
        {Array.from(new Array(3)).map((_, index) => (
          <Skeleton
            key={index}
            variant='rectangular'
            animation='wave'
            height={260}
            sx={{ bgcolor: 'rgba(56, 31, 117,.5)' }}
          />
        ))}
      </Box>
    )
  }

  const renderSelectedMovies = () => movies.map(movie => <SlideItem key={movie._id} movie={movie} />)
  return (
    <Grid container sx={styles.wrapper}>
      <Grid container sx={styles.carouselWrapper}>
        {movies.length > 3 ? (
          <Carousel config={{ countSlide: matches ? 1 : 3 }}>{renderSelectedMovies()}</Carousel>
        ) : (
          <CardWrapper count={movies.length ?? 3}>{renderSelectedMovies()}</CardWrapper>
        )}
      </Grid>
      <Box sx={styles.controlButtonBox}>
        <MovieButton sx={styles.button} onClick={onCreateList} variant='outlined'>
          {t('content.button.createNewList')}
        </MovieButton>
        <MovieButton sx={styles.button} onClick={onDeleteList} variant='outlined'>
          {t('content.button.clearList')}
        </MovieButton>
      </Box>
    </Grid>
  )
}
