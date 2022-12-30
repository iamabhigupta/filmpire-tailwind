import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const {
    user: { username },
  } = useSelector((state) => state.user);
  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <div className="p-5">
      <div className="flex justify-between mb-5">
        <h2 className="text-4xl font-semibold text-gray-700 overflow-hidden">
          My Profile
        </h2>
        <button onClick={logout} className="btn">
          Logout
        </button>
      </div>
      {!favoriteMovies.length ? (
        <h4 className="text-2xl text-gray-800">
          Add favorites or watchlist some movies to see them here!
        </h4>
      ) : (
        <div>Favorite Movies</div>
      )}
    </div>
  );
};

export default Profile;
