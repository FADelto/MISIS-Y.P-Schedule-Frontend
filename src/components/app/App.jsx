import styles from "./App.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Classes from "../Classes/Classes";
import { getDayOfYear, getCurrentWeekDates } from "../../utils/dateActions";
import ClassPage from "../Classes/ClassPage/ClassPage";


function App() {
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState([]);
  const [classes, setClasses] = useState([]);
  const [dateRange, setDateRange] = useState(getCurrentWeekDates());
  const [chosenDay, setChosenDay] = useState(getDayOfYear(new Date()));
  const [tab, setTab] = useState(0);
  const [hidePagination, setHidePagination] = useState(false);

  const tabSetting = {
    'schedule': 0,
    'tasks': 1,
    'news': 2,
    'settings': 3
  };

  return (
    <div className={styles.App}>
      {tab === 0 && (
        <>
          {!hidePagination && (<Pagination
            availability={availability}
            setDateRange={setDateRange}
            setChosenDay={setChosenDay}
            setLoading={setLoading}
            dateRange={dateRange}
            setAvailability={setAvailability}
            setClasses={setClasses}
          />
          )}
          <Classes classes={classes} chosenDay={chosenDay} setHidePagination={setHidePagination} />
        </>

      )}
      <Navbar tabSetting={tabSetting} setTab={setTab} />
    </div>

  );

}



export default App;
