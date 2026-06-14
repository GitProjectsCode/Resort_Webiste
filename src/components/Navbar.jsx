import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiCalendar,
} from "react-icons/fi";
import { NAV_LINKS, RESORT_INFO } from "../data/resortData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 70;
      const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={() => handleNavClick("#home")}>
            <div className="logo-icon">VD</div>
            <div className="logo-text">
              <span className="logo-main">VD RESORT</span>
              <span className="logo-sub">& Agro Tourism</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="navbar-menu" ref={menuRef}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="navbar-book-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#booking");
              }}
            >
              <FiCalendar size={14} />
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-menu open"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "80%",
              maxWidth: 320,
              height: "100vh",
              background: "rgba(10, 26, 15, 0.98)",
              backdropFilter: "blur(20px)",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "80px 24px 32px",
              gap: 8,
              zIndex: 1000,
              display: "flex",
              boxShadow: "8px 0 40px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ marginBottom: 16 }}>
              <div className="logo-main" style={{ color: "#fff", fontFamily: "Playfair Display, serif", fontSize: "1.2rem", fontWeight: 700 }}>VD RESORT</div>
              <div style={{ color: "#f4a261", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>& Agro Tourism</div>
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{ width: "100%", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "1rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="navbar-book-btn"
              style={{ marginTop: 16, width: "100%", justifyContent: "center", padding: "12px 24px" }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#booking");
              }}
            >
              <FiCalendar size={14} />
              Book Now
            </a>

            <div style={{ marginTop: "auto", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                <FiPhone style={{ color: "#f4a261" }} />
                <a href={`tel:${RESORT_INFO.phone}`} style={{ color: "inherit", textDecoration: "none" }}>{RESORT_INFO.phone}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
