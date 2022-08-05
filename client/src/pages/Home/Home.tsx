import { FC, useContext, useEffect, useState } from "react";
import {
  CircularProgress,
  Grid,
  Pagination,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { ToastContainer } from "react-toastify";

import {
  EmptyMovieList,
  LoaderContainer,
  SelectedMoviePaper,
} from "./Home.style";
import "react-toastify/dist/ReactToastify.css";
import { MovieCard, MovieCardSelected } from "../../common/components";

import { useQuery } from "@apollo/client";

import { GET_ALL_MOVIES } from "./queries";
import { useMovie } from "./../../services/hooks";
import { IMovie, ISelectedMovie } from "../../services/models/models";
import { LanguageContext } from "../../services/context/LanguageContext";
import { useNavigate } from "react-router-dom";

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [isEmptySelectList, setIsEmptySelectList] = useState(false);

  const navigate = useNavigate();
  const context = useContext(LanguageContext);

  const { loading, data, error } = useQuery(GET_ALL_MOVIES, {
    variables: { page, language: context?.state.locale || "en-US" },
    fetchPolicy: "no-cache",
  });

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const { selectedMovies, handleDeleteMove, handleSelecMovie } = useMovie();

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
              <LoaderContainer>
                Somthing went wrong, try it later!
              </LoaderContainer>
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
        <SelectedMoviePaper>
          <Typography variant="h5">Selected Movies</Typography>
          <Grid
            container
            sx={{
              alignItems: !isEmptySelectList ? "center" : "start",
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
      </Grid>
      <ToastContainer />
    </Grid>
  );
};
