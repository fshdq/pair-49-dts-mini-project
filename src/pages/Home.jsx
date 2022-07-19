import MoviesSlide from "components/MoviesSlide";
import React from "react";
import Hero from "../components/Hero";
import requests from "Request";

const Home = () => {
  return (
    <>
      <Hero />
      <MoviesSlide title="Upcoming" fetchUrl={requests.requestUpcoming}/>
      <MoviesSlide title="Popular" fetchUrl={requests.requestPopular}/>
      <MoviesSlide title="Trending" fetchUrl={requests.requestTrending}/>
      <MoviesSlide title="Top Rated" fetchUrl={requests.requestTopRated}/>
    </>
  );
}

export default Home;