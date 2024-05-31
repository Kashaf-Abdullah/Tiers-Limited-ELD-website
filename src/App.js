import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbarr from "./components/Navbarr";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import NavSocialLink from "./components/NavSocialLink";
import ELD_devices from "./pages/ELD_devices";
import BenefitPage from "./pages/BenefitPage";
import FeaturesPage from "./pages/FeaturesPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPost from "./components/BlogPost";
function App() {
  return (
    <Router>
    <NavSocialLink/>
      <Navbarr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eld-devices" element={<ELD_devices />} />
        <Route path="/benefit" element={<BenefitPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogPost/>} />

         </Routes>
    </Router>
  );
}
export default App;
