import React, { useState } from "react";
import styles from "./calendar.module.css";
import CalendarNav from "./calendar-nav/CalendarNav";
import CalendarBlock from "./calendar-block/CalendarBlock";
import ScrollableCalendar from "./scrollable-cal/ScrollableCal";

function Calendar({
  handleWeekChange,
  selectedDate,
  handleDayChange,
  isDateWithClasses,
  closeCalendar,
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

  const startDate = new Date(2023, 0, 1); // January 1, 2023
  const endDate = new Date(2023, 11, 31); // December 31, 2023

  return (
    <main className={styles.calendarPageContainer}>
      {/* <CalendarBlock
        date={selectedDate}
        setDate={handleDayChange}
        currentDay={selectedDate}
        select={handleDayChange}
        handleWeekChange={handleWeekChange}
        isDateWithClasses={isDateWithClasses}
      /> */}

      <ScrollableCalendar
        startDate={startDate}
        endDate={endDate}
        currentDay={selectedDate}
        select={handleDayChange}
        handleWeekChange={handleWeekChange}
        isDateWithClasses={isDateWithClasses}
        closeCalendar={closeCalendar}
      />
      {/* <section className={styles.navButtons}>
        <CalendarNav onPrevClick={handlePrevClick} />
        <CalendarNav onNextClick={handleNextClick} />
      </section> */}
    </main>
  );
}

export default Calendar;
