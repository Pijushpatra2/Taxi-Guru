import React from 'react'
import NavBar from './Common/components/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App
