import React from "react";
import SeriesSlide from "components/SeriesSlide";
import Hero from "../components/Hero";
import { requestSeries } from "Request";

const Series = () => {
  return (
    <>
      <Hero />
      <SeriesSlide title="Upcoming" fetchUrl={requestSeries.requestUpcoming} />
      <SeriesSlide title="Popular" fetchUrl={requestSeries.requestPopular} />
      <SeriesSlide title="Trending" fetchUrl={requestSeries.requestTrending} />
      <SeriesSlide title="Top Rated" fetchUrl={requestSeries.requestTopRated} />
    </>
  );
};

export default Series;
