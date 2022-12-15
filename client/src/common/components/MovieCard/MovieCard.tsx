import { FC } from 'react'
import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material'
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
      <Box sx={sx.container} className={classes.container}>
        {!status ? (
          <IconButton
            aria-label='add-movie'
            className={classes.button}
            onClick={() => onCardSelect(movie)}
            sx={sx.iconButton}
          >
            <Add />
          </IconButton>
        ) : (
          <IconButton
            aria-label='add-movie'
            className={classes.button}
            onClick={() => handleDeleteMove(movie)}
            sx={sx.iconButton}
          >
            <Check />
          </IconButton>
        )}
        <Box className={classes.item}>
          <Typography sx={sx.textTitle} className={classes.title}>
            {movie.title}
          </Typography>
        </Box>
        <Box className={classes.item}>
          <Typography sx={sx.description} className={classes.description}>
            {movie.releaseDate}
          </Typography>
        </Box>
      </Box>
      <CardMedia component='img' image={movie.poster} alt={movie.title} classes={{ media: classes.img }} />
    </Grid>
  )
}
const sx = {
  container: {
    width: '100%',
    height: 'inherit',
    display: 'grid',
    gridTemplateRows: '1fr 1fr'
  },
  textTitle: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: '18px',
    padding: '5px',
    height: 'min-content'
  },
  iconButton: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    color: '#fff',
    m: '5px',
    zIndex: 9999,
    '&:hover': {
      background: '#e1770b',
      color: '#381f75',
      transition: '0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
    }
  },
  description: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '0.5px',
    padding: '5px'
  }
}
