import { FC } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { IMovie } from "../../../services/models/models";

import classes from "./MovieCard.module.css";

interface MovieCardProps {
  movie: IMovie;
  onCardSelect: (movie: IMovie) => void;
}
export const MovieCard: FC<MovieCardProps> = ({ movie, onCardSelect }) => {
  return (
    <Card
      className={classes.cardWrapper}
      onClick={() => {
        onCardSelect(movie);
      }}
    >
      <Grid container className={classes.mediaWrapper}>
        <CardMedia
          component="img"
          image={movie.poster}
          alt={movie.title}
          classes={{ media: classes.media  }}
        />
      </Grid>
      
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" color="text.secondary" sx={{fontSize: '18px'}}>
          {movie.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
