/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useContext, useEffect, useState } from 'react'
// mui
import { CircularProgress, Grid, Pagination, Box } from '@mui/material'
// library
import { ToastContainer, toast, ToastOptions } from 'react-toastify'

import { useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
// mutation & query
import {
  GET_ALL_MOVIES
  // SEARCH_MOVIE,
} from '../../services/graphql'
// styles
import * as M from './styles'
import 'react-toastify/dist/ReactToastify.css'
// components
import {
  CreateRecomendedList,
  // Filters,
  MovieCard,
  SelectedMoviesPaper
  // SelectedMoviesPaper
} from '../../common/components'

// other
import { useControlModal, useMovie } from './../../services/hooks'
import { IMovie } from '../../services/models/models'
import { LanguageContext } from '../../services/context/LanguageContext'
import { toastOptions } from '../../services/helpers/helper'

export const Home: FC = () => {
  const { t } = useTranslation()

  const [page, setPage] = useState(1)
  const [isOpenModal, toggleModal] = useControlModal()
  const [isEmptySelectList, setIsEmptySelectList] = useState(false)
  const [search] = useState('')

  const context = useContext(LanguageContext)

  const { loading, data, error } = useQuery(GET_ALL_MOVIES, {
    variables: { page, language: context?.state.locale || 'en-US' }
    // fetchPolicy: "no-cache",
  })
  const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500

  const { selectedMovies, handleSelecMovie, handleClearList, handleDeleteMove } = useMovie()

  useEffect(() => {
    selectedMovies.length > 0 ? setIsEmptySelectList(true) : setIsEmptySelectList(false)
  }, [selectedMovies])

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const hanleCreateList = () => {
    isEmptySelectList ? toggleModal() : toast.warn('List is empty', toastOptions as ToastOptions)
  }
  const getSelectedStatus = (id: string) => {
    return selectedMovies.some(item => item.movieId === id)
  }

  return (
    <Grid container spacing={2} sx={{ mt: '10px' }}>
      <Grid item xs={12} md={12} sx={{ paddingBottom: '20px' }}>
        <Grid item xs={12} md={4}>
        <SelectedMoviesPaper
          isEmptySelectList={isEmptySelectList}
          hanleCreateList={hanleCreateList}
          onDeleteList={handleClearList}
        />
      </Grid>
        <Grid sx={M.cardWrapperSX}>
          {error ? (
            <M.MLoaderContainer>{t('content.error')}</M.MLoaderContainer>
          ) : loading ? (
            <M.MLoaderContainer>
              <CircularProgress />
            </M.MLoaderContainer>
          ) : (
            data.movies.results.map((item: IMovie) => (
              <MovieCard
                key={item.id}
                movie={item}
                status={getSelectedStatus(item.id)}
                onRemoveMovie={handleDeleteMove}
                onSelectMovie={handleSelecMovie}
              />
            ))
          )}
        </Grid>
        <Grid container sx={{ m: '10px' }}>
          {search.length === 0 ? <Pagination count={pagesCount} page={page} onChange={paginationHandler} /> : null}
        </Grid>
      </Grid>
      <CreateRecomendedList moviesList={selectedMovies} isOpenModal={isOpenModal} toggleModal={toggleModal} />
      <ToastContainer />
    </Grid>
  )
}
