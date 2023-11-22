import styles from "./App.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

function App() {
  return (
    <div className={styles.App}>
      <Pagination />
    </div>
  );
}

export default App;
