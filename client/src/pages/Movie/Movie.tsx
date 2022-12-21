import React, { FC, useEffect, useState } from 'react'
// mui
import { Box, Button, CardMedia, CircularProgress, Container, Grid, Typography, IconButton } from '@mui/material'
// othe library
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

// query, mutation

//other
//style
import classes from './Movie.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
//components
import { CreateAndDeleteDescrModal } from '../../common/components'
import { MovieButton } from '../../common/components/UI'
import { useGetSelectedMoviesById } from '../../graphql/hooks'
import { ADD_USER_DESCRIPTION } from '../../graphql'

export const Movie: FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { t } = useTranslation()

  // const [movie, setMovie] = useState<ISelectedMovie>()
  const [isOpenModal, setIsOpenModal] = useState(false)
  // const { loading, data, error, refetch } = useQuery(GET_MOVIE_BY_ID, {
  //   variables: { id }
  // })
  const { getMovie, movie, loading, error } = useGetSelectedMoviesById()
  const [addUserDescription] = useMutation(ADD_USER_DESCRIPTION)

  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    id && getMovie({ variables: { id } })
  }, [id])

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleEditDescription = () => {
    toggleModal()
  }
  const handleRemoveDescription = () => {
    // addUserDescription({ variables: { id, userDescription: '' } }).then(() => refetch())
    addUserDescription({ variables: { id, userDescription: '' } })
  }

  const updateDescription = (value: string) => {
    addUserDescription({ variables: { id, userDescription: value } })
      .then(() => {
        toggleModal()
        // refetch()
      })
      .catch(error => console.log(error))
  }
  const handleReturnToHomePage = () => {
    navigate('/')
  }

  if (error) {
    return (
      <Grid>
        <Typography>Error: {error.message}</Typography>
      </Grid>
    )
  }
  if (loading && !movie) {
    return (
      <Grid sx={{ width: '100%', height: '90vh' }}>
        <CircularProgress />
      </Grid>
    )
  }
  return (
    <Grid container>
      <Container>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant='h2'>{movie?.title}</Typography>
        </Grid>
        <Grid container item lg={12} md={12} xs={12} mt={4}>
          <Grid item lg={3} md={3} xs={12}>
            <Box className={classes.pictureWrapper}>
              <CardMedia
                sx={{
                  width: '150px',
                  height: '200px'
                }}
                image={movie?.poster}
                component='img'
                alt={movie?.title}
              />
            </Box>
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            <Typography variant='h5'> {t('content.genres')}:</Typography>
            <Typography>{movie?.genres ? movie.genres.join(', ') : 'unknown'}</Typography>
            <Typography variant='h5'>{t('content.realeaseData')}: </Typography>
            <Typography variant='body1'>{movie?.releaseDate}</Typography>
            <Typography variant='h5'>Vote count</Typography>
            <Typography variant='body1'>{movie?.voteCount}</Typography>
            <Grid>
              <Typography variant='h5'>{t('content.overview')} </Typography>
              <Typography variant='body1'>{movie?.overview}</Typography>
            </Grid>
            {movie?.userDescription && movie?.userDescription?.length > 0 ? (
              <Grid container>
                <Grid item md={10}>
                  <Typography variant='h5'>{t('content.userOverview')}</Typography>
                </Grid>
                <Grid item md={2}>
                  <IconButton onClick={handleEditDescription}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={handleRemoveDescription}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Typography variant='body1'>{movie?.userDescription}</Typography>
                </Grid>
              </Grid>
            ) : (
              <Button onClick={toggleModal}>{t('content.button.addreview')}</Button>
            )}
          </Grid>
          <Grid item md={12} justifyContent='center'>
            <MovieButton variant='outlined' onClick={handleReturnToHomePage}>
              <KeyboardReturnIcon sx={{ paddingRight: '5px' }} />
              {t('content.button.goback')}
            </MovieButton>
          </Grid>
        </Grid>
        {movie && (
          <CreateAndDeleteDescrModal
            isUpdate={isUpdate}
            isOpenModal={isOpenModal}
            toggleModal={toggleModal}
            value={movie.userDescription ?? ''}
            updateDescription={updateDescription}
          />
        )}
      </Container>
    </Grid>
  )
}
