import React from "react";
import { Routes, Route } from "react-router-dom";

import { Actors, Movies, MovieInfo, Profile, Navbar, Sidebar } from "./index";

const App = () => {
  return (
    <div className="flex">
      <div className="w-[270px] h-screen sticky top-0 hidden sm:block">
        <Sidebar />
      </div>
      <div className="w-full h-screen sticky top-0">
        <div className="w-full sticky top-0 z-40">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/approved" element={<Movies />} />
            <Route exact path="/movie/:id" element={<MovieInfo />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
