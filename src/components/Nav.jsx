import React from "react";
// import { GiftIcon, SearchIcon, BellIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Nav(props) {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto h-24">
        <Link to="/" className="flex items-center">
          <img
            src="./assets/logo.png"
            className="h-6 sm:h-11 object-cover"
            alt="Logo"
          />
        </Link>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <div className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
            <Link
              to="/"
              className="block py-2 px-3 text-gray-300 font-medium hover:font-bold hover:text-white rounded md:bg-transparent"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/series"
              className="block py-2 px-3 text-gray-300 font-medium hover:font-bold hover:text-white rounded md:bg-transparent"
              aria-current="page"
            >
              Series
            </Link>
            <Link
              to="/movies"
              className="block py-2 px-3 text-gray-300 font-medium hover:font-bold hover:text-white rounded md:bg-transparent"
              aria-current="page"
            >
              Movies
            </Link>
            <Link
              to="/new-and-popular"
              className="block py-2 px-3 text-gray-300 font-medium hover:font-bold hover:text-white rounded md:bg-transparent"
              aria-current="page"
            >
              New and Popular
            </Link>
            <Link
              to="/my-list"
              className="block py-2 px-3 text-gray-300 font-medium hover:font-bold hover:text-white rounded md:bg-transparent"
              aria-current="page"
            >
              My List
            </Link>
          </div>
        </div>
        {user?.email ? (
          <div className="flex sm:gap-x-4 items-center md:order-2 ">
            <button className="inline-flex flex-shrink-0 items-center px-4 py-2 border border-white hover:bg-gray-700 text-sm font-medium rounded-md shadow-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              My Profile
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex flex-shrink-0 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex sm:gap-x-4 items-center md:order-2 ">
            <Link to="/register">
              {" "}
              <button className="inline-flex flex-shrink-0 items-center px-4 py-2 border border-white hover:bg-gray-700 text-sm font-medium rounded-md shadow-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Register
              </button>
            </Link>
            <Link to="/login">
              {" "}
              <button className="inline-flex flex-shrink-0 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
