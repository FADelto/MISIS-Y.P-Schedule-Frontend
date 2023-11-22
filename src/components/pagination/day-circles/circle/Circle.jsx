import React from "react";
import styles from "../dayCircles.module.css";

export default function Circle({
  day,
  isDateWithClasses,
  isSelected,
  handleDayChange,
}) {
  const handleClick = () => {
    handleDayChange(day);
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.dayCircle} ${
        isDateWithClasses(day) ? styles.hasClasses : ""
      } ${isSelected ? styles.selected : ""}`}
    >
      {day.getDate()}
    </div>
  );
}
