import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HiOutlineBars3CenterLeft,
  HiMoon,
  HiUserCircle,
  HiXMark,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

import { fetchToken, createSessionId, moviesApi } from "../../utils";
import { Sidebar, Search } from "..";
import { setUser, userSelector } from "../../features/auth";

const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );

          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();

          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };

    logInUser();
  }, [token]);

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
          <HiMoon className="text-white cursor-pointer" size={25} />
          <Search />
          {!isAuthenticated ? (
            <button
              onClick={fetchToken}
              className="inline-flex text-white bg-blue-500 border-0 rounded text-lg"
            >
              <p className="hidden md:block">Login</p>
              <HiUserCircle size={30} className="md:ml-2" />
            </button>
          ) : (
            <Link to={`/profile/${user.id}`}>
              <button
                // to={`/profile/${user.id}`}
                className="inline-flex text-white bg-blue-500 border-0 rounded text-lg"
              >
                <p className="hidden md:block">My Profile</p>
                <div>
                  <HiUserCircle size={30} className="md:ml-2" />
                </div>
              </button>
            </Link>
          )}
          <h2 className="text-xl md:hidden block text-white">Search...</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
