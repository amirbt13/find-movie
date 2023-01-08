import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apikey = "6ed3e23d";

const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com`,
  }),
  endpoints: (buidler) => ({
    searchMovie: buidler.query({
      query: (title) => `?apikey=${apikey}&t=${title}`,
    }),
  }),
});

export const { useSearchMovieQuery } = movieApi;

export default movieApi;
