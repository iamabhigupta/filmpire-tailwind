import React from "react";
import { Routes, Route } from "react-router-dom";

import { Actors, Movies, MovieInfo, Profile, Navbar } from "./index";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route exact path="/approved" element={<Movies />} />
        <Route exact path="/movie/:id" element={<MovieInfo />} />
        <Route exact path="/actors/:id" element={<Actors />} />
        <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
