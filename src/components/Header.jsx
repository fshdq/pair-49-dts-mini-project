import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header(props) {
  return (
    <div className="bg-black border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="relative py-5 flex items-center justify-center lg:justify-between">
        <div className="flex-shrink-0">
          <img className="h-12 w-auto" src={logo} alt="logo" />
        </div>

        <div className="ml-4 flex items-center pr-0.5 gap-x-2">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-white shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Bahasa Indonesia
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <Link to="/login">
            {" "}
            <button className="inline-flex flex-shrink-0 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
