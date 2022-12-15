import { FC } from 'react'
import { CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { IMovie } from '../../../services/models/models'
import { Add, Check } from '@mui/icons-material'
import classes from './MovieCard.module.css'
import { useMovie } from '../../../services/hooks'

interface MovieCardProps {
  status?: boolean
  movie: IMovie
  onCardSelect: (movie: IMovie) => void
}
export const MovieCard: FC<MovieCardProps> = ({ status, movie, onCardSelect }) => {
  const { handleDeleteMove } = useMovie()
  return (
    <Grid className={classes.card}>
      <Typography sx={sx.textTitle}>{movie.title}</Typography>
      <CardMedia component='img' image={movie.poster} alt={movie.title} classes={{ media: classes.img }} />

      <Typography sx={sx.description}>{movie.releaseDate}</Typography>
      {!status ? (
        <IconButton aria-label='add-movie' onClick={() => onCardSelect(movie)} sx={sx.iconButton}>
          <Add />
        </IconButton>
      ) : (
        <IconButton aria-label='add-movie' onClick={() => handleDeleteMove(movie)} sx={sx.iconButton}>
          <Check />
        </IconButton>
      )}
    </Grid>
  )
}
const sx = {
  textTitle: {
    color: 'white',
    fontSize: '24px',
    margin: '20px 0 0 20px'
  },
  iconButton: {
    width: '40px',
    height: '40px',
    color: '#fff',
    transition: '0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
    '&:hover': {
      background: 'red'
    }
  },
  description: {
    color: 'white',
    fontWeight: 400,
    fontSize: '16px',
    alignSelf: 'end',
    margin: '0 0 20px 20px',
    letterSpacing: '0.5px',
    zindex: 999
  }
}
