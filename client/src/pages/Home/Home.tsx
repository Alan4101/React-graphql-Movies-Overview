import React, { FC, useContext, useEffect, useState } from 'react'
import { Container, Grid, Pagination } from '@mui/material'
import { toast, ToastOptions } from 'react-toastify'
import { useTranslation } from 'react-i18next'

import { CreateRecomendedList, ErrorContainer, Loader, MovieCard, SelectedMovies } from '../../common/components'
// other
import { useControlModal, useMovie } from './../../services/hooks'
import { LanguageContext } from '../../services/context/LanguageContext'
import { toastOptions } from '../../services/helpers/helper'
import { Movie, useGetAllMovies, useSelectedMovies } from '../../graphql'
// styles
import styles from './styles'
import 'react-toastify/dist/ReactToastify.css'

export const Home: FC = () => {
  const { t } = useTranslation()

  const [page, setPage] = useState(1)
  const [isOpenModal, toggleModal] = useControlModal()

  const context = useContext(LanguageContext)

  const { selectedMovies, selectedError, selectedLoading } = useSelectedMovies()
  const { loading, error, movies } = useGetAllMovies(page, context?.state.locale || 'en-US')

  const pagesCount = movies && movies?.totalPages <= 500 ? movies?.totalPages : 500

  const { handleSelecMovie, handleDeleteMove, handleDeleteAllMovies } = useMovie()

  useEffect(() => {
    if (selectedError) toast.error('Can`t load selected list!', toastOptions as ToastOptions)

    return () => {
      toast.dismiss()
    }
  }, [selectedError])

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const getSelectedStatus = (id: string) => {
    if (selectedMovies) return selectedMovies.some(item => item.movieId === id)
  }

  if (error) {
    return <ErrorContainer error={t('content.error')} />
  }
  if (loading) {
    return <Loader />
  }
  if (!movies) {
    return <Grid>problem</Grid>
  }
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2} sx={{ mt: '10px' }}>
        <Grid item xs={12} md={12} sx={{ paddingBottom: '20px' }}>
          <SelectedMovies
            loading={selectedLoading}
            movies={selectedMovies}
            onDeleteList={handleDeleteAllMovies}
            onCreateList={toggleModal}
          />
          <Grid sx={styles.cardWrapper}>
            {movies.results.map(
              (item: Movie) =>
                item && (
                  <MovieCard
                    key={item.id}
                    movie={item}
                    status={getSelectedStatus(item.id)}
                    onRemoveMovie={handleDeleteMove}
                    onSelectMovie={handleSelecMovie}
                  />
                )
            )}
          </Grid>
          <Grid container sx={{ m: '10px' }} justifyContent='center'>
            <Pagination count={pagesCount} page={page} onChange={paginationHandler} />
          </Grid>
        </Grid>
        <CreateRecomendedList moviesList={selectedMovies} isOpenModal={isOpenModal} toggleModal={toggleModal} />
      </Grid>
    </Container>
  )
}
