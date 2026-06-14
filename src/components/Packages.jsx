import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheck, FiPhone } from "react-icons/fi";
import { MdWbSunny, MdNightlight } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { PACKAGES, RESORT_INFO } from "../data/resortData";

const packageIcons = [
  <MdWbSunny size={36} color="rgba(255,255,255,0.9)" />,
  <MdNightlight size={36} color="rgba(255,255,255,0.9)" />,
  <HiUserGroup size={36} color="rgba(255,255,255,0.9)" />,
];

const Packages = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="packages" className="packages section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">✦ Our Packages</div>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Choose Your <span>Perfect Package</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.6)", margin: "0 auto" }}>
            Tailored experiences for every occasion — from family day picnics to
            romantic night stays and corporate group events.
          </p>
        </motion.div>

        {/* Package Cards */}
        <motion.div
          className="packages-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              className={`package-card ${pkg.popular ? "popular" : ""}`}
              variants={cardVariants}
            >
              {/* Header */}
              <div
                className="package-header"
                style={{ background: pkg.gradient }}
              >
                {pkg.popular && (
                  <span className="popular-badge">⭐ Most Popular</span>
                )}
                <div className="package-icon">{packageIcons[idx]}</div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-subtitle">{pkg.subtitle}</p>
                <div className="package-price">
                  <span className="price-amount">{pkg.price}</span>
                  <span className="price-unit">{pkg.unit}</span>
                </div>
                <div className="package-timing">⏰ {pkg.timing}</div>
              </div>

              {/* Body */}
              <div className="package-body">
                <p className="package-includes-title">What's Included</p>
                <ul className="package-includes">
                  {pkg.includes.map((item) => (
                    <li key={item} className="package-include-item">
                      <div
                        className="include-icon"
                        style={{ background: pkg.color }}
                      >
                        <FiCheck size={11} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${RESORT_INFO.whatsapp}?text=Hi! I'm interested in the ${pkg.name} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    background: pkg.gradient,
                    boxShadow: `0 6px 20px ${pkg.color}40`,
                  }}
                >
                  Book This Package
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enquiry Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--text-sm)", marginBottom: "0.75rem" }}>
            Need a custom package for corporate events, birthday parties, or weddings?
          </p>
          <a
            href={`tel:${RESORT_INFO.phone}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#f4a261",
              fontWeight: 600,
              fontSize: "var(--text-base)",
              textDecoration: "none",
            }}
          >
            <FiPhone /> Call Us: {RESORT_INFO.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
