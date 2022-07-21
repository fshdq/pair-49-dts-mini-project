import React from "react";
import MoviesSlide from "components/MoviesSlide";
import Hero from "../components/Hero";
import {requestsMovies} from "Request";

const Home = () => {
  return (
    <>
      <Hero />
      <MoviesSlide title="Upcoming" fetchUrl={requestsMovies.requestUpcoming}/>
      <MoviesSlide title="Popular" fetchUrl={requestsMovies.requestPopular}/>
      <MoviesSlide title="Trending" fetchUrl={requestsMovies.requestTrending}/>
      <MoviesSlide title="Top Rated" fetchUrl={requestsMovies.requestTopRated}/>
    </>
  );
}

export default Home;