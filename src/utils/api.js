import { API_SCHEDULE, API_AVAILABILITY } from "../constants/api";

export const checkClasses = async (setLoading) => {
  const url = API_SCHEDULE + API_AVAILABILITY;
  try {
    setLoading(true);
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const err = await response.json();
      throw err;
    }
  } catch (e) {
    console.error("Error checking the schedule... ", e);
    throw e;
  } finally {
    setLoading(false);
  }
};

export const getClasses = async (dateRange) => {
  const url = new URL(API_SCHEDULE);
  url.search = new URLSearchParams(dateRange);
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const err = await response.json();
      throw err;
    }
  } catch (e) {
    console.error("Error checking the schedule... ", e);
    throw e;
  }
};
