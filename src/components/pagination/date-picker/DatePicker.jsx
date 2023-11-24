import { useState, useRef } from "react";
import styles from "./datePicker.module.css";
import arrow from "../../../assets/images/dropdown-arrow.png";
import ScrollableCal from "./calendar/ScrollableCal";

export default function DatePicker({
  weeks,
  selectedWeek,
  handleWeekChange,
  selectedDate,
  handleDayChange,
  isDateWithClasses,
  classesAvailable,
}) {
  const scrollRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  // const [loading, setLoading] = useState(false);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("ru-RU", options);

    const formattedDate = formatter.format(date);

    return formattedDate;
  };

  const handleOpenCalendar = () => {
    setIsActive(!isActive);
  };

  // Create Date objects for the start and end dates
  const minDay = Math.min(...classesAvailable);
  const maxDay = Math.max(...classesAvailable);

  const currentYear = new Date().getFullYear();

  const startDate = new Date(currentYear, 0);
  startDate.setDate(minDay);

  const endDate = new Date(currentYear, 0);
  endDate.setMonth(0);
  endDate.setDate(maxDay);

  return (
    <div
      className={isActive ? styles.openCalendar : styles.pickerContainer}
      ref={scrollRef}
    >
      {!isActive ? (
        <div className={styles.dateHeader} onClick={handleOpenCalendar}>
          {formatDate(selectedDate)}{" "}
          <img className={styles.arrow} src={arrow} alt="arrow" />
        </div>
      ) : (
        <div className={styles.cal}>
          <ScrollableCal
            startDate={startDate}
            endDate={endDate}
            currentDay={selectedDate}
            select={handleDayChange}
            handleWeekChange={handleWeekChange}
            isDateWithClasses={isDateWithClasses}
            closeCalendar={handleOpenCalendar}
            scrollRef={scrollRef}
          />
        </div>
      )}
    </div>
  );
}
