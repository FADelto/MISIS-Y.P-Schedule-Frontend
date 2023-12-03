import React, { useState } from "react";
import styles from "./pagination.module.css";
import DatePicker from "./date-picker/DatePicker";
import DayCircles from "./day-circles/DayCircles";

export default function Pagination() {
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
  );
  const [selectedWeek, setSelectedWeek] = useState(weekStart);
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  const isDateWithClasses = (date) => {
    const hasClasses = Math.random() < 0.5;
    return hasClasses;
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
        />
      </div>
    </>
  );
}
