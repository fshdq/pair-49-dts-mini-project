import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import tv from "../assets/tv.png";
import background from "../assets/bg_login.jpg";
import Header from "../components/Header";

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="relative">
        <div className="absolute h-[768px] w-full">
          <img
            src={background}
            className="h-[768px] w-full object-cover"
            alt="background"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>
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
              <p className="text-gray-300 text-sm md:text-base">
                Siap menonton? Masukkan email untuk membuat atau memulai lagi
                keanggotaanmu.
              </p>
              <form onSubmit={handleSubmit} className="font-secondary flex flex-col w-full px-2 max-w-lg mx-auto justify-center">
                <div className="flex gap-x-2 items-center">
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Anda"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Mulai
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                </div>
              </form>
            </div>
          </div>
          <div className="py-16 bg-black border-y-8 border-zinc-700">
            <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="space-y-6 md:7/12 lg:w-6/12">
                  <h2 className="text-2xl text-white font-bold md:text-5xl">
                    Nikmati di TV-mu.
                  </h2>
                  <div className="space-y-4">
                    <p className="text-white">
                      Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple
                      TV, pemutar Blu-ray, dan banyak lagi.
                    </p>
                  </div>
                </div>
                <div className="relative md:5/12 lg:w-6/12">
                  <img src={tv} alt="placeholder" />
                  {/* <div className="absolute h-full left-1/2 top-1/2">
                    <video>
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
                    </video>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
