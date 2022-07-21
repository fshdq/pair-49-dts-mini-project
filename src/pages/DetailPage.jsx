import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { auth, db } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import tmdbApi from "../services/tmdbApi"

// import MoviesSlide from "components/MoviesSlide";

const DetailPage = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [saved, setSaved] = useState([false]);
  const [user, loading] = useAuthState(auth);
  let { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=c50395b089c7e92ffe23317e6b402d11&language=en-US`
      )
      .then((response) => {
        setMovieDetail(response.data);
      });
  }, [movieId]);

  // const { data: similarMovie } = tmdbApi.getMovieSimilar(movieId);

  const savedMovieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setSaved(true);
      await updateDoc(savedMovieID, {
        savedShows: arrayUnion({
          id: movieDetail.id,
          title: movieDetail.title,
          img: movieDetail.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  const hourminute = (time) => {
    const hour = Math.floor(time / 60);
    const minute = time % 60;
    return `${hour} h ${minute} min`;
  };
  console.log("id: ", movieDetail);
  return (
    <>
      <div className="w-full h-[600px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`}
            alt={movieDetail?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              {movieDetail?.title}
            </h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button
                onClick={saveShow}
                className="border text-white border-gray-300 py-2 px-5 ml-4 hover:bg-white hover:text-black"
              >
                Watch Later
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released: {movieDetail?.release_date} | {hourminute(movieDetail?.runtime)}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 py-2">
              {movieDetail?.overview}
            </p>
          </div>
        </div>
      </div>
      <section>
        {/* <MoviesSlide title="Upcoming" fetchUrl={requests.similarMovie(756999)} /> */}
      </section>
    </>
  );
};

export default DetailPage;
