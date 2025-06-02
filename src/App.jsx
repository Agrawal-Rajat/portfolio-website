import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import EducationExperience from "./components/EducationExperience";
import CompanyLogos from "./components/CompanyLogos";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Portfolio />
      <EducationExperience />
      <CompanyLogos />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
