import { FC, useState } from 'react'
import { Grid, Container } from '@mui/material'

import { DeleteModal, ErrorContainer, Loader, RecommendedCard, ShereMovieList } from '../../common/components'
import { useControlModal } from '../../services/hooks'
import { RecomendedMovies, useGetRecommenedMovies } from '../../graphql'

export const Recomended: FC = () => {
  const { error, loading, movies } = useGetRecommenedMovies()
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

  if (error) {
    return <ErrorContainer error='Problem...' />
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <Grid sx={styles.wrapper} gap={2} mt={2}>
        {movies &&
          movies.map((movie: RecomendedMovies) => (
            <RecommendedCard
              key={movie._id}
              collection={movie}
              onDeleteList={handleDeleteList}
              onShareList={shareMovieList}
            />
          ))}
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
