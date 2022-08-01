import { FC } from "react";
import { IMovie } from "../../models";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardMenu } from "../CardMenu/CardMenu";
interface MovieCardSelectedprops {
  movie: IMovie;
  onDeleteMovie: () => void;
}
export const MovieCardSelected: FC<MovieCardSelectedprops> = ({
  movie,
  onDeleteMovie,
}) => {
  const menu = ["add", "remove"];
  return (
    <Card sx={{ display: "flex", position: "relative" }}>
      <CardMenu menuItems={menu} handleClickMenu={() => {}} />
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
              ? movie.genres.map((g) => <span>{g.name},</span>)
              : "unknown"}
          </Typography>
          <Typography variant={"body1"}>Length: {movie.runtime}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
