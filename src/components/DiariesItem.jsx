import {
  BsGeoAltFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { handleDelete } from "../api/helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DiariesItem = ({
  title,
  description,
  date,
  image,
  id,
  location,
  user,
  name,
}) => {
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    handleDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    toast.success("Post deleted successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
            <h1 className="font-bold text-2xl md:text-3xl mb-2">{title}</h1>
            <h3 className="text-sm md:text-xl font-semibold tracking-wide text-gray-500">
              by {name}
            </h3>
          </div>
          <div className="w-[40%] flex flex-col items-center space-x-1 text-gray-500">
            <span className="w-full flex items-center justify-end">
              <BsGeoAltFill className="mr-1" />
              <span className="text-sm md:text-base">{location}</span>
            </span>
            <span className="w-full text-right text-sm md:text-base">
              {date}
            </span>
          </div>
        </div>
        <hr />
        <div>
          <p className="text-gray-700 text-base md:text-base">{description}</p>
        </div>
        {isLoggedInUser() && (
          <>
            <hr />
            <div className="pt-2 flex items-center justify-end space-x-4">
              <Link to={`/post/${id}`}>
                <button className="flex items-center bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded transition">
                  <BsFillPencilFill className="inline mr-1" />
                  <span>Edit</span>
                </button>
              </Link>
              <Link>
                <button
                  onClick={handleSubmit}
                  className="flex items-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded transition"
                >
                  <BsFillTrashFill className="inline mr-1" />
                  <span>Delete</span>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DiariesItem;
