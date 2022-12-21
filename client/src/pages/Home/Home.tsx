import React, { FC, useContext, useEffect, useState } from 'react'
// mui
import { CircularProgress, Grid, Pagination } from '@mui/material'
// library
import { ToastContainer, toast, ToastOptions } from 'react-toastify'

import { useTranslation } from 'react-i18next'
// mutation & query

// styles
import * as M from './styles'
import 'react-toastify/dist/ReactToastify.css'
// components
import { CreateRecomendedList, MovieCard, SelectedMoviesPaper } from '../../common/components'

// other
import { useControlModal, useMovie } from './../../services/hooks'
import { LanguageContext } from '../../services/context/LanguageContext'
import { toastOptions } from '../../services/helpers/helper'
import { useGetAllMovies, useSelectedMovies } from '../../graphql/hooks'
import { Movie } from '../../__generated__/graphql'

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
    <Grid container spacing={2} sx={{ mt: '10px' }}>
      <Grid item xs={12} md={12} sx={{ paddingBottom: '20px' }}>
        <SelectedMoviesPaper onCreateList={hanleCreateList} />

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
  )
}
