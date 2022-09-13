import {FC} from 'react'
import { EmptyMovieList, SelectedMoviePaper } from '../../../pages/Home/Home.style'
import { MovieButton } from '../UI'
import { Grid, Typography, Box , Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ISelectedMovie } from '../../../services/models/models';
import { MovieCardSelected } from '../MovieCardSelected/MovieCardSelected';
import { useNavigate } from 'react-router-dom';
import { useMovie } from '../../../services/hooks';
import { useMutation } from '@apollo/client';
import { FELETE_ALL_SELECTED_MOVIES } from '../../../services/graphql';

interface SelectedMoviePaperProps {
  isEmptySelectList: boolean;
  hanleCreateList: ()=> void;
}
export const SelectedMoviesPaper:FC<SelectedMoviePaperProps> = ({isEmptySelectList, hanleCreateList}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    selectedMovies,
    handleDeleteMove,
    handleClearList,
  } = useMovie();

  const [deleteAll] = useMutation(FELETE_ALL_SELECTED_MOVIES);

  const handleOpenMoviePage = (movie: ISelectedMovie) => {
    navigate(`${movie._id}`);
  };
  const handleCleanList = () => {
    deleteAll();
    handleClearList();
  };
  return (
    <Grid container flexDirection="column">
          <SelectedMoviePaper>
            <Typography
              sx={{
                textAlign: "center",
                margin: "15px 0",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              {t("selectedMovies.titlePanel")}
            </Typography>
            <Divider />
            <Grid
              container
              sx={{
                alignItems: !isEmptySelectList ? "center" : "start",
                height: !isEmptySelectList ? "80%" : "auto",
              }}
            >
              {isEmptySelectList ? (
                selectedMovies.map((item: any, index) => (
                  <MovieCardSelected
                    key={index}
                    movie={item}
                    handleGetMovie={handleOpenMoviePage}
                    onDeleteMovie={handleDeleteMove}
                  />
                ))
              ) : (
                <EmptyMovieList />
              )}
            </Grid>
          </SelectedMoviePaper>
          <Box>

            <MovieButton
              sx={{ backgroundColor: "#fff" }}
              onClick={hanleCreateList}
              variant="outlined"
            >
              {t("content.button.createNewList")}
            </MovieButton>
            <MovieButton
              sx={{ backgroundColor: "#fff" }}
              onClick={handleCleanList}
              variant="outlined"
            >
              {t("content.button.clearList")}
            </MovieButton>
            </Box>
        </Grid>
  )
}
