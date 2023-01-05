import React, { FC, useState } from 'react'
import { Grid, Container, Typography } from '@mui/material'
import { MovieCardRecommended, ShereMovieList } from '../../common/components'
import { useControlModal } from '../../services/hooks'
import { RecomendedMovies, useGetReccomenedMovies } from '../../graphql'
import { DeleteModal } from './../../common/components/Modals/DeleteModal/DeleteModal'

export const Recomended: FC = () => {
  const { error, loading, movies } = useGetReccomenedMovies()
  const [isOpen, toggleModal] = useControlModal()
  const [isOpenDelete, toggleModalDelete] = useControlModal()
  const [sharedLink, setSharedLink] = useState('')
  const [selectedList, setSelectedList] = useState<RecomendedMovies | null>(null)
  const shareMovieList = (id: string) => {
    toggleModal()
    setSharedLink(id)
  }
  const handleDeleteList = (collection: RecomendedMovies) => {
    toggleModalDelete()
    setSelectedList(collection)
  }
  return (
    <Container>
      <Grid sx={styles.wrapper} gap={2} mt={2}>
        {error ? (
          <Typography>Problem</Typography>
        ) : loading ? (
          <>Loading...</>
        ) : (
          movies &&
          movies.map((movie: RecomendedMovies) => (
            <MovieCardRecommended
              key={movie._id}
              collection={movie}
              onDeleteList={handleDeleteList}
              onShareList={shareMovieList}
            />
          ))
        )}
      </Grid>
      {selectedList && <DeleteModal isOpen={isOpenDelete} toggleModal={toggleModalDelete} collection={selectedList} />}
      <ShereMovieList isOpen={isOpen} toggleModal={toggleModal} value={sharedLink} />
    </Container>
  )
}
const styles = {
  wrapper: {
    display: 'grid',
    gap: '10xp',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    justifyItems: 'center',
    gridGap: '15px'
  }
}
