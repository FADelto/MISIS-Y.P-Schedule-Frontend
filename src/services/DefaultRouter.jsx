import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login/Login';
import App from '../components/app/App';



const DefaultRouter = () => {
  const { isAuthenticated, login, logout } = useAuth();
    useEffect(()=>{
        console.log('auth in router:');
        console.log(isAuthenticated)
        console.log('--------------')
    },[])


    return (
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<App />} />} />
          <Route path="/schedule" element={<PrivateRoute element={<App />} />} />
          <Route
              path="/login"
              element={<Login auth={isAuthenticated} login={login} logout={logout} />}
          />
        </Routes>
      </Router>
    )

}

export default DefaultRouter;
