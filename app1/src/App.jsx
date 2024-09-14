import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form16Component from './pages/form16/form16Component';
import PayslipsComponent from './pages/payslips/payslipsComponent';

function App() {
  return (
    <>
    <h1>It is App1 </h1>
    <Routes>
      <Route path='form16' element={<Form16Component />} />
      <Route path='payslips' element={<PayslipsComponent />} />
    </Routes>
  </>
  );
}

export default App;
