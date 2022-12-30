import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetMovieQuery } from '../../services/TMDB';
import Spinner from '../Spinner/Spinner';

const MovieInfo = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery({ id });

  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return (
      <Link to="/">
        <h2 className="text-3xl font-semibold mt-10 ml-10 underline text-gray-900">
          Something has gone wrong - Go Back
        </h2>
      </Link>
    );
  }

  return (
    <div className="my-10">
      <div className="flex justify-around">
        <img
          className="rounded w-1/2 shadow-lg shadow-black"
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt=""
        />
        <h2 className="text-3xl text-gray-900 font-semibold text-center">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default MovieInfo;
