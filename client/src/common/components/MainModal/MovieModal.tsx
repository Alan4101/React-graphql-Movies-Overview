import { FC, ReactNode } from "react";
import { Backdrop, Box, Fade, Modal, IconButton, Grid } from "@mui/material";

import classes from "./MovieModal.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface MovieModalProps {
  isOpen: boolean;
  children: ReactNode;
  toggleModal: () => void;
}

export const MovieModal: FC<MovieModalProps> = ({
  isOpen,
  toggleModal,
  children,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={toggleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        classes: {
          root: classes.backDrop,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box className={classes.modalWrapper}>
          <Grid className={classes.modal}>
            <IconButton
              classes={{ root: classes.closeButton }}
              onClick={toggleModal}
            >
              <CloseIcon />
            </IconButton>
            <Grid className={classes.modalBody}>{children}</Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};
