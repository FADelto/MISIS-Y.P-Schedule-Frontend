import React, { useState, useEffect } from "react";
import styles from "./datePicker.module.css";
import arrow from "../../../assets/images/dropdown-arrow.png";
import Calendar from "./calendar/Calendar";

export default function DatePicker({
  weeks,
  selectedWeek,
  handleWeekChange,
  selectedDate,
  handleDayChange,
  isDateWithClasses,
}) {
  const [isActive, setIsActive] = useState(false);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("ru-RU", options);

    const formattedDate = formatter.format(date);

    return formattedDate;
  };

  const handleOpenCalendar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? styles.openCalendar : styles.pickerContainer}>
      {!isActive && (
        <div className={styles.dateHeader} onClick={handleOpenCalendar}>
          {formatDate(selectedDate)}{" "}
          <img
            className={`${styles.arrow} ${isActive ? styles.active : ""}`}
            src={arrow}
            alt="arrow"
          />
        </div>
      )}
      <div
        className={isActive ? styles.calendarContON : styles.calendarContOFF}
      >
        {isActive && (
          <Calendar
            handleWeekChange={handleWeekChange}
            selectedDate={selectedDate}
            handleDayChange={handleDayChange}
            isDateWithClasses={isDateWithClasses}
            closeCalendar={handleOpenCalendar}
          />
        )}
      </div>
    </div>
  );
}
