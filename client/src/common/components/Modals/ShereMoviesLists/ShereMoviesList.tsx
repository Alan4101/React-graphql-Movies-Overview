import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { MovieTextField } from "../../UI";
import { MovieModal } from "../MainModal/MovieModal";
interface ShareProps {
  isOpen: boolean;
  toggleModal: () => void;
  value: string;
}
export const ShereMovieList: FC<ShareProps> = ({
  isOpen,
  toggleModal,
  value,
}) => {
  return (
    <MovieModal isOpen={isOpen} toggleModal={toggleModal}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">
            {/* {t("selectedMovies.recomendedModal.title")} */}
            Share
          </Typography>
        </Grid>
        <Grid container item md={12} xs={12}>
          <MovieTextField value={value} placeholder="" onChange={() => {}} />
        </Grid>
      </Grid>
    </MovieModal>
  );
};
