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
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
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
            {movie.genres?.length
              ? movie.genres.map((g: any) => <span>{g.name},</span>)
              : "unknown"}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
