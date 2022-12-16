import { FC } from 'react'
import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { IMovie } from '../../../services/models/models'
import { Add, Check } from '@mui/icons-material'
import classes from './MovieCard.module.css'

interface MovieCardProps {
  status?: boolean
  movie: IMovie
  onRemoveMovie: (movieId: string) => void
  onSelectMovie: (movie: IMovie) => void
}
export const MovieCard: FC<MovieCardProps> = ({ status, movie, onSelectMovie, onRemoveMovie }) => {
  return (
    <Grid className={classes.card}>
      <Box sx={sx.container} className={classes.container}>
        {!status ? (
          <IconButton
            aria-label='add-movie'
            className={classes.button}
            onClick={() => onSelectMovie(movie)}
            sx={{ ...sx.iconButton, ...sx.addButton }}
          >
            <Add />
          </IconButton>
        ) : (
          <IconButton
            aria-label='add-movie'
            onClick={() => onRemoveMovie(movie.id)}
            sx={{ ...sx.iconButton, ...sx.selectedButton }}
          >
            <Check />
          </IconButton>
        )}
        <Box sx={sx.item}>
          <Typography sx={sx.title} className={classes.title}>
            {movie.title}
          </Typography>
        </Box>
        <Box sx={sx.item}>
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
  title: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: '18px',
    padding: '5px',
    height: 'min-content'
  },
  description: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '0.5px',
    padding: '5px'
  },
  item: {
    position: 'relative'
  },
  iconButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '40px',
    height: '40px',
    color: '#fff',
    m: '5px',
    zIndex: 9999,
    '&:hover': {
      transition: '0.2s cubic-bezier(0.2, 0.8, 0.2, 1)'
    }
  },
  selectedButton: {
    bgcolor: 'green',
    '&:hover': {
      background: 'green',
      color: '#381f75'
    }
  },
  addButton: {
    '&:hover': {
      background: '#e1770b',
      color: '#381f75'
    }
  }
}
