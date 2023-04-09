import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Diaries from "./components/Diaries.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import { useSelector } from "react-redux";
import Add from "./components/Add.jsx";
import Profile from "./components/Profile.jsx";
import UpdateDiary from "./components/UpdateDiary.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index.js";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/diaries"} element={<Diaries />} />
          <Route path={"/signIn"} element={<SignIn />} />
          <Route path={"/signUp"} element={<SignUp />} />
          {isLoggedIn && (
            <>
              <Route path={"/add"} element={<Add />} />
              <Route path={"/profile"} element={<Profile />} />
              <Route path={"/post/:id"} element={<UpdateDiary />} />
            </>
          )}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
