import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RESORT_INFO } from "../data/resortData";

const CONTACT_CARDS = [
  {
    id: "phone",
    icon: <FiPhone size={22} />,
    label: "Phone",
    value: RESORT_INFO.phone,
    action: "Call Now",
    href: `tel:${RESORT_INFO.phone}`,
    iconBg: "linear-gradient(135deg, #1a472a, #2d6a4f)",
    iconColor: "#fff",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp size={22} />,
    label: "WhatsApp",
    value: `+91 ${RESORT_INFO.whatsapp}`,
    action: "Chat on WhatsApp",
    href: `https://wa.me/${RESORT_INFO.whatsapp}?text=Hi! I want to know more about VD Resort.`,
    iconBg: "linear-gradient(135deg, #25D366, #128C7E)",
    iconColor: "#fff",
    target: "_blank",
  },
  {
    id: "email",
    icon: <FiMail size={22} />,
    label: "Email",
    value: RESORT_INFO.email,
    action: "Send Email",
    href: `mailto:${RESORT_INFO.email}`,
    iconBg: "linear-gradient(135deg, #c9941a, #f4a261)",
    iconColor: "#fff",
  },
  {
    id: "address",
    icon: <FiMapPin size={22} />,
    label: "Address",
    value: RESORT_INFO.address,
    action: "Get Directions",
    href: "https://maps.google.com?q=Karjat+Maharashtra",
    iconBg: "linear-gradient(135deg, #6c63ff, #a855f7)",
    iconColor: "#fff",
    target: "_blank",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">✦ Get in Touch</div>
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            We'd love to hear from you! Reach out for bookings, inquiries,
            or just to say hello.
          </p>
        </motion.div>

        <div className="contact-wrapper">
          {/* Contact Cards */}
          <motion.div
            className="contact-cards"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {CONTACT_CARDS.map((card) => (
              <motion.a
                key={card.id}
                href={card.href}
                className="contact-card"
                variants={cardVariants}
                target={card.target}
                rel={card.target === "_blank" ? "noopener noreferrer" : undefined}
              >
                <div
                  className="contact-card-icon"
                  style={{
                    background: card.iconBg,
                    color: card.iconColor,
                  }}
                >
                  {card.icon}
                </div>
                <div className="contact-card-body">
                  <p className="contact-card-label">{card.label}</p>
                  <p className="contact-card-value">{card.value}</p>
                  <span className="contact-card-action">
                    {card.action} <FiArrowRight size={12} />
                  </span>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi! I want to book at VD Resort.`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              variants={cardVariants}
            >
              <FaWhatsapp size={24} />
              Chat with Us on WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="map-container">
              <div className="map-header">
                <MdLocationOn size={18} color="var(--secondary)" />
                <div>
                  <div className="map-title">VD Resort & Agro Tourism</div>
                  <div className="map-subtitle">{RESORT_INFO.address}</div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60506.94699424622!2d73.28499897655756!3d18.912534553023374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ec8fd10f0e0f%3A0x4f0f0f0f0f0f0f0f!2sKarjat%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1718337600000!5m2!1sen!2sin"
                title="VD Resort Location - Karjat, Maharashtra"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
