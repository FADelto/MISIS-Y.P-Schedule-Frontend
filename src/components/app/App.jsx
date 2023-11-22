import styles from "./App.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

function App() {
  const [startY, setStartY] = useState(null);
  const [swipe, setSwipe] = useState(false);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (startY !== null) {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      // You can adjust the threshold to determine what constitutes a swipe
      const swipeThreshold = 50;

      if (deltaY > swipeThreshold) {
        setSwipe(true);
        // Do something when swipe down is detected

        // Optional: Reset startY to null to allow for multiple swipes
        setStartY(null);
      } else if (deltaY < -swipeThreshold) {
        setSwipe(false);
        // Do something when swipe up is detected

        // Optional: Reset startY to null to allow for multiple swipes
        setStartY(null);
      }
    }
  };

  return (
    <div
      className={styles.App}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Pagination swipe={swipe} />
    </div>
  );
}

export default App;
