import { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
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
      <CardMedia
        component="img"
        height="250"
        image={movie.poster}
        alt={movie.title}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" color="text.secondary">
          {movie.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
