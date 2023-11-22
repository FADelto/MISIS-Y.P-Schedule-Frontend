import React, { useState } from "react";
import styles from "./calendar.module.css";
import CalendarNav from "./calendar-nav/CalendarNav";
import CalendarBlock from "./calendar-block/CalendarBlock";

function Calendar({
  handleWeekChange,
  selectedDate,
  handleDayChange,
  isDateWithClasses,
}) {
  const [date, setDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date());
  //const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevClick = () => {
    handleDayChange(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const handleNextClick = () => {
    handleDayChange(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  return (
    <main className={styles.calendarPageContainer}>
      <CalendarBlock
        date={selectedDate}
        setDate={handleDayChange}
        currentDay={selectedDate}
        select={handleDayChange}
        handleWeekChange={handleWeekChange}
        isDateWithClasses={isDateWithClasses}
      />
      <section className={styles.navButtons}>
        <CalendarNav onPrevClick={handlePrevClick} />
        <CalendarNav onNextClick={handleNextClick} />
      </section>
    </main>
  );
}

export default Calendar;
