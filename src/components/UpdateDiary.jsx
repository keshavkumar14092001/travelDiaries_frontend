import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostDetails, updatePost } from "../api/helper.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateDiary = () => {
  const [post, setPost] = useState();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
    location: "",
    date: "",
  });

  const id = useParams().id;

  const navigate = useNavigate();

  useEffect(() => {
    getPostDetails(id)
      .then((data) => {
        setPost(data.post);
        setInputs({
          title: data.post.title,
          description: data.post.description,
          imageURL: data.post.image,
          location: data.post.location,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(inputs, id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    setInputs({
      title: "",
      description: "",
      imageURL: "",
      location: "",
      date: "",
    });

    navigate("/");

    toast.success("Post updated successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <section className="addContainer flex justify-center items-center">
      <div className="w-[350px] md:w-[800px] h-[550px] bg-transparent/75 rounded-lg shadow-xl shadow-black">
        {post && (
          <form className="w-full h-full text-gray-100" onSubmit={handleSubmit}>
            <div className="w-[90%] md:w-[80%] h-full flex flex-col p-5 m-auto">
              <h1 className="text-center text-2xl md:text-4xl font-bold tracking-wider">
                Update Your Travel Diary
              </h1>
              <div className="h-full w-full py-4 flex flex-col justify-evenly">
                <div>
                  <label
                    className="block text-lg md:text-2xl font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Enter the Title of your Post!"
                    value={inputs.title}
                    name="title"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-lg md:text-2xl font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="text"
                    placeholder="Description of your travel (Keep it short!)"
                    value={inputs.description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-lg md:text-2xl font-bold mb-2"
                    htmlFor="imageURL"
                  >
                    Image URL
                  </label>
                  <input
                    className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="imageURL"
                    type="text"
                    placeholder="Put your image URL!"
                    value={inputs.imageURL}
                    name="imageURL"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-lg md:text-2xl font-bold mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Location where you have traveled!"
                    value={inputs.location}
                    name="location"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default UpdateDiary;
