import React, { useEffect, useState } from "react";
import { getUserDetails } from "../api/helper";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    getUserDetails()
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-evenly items-center">
      {user && (
        <div className="w-[90%] md:w-[40%]">
          <h1 className="text-center text-3xl md:text-4xl font-bold tracking-wide py-4">
            User Profile
          </h1>
          <div className="flex flex-col justify-evenly pt-8 pb-16">
            <h3 className="text-base md:text-2xl font-semibold tracking-wide text-gray-500">
              Name of user :: {user.name}
            </h3>
            <h3 className="py-4 text-base md:text-2xl font-semibold tracking-wide text-gray-500">
              Email of User :: {user.email}
            </h3>
            <button
              onClick={handleClick}
              className="inline-block uppercase w-full px-4 py-2 text-center text-sm md:text-base font-semibold border text-gray-200 bg-gray-800 rounded-md shadow hover:bg-gray-300 hover:text-gray-800 hover:shadow-md transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
