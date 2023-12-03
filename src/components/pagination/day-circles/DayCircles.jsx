import React from "react";
import styles from "./dayCircles.module.css";
import Circle from "./circle/Circle";

export default function DayCircles({
  selectedWeek,
  selectedDate,
  isDateWithClasses,
  handleDayChange,
}) {
  const days = [];
  const startOfWeek = new Date(selectedWeek);
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(startOfWeek);
    currentDay.setDate(startOfWeek.getDate() + i);
    days.push(currentDay);
  }
  return (
    <div className={styles.dayCirclesContainer}>
      {days.map((day, index) => {
        return (
          <Circle
            key={index}
            day={day}
            isDateWithClasses={isDateWithClasses}
            isSelected={day.getDate() === selectedDate.getDate()}
            handleDayChange={handleDayChange}
          />
        );
      })}
    </div>
  );
}
