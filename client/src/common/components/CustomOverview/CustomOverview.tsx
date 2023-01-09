import { FC } from 'react'
import { Grid, Typography, IconButton } from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import styles from './styles'

interface OwnProps {
  overview: string
  toggleModal: () => void
  onRemoveDescription: () => void
}
export const CustomOverview: FC<OwnProps> = ({ overview, toggleModal, onRemoveDescription }) => {
  const { t } = useTranslation()

  return (
    <Grid container>
      <Grid item md={10}>
        <Typography variant='h5' sx={styles.title}>
          {t('content.userOverview')}
        </Typography>
      </Grid>
      <Grid sx={styles.buttonWrapper} item>
        <IconButton sx={styles.button} onClick={toggleModal}>
          <Edit />
          <Typography sx={styles.btnText}>Edit</Typography>
        </IconButton>
        <IconButton sx={styles.button} onClick={onRemoveDescription}>
          <Delete />
          <Typography sx={styles.btnText}>Delete</Typography>
        </IconButton>
      </Grid>
      <Grid item md={12} xs={12}>
        <Typography variant='body1' sx={styles.text}>
          {overview}
        </Typography>
      </Grid>
    </Grid>
  )
}
