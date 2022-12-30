import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import { MoviesList, Spinner } from '..';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return <Spinner />;
  }

  if (!data?.results?.length) {
    return (
      <h2 className="text-3xl">
        No movies that match that name <br /> Please search for something else
      </h2>
    );
  }
  if (error) 'An error occurred';

  return (
    <div>
      <MoviesList movies={data} />
    </div>
  );
};

export default Movies;
