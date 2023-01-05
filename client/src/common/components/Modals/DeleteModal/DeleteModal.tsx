import { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'

import { MovieModal, MovieModalProps } from '../MainModal/MovieModal'

import { RecomendedMovies } from '../../../../graphql'
import styles from './styles'
import { useTranslation } from 'react-i18next'

interface OwnProps extends MovieModalProps {
  collection: RecomendedMovies
}

export const DeleteModal: FC<OwnProps> = props => {
  const { t } = useTranslation()
  const { isOpen, toggleModal, collection } = props

  return (
    <MovieModal isOpen={isOpen} toggleModal={toggleModal}>
      <Box sx={styles.wrapper}>
        <Typography sx={styles.text}>
          {t('content.permitOnDeletingRecList')}
          <b> &apos;{collection.title}&apos; </b>
          {t('content.list')}?
        </Typography>
        <Button sx={styles.buttonSubmit}>{t('content.button.yes')}</Button>
        <Button sx={styles.buttonCancel} onClick={toggleModal}>
          {t('content.button.no')}
        </Button>
      </Box>
    </MovieModal>
  )
}
