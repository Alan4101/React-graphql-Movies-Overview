import { FC, useState } from "react";
// mui
import {
  Grid,
  Typography,
  IconButton,
  IconButtonProps,
  Card,
  CardContent,
  CardActions,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// other
import { IRecommendedMovies } from "../../../services/models/models";
// import { useNavigate } from 'react-router-dom';

interface RecommendedProps {
  movie: Required<IRecommendedMovies>;
  shareMovieList: (id: string) => void;
}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export const MovieCardRecommended: FC<RecommendedProps> = ({
  movie,
  shareMovieList,
}) => {
  const [expanded, setExpanded] = useState(false);
  // const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpenMovie = (id:string) => {
    console.log(id)
    // navigate(`/${id}`);

  }
  console.log(movie)
  return (
    <Grid item md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {movie.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="share"
            onClick={() => shareMovieList(movie._id)}
          >
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {movie.movies.map((item, k: number) => (
              <Typography key={k} paragraph onClick={()=>handleOpenMovie(item._id)}>
                {item.title}
              </Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
