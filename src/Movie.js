import React from "react";

// MUI
import { Grid, Typography, Chip } from "@mui/material";

const Movie = ({ movie }) => {
  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="space-between"
      sx={{
        border: "1px solid #d9d9d9",
        borderRadius: " 8px",
        overflow: "hidden",
      }}
    >
      <Grid item xs={7} sx={{ margin: "10px" }}>
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
          <Typography
            variant="h5"
            sx={{ display: "inline-block", marginBottom: "15px" }}
          >
            {movie.Title}
          </Typography>
          <Chip
            label={movie.Genre}
            color="secondary"
            size="small"
            variant="outlined"
            sx={{ position: "relative", bottom: "3px", left: "4px" }}
          />
          <Typography variant="subtitle1">
            Director: {movie.Director}
          </Typography>
          <Typography variant="subtitle2">{movie.Actors}</Typography>
          {/* <Typography variant="h5" sx={{ marginTop: "5px" }}>
            Plot:
          </Typography> */}
          <Typography
            variant="p"
            sx={{ display: "block", marginTop: "10px", marginBottom: "30px" }}
          >
            ...{movie.Plot}
          </Typography>
          <Grid item>
            <Chip label={movie.Awards} sx={{ margin: "3px" }} />

            <Chip
              label={`Metascore Rate: ${movie.Metascore}`}
              sx={{ margin: " 3px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img style={{ height: "100%" }} src={movie.Poster} alt="movie" />
      </Grid>
    </Grid>
  );
};

export default Movie;
