export const getDayOfYear = (date) => {
  const dateObj = new Date(date);
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = dateObj - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1;
  return dayOfYear;
};
export const getCurrentWeekDates = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(
    today.getDate() - currentDay + (currentDay === 0 ? -6 : 1)
  ); // Start from Monday
  const endOfWeek = new Date(today);
  endOfWeek.setDate(
    today.getDate() - currentDay + 7 + (currentDay === 0 ? -6 : 0)
  ); // End on Sunday

  return {
    firstDate: getDayOfYear(startOfWeek) - 1,
    secondDate: getDayOfYear(endOfWeek) + 1,
  };
};

export const isDateWithClasses = (date, day, classes) => {
  let dateObj = new Date(date);
  if (day) {
    dateObj.setDate(day);
  }
  const dayOfYear = getDayOfYear(dateObj);
  const hasClasses = classes.includes(dayOfYear);
  return hasClasses;
};
