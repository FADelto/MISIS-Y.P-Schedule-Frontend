import styles from "./App.module.css";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import { checkClasses } from "../../utils/api";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../services/AuthContext';
import PrivateRoute from '../../services/PrivateRoute';
import Login from '../Login/Login';

function App() {
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState([]);
  const { isAuthenticated, login, logout } = useAuth();

  useEffect(() => {
    console.log("useEffect triggered");
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const data = await checkClasses(setLoading);
        console.log("Data fetched:", data);
        setAvailability(data);
        // Other asynchronous logic
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setAvailability]);
  

  return (
    <div className={styles.App}>
      <Pagination availability={availability} />
    </div>
  );
}


export const DefaultRouter = () => {
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
          <Route
              path="/login"
              element={<Login auth={isAuthenticated} login={login} logout={logout} />}
          />
        </Routes>
      </Router>
    )

}



export default App;
