import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { NAV_LINKS, RESORT_INFO } from "../data/resortData";

const Footer = () => {
  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">VD</div>
              <div className="footer-logo-text">
                <div className="logo-main">VD RESORT</div>
                <div className="logo-sub">& Agro Tourism</div>
              </div>
            </div>
            <p className="footer-tagline">
              Experience nature, comfort, and relaxation at Karjat's most
              beloved eco-luxury resort. Where every moment becomes a
              cherished memory.
            </p>
            <div className="footer-social">
              {[
                { icon: <FaFacebook />, href: RESORT_INFO.facebook, label: "Facebook" },
                { icon: <FaInstagram />, href: RESORT_INFO.instagram, label: "Instagram" },
                {
                  icon: <FaWhatsapp />,
                  href: `https://wa.me/${RESORT_INFO.whatsapp}`,
                  label: "WhatsApp",
                },
                { icon: <FaYoutube />, href: "#", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                  >
                    <FiArrowUpRight size={13} />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#booking");
                  }}
                >
                  <FiArrowUpRight size={13} />
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="footer-col-title">Facilities</h4>
            <ul className="footer-links">
              {["Swimming Pool", "Garden Area", "Free Parking", "Bonfire", "Indoor Games", "Delicious Food", "24x7 Support"].map((f) => (
                <li key={f}>
                  <span className="footer-link" style={{ cursor: "default" }}>
                    <FiArrowUpRight size={13} />
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-items">
              <a href={`tel:${RESORT_INFO.phone}`} className="footer-contact-item" style={{ textDecoration: "none" }}>
                <FiPhone size={15} />
                <span>{RESORT_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${RESORT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
                style={{ textDecoration: "none" }}
              >
                <FaWhatsapp size={15} />
                <span>Chat on WhatsApp</span>
              </a>
              <a href={`mailto:${RESORT_INFO.email}`} className="footer-contact-item" style={{ textDecoration: "none" }}>
                <FiMail size={15} />
                <span>{RESORT_INFO.email}</span>
              </a>
              <div className="footer-contact-item">
                <FiMapPin size={15} />
                <span>{RESORT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} VD Resort & Agro Tourism. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
            <a href="#" className="footer-bottom-link">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
