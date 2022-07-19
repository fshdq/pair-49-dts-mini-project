import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import background from "../assets/bg_login.jpg";
import Header from "../components/Header";

const Register = () => {
  return (
    <>
      <Header />
      <div className="relative h-screen w-screen">
        <div className="absolute h-[768px] w-full">
          <img
            src={background}
            className="h-[768px] w-full object-cover"
            alt="background"
          />
          <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center max-w-2xl mx-auto text-center">
            <div className="space-y-2">
              <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
                Film, acara TV tak terbatas, dan lebih banyak lagi.
              </h1>
              <p className="text-white font-semibold text-base md:text-xl lg:text-2xl">
                Tonton di mana pun. Batalkan kapan pun.
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-white text-base md:text-lg lg:text-xl">
                Siap menonton? Masukkan email untuk membuat atau memulai lagi
                keanggotaanmu.
              </p>
              <form className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
                <input
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-3 sm:text-sm border-gray-300"
                  type="email"
                  required
                  placeholder="Alamat Email"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-x-2 py-3 px-4 bg-red-600 hover:bg-red-800 text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-redbg-red-500"
                >
                  Mulai
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
