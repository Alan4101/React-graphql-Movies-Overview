import { FC } from 'react'
import { Box } from '@mui/material'
import { Add, Check } from '@mui/icons-material'
import { IMovie } from '../../../services/models/models'
import * as M from './styles'

interface MovieCardProps {
  status?: boolean
  movie: IMovie
  onRemoveMovie: (movieId: string) => void
  onSelectMovie: (movie: IMovie) => void
}
export const MovieCard: FC<MovieCardProps> = ({ status, movie, onSelectMovie, onRemoveMovie }) => {
  return (
    <M.MCard>
      <M.MCardWrapper>
        {!status ? (
          <M.MAddButton aria-label='add-movie' onClick={() => onSelectMovie(movie)}>
            <Add />
          </M.MAddButton>
        ) : (
          <M.MSelectedButton aria-label='remove-movie' onClick={() => onRemoveMovie(movie.id)}>
            <Check />
          </M.MSelectedButton>
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
