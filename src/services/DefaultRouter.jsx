import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login/Welcome';
import App from '../components/app/App';
import Registration from '../components/Login/Registration/Registration';
import SignIn from '../components/Login/SignIn/SignIn';
import ForgotPass from '../components/Login/ForgotPass/ForgotPass';



const DefaultRouter = () => {
  const { isAuthenticated, login, logout } = useAuth();


  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<App />} />} />
        <Route path="/schedule" element={<PrivateRoute element={<App />} />} />
        <Route
          path="/welcome"
          element={<Login auth={isAuthenticated} login={login} logout={logout} />}
        />
        <Route
          path="/register"
          element={<Registration />}
        />
        <Route
          path="/signin"
          element={<SignIn />}
        />
        <Route
          path="/password"
          element={<ForgotPass />}
        />
      </Routes>
    </Router>
  )

}

export default DefaultRouter;
