import React, { FC, useContext, useEffect, useState } from 'react'
import { CircularProgress, Container, Grid, Pagination } from '@mui/material'
import { ToastContainer, toast, ToastOptions } from 'react-toastify'
import { useTranslation } from 'react-i18next'

import { CreateRecomendedList, MovieCard, SelectedMoviesPaper } from '../../common/components'
// other
import { useControlModal, useMovie } from './../../services/hooks'
import { LanguageContext } from '../../services/context/LanguageContext'
import { toastOptions } from '../../services/helpers/helper'
import { Movie, useGetAllMovies, useSelectedMovies } from '../../graphql'
// styles
import * as M from './styles'
import 'react-toastify/dist/ReactToastify.css'

export const Home: FC = () => {
  const { t } = useTranslation()

  const [page, setPage] = useState(1)
  const [isOpenModal, toggleModal] = useControlModal()
  const [isEmptySelectList, setIsEmptySelectList] = useState(false)
  const [search] = useState('')

  const context = useContext(LanguageContext)

  const { selectedMovies } = useSelectedMovies()
  const { loading, error, movies } = useGetAllMovies(page, context?.state.locale || 'en-US')

  const pagesCount = movies && movies?.totalPages <= 500 ? movies?.totalPages : 500

  const { handleSelecMovie, handleDeleteMove } = useMovie()

  useEffect(() => {
    if (selectedMovies) {
      selectedMovies.length > 0 ? setIsEmptySelectList(true) : setIsEmptySelectList(false)
    }
  }, [selectedMovies])

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const hanleCreateList = () => {
    isEmptySelectList ? toggleModal() : toast.warn('List is empty', toastOptions as ToastOptions)
  }
  const getSelectedStatus = (id: string) => {
    if (selectedMovies) return selectedMovies.some(item => item.movieId === id)
  }
  if (error) {
    return <M.MLoaderContainer>{t('content.error')}</M.MLoaderContainer>
  }
  
  if (loading) {
    return (
      <M.MLoaderContainer>
        <CircularProgress />
      </M.MLoaderContainer>
    )
  }
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2} sx={{ mt: '10px' }}>
        <Grid item xs={12} md={12} sx={{ paddingBottom: '20px' }}>
          {isEmptySelectList && <SelectedMoviesPaper onCreateList={hanleCreateList} />}

          <Grid sx={M.cardWrapperSX}>
            {movies &&
              movies.results.map(
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
          <Grid container sx={{ m: '10px' }}>
            {search.length === 0 ? <Pagination count={pagesCount} page={page} onChange={paginationHandler} /> : null}
          </Grid>
        </Grid>
        {selectedMovies && (
          <CreateRecomendedList moviesList={selectedMovies} isOpenModal={isOpenModal} toggleModal={toggleModal} />
        )}
        <ToastContainer />
      </Grid>
    </Container>
  )
}
