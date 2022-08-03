import { FC, useEffect, useState } from "react";
import {
  CircularProgress,
  Grid,
  Pagination,
  Paper,
  Typography,
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

import { GET_ALL_MOVIES, GET_SELECTED_MOVIES } from "./queries";
import { useMovie } from "./../../services/hooks";
import { IMovie } from "../../services/models/models";

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [isEmptySelectList, setIsEmptySelectList] = useState(false);
  const { loading, data, error } = useQuery(GET_ALL_MOVIES, {
    variables: { page },
  });
  const { data: selectedData } = useQuery(GET_SELECTED_MOVIES);
  const { selectedMovies, handleDeleteMove, handleSelecMovie } = useMovie();

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;
  useEffect(() => {
    selectedData && selectedData.getSelectedMovies.length > 0
      ? setIsEmptySelectList(true)
      : setIsEmptySelectList(false);
  }, [selectedData]);

  const paginationHandler = (event: any, page: number) => {
    setPage(page);
  };

  return (
    <Grid container spacing={2} sx={{ mt: "10px" }}>
      <Grid item xs={12} md={12}>
        <Paper>first</Paper>
      </Grid>
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
          <Pagination
            count={pagesCount}
            page={page}
            onChange={paginationHandler}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <SelectedMoviePaper>
          <Typography variant="h5">Selected Movies</Typography>
          <Grid
            container
            sx={{
              alignItems: !isEmptySelectList ? "center" : "start",
              height: "80%",
            }}
          >
            {isEmptySelectList ? (
              selectedMovies.map((item: any, index) => (
                <MovieCardSelected
                  key={index}
                  movie={item}
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
