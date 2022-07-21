import React from "react";
import { GiftIcon, SearchIcon, BellIcon } from "@heroicons/react/outline";
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
        {/* <div className="flex sm:gap-x-4 items-center md:order-2 ">
          <button>
            <SearchIcon className="h-5 w-5 text-gray-300 hover:text-white" />
          </button>
          <div className="text-white">Irawan</div>
          <button>
            <GiftIcon className="h-5 w-5 text-gray-300 hover:text-white" />
          </button>
          <button>
            <BellIcon className="h-5 w-5 text-gray-300 hover:text-white" />
          </button>
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              src="/src/assets/images/logo.png"
              className="h-8 w-8 rounded-full"
              alt="User avatar"
            />
          </button>
          <div
            className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="py-3 px-4">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div> */}
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
            <Link to="/profile">
              {" "}
              <button className="inline-flex flex-shrink-0 items-center px-4 py-2 border border-white hover:bg-gray-700 text-sm font-medium rounded-md shadow-sm text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                My Profile
              </button>
            </Link>
            <button onClick={handleLogout} className="inline-flex flex-shrink-0 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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
