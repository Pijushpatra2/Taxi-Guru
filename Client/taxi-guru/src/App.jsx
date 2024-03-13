import NavBar from "./Common/components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Services from "./Pages/ServicesPage/Services";

import ServiceC2D from "./Pages/ServicesPage/ServiceC2D";
import ServiceC2H from "./Pages/ServicesPage/ServiceC2H";
import ServiceC2P from "./Pages/ServicesPage/ServiceC2P";
import ServiceC2HP from "./Pages/ServicesPage/ServiceC2HP";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Slider from "./Pages/ServicesPage/components/Slider";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/services">
            <Route index={true} element={<Services />} />

            <Route path="C2D" element={<ServiceC2D />} />
            <Route path="C2H" element={<ServiceC2H />} />
            <Route path="C2P" element={<ServiceC2P />} />
            <Route path="C2HP" element={<ServiceC2HP />} />
 
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
