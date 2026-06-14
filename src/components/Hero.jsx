import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const HERO_BG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85";

const Hero = () => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) setLoaded(true);
  }, []);

  const scrollToFeatures = () => {
    document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <img
          ref={imgRef}
          src={HERO_BG}
          alt="VD Resort - Luxury Nature Retreat"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <MdLocationOn size={14} />
          Karjat, Maharashtra
        </motion.div>

        <motion.p variants={itemVariants} className="hero-eyebrow">
          Welcome to
        </motion.p>

        <motion.h1 variants={itemVariants} className="hero-title">
          VD RESORT
          <span>& Agro Tourism</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Experience Nature, Comfort & Relaxation. Escape the city and immerse
          yourself in lush green surroundings with world-class amenities.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-actions">
          <button className="btn btn-primary" onClick={scrollToBooking}>
            Book Your Stay
          </button>
          <button className="btn btn-secondary" onClick={scrollToFeatures}>
            Explore Resort
          </button>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {[
          { number: "4+", label: "Luxury Rooms" },
          { number: "500+", label: "Happy Guests" },
          { number: "5★", label: "Rating" },
        ].map((stat) => (
          <div key={stat.label} className="hero-stat">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        className="hero-scroll"
        onClick={scrollToFeatures}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ background: "none", border: "none" }}
      >
        <span className="scroll-line" />
        Scroll
      </motion.button>
    </section>
  );
};

export default Hero;
