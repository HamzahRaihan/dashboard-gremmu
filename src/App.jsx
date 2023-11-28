// App.jsx
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import AuthLogin from "./pages/Auth/AuthLogin";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/Users/Users";
import Video from "./pages/Video/Video";
import News from "./pages/News/News";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SideBar />
            <Dashboard />
          </>
        }
      />
      <Route
        path="/user"
        element={
          <>
            <SideBar />
            <User />
          </>
        }
      />
      <Route
        path="/video"
        element={
          <>
            <SideBar />
            <Video />
          </>
        }
      />
      <Route
        path="/news"
        element={
          <>
            <SideBar />
            <News />
          </>
        }
      />
      <Route path="/login" element={<AuthLogin />} />
    </Routes>
  );
}

export default App;
