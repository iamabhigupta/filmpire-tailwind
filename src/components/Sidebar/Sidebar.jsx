import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useGetGenresQuery } from "../../services/TMDB";
import { Spinner } from "..";
import genresIcon from "../.././assets/genres";
import { selectGenereOrCategory } from "../../features/currentGenreOrCategory";

const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const blueLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
  const redLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

  return (
    <div>
      <Link
        to={"/"}
        className="flex bg-white justify-center items-center py-6 border-gray-200 border-b-2"
      >
        <img src={blueLogo} alt="Filmpire" className="w-[70%]" />
      </Link>
      <div className="p-5 border-b-2 border-r-fuchsia-200">
        <h2 className="text-gray-600 mb-3">Categories</h2>
        {categories.map(({ label, value }) => (
          <ul key={value}>
            <li
              onClick={() => dispatch(selectGenereOrCategory(value))}
              className="text-lg mb-3 text-gray-800 flex items-center gap-5 cursor-pointer"
            >
              <img
                src={genresIcon[label.toLowerCase()]}
                alt={label}
                className="h-8"
              />
              {label}
            </li>
          </ul>
        ))}
      </div>
      <div className="p-5 border-b-2 border-r-fuchsia-200">
        <h2 className="text-gray-600 mb-3">Genres</h2>
        {isFetching ? (
          <Spinner />
        ) : (
          data.genres.map(({ name, id }) => (
            <ul key={id}>
              <li
                onClick={() => dispatch(selectGenereOrCategory(id))}
                className="text-lg mb-3 text-gray-800 flex items-center gap-5 cursor-pointer"
              >
                <img
                  src={genresIcon[name.toLowerCase()]}
                  alt={name}
                  className="h-8"
                />
                {name}
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
