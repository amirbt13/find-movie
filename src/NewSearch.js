import React, { useState } from "react";
import { useSearchMovieQuery } from "./redux/api/apiSlice";

// MUI
import {
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  TextField,
  CircularProgress,
} from "@mui/material";

const NewSearch = () => {
  const [inputVal, setInputVal] = useState("");
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(inputVal);
  };
  const { data: movie, isFetching, isLoading } = useSearchMovieQuery(title);

  console.log(movie);

  //   if (isFetching) return <CircularProgress />;

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        sx={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <Grid item>
          <Typography align="center" gutterBottom={true} variant="h2">
            Find Your Favorite Movie
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          spacing={2}
          sx={{ marginBottom: "60px" }}
        >
          <Grid item>
            <TextField
              sx={{
                width: "20rem",
              }}
              label="Movie Title.."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              sx={{
                padding: "14px 30px",
              }}
              variant="contained"
              size="large"
              onClick={submitHandler}
            >
              SEARCH
            </Button>
          </Grid>
        </Grid>
        {movie && movie.Error ? (
          <div></div>
        ) : isFetching ? (
          <CircularProgress />
        ) : (
          <Grid item container direction="row" justifyContent="space-around">
            <Grid item xs={5}>
              <Grid item sx={{ marginBottom: "15px" }}>
                <Chip
                  label={`Year: ${movie.Year}`}
                  color="primary"
                  variant="outlined"
                  sx={{ marginRight: "2px" }}
                />
                <Chip
                  label={`IMDb Rating: ${movie.imdbRating}`}
                  color="success"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">Title: {movie.Title}</Typography>
                <Typography variant="subtitle2">{movie.Actors}</Typography>
                <Typography variant="h5" sx={{ marginTop: "5px" }}>
                  Plot:
                </Typography>
                <Typography variant="p">{movie.Plot}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <img src={movie.Poster} alt="movie" />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default NewSearch;
