import React from "react";
import Road from "../assets/road.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-[80vh]">
      <div className="h-[66vh] md:h-[70vh] w-full relative">
        <img
          src={Road}
          alt="loading"
          className="w-full h-full bg-contain shadow-md"
        />
        <div className="absolute top-0 w-full h-full bg-black/60 flex justify-center items-center">
          <h1 className="uppercase text-center px-1 md:px-0 text-xl md:text-4xl font-semibold md:font-bold text-gray-100 tracking-wide">
            The goal is to die with memories not dreams
          </h1>
        </div>
      </div>
      <div className="py-2 md:py-4">
        <h1 className="uppercase text-center font-semibold md:font-bold text-lg md:text-2xl">
          Share your travel experience with us
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-8 pt-2 md:pt-4">
          <button>
            <Link
              to={"/signIn"}
              className="inline-block uppercase w-full px-4 py-2 text-center text-sm md:text-base font-semibold border text-gray-200 bg-gray-800 rounded-md shadow hover:bg-gray-300 hover:text-gray-800 hover:shadow-md transition-all"
            >
              Share your Experience with us
            </Link>
          </button>
          <button>
            <Link
              to={"/diaries"}
              className="inline-block uppercase w-full px-4 py-2 text-center text-sm md:text-base font-semibold border text-gray-200 bg-gray-800 rounded-md shadow hover:bg-gray-300 hover:text-gray-800 hover:shadow-md transition-all"
            >
              View diaries
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
