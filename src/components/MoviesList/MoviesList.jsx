import React from "react";
import { Movie } from "..";

const MoviesList = ({ movies }) => {
  return (
    <div className="flex justify-center flex-wrap p-5">
      {movies?.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </div>
  );
};

export default MoviesList;
