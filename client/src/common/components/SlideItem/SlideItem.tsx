import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Grid, IconButton, Tooltip } from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'

import { styles } from './styles'
import { useMovie } from '../../../services/hooks'
import { MovieSelected } from '../../../graphql'
import { useTranslation } from 'react-i18next'

interface OwnProps {
  movie: MovieSelected
}
const SlideItem: FC<OwnProps> = ({ movie }) => {
  const navigate = useNavigate()
  const { handleDeleteMove } = useMovie()
  const { t } = useTranslation()

  const onDeleteMovie = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation()
    handleDeleteMove(id)
  }

  const handleOpenMoviePage = (movie: MovieSelected) => {
    navigate(`${movie._id}`)
  }

  return (
    <Tooltip title='Open movie page'>
      <Grid sx={styles.carouselItem} onClick={() => handleOpenMoviePage(movie)}>
        <Box sx={styles.wrapper}>
          <Box component='img' src={movie.poster} sx={styles.img} />
          <Box sx={styles.buttonWrapper}>
            <Tooltip title={t('tooltipText.slideItemSelected.removeMovie')} placement='bottom'>
              <IconButton onClick={(e: React.MouseEvent<HTMLElement>) => onDeleteMovie(e, movie.movieId ?? movie._id)}>
                <DeleteOutline />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Grid>
    </Tooltip>
  )
}
export default SlideItem
