import { FC, useContext, useEffect, useState } from "react";
// mui
import {
  CircularProgress,
  Grid,
  Pagination,
  Paper,
  Typography,
  Box,
  Divider,
} from "@mui/material";
// library
import { ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// mutation & query

// styles
import {
  ButtonWrapper,
  EmptyMovieList,
  LoaderContainer,
  SelectedMoviePaper,
} from "./Home.style";
import "react-toastify/dist/ReactToastify.css";

// components
import {
  CreateRecomendedList,
  MovieButton,
  MovieCard,
  MovieCardSelected,
} from "../../common/components";

// other
import { useControlModal, useMovie } from "./../../services/hooks";
import { IMovie, ISelectedMovie } from "../../services/models/models";
import { LanguageContext } from "../../services/context/LanguageContext";
import {
  FELETE_ALL_SELECTED_MOVIES,
  GET_ALL_MOVIES,
} from "../../services/graphql";

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [isOpenModal, toggleModal] = useControlModal();
  const { t } = useTranslation();
  const [isEmptySelectList, setIsEmptySelectList] = useState(false);

  const navigate = useNavigate();
  const context = useContext(LanguageContext);

  const { loading, data, error } = useQuery(GET_ALL_MOVIES, {
    variables: { page, language: context?.state.locale || "en-US" },
    fetchPolicy: "no-cache",
  });
  const [deleteAll] = useMutation(FELETE_ALL_SELECTED_MOVIES);

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const {
    selectedMovies,
    handleDeleteMove,
    handleSelecMovie,
    handleClearList,
  } = useMovie();

  useEffect(() => {
    selectedMovies.length > 0
      ? setIsEmptySelectList(true)
      : setIsEmptySelectList(false);
  }, [selectedMovies]);

  const paginationHandler = (event: any, page: number) => {
    setPage(page);
  };

  const handleOpenMoviePage = (movie: ISelectedMovie) => {
    navigate(`${movie._id}`);
  };

  const hanleCreateList = () => {
    toggleModal();
  };

  const handleCleanList = () => {
    deleteAll();
    handleClearList();
  };

  return (
    <Grid container spacing={2} sx={{ mt: "10px" }}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{ height: loading ? "calc(100vh - 250px)" : "100%" }}
          >
            {error ? (
              <LoaderContainer>{t("content.error")}</LoaderContainer>
            ) : loading ? (
              <LoaderContainer>
                <CircularProgress />
              </LoaderContainer>
            ) : (
              data.movies.results.map((item: IMovie) => (
                <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                  <MovieCard movie={item} onCardSelect={handleSelecMovie} />
                </Grid>
              ))
            )}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <Pagination
              count={pagesCount}
              page={page}
              onChange={paginationHandler}
            />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid
          container
          sx={{ backgroundColor: "#fff", textTransform: "uppercase" }}
          flexDirection="column"
        >
          <SelectedMoviePaper>
            <Typography
              sx={{ textAlign: "center", margin: "15px 0" }}
              variant="h5"
            >
              {t("selectedMovies.titlePanel")}
            </Typography>
            <Divider />
            <Grid
              container
              sx={{
                alignItems: !isEmptySelectList ? "center" : "start",
                height: !isEmptySelectList ? "100%" : "auto",
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
          <ButtonWrapper container p={2} gap={2}>
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
          </ButtonWrapper>
        </Grid>
      </Grid>
      <CreateRecomendedList
        moviesList={selectedMovies}
        isOpenModal={isOpenModal}
        toggleModal={toggleModal}
      />
      <ToastContainer />
    </Grid>
  );
};
