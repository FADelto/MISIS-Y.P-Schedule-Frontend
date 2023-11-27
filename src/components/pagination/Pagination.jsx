import React, { useState, useEffect } from "react";
import styles from "./pagination.module.css";
import DatePicker from "./date-picker/DatePicker";
import DayCircles from "./day-circles/DayCircles";
import { checkClasses, getClasses } from "../../utils/api";
import { getDayOfYear } from "../../utils/dateActions";

export default function Pagination({
  availability,
  setDateRange,
  setChosenDay,
  setLoading,
  setAvailability,
  dateRange,
  setClasses,
}) {
  const today = new Date();
  const weekStart = new Date(today);
  weekStart.setDate(
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
  );
  const [selectedWeek, setSelectedWeek] = useState(weekStart);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [classesAvailable, setClassesAvailable] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    const fetchData = async () => {
      try {
        console.log("Fetching availability...");
        const data = await checkClasses(setLoading);
        console.log("Availability fetched:", data);
        setClassesAvailable(data);
      } catch (error) {
        console.error("Error fetching availability:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log("useEffect triggered");

    const fetchClasses = async () => {
      try {
        console.log("Fetching data...");
        const data = await getClasses(dateRange);
        console.log("Data fetched:", data);
        setClasses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchClasses();
  }, [dateRange]);

  useEffect(() => {
    setClassesAvailable(availability);
  }, []);

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

  useEffect(() => {
    setDateRange({
      firstDate: getDayOfYear(selectedWeek) - 1,
      secondDate: getDayOfYear(selectedWeek) + 7,
    });
  }, [selectedWeek]);

  useEffect(() => {
    setChosenDay((prevChosenDay) => {
      const newChosenDay = getDayOfYear(selectedDate);
      return newChosenDay;
    });
  }, [selectedDate]);

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
