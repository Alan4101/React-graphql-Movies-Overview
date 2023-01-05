import { FC } from 'react'
// mui
import { Button, Grid, Typography } from '@mui/material'

//components
import { MovieModal } from '../MainModal/MovieModal'
import { StyledForm } from '../common'

//library
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'

// mutation
// other
import { MovieTextField } from '../../UI'
import { CREATE_RECOMENDED_MOVIES, MovieSelectedInput } from '../../../../graphql'
import { MovieSelected } from '../../../../graphql/'
import { useMovie } from '../../../../services/hooks'

interface CreateRecomendedProps {
  moviesList: MovieSelected[]
  isOpenModal: boolean
  toggleModal: () => void
}

export const CreateRecomendedList: FC<CreateRecomendedProps> = ({ isOpenModal, moviesList, toggleModal }) => {
  const { t } = useTranslation()
  const [createRecomendedMovies] = useMutation(CREATE_RECOMENDED_MOVIES)
  const { handleDeleteAllMovies } = useMovie()
  const movieFormik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    enableReinitialize: true,
    onSubmit: values => {
      createRecomendedList(values)
    }
  })
  const { values, handleSubmit, handleReset, setFieldValue } = movieFormik

  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleReset(e)
    toggleModal()
  }
  const createRecomendedList = (values: { title: string; description: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const movieListInput = moviesList.map(({ __typename, ...props }) => ({ ...props }))
    const { title, description } = values
    const newList = {
      title,
      description,
      createdData: new Date().toLocaleDateString(),
      movies: [...movieListInput] as MovieSelectedInput[]
    }

    createRecomendedMovies({
      variables: {
        ...newList
      }
    })
      .then(() => handleDeleteAllMovies())
      .then(() => toggleModal())
  }

  return (
    <MovieModal isOpen={isOpenModal} toggleModal={toggleModal}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4'>{t('selectedMovies.recomendedModal.title')}</Typography>
        </Grid>
        <Grid container item md={12} xs={12}>
          <StyledForm onSubmit={handleSubmit}>
            <MovieTextField
              value={values.title}
              onChange={e => setFieldValue('title', e.target.value)}
              placeholder='Enter your title, please.'
              name='title'
              sx={{ width: '100%' }}
            />
            <MovieTextField
              value={values.description}
              onChange={e => setFieldValue('description', e.target.value)}
              placeholder='Enter your title, please.'
              name='description'
              sx={{ width: '100%' }}
            />
            <Grid container flexDirection='row'>
              <Button onClick={resetForm}>{t('content.button.cancel')}</Button>
              <Button type='submit'>{t('content.button.save')}</Button>
            </Grid>
          </StyledForm>
        </Grid>
      </Grid>
    </MovieModal>
  )
}
