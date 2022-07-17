import React from "react";

const Carousel = (props) => {
  return (

    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full relative">
        <div className="relative flex flex-row w-full h-full">
          <div className="absolute w-1/2 h-full top-0 right-0">
            <img
              className="w-full object-cover "
              src={`https://image.tmdb.org/t/p/original/${props?.image}`}
              alt={props?.title}
            />
          </div>
          <div className="absolute w-full gap-y-2 h-full top-0 left-0 bg-gradient-to-r from-black via-[#040B16] to-transparent">
            <div className="h-full sm:w-1/2 flex flex-col items-start justify-center p-4 md:p-8 ">
              <h1 className="text-3xl md:text-5xl font-bold text-left">
                {props?.title}
              </h1>
              <ul className="inline-flex gap-x-2">
                <li>Genre 1</li>
                <li>{props?.language}</li>
                <li>{props?.genre}</li>
              </ul>
              <p className="text-gray-400 text-sm mb-4">{props?.released}</p>
              <p className="text-gray-200 text-left">{props?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
