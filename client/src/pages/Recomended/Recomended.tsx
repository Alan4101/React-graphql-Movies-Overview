import React, { FC, useState } from 'react'
import { Grid, Container, Typography } from '@mui/material'
import { MovieCardRecommended, ShereMovieList } from '../../common/components'
import { useControlModal } from '../../services/hooks'
import { RecomendedMovies, useGetReccomenedMovies } from '../../graphql'

export const Recomended: FC = () => {
  const { error, loading, movies } = useGetReccomenedMovies()
  const [isOpen, toggleModal] = useControlModal()
  const [sharedLink, setSharedLink] = useState('')

  const shareMovieList = (id: string) => {
    toggleModal()
    setSharedLink(id)
  }
  return (
    <Container>
      <Grid container gap={2} mt={2}>
        {error ? (
          <Typography>Problem</Typography>
        ) : loading ? (
          <>Loading...</>
        ) : (
          movies &&
          movies.map((movie: RecomendedMovies) => <MovieCardRecommended key={movie._id} shareMovieList={shareMovieList} collection={movie} />)
        )}
      </Grid>
      <ShereMovieList isOpen={isOpen} toggleModal={toggleModal} value={sharedLink} />
    </Container>
  )
}
