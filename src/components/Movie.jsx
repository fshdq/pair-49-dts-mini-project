import React, {useState} from "react";
import { SwiperSlide } from "swiper/react";

import { BookmarkIcon } from "@heroicons/react/outline";
import { auth, db } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const [saved, setSaved] = useState(false);
  const [user, loading] = useAuthState(auth);

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };
  return (
    <SwiperSlide key={item.id}>
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item.title}
        />
        <div className="absolute inset-0 flex flex-col gap-y-2 justify-center w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white cursor-pointer">
          <button className="absolute mt-2 mr-2 top-0 right-0 p-2 bg-transparent hover:bg-white hover:text-black">
            <BookmarkIcon className="h-6 w-6" />
          </button>
          <p className="text-sm md:text-base text-center text-white mx-auto">
            {item?.title}
          </p>

          <div className="flex-shrink">
            <Link to={`/detail/${item?.id}`}>
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
  );
};

export default Movie;
