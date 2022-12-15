import React, { FC, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Grid, Container, Typography } from '@mui/material'
import { GET_RECOMMENDED } from '../../services/graphql/reccomended.query'
import { MovieCardRecommended, ShereMovieList } from '../../common/components'
import { useControlModal } from '../../services/hooks'
import { IRecommendedMovies } from '../../services/models/models'

export const Recomended: FC = () => {
  const { loading, data, error } = useQuery(GET_RECOMMENDED)
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
          data &&
          data.getRecommended.map((m: Required<IRecommendedMovies>, i: number) => (
            <MovieCardRecommended shareMovieList={shareMovieList} movie={m} key={i} />
          ))
        )}
      </Grid>
      <ShereMovieList isOpen={isOpen} toggleModal={toggleModal} value={sharedLink} />
    </Container>
  )
}
