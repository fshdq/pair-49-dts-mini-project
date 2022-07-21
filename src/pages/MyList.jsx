import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

import { db, auth } from "../firebase-config";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const MyList = () => {
  const [movies, setMovies] = useState([]);
  const [user, loading] = useAuthState(auth);

  const savedMovieID = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(savedMovieID, (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <h2 className="text-white font-bold md:text-xl p-4">My Saved Movies</h2>
        <div className="flex">
          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {movies.map((item, id) => (
              // <Movie key={id} item={item} />
              <SwiperSlide key={item.id}>
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                  <img
                    className="w-full h-full object-cover"
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 flex flex-col gap-y-2 justify-center w-full h-full hover:bg-slate-800/80 opacity-0 hover:opacity-100 text-white cursor-pointer">
                    <p className="text-sm md:text-base text-center text-white mx-auto">
                      {item?.title}
                    </p>

                    <div className="flex-shrink">
                      <Link to={`/details/${item?.id}`}>
                        <button className="inline-flex items-center px-4 py-2 border border-gray-500 shadow-sm text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Watch
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MyList;
