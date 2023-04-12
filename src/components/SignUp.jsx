import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sendSignUpRequest } from "../api/helper";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/diaries");
      toast.success("LogIn Successfull", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      navigate("/signUp");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendSignUpRequest(inputs)
      .then((data) => localStorage.setItem("userId", data.user._id))
      .then(() => dispatch(authActions.login()))
      .catch((err) => console.log(err));

    setInputs({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="signUpContainer flex justify-center items-center">
      <div className="w-[350px] md:w-[700px] h-[500px] bg-transparent/75 rounded-lg shadow-xl shadow-black">
        <form className="w-full h-full text-gray-100" onSubmit={handleSubmit}>
          <div className="w-[90%] md:w-[70%] h-full flex flex-col p-5 m-auto">
            <h1 className="text-center text-4xl font-bold tracking-wider">
              SIGNUP
            </h1>
            <div className="h-full w-full py-4 flex flex-col justify-evenly">
              <div>
                <label
                  className="block text-2xl font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={inputs.name}
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-2xl font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={inputs.email}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-xl font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password must be more than 6 characters!"
                  value={inputs.password}
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
                <Link to={"/signIn"}>
                  <p className="text-center pt-4 text-sm md:text-lg font-semibold tracking-wider hover:text-gray-500 transition">
                    Already have an account? LogIn
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
