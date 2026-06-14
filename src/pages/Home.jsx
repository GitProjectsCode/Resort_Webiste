import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Rooms from "../components/Rooms";
import Packages from "../components/Packages";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { RESORT_INFO } from "../data/resortData";

const Home = () => {
  return (
    <div className="page-enter">
      <Navbar />
      <Hero />
      <Features />
      <Rooms />
      <Packages />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi! I want to know more about VD Resort.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Home;
