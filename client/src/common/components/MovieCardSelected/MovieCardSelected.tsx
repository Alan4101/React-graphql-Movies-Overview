import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
// mui
import { Box, Card, CardContent, Typography } from '@mui/material'

import { ISelectedMovie } from '../../../services/models/models'
import { CardMenu } from '../CardMenu/CardMenu'

interface MovieCardSelectedProps {
  movie: ISelectedMovie
  onDeleteMovie: (movie: ISelectedMovie) => void
  handleGetMovie: (movie: ISelectedMovie) => void
}
export const MovieCardSelected: FC<MovieCardSelectedProps> = ({ movie, onDeleteMovie }) => {
  const { t } = useTranslation()
  const menu = [t('content.button.remove')]

  return (
    <Card
      sx={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        margin: '15px'
      }}
    >
      <CardMenu menuItems={menu} handleClickMenu={() => onDeleteMovie(movie)} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', paddingRight: '20px' }}>
          <Typography sx={{ fontSize: '1.1rem' }} component='div' variant='h6'>
            {movie.title}
          </Typography>
          <Typography variant={'body1'}>
            {t('content.genres')}:<span> {movie?.genres ? movie.genres.join(', ') : 'unknown'}</span>
          </Typography>

          {/* <MovieButton variant="outlined" onClick={() => handleGetMovie(movie)}>
            {t("selectedMovies.buttonTitle")}
          </MovieButton> */}
        </CardContent>
      </Box>
    </Card>
  )
}
