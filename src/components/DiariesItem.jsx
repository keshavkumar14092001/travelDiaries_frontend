import React from "react";
import DiaryBg from "../assets/diaryBg.jpg";
import {
  BsGeoAltFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";

const DiariesItem = ({ title, description, date, image, id, location }) => {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg hover:shadow-xl">
      <div className="w-full h-[300px]">
        <img
          className="w-full h-full"
          src={image}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center pb-2">
          <div>
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <h3 className="text-xl font-semibold tracking-wide text-gray-500">
              by John Doe
            </h3>
          </div>
          <div className="w-[40%] flex flex-col items-center space-x-1 text-gray-500">
            <span className="w-full flex items-center justify-end">
              <BsGeoAltFill className="mr-1" />
              <span>{location}</span>
            </span>
            <span className="w-full text-right">{date}</span>
          </div>
        </div>
        <hr />
        <div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <hr />
        <div className="pt-2 flex items-center justify-end space-x-4">
          <button className="flex items-center bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded transition">
            <BsFillPencilFill className="inline mr-1" />
            <span>Edit</span>
          </button>
          <button className="flex items-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded transition">
            <BsFillTrashFill className="inline mr-1" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiariesItem;
