import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { MovieModal, MovieModalProps } from '../MainModal/MovieModal'

import { RecomendedMovies, useDeleteMovieList } from '../../../../graphql'

import styles from './styles'

interface OwnProps extends MovieModalProps {
  collection: RecomendedMovies
}

export const DeleteModal: FC<OwnProps> = props => {
  const { t } = useTranslation()
  const { isOpen, toggleModal, collection } = props
  const { deleteMovieList } = useDeleteMovieList()

  const handleDeleteMovieList = () => {
    deleteMovieList({
      variables: {
        id: collection._id
      }
    }).then(() => toggleModal())
  }

  return (
    <MovieModal isOpen={isOpen} toggleModal={toggleModal}>
      <Box sx={styles.wrapper}>
        <Typography sx={styles.text}>
          {t('content.permitOnDeletingRecList')}
          <b> &apos;{collection.title}&apos; </b>
          {t('content.list')}?
        </Typography>
        <Button sx={styles.buttonSubmit} onClick={handleDeleteMovieList}>
          {t('content.button.yes')}
        </Button>
        <Button sx={styles.buttonCancel} onClick={toggleModal}>
          {t('content.button.no')}
        </Button>
      </Box>
    </MovieModal>
  )
}
