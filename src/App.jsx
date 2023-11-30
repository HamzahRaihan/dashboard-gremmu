// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './components/SideBar';
import AuthLogin from './pages/Auth/AuthLogin';
import Dashboard from './pages/Dashboard/Dashboard';
import User from './pages/Users/Users';
import Video from './pages/Video/Video';
import News from './pages/News/News';
import Edit from './pages/News/edit';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import NotAdmin from './pages/NotAdmin';

function App() {
  const { userData } = useContext(AuthContext);
  console.log('🚀 ~ file: App.jsx:15 ~ App ~ userData:', userData);
  return (
    <Routes>
      <Route
        path="/"
        element={
          userData?.role == 'admin' ? (
            <>
              <SideBar />
              <Dashboard />
            </>
          ) : (
            <Navigate to="/login" replace={true} />
          )
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
      <Route
        path="/news/edit"
        element={
          <>
            <SideBar />
            <Edit />
          </>
        }
      />
      <Route path="/login" element={!userData ? <AuthLogin /> : <Navigate to="/" replace={true} />} />
      <Route path="/forbidden" element={userData?.role == 'user' ? <NotAdmin /> : <Navigate to="/login" replace={true} />} />
    </Routes>
  );
}

export default App;
