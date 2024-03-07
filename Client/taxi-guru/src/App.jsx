import React from 'react'
import NavBar from './Common/components/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Service1 from './Pages/ServicesPage/Service1';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
// test
//test2
function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<Service1 />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App
