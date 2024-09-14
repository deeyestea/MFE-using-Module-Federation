import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
import DashboardComponent from "../pages/dashboard/dashboarComponent";
const Container1 = lazy(() => import("app1/Container1"))
const Container2 = lazy(() => import("app2/Container2"))

const Layout = () => {

  return (
    <div className='layout'>
      <Router>
        <div>
          <Header />
        </div>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ width: "100%", backgroundColor: "rgb(231 237 238)", color: "#000", paddingTop: "2rem" }}>
            <Routes>
              <Route path='/' element={
                <Suspense fallback={'Loading'}> <DashboardComponent /> </Suspense>} />
              <Route path='/app1/*' element={
                <Suspense fallback={'Loading'}> <Container1 /></Suspense>} />
              <Route path='/app2/*' element={
                <Suspense fallback={'Loading'}> <Container2 /></Suspense>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Layout