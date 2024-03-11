import React from "react";
import NavBar from "./Common/components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Service1 from "./Pages/ServicesPage/Service1";
import Service2 from "./Pages/ServicesPage/Service2";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Slider from "./Pages/ServicesPage/components/Slider";
// test
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/services">
            <Route index={true} element={<Service1 />} />
            <Route path="2" element={<Service2 />} />
            <Route path="3" element={<Service2 />} />
            <Route path="4" element={<Service2 />} />
            <Route path="5" element={<Service2 />} />
          </Route>
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
