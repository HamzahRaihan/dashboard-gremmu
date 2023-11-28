import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/Users/Users";
import AuthLogin from "./pages/Auth/AuthLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
