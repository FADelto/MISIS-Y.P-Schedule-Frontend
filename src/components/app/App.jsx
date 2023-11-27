import styles from "./App.module.css";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";
import { checkClasses, getClasses } from "../../utils/api";
import Navbar from "../navbar/Navbar";
import Classes from "../Classes/Classes";
import { getDayOfYear, getCurrentWeekDates } from "../../utils/dateActions";

function App() {
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState([]);
  const [classes, setClasses] = useState([]);
  const [dateRange, setDateRange] = useState(getCurrentWeekDates());
  const [chosenDay, setChosenDay] = useState(getDayOfYear(new Date()));

  return (
    <div className={styles.App}>
      <Pagination
        availability={availability}
        setDateRange={setDateRange}
        setChosenDay={setChosenDay}
        setLoading={setLoading}
        dateRange={dateRange}
        setAvailability={setAvailability}
        setClasses={setClasses}
      />
      <Classes classes={classes} chosenDay={chosenDay} />
      <Navbar />
    </div>
  );
}

export default App;
