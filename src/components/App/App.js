import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { useEffect, useState } from "react";
import api from "../../utils/MainApi";
import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLog, setIsLog] = useState(true);
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getProfileInfo(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLog(true);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setIsLog(false);
    }
  }

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    localStorage.removeItem("isFilmShort");
    localStorage.removeItem("filterBy");
    setIsLog(false);
    navigate("/");
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header isLog={isLog} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={<ProtectedRouteElement isLog={isLog} element={Movies} />}
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement isLog={isLog} element={SavedMovies} />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                isLog={isLog}
                signOut={signOut}
                element={Profile}
              />
            }
          />
          <Route path="/signin" element={<Login setIsLog={setIsLog} />} />
          <Route
            path="/signup"
            isLog={isLog}
            element={<Register setIsLog={setIsLog} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
