import { FC, useContext, useEffect, useState } from "react";
// mui
import {
  CircularProgress,
  Grid,
  Pagination,
  Paper,
  Typography,
  Box,
  Divider,
} from "@mui/material";
// library
import { ToastContainer, toast, ToastOptions } from "react-toastify";

import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// mutation & query
import {
  FELETE_ALL_SELECTED_MOVIES,
  GET_ALL_MOVIES,
  SEARCH_MOVIE,
} from "../../services/graphql";
// styles
import {
  ButtonWrapper,
  EmptyMovieList,
  LoaderContainer,
  SelectedMoviePaper,
} from "./Home.style";
import "react-toastify/dist/ReactToastify.css";

// components
import {
  CreateRecomendedList,
  // Filters,
  MovieButton,
  MovieCard,
  MovieCardSelected,
  Search,
} from "../../common/components";

// other
import { useControlModal, useDebounce, useMovie } from "./../../services/hooks";
import { IMovie, ISelectedMovie } from "../../services/models/models";
import { LanguageContext } from "../../services/context/LanguageContext";
import { toastOptions } from "../../services/helpers/helper";

export const Home: FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [isOpenModal, toggleModal] = useControlModal();
  const [isEmptySelectList, setIsEmptySelectList] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const context = useContext(LanguageContext);

  const { loading, data, error } = useQuery(GET_ALL_MOVIES, {
    variables: { page, language: context?.state.locale || "en-US" },
    fetchPolicy: "no-cache",
  });
  const { data: movie, refetch: refetchMovie } = useQuery(SEARCH_MOVIE);
  
  const debounced = useDebounce(search, 500)

  const [deleteAll] = useMutation(FELETE_ALL_SELECTED_MOVIES);

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const {
    selectedMovies,
    handleDeleteMove,
    handleSelecMovie,
    handleClearList,
  } = useMovie();

  useEffect(() => {
    selectedMovies.length > 0
      ? setIsEmptySelectList(true)
      : setIsEmptySelectList(false);
  }, [selectedMovies]);

  const paginationHandler = (event: any, page: number) => {
    setPage(page);
  };

  const handleOpenMoviePage = (movie: ISelectedMovie) => {
    navigate(`${movie._id}`);
  };

  const hanleCreateList = () => {
    isEmptySelectList
      ? toggleModal()
      : toast.warn("List is empty", toastOptions as ToastOptions);
  };

  const handleCleanList = () => {
    deleteAll();
    handleClearList();
  };

  const handleSearch = (s:string) => {
    setSearch(s)
    // console.log(search);
    // refetchMovie({ query: search, language: context?.state.locale || "en-US" });
    refetchMovie({ query: debounced, language: context?.state.locale || "en-US" });
    console.log(debounced)
  };
  console.log(search);

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
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={item} onCardSelect={handleSelecMovie} />
          </Grid>
        ))
      )}
    </>
  );

  return (
    <Grid container spacing={2} sx={{ mt: "10px" }}>
      <Grid item xs={12} md={12}>
        {/* <Filters data={data.movies.results}/> */}
        {/* <input value={search} onChange={(e) => setSearch(e.target.value)} /> */}
        <input value={search} onChange={(e) => handleSearch(e.target.value)} />
        {/* <MovieButton onClick={handleSearch}>Search</MovieButton> */}
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{ height: loading ? "calc(100vh - 250px)" : "100%" }}
          >
            {search.length>0? <Search data={movie} handleSelecMovie={handleSelecMovie}/> : renderMoviesCard()  }
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >{
            search.length === 0? <Pagination
            count={pagesCount}
            page={page}
            onChange={paginationHandler}
          />: null
          }
            
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container flexDirection="column">
          <SelectedMoviePaper>
            <Typography
              sx={{
                textAlign: "center",
                margin: "15px 0",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              {t("selectedMovies.titlePanel")}
            </Typography>
            <Divider />
            <Grid
              container
              sx={{
                alignItems: !isEmptySelectList ? "center" : "start",
                height: !isEmptySelectList ? "80%" : "auto",
              }}
            >
              {isEmptySelectList ? (
                selectedMovies.map((item: any, index) => (
                  <MovieCardSelected
                    key={index}
                    movie={item}
                    handleGetMovie={handleOpenMoviePage}
                    onDeleteMovie={handleDeleteMove}
                  />
                ))
              ) : (
                <EmptyMovieList />
              )}
            </Grid>
          </SelectedMoviePaper>
          <ButtonWrapper container p={2} gap={2}>
            <MovieButton
              sx={{ backgroundColor: "#fff" }}
              onClick={hanleCreateList}
              variant="outlined"
            >
              {t("content.button.createNewList")}
            </MovieButton>
            <MovieButton
              sx={{ backgroundColor: "#fff" }}
              onClick={handleCleanList}
              variant="outlined"
            >
              {t("content.button.clearList")}
            </MovieButton>
          </ButtonWrapper>
        </Grid>
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
