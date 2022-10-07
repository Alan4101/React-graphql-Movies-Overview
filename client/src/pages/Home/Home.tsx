import { FC, useContext, useEffect, useState } from "react";
// mui
import { CircularProgress, Grid, Pagination, Box } from "@mui/material";
// library
import { ToastContainer, toast, ToastOptions } from "react-toastify";

import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
// mutation & query
import {
  GET_ALL_MOVIES,
  // SEARCH_MOVIE,
} from "../../services/graphql";
// styles
import { LoaderContainer } from "./Home.style";
import "react-toastify/dist/ReactToastify.css";

// components
import {
  CreateRecomendedList,
  // Filters,
  MovieCard,
  SelectedMoviesPaper,
} from "../../common/components";

// other
import { useControlModal, useMovie } from "./../../services/hooks";
import { IMovie } from "../../services/models/models";
import { LanguageContext } from "../../services/context/LanguageContext";
import { toastOptions } from "../../services/helpers/helper";

export const Home: FC = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState(1);
  const [isOpenModal, toggleModal] = useControlModal();
  const [isEmptySelectList, setIsEmptySelectList] = useState(false);
  const [search] = useState("");

  const context = useContext(LanguageContext);

  const { loading, data, error } = useQuery(GET_ALL_MOVIES, {
    variables: { page, language: context?.state.locale || "en-US" },
    // fetchPolicy: "no-cache",
  });

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const { selectedMovies, handleSelecMovie } = useMovie();
 
  // console.log(movies)
  useEffect(() => {
    selectedMovies.length > 0
      ? setIsEmptySelectList(true)
      : setIsEmptySelectList(false);
  }, [selectedMovies]);

  const paginationHandler = (event: any, page: number) => {
    setPage(page);
  };

  const hanleCreateList = () => {
    isEmptySelectList
      ? toggleModal()
      : toast.warn("List is empty", toastOptions as ToastOptions);
  };

  const renderMoviesCard = () => (
    <>
      {error ? (
        <LoaderContainer>{t("content.error")}</LoaderContainer>
      ) : loading ? (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      ) : (
        data.movies.results.map((item: IMovie) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3} flexWrap="wrap">
            <MovieCard movie={item} onCardSelect={handleSelecMovie} />
          </Grid>
        ))
      )}
    </>
  );

  return (
    <Grid container spacing={2} sx={{ mt: "10px" }}>
      <Grid item xs={12} md={8} sx={{ paddingBottom: "20px" }}>
        <Grid
          container
          spacing={2}
          sx={{ height: loading ? "calc(100vh - 250px)" : "100%" }}
        >
          {renderMoviesCard()}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          {search.length === 0 ? (
            <Pagination
              count={pagesCount}
              page={page}
              onChange={paginationHandler}
            />
          ) : null}
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <SelectedMoviesPaper
          isEmptySelectList={isEmptySelectList}
          hanleCreateList={hanleCreateList}
        />
      </Grid>
      <CreateRecomendedList
        moviesList={selectedMovies}
        isOpenModal={isOpenModal}
        toggleModal={toggleModal}
      />

      <ToastContainer />
    </Grid>
  );
};
