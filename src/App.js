import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Diaries from "./components/Diaries.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/diaries"} element={<Diaries />} />
        <Route path={"/signIn"} element={<SignIn />} />
        <Route path={"/signUp"} element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
