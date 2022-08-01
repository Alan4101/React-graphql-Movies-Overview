import { FC } from "react";
import { Grid, Paper } from "@mui/material";
import { SelectedMoviePaper } from "./Home.style";
import { MovieCard } from "../../common/components";
import { IMovie } from "../../common/models";
export const Home: FC = () => {
  const movie: IMovie = {
    title: "Sherlock Holmes",
    poster:
      "https://media-cache.cinematerial.com/p/500x/pdufvdif/sherlock-holmes-movie-cover.jpg?v=1456822182",
    releaseDate: "20/05/20",
  };
  const onCardSelect = () => {};

  const props = {
    movie,
    onCardSelect,
  };
  return (
    <Grid container spacing={2} sx={{ mt: "10px" }}>
      <Grid item xs={12} md={12}>
        <Paper>first</Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard {...props} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard {...props} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard {...props} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard {...props} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <SelectedMoviePaper>third</SelectedMoviePaper>
      </Grid>
    </Grid>
  );
};
