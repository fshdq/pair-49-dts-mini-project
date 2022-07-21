import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApi = createApi({
  aseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (build) => ({
    // getMovie: build.query("/movie/:id"),
    // getMovies: build.query("/movie/popular"),
    // getMovieCredits: build.query("/movie/:id/credits"),
    // getMovieImages: build.query("/movie/:id/images"),
    // getMovieVideos: build.query("/movie/:id/videos"),
    // getMovieReviews: build.query("/movie/:id/reviews"),
    // getMovieRecommendations: build.query("/movie/:id/recommendations"),
    getMovieSimilar: build.query({
      query: (id) => `/movie/${id}/similar`,
    }),
  }),
});

export default tmdbApi;
