import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceComponent from './pages/attendance/attendanceComponent';
import RequestComponent from './pages/request/requestComponent';

function App() {
  return (
    <>
      <h1>It is App2 </h1>
      <Routes>
        <Route path='attendance' element={<AttendanceComponent />} />
        <Route path='request' element={<RequestComponent />} />
      </Routes>
    </>
  );
}

export default App;
