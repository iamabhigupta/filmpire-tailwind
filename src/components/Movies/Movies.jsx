import React from "react";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MoviesList, Spinner } from "..";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    <Spinner />;
  }
  if (!data?.results?.length) {
    <h2 className="text-3xl">
      No movies that match that name <br /> Please search for something else
    </h2>;
  }
  if (error) "An error occurred";

  return (
    <div>
      <MoviesList movies={data} />
    </div>
  );
};

export default Movies;
