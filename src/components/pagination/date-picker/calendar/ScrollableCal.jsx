// ScrollableCal.js

import React, { useRef, useState, useEffect } from "react";
import styles from "./calendar.module.css";
import CalendarBlock from "./calendar-block/CalendarBlock";

export default function ScrollableCal({
  startDate,
  endDate,
  currentDay,
  select,
  handleWeekChange,
  isDateWithClasses,
  closeCalendar,
  scrollRef,
}) {
  const monthsInRange = getMonthsInRange(startDate, endDate);

  useEffect(() => {
    // Find the .calendarDiv that corresponds to the current month
    const targetMonthDiv = containerRef.current.querySelector(
      `.${styles.calendarDiv}:nth-child(${
        monthsInRange.findIndex(
          (month) =>
            month.getMonth() === currentDay.getMonth() &&
            month.getFullYear() === currentDay.getFullYear()
        ) + 1
      })`
    );

    // Scroll to the top of the target .calendarDiv
    if (targetMonthDiv) {
      targetMonthDiv.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentDay, monthsInRange]);

  const containerRef = useRef(null);

  const formatDate = (date) => {
    const options = { month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("ru-RU", options);

    const formattedDate = formatter.format(date);

    const capitalized =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return capitalized;
  };

  const handleScroll = (to) => {
    scrollRef.current.scrollTop = 500;
  };

  return (
    <div className={styles.scrollableCalendar}>
      {monthsInRange.map((month, index) => {
        if (
          month.getMonth() === currentDay.getMonth() &&
          month.getFullYear() === currentDay.getFullYear()
        ) {
          {
            /* console.log(containerRef.current);
          console.log(scrollRef.current);
          handleScroll(scrollRef.current); */
          }
          return (
            <div key={index} className={styles.calendarDiv} ref={containerRef}>
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
                scrollTo={scrollTo}
              />
            </div>
          );
        } else {
          return (
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
                scrollTo={scrollTo}
              />
            </div>
          );
        }
      })}
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
