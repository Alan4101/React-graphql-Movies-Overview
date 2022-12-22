import React, { FC, useEffect, useState } from 'react'
import { Box, Button, CardMedia, CircularProgress, Container, Grid, Typography, IconButton } from '@mui/material'
import { Delete, Edit, KeyboardReturn } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'

import { CreateAndDeleteDescrModal, MovieButton } from '../../common/components'

import { useControlModal } from '../../services/hooks'
import { ADD_USER_DESCRIPTION, useGetSelectedMoviesById } from '../../graphql'

import { styles } from './styles'

export const Movie: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isUpdate, setIsUpdate] = useState(false)

  const [isOpenModal, toggleModal] = useControlModal()

  const { movie, loading, error, refetchMovie } = useGetSelectedMoviesById(id)

  const [addUserDescription] = useMutation(ADD_USER_DESCRIPTION)

  useEffect(() => {
    if (movie && movie.userDescription) {
      setIsUpdate(true)
    }
  }, [movie])

  const handleEditDescription = () => {
    toggleModal()
  }
  const handleRemoveDescription = () => {
    addUserDescription({ variables: { id, userDescription: '' } }).then(() => refetchMovie())
  }

  const updateDescription = (value: string) => {
    addUserDescription({ variables: { id, userDescription: value } })
      .then(() => {
        toggleModal()
        refetchMovie()
      })
      .catch(error => console.log(error))
  }
  const handleReturnToHomePage = () => {
    navigate('/')
  }

  if (error) {
    return (
      <Grid>
        <Typography>Error: {error.name}</Typography>
      </Grid>
    )
  }
  if (loading && !movie) {
    return (
      <Grid container sx={{ width: '100%', height: '90vh', justifyContent: 'center', alignItems: 'center' }}>
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
            <Box sx={styles.pictureWrapper}>
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
                    <Edit />
                  </IconButton>
                  <IconButton onClick={handleRemoveDescription}>
                    <Delete />
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
              <KeyboardReturn sx={{ paddingRight: '5px' }} />
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
