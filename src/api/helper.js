import axios from "axios";

export const getAllPost = async () => {
  const res = await axios.get("http://localhost:5000/posts");

  if (res.status !== 200) {
    return console.log("Something went wrong");
  }

  const data = res.data;

  return data;
};
