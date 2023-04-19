import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";
import { profileFetch } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileFetch());
  }, []);
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
