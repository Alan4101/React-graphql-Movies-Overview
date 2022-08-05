import { FC, useEffect, useState } from "react";
// mui
import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// othe library
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useFormik } from "formik";
// query, mutation
import { GET_MOVIE_BY_ID } from "../Home/queries";
import { ISelectedMovie } from "../../services/models/models";
import { MovieModal } from "../../common/components";
//style
import classes from "./Movie.module.css";
import { MovieTextField } from "../../common/components/UI";

export const Movie: FC = () => {
  const { id } = useParams<{ id: any }>();
  const [movie, setMovie] = useState<ISelectedMovie>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { loading, data, error } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id },
    // fetchPolicy: "no-cache",
  });

  const movieFormik = useFormik({
    initialValues: {
      description: "",
    },
    onSubmit: (values) => console.log(values),
  });

  const { values, handleChange, handleSubmit, setFieldValue, handleReset } =
    movieFormik;
  useEffect(() => {
    if (data) {
      setMovie(data.movieById);
    }
  }, [data]);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const resetForm = (e: any) => {
    handleReset(e);
    toggleModal();
  };

  const handleChangeInput = (event: any) => {
    // setFieldValue("desc");
  };

  const renderLoading = () => (
    <Grid sx={{ width: "100%", height: "90vh" }}>
      <CircularProgress />
    </Grid>
  );
  const renderError = (error: any) => (
    <Grid>
      <Typography>Error: {error}</Typography>
    </Grid>
  );
  const renderContent = () => (
    <Container>
      <Grid item lg={12} md={12} xs={12}>
        <Typography variant="h2">{movie?.title}</Typography>
      </Grid>
      <Grid container item lg={12} md={12} xs={12} mt={4}>
        <Grid item lg={3} md={3} xs={12}>
          <Box className={classes.pictureWrapper}>
            <CardMedia
              sx={{
                width: "150px",
                height: "200px",
              }}
              image={movie?.poster}
              component="img"
              alt={movie?.title}
            />
          </Box>
        </Grid>
        <Grid item lg={9} md={9} xs={12}>
          <Typography>Genres:</Typography>
          <Typography>
            {movie?.genres ? movie.genres.join(", ") : "unknown"}
          </Typography>
          <Typography>Realise data: {movie?.releaseDate}</Typography>

          <Grid>
            <Typography variant="body1">{movie?.overview}</Typography>
          </Grid>
          <Button onClick={toggleModal}>Add your review</Button>
        </Grid>
      </Grid>
      {/* <MovieModal isOpen={true} toggleModal={toggleModal}> */}
      <MovieModal isOpen={isOpenModal} toggleModal={toggleModal}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Add your review</Typography>
          </Grid>
          <Grid container item md={12} xs={12}>
            <form className={classes.movieForm}>
              <MovieTextField
                value={values.description}
                onChange={handleChange}
                placeholder="Enter your review, please."
                multiline={true}
                name="description"
                className={classes.movieInput}
                rows={8}
              />
              <Grid container flexDirection="row">
                <Button onClick={resetForm}>Cancel</Button>
                <Button onClick={(e: any) => handleSubmit(e)}>Save</Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </MovieModal>
    </Container>
  );

  return (
    <Grid container>
      {error ? renderError(error) : loading ? renderLoading() : renderContent()}
    </Grid>
  );
};
