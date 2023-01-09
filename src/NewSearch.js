import React, { useState } from "react";
import { useSearchMovieQuery } from "./redux/api/apiSlice";

import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "./redux/darkMode/darkModeSlice";

// MUI
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import Movie from "./Movie";

const NewSearch = () => {
  const [inputVal, setInputVal] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkmode.mode);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(inputVal);
  };
  const { data: movie, isFetching } = useSearchMovieQuery(title);

  //console.log(movie);

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
            <MovieCreationOutlinedIcon
              sx={{
                fontSize: "4rem",
                top: "12px",
                left: "2px",
                position: "relative",
              }}
              fontSize="large"
              color="primary"
            />
          </Typography>
        </Grid>
        <Grid item sx={{ marginBottom: "10px", opacity: "0.7" }}>
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={() => dispatch(toggleMode())} />}
              label={`${mode} mode`}
            />
          </FormGroup>
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
          <Movie movie={movie} />
        )}
      </Grid>
    </Container>
  );
};

export default NewSearch;
