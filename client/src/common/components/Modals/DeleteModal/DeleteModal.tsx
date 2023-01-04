import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'

import { MovieModal, MovieModalProps } from '../MainModal/MovieModal'

import { RecomendedMovies } from '../../../../graphql'

interface OwnProps extends MovieModalProps {
  collection: RecomendedMovies
}

export const DeleteModal: FC<OwnProps> = props => {
  const { isOpen, toggleModal, collection } = props
  return (
    <MovieModal isOpen={isOpen} toggleModal={toggleModal}>
      <Box>
        <Typography>Do you realy want to delete <b> &apos;{collection.title}&apos; </b> list?</Typography>
        <Button>Yes</Button>
        <Button onClick={toggleModal}>No</Button>
      </Box>
    </MovieModal>
  )
}
