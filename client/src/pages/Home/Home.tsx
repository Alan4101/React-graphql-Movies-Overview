import { FC, useEffect, useState } from "react";
import { Grid, Pagination, Paper, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { EmptyMovieList, SelectedMoviePaper } from "./Home.style";
import "react-toastify/dist/ReactToastify.css";
import { MovieCard, MovieCardSelected } from "../../common/components";

import { useQuery } from "@apollo/client";

import { GET_ALL_MOVIES, GET_SELECTED_MOVIES } from "./queries";
import { useMovie } from "./../../services/hooks";
import { IMovie } from "../../common/models";

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [isEmptySeleceList, setIsEmptySelectList] = useState(false);
  const { loading, data, error } = useQuery(GET_ALL_MOVIES, {
    variables: { page },
  });
  const { data: selectedData } = useQuery(GET_SELECTED_MOVIES);
  const { selectedMovies, handleDeleteMove, handleSelecMovie } = useMovie();

  useEffect(() => {
    selectedData && selectedData.getSelectedMovies.length > 0
      ? setIsEmptySelectList(true)
      : setIsEmptySelectList(false);
  }, [selectedData]);

  if (error) {
    return <>{error}</>;
  }
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
          <Grid container spacing={2}>
            {loading
              ? "Loading..."
              : data.movies.results.map((item: IMovie) => (
                  <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                    <MovieCard movie={item} onCardSelect={handleSelecMovie} />
                  </Grid>
                ))}
          </Grid>
          <Pagination
            count={data?.movies?.totalPages}
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
              alignItems: !isEmptySeleceList ? "center" : "start",
              height: "80%",
            }}
          >
            {isEmptySeleceList ? (
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
