import { FC, useEffect } from 'react'
// mui
import { Button, Grid, Typography } from '@mui/material'

//components
import { MovieModal } from '../MainModal/MovieModal'
import { StyledForm } from '../common'

//library
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

// other
import { MovieTextField } from '../../UI'
import { CREATE_RECOMENDED_MOVIES, MovieSelectedInput, MovieSelected, useGetRecommenedMovies } from '../../../../graphql'
import { useMovie } from '../../../../services/hooks'
import { CreacteReclistSchema } from './helper'
import styles from './styles'

interface OwnProps {
  moviesList: MovieSelected[]
  isOpenModal: boolean
  toggleModal: () => void
}

export const CreateRecomendedList: FC<OwnProps> = ({ isOpenModal, moviesList, toggleModal }) => {
  const { t } = useTranslation()
  const [createRecomendedMovies] = useMutation(CREATE_RECOMENDED_MOVIES)
  const { refetchRecList } = useGetRecommenedMovies()

  const { handleDeleteAllMovies } = useMovie()

  useEffect(() => {
    if (isOpenModal) {
      resetForm()
    }
  }, [isOpenModal])

  const movieFormik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: CreacteReclistSchema,
    onSubmit: values => {
      createRecomendedList(values)
    }
  })
  const { values, handleSubmit, handleReset, handleChange, resetForm, setErrors, errors } = movieFormik

  const handleResetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleReset(e)
    toggleModal()
  }
  const handleChangeFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e)
    setErrors({})
  }
  const createRecomendedList = (values: { title: string; description: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const movieListInput = moviesList.map(({ __typename, ...props }, index) => ({
      ...props,
      sequenceNumber: index + 1
    }))
    const { title, description } = values

    createRecomendedMovies({
      variables: {
        title,
        description,
        createdData: new Date().toLocaleDateString(),
        movies: [...movieListInput] as MovieSelectedInput[]
      }
    })
      .then(() => {
        handleDeleteAllMovies()
        refetchRecList()
        resetForm()
      })
      .then(() => toggleModal())
  }
  const isValid = () => Object.keys(errors).length === 0
  return (
    <MovieModal isOpen={isOpenModal} toggleModal={toggleModal}>
      <Grid sx={styles.container}>
        <Grid sx={styles.textContainer}>
          <Typography sx={styles.textTitle}>{t('selectedMovies.recomendedModal.title')}</Typography>
        </Grid>
        <Grid>
          <StyledForm onSubmit={handleSubmit}>
            <MovieTextField
              autoFocus
              margin='dense'
              value={values.title}
              onChange={handleChangeFields}
              label='Title'
              name='title'
              error={Boolean(errors.title)}
              helperText={errors.title}
            />
            <MovieTextField
              autoFocus
              margin='dense'
              value={values.description}
              onChange={handleChangeFields}
              label='Description'
              name='description'
              error={Boolean(errors.description)}
              multiline={true}
              rows={3}
              helperText={errors.description}
            />
            <Grid container flexDirection='row' justifyContent='end'>
              <Button onClick={handleResetForm}>{t('content.button.cancel')}</Button>
              <Button disabled={!isValid()} type='submit'>
                {t('content.button.save')}
              </Button>
            </Grid>
          </StyledForm>
        </Grid>
      </Grid>
    </MovieModal>
  )
}
