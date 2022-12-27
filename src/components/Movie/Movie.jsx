import React from "react";
import { Link } from "react-router-dom";

import { Spinner } from "..";

const Movie = ({ movie, i }) => {
  return (
    <>
      <div
        key={i}
        className="md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 flex justify-center flex-col items-center p-3 overflow-hidden"
      >
        <div className="hover:scale-105 transition-all duration-200">
          <Link to={`movie/${movie.id}`}>
            <img
              alt={movie.title}
              className={`h-[300px] rounded-xl mb-3`}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://dummyimage.com/721x401"
              }
            />
          </Link>
        </div>
        <Link to={`movie/${movie.id}`}>
          <h3
            title={`${movie?.vote_average} / 10`}
            className="text-2xl max-w-[230px] text-ellipsis overflow-hidden whitespace-nowrap text-center mt-3 mb-0"
          >
            {movie.title}
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Movie;
