import { FC } from "react";
import { ISelectedMovie } from "../../../services/models/models";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardMenu } from "../CardMenu/CardMenu";

interface MovieCardSelectedprops {
  movie: ISelectedMovie;
  onDeleteMovie: (movie: any) => void;
}
export const MovieCardSelected: FC<MovieCardSelectedprops> = ({
  movie,
  onDeleteMovie,
}) => {
  const menu = ["Remove"];
  return (
    <Card
      sx={{
        display: "flex",
        position: "relative",
        width: "100%",
        margin: "15px",
      }}
    >
      <CardMenu menuItems={menu} handleClickMenu={() => onDeleteMovie(movie)} />
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.poster}
        alt={movie.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", paddingRight: "20px" }}>
          <Typography sx={{ fontSize: "1.1rem" }} component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {movie.releaseDate}
          </Typography>
          <Typography variant={"body1"}>
            Genre:
            <span> {movie?.genres ? movie.genres.join(", ") : "unknown"}</span>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
