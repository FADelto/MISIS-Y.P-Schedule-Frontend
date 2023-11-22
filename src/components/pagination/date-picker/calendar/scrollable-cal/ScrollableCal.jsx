// ScrollableCal.js

import React from "react";
import styles from "../calendar.module.css";
import CalendarBlock from "../calendar-block/CalendarBlock";

export default function ScrollableCal({
  startDate,
  endDate,
  currentDay,
  select,
  handleWeekChange,
  isDateWithClasses,
  closeCalendar,
}) {
  const monthsInRange = getMonthsInRange(startDate, endDate);
  const formatDate = (date) => {
    const options = { month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("ru-RU", options);

    const formattedDate = formatter.format(date);

    const capitalized =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return capitalized;
  };
  return (
    <div className={styles.scrollableCalendar}>
      {monthsInRange.map((month, index) => (
        <div key={index} className={styles.calendarDiv}>
          <div className={styles.month}>
            <span>{formatDate(month)}</span>
          </div>

          <CalendarBlock
            date={month}
            currentDay={currentDay}
            select={select}
            handleWeekChange={handleWeekChange}
            isDateWithClasses={isDateWithClasses}
            closeCalendar={closeCalendar}
          />
        </div>
      ))}
    </div>
  );
}

function getMonthsInRange(startDate, endDate) {
  const months = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    months.push(new Date(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
}
