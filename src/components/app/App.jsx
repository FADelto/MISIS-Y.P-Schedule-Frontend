import styles from "./App.module.css";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import { checkClasses } from "../../utils/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState([]);
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
        // Handle errors
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

export default App;
