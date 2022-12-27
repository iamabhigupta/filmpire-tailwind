import React, { useState } from "react";
import {
  HiOutlineBars3CenterLeft,
  HiMoon,
  HiUserCircle,
  HiXMark,
} from "react-icons/hi2";
import { Sidebar, Search } from "..";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const isAuthenticated = true;

  return (
    <div className="flex relative">
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } absolute -right-[100px] z-50 slide-left bg-white`}
      >
        <Sidebar />
      </div>
      {/* <div className="w-[15%]">Sidebar</div> */}
      <div className="w-full">
        <div className="h-[70px] bg-primary flex justify-between px-5 md:px-10 items-center">
          {!toggle ? (
            <HiOutlineBars3CenterLeft
              onClick={() => setToggle((prev) => !prev)}
              className="block md:hidden text-white cursor-pointer"
              size={25}
            />
          ) : (
            <HiXMark
              onClick={() => setToggle((prev) => !prev)}
              className="block md:hidden text-white cursor-pointer"
              size={25}
            />
          )}
          {/* <HiOutlineBars3CenterLeft
            onClick={() => setToggle((prev) => !prev)}
            className="block md:hidden text-white cursor-pointer"
            size={25}
          /> */}
          <HiMoon className="text-white cursor-pointer" size={25} />
          <Search />
          {!isAuthenticated ? (
            <button className="inline-flex text-white bg-blue-500 border-0 rounded text-lg">
              <p className="hidden md:block">Login</p>
              <HiUserCircle size={30} className="md:ml-2" />
            </button>
          ) : (
            <button className="inline-flex text-white bg-blue-500 border-0 rounded text-lg">
              <p className="hidden md:block">My Profile</p>
              <div>
                <HiUserCircle size={30} className="md:ml-2" />
              </div>
            </button>
          )}
          <h2 className="text-xl md:hidden block text-white">Search...</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
