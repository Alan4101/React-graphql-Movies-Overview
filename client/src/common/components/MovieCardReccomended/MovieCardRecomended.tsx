import { FC, useState } from 'react'
// mui
import { Grid, Typography, IconButton, Card, CardContent, CardActions, Collapse } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// other
import { DraggableList } from '../UI'
import { RecomendedMovies } from '../../../graphql'
import { ExpandMore } from './styles'
// import { useNavigate } from 'react-router-dom';

interface RecommendedProps {
  collection: RecomendedMovies
  shareMovieList: (id: string) => void
}

export const MovieCardRecommended: FC<RecommendedProps> = ({ collection, shareMovieList }) => {
  const [expanded, setExpanded] = useState(false)
  // const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const handleOpenMovie = (id: string) => {
    console.log(id)
    // navigate(`/${id}`);
  }
  return (
    <Grid item md={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {collection.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='share' onClick={() => shareMovieList(collection._id as string)}>
            <ShareIcon />
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            {/* <DraggableList>
              {
                
              }
            </DraggableList> */}
            {/* {movie.movies.map((item, k: number) => (

              <Typography key={k} onClick={() => handleOpenMovie(item._id)}>
                {item.title}
              </Typography>
            ))} */}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}
