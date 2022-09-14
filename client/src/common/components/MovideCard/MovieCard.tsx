import { FC } from "react";
import { Card,  CardMedia, Grid,  IconButton, CardHeader } from "@mui/material";
import { IMovie } from "../../../services/models/models";

import classes from "./MovieCard.module.css";

interface MovieCardProps {
  movie: IMovie;
  onCardSelect: (movie: IMovie) => void;
}
export const MovieCard: FC<MovieCardProps> = ({ movie, onCardSelect}) => {

  return (
    <Card className={classes.cardWrapper}>
       <CardHeader
       sx={{alignSelf: 'start', height: '100%'}}
       classes={{title: classes.cardTitle, content: classes.cardHeaderContent}}
        action={
          <IconButton aria-label="add-movie" onClick={() => onCardSelect(movie)} sx={{ width:'40px', height:'40px', border: '1px dashed #381f75'}}>
            +
          </IconButton>
        }
        title={movie.title}
        subheader={movie.releaseDate}
      />
      <Grid container className={classes.mediaWrapper}>
        <CardMedia
          component="img"
          image={movie.poster}
          alt={movie.title}
          classes={{ media: classes.media  }}
        />
      </Grid>
    </Card>
  );
};
