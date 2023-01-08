import React, { useState } from "react";
import { useSearchMovieQuery } from "./redux/api/apiSlice";

// MUI
import { styled } from "@mui/material/styles";

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
  Button,
  IconButton,
  CardActionArea,
  CardActions,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Search = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [inputVal, setInputVal] = useState("");
  const [title, setTitle] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(inputVal);
  };
  const { data: movie, isFetching, isLoading } = useSearchMovieQuery(title);

  console.log(movie);

  if (isFetching) return <h1>Fetching...</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Container sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <Typography align="center" gutterBottom={true} variant="h2">
        Find Your Favorite Movies
      </Typography>
      <Grid
        container
        spacing={1}
        direction="row-reverse"
        justifyContent="center"
        sx={{ marginBottom: "20px" }}
      >
        <Grid item>
          <Button
            sx={{ padding: "14px 25px" }}
            size="large"
            variant="contained"
            onClick={submitHandler}
          >
            SEARCH
          </Button>
        </Grid>
        <Grid item>
          <TextField
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            sx={{ width: "15rem" }}
            label="Movie Title"
            required
          />
        </Grid>

        <Grid item>
          <Card sx={{ width: "300px" }}>
            <CardMedia component="img" image={movie.Poster} />
            <CardContent>
              <Typography variant="h5">{movie.Title}</Typography>
              <Typography variant="subtitle2">{movie.Actors}</Typography>
            </CardContent>
            <CardActionArea>
              <CardActions>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </CardActionArea>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="p">
                  <Typography variant="h5">Plot: </Typography>
                  {movie.Plot}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
