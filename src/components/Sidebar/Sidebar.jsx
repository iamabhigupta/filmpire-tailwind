import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setMobileOpen }) => {
  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const demoCategories = [
    { label: "Comedy", value: "comedy" },
    { label: "Adventure", value: "adventure" },
    { label: "Action", value: "action" },
    { label: "Horror", value: "horror" },
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
            <li className="text-xl mb-3">
              <img src={""} alt="" height={30} />
              {label}
            </li>
          </ul>
        ))}
      </div>
      <div className="p-5 border-b-2 border-r-fuchsia-200">
        <h2 className="text-gray-600 mb-3">Genres</h2>
        {demoCategories.map(({ label, value }) => (
          <ul key={value}>
            <li className="text-xl mb-3">
              <img src={""} alt="" height={30} />
              {label}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;