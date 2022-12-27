import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../features/currentGenreOrCategory";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="xl:w-80">
          <div className="flex">
            <input
              onKeyDown={handleKeyDown}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
