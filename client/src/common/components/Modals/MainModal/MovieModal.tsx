import { FC, ReactNode } from 'react'
import { Backdrop, Box, Fade, Modal, IconButton, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import styles from './styles'

export interface MovieModalProps {
  isOpen: boolean
  children?: ReactNode
  toggleModal: () => void
}

export const MovieModal: FC<MovieModalProps> = ({ isOpen, toggleModal, children }) => {
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={isOpen}
      onClose={toggleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: styles.backDrop
      }}
    >
      <Fade in={isOpen}>
        <Box sx={styles.wrapper}>
          <Grid sx={styles.modalBody}>
            <IconButton sx={styles.closeButton} onClick={toggleModal}>
              <CloseIcon />
            </IconButton>
            <Grid sx={styles.content}>{children}</Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  )
}
