import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
import Hero from "./Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  
  const popular = movies.slice(0, 5);
  // const listItems = popular.map((movie) => <li key={movie.id}>{movie.title}</li>);
  const listItems = popular.map((data) => {
    return (
      <SwiperSlide key={data.id}>
        <Hero
          image={data.backdrop_path}
          title={data.title}
          language={data.original_language}
          genre={data.genre_ids}
          released={data.release_date}
          overview={data.overview}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        modules={[Pagination, Navigation]}
      >
        {listItems}
      </Swiper>
    </>
  );
};

export default Main;
