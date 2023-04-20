import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";
import ExperiencesPage from "./components/ExperiencesPage";
import { getJobFetch, getPostFetch, profileFetch } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import JobsPage from "./components/JobsPage";
import Chat from "./components/Chat";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileFetch());
    dispatch(getPostFetch());
    dispatch(getJobFetch());
  }, []);
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
        <Chat />
      </BrowserRouter>
    </>
  );
}

export default App;
