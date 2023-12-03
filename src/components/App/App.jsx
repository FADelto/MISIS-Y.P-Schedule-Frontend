import { useState } from 'react';
import News from '../News/News';
import Schedule from '../Schedule/Schedule';
import Navbar from '../Navbar/Navbar';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Tasks from '../Tasks/Tasks';
import Settings from '../Settings/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('schedule');

  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/news" element={<News />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/> 
    </div>
  );
}

export default App;
