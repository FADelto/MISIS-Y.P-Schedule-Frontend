import React, { useState, useEffect } from "react";
import styles from "./pagination.module.css";
import DatePicker from "./date-picker/DatePicker";
import DayCircles from "./day-circles/DayCircles";

export default function Pagination({ availability }) {
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
  );
  const [selectedWeek, setSelectedWeek] = useState(weekStart);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [classesAvailable, setClassesAvailable] = useState([]);

  useEffect(() => {
    setClassesAvailable(availability);
  }, [availability]);

  const handleWeekChange = (startOfWeek) => {
    setSelectedWeek(startOfWeek);
  };

  const handleDayChange = (day) => {
    setSelectedDate(day);
  };
  const weeks = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - startDate.getDay());

  for (let i = 0; i < 5; i++) {
    const startOfWeek = new Date(startDate);
    startOfWeek.setDate(startOfWeek.getDate() + 7 * i);
    weeks.push(startOfWeek);
  }

  const isDateWithClasses = (date, day) => {
    let dateObj = new Date(date);
    if (day) {
      dateObj.setDate(day);
    }
    const dayOfYear = getDayOfYear(dateObj);
    const hasClasses = classesAvailable.includes(dayOfYear);
    return hasClasses;
  };

  const getDayOfYear = (date) => {
    const dateObj = new Date(date);
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = dateObj - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay) + 1;
    // console.log(dayOfYear);
    return dayOfYear;
  };

  return (
    <>
      <div className={styles.container}>
        <DayCircles
          selectedWeek={selectedWeek}
          selectedDate={selectedDate}
          isDateWithClasses={isDateWithClasses}
          handleDayChange={handleDayChange}
        />
        <DatePicker
          weeks={weeks}
          selectedWeek={selectedWeek}
          handleWeekChange={handleWeekChange}
          selectedDate={selectedDate}
          handleDayChange={handleDayChange}
          isDateWithClasses={isDateWithClasses}
          classesAvailable={classesAvailable}
        />
      </div>
    </>
  );
}
