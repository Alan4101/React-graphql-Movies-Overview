import { FC, useEffect, useState } from 'react'
import { Box, Grid, Typography, Container, Skeleton, Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'

import {
  ActorItem,
  Carousel,
  CreateAndDeleteDescrModal,
  CustomOverview,
  ErrorContainer,
  Loader,
  MovieButton
} from '../../common/components'

import { useControlModal } from '../../services/hooks'
import { ADD_USER_DESCRIPTION, Cast, useCredits, useGetSelectedMoviesById } from '../../graphql'
import { getOriginPosterPath } from '../../utils'

import { styles } from './styles'

export const Movie: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isUpdate, setIsUpdate] = useState(false)
  const [background, setBackground] = useState<string>('')

  const [isOpenModal, toggleModal] = useControlModal()

  const { movie, loading, error, refetchMovie } = useGetSelectedMoviesById(id)

  const [addUserDescription] = useMutation(ADD_USER_DESCRIPTION)
  const { castList, castLoading, castError, getCredits } = useCredits()

  useEffect(() => {
    if (movie && movie.backdropPath) {
      const imgPath = movie.backdropPath.split('/').at(-1)
      if (imgPath) {
        const pathPoster = async () => {
          const bg = await getOriginPosterPath(imgPath)
          setBackground(bg)
        }
        pathPoster()
      }
    }
    if (movie) {
      getCredits({ variables: { movieId: movie.movieId, language: 'en-US' } })
    }
  }, [movie])

  useEffect(() => {
    if (movie && movie.userDescription) {
      setIsUpdate(true)
    }
  }, [movie])

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
    return <ErrorContainer error={error.name} />
  }
  if (loading) {
    return <Loader />
  }
  if (!movie) {
    return null
  }
  return (
    <>
      <Box sx={styles.bgWrapper}>
        <Box component='img' src={background} sx={styles.backgroundPicture} />
      </Box>
      <Grid container sx={styles.mainContainer}>
        <Container maxWidth='lg' sx={styles.wrapper}>
          <Grid sx={styles.content}>
            <Grid sx={styles.pictureWrapper}>
              <Box sx={styles.poster} src={movie.poster} component='img' alt={movie.title} />
            </Grid>

            <Grid sx={styles.detailsContainer} container>
              <Box sx={{ width: '100%' }}>
                <Typography component='div' sx={styles.title}>
                  {movie.title}
                </Typography>
                <Typography sx={styles.text}>
                  {movie.releaseDate} | {movie.genres ? movie.genres.join(', ') : ''} | {movie?.voteAverage}
                </Typography>
              </Box>

              <Box sx={styles.overviewText}>
                <Typography variant='body1' sx={styles.contrastText}>
                  {movie?.overview}
                </Typography>
              </Box>

              {movie?.userDescription && movie?.userDescription?.length > 0 ? (
                <CustomOverview
                  overview={movie.userDescription}
                  toggleModal={toggleModal}
                  onRemoveDescription={handleRemoveDescription}
                />
              ) : (
                <Button variant='text' sx={{ color: '#fff', textDecoration: 'underline' }} onClick={toggleModal}>
                  {t('content.button.addreview')}
                </Button>
              )}
            </Grid>
            <Grid sx={styles.buttonBackContainer}>
              <MovieButton sx={styles.buttonBack} variant='outlined' onClick={handleReturnToHomePage}>
                {t('content.button.goback')}
              </MovieButton>
            </Grid>
            <Grid sx={styles.castContainer}>
              {castError ? (
                <Box>
                  <Typography sx={styles.errorText}>Some error, pleace try later!</Typography>
                </Box>
              ) : (
                <Carousel config={{ countSlide: 4 }}>
                  {castLoading
                    ? Array.from(new Array(4)).map((_, index) => (
                        <Box key={index}>
                          <Skeleton
                            key={index}
                            variant='rectangular'
                            height={260}
                            animation='pulse'
                            sx={{ bgcolor: '#7e7c7c', m: '0 7px' }}
                          />
                        </Box>
                      ))
                    : castList && castList.map(actor => <ActorItem key={actor.creditId} actor={actor as Cast} />)}
                </Carousel>
              )}
            </Grid>
          </Grid>
        </Container>

        {movie && (
          <CreateAndDeleteDescrModal
            isUpdate={isUpdate}
            isOpenModal={isOpenModal}
            toggleModal={toggleModal}
            value={movie.userDescription ?? ''}
            updateDescription={updateDescription}
          />
        )}
      </Grid>
    </>
  )
}
