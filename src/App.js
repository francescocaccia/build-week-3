import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import ProfilePage from "./components/ProfilePage";
import AziendeSideBar from "./components/AziendeSideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />

        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
