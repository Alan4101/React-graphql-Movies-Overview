import { FC } from 'react'
import { Box, SxProps, Tooltip } from '@mui/material'
import { Add, Check } from '@mui/icons-material'

import * as M from './styles'
import { Movie } from '../../../graphql'
import { useTranslation } from 'react-i18next'

interface MovieCardProps {
  status?: boolean
  movie: Movie
  styleRoot?: SxProps
  onRemoveMovie: (movieId: string) => void
  onSelectMovie: (movie: Movie) => void
}
export const MovieCard: FC<MovieCardProps> = ({ status, movie, onRemoveMovie, onSelectMovie, styleRoot }) => {
  const { t } = useTranslation()
  return (
    <M.MCard sx={styleRoot}>
      <M.MCardWrapper>
        {!status ? (
          <Tooltip title={t('tooltipText.movieCard.addToSelected')}>
            <M.MAddButton aria-label='add-movie' onClick={() => onSelectMovie(movie)}>
              <Add />
            </M.MAddButton>
          </Tooltip>
        ) : (
          <Tooltip title={t('tooltipText.movieCard.removeFromSelected')}>
            <M.MSelectedButton aria-label='remove-movie' onClick={() => onRemoveMovie(movie.id)}>
              <Check />
            </M.MSelectedButton>
          </Tooltip>
        )}
        <Box sx={{ position: 'relative' }}>
          <M.MTittle>{movie.title}</M.MTittle>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <M.MDescription>{movie.releaseDate}</M.MDescription>
        </Box>
      </M.MCardWrapper>
      <Box component='img' src={movie.poster} alt={movie.title} sx={M.imgSx} className='cardImg' />
    </M.MCard>
  )
}
