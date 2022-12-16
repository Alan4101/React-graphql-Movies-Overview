import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
// mui
import { Grid } from '@mui/material'
// lib
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
// components
import { MovieButton } from '../UI'
import { MovieCardSelected } from '../MovieCardSelected/MovieCardSelected'
// other
import { ISelectedMovie } from '../../../services/models/models'
import { useMovie } from '../../../services/hooks'
import { FELETE_ALL_SELECTED_MOVIES } from '../../../services/graphql'

import * as M from './styles'

interface SelectedMoviePaperProps {
  isEmptySelectList: boolean
  hanleCreateList: () => void
  onDeleteList: () => void
}
export const SelectedMoviesPaper: FC<SelectedMoviePaperProps> = ({
  isEmptySelectList,
  hanleCreateList,
  onDeleteList
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { selectedMovies, handleDeleteMove } = useMovie()

  const [deleteAll] = useMutation(FELETE_ALL_SELECTED_MOVIES)

  const handleOpenMoviePage = (movie: ISelectedMovie) => {
    navigate(`${movie._id}`)
  }
  const handleCleanList = () => {
    deleteAll()
    onDeleteList()
  }
  return (
    <Grid container flexDirection='column'>
      <Grid></Grid>
      <M.MSelectedMoviePaper>s
        {/* <Typography
          sx={{
            textAlign: 'center',
            margin: '15px 0',
            textTransform: 'uppercase'
          }}
          variant='h5'
        >
          {t('selectedMovies.titlePanel')}
        </Typography> */}
        {/* <Divider /> */}
        <Grid
          container
          sx={{
            alignItems: !isEmptySelectList ? 'center' : 'start',
            height: !isEmptySelectList ? '80%' : 'auto'
          }}
        >
          {isEmptySelectList ? (
            selectedMovies.map((item, index) => (
              <MovieCardSelected
                key={index}
                movie={item}
                handleGetMovie={handleOpenMoviePage}
                onDeleteMovie={handleDeleteMove}
              />
            ))
          ) : (
            <M.EmptyMovieList />
          )}
        </Grid>
      </M.MSelectedMoviePaper>
      <M.ButtonBox>
        <MovieButton sx={{ backgroundColor: '#fff' }} onClick={hanleCreateList} variant='outlined'>
          {t('content.button.createNewList')}
        </MovieButton>
        <MovieButton sx={{ backgroundColor: '#fff' }} onClick={handleCleanList} variant='outlined'>
          {t('content.button.clearList')}
        </MovieButton>
      </M.ButtonBox>
    </Grid>
  )
}
