import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllPost = async () => {
  const res = await axios.get("/posts/");

  if (res.status !== 200) {
    return console.log("Something went wrong");
  }

  const data = res.data;

  return data;
};

export const sendSignUpRequest = async (data) => {
  const res = await axios
    .post("/user/signup/", {
      name: data.name,
      email: data.email,
      password: data.password,
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    });

  if (res.status !== 201) {
    return console.log("Something went wrong");
  }
  return res.data;
};

export const sendLoginRequest = async (data) => {
  const res = await axios
    .post("/user/login/", {
      email: data.email,
      password: data.password,
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    });

  if (res.status !== 200) {
    return console.log("Something went wrong");
  }
  return res.data;
};

export const addPost = async (data) => {
  const res = await axios
    .post("/posts/", {
      title: data.title,
      description: data.description,
      image: data.imageURL,
      location: data.location,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    });

  if (res.status !== 201) {
    return console.log("Something went wrong");
  }

  const resData = await res.data;

  return resData;
};

export const getPostDetails = async (id) => {
  const res = await axios.get(`/posts/${id}`).catch((err) => {
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  });

  if (res.status !== 200) {
    return console.log("Unable to fetch diary");
  }

  const resData = await res.data;

  return resData;
};

export const updatePost = async (data, id) => {
  const res = await axios
    .put(`/posts/${id}`, {
      title: data.title,
      description: data.description,
      image: data.imageURL,
      location: data.location,
    })
    .catch((err) => {
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    });

  if (res.status !== 200) {
    return console.log("Unable to update");
  }

  const resData = await res.data;
  return resData;
};

export const handleDelete = async (id) => {
  console.log("Before Deleting");
  const res = await axios.delete(`/posts/${id}`).catch((err) => {
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  });

  if (res.status !== 200) {
    return console.log("Unable to Delete");
  }

  const resData = await res.data;
  return resData;
};

export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");

  const res = await axios.get(`/user/${id}`).catch((err) => {
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  });

  if (res.status !== 200) {
    return console.log("User not found");
  }

  const resData = await res.data;

  return resData;
};
