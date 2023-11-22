import { API_CLASSES_CHECK_URL } from "../constants/api";

export const checkClasses = async (setLoading) => {
  const url = API_CLASSES_CHECK_URL;
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
