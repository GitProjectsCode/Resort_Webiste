import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MdPool,
  MdLocalParking,
  MdSportsEsports,
  MdRestaurant,
  MdSupportAgent,
  MdSpa,
} from "react-icons/md";
import {
  GiCampfire,
  GiPalmTree,
  GiTreehouse,
} from "react-icons/gi";
import { FEATURES } from "../data/resortData";

const iconMap = {
  MdPool: MdPool,
  GiTreehouse: GiTreehouse,
  MdLocalParking: MdLocalParking,
  MdSportsEsports: MdSportsEsports,
  GiCampfire: GiCampfire,
  MdRestaurant: MdRestaurant,
  MdSupportAgent: MdSupportAgent,
  GiPalmTree: GiPalmTree,
};

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="features section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <div className="section-badge">✦ Our Facilities</div>
          <h2 className="section-title">
            Everything You Need for a{" "}
            <span>Perfect Getaway</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Enjoy world-class amenities in the lap of nature. VD Resort offers
            everything for an unforgettable experience.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {FEATURES.map((feature) => {
            const IconComp = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                className="feature-card"
                variants={cardVariants}
              >
                <div
                  className="feature-icon-wrapper"
                  style={{
                    background: `${feature.color}18`,
                    color: feature.color,
                  }}
                >
                  {IconComp && <IconComp size={28} />}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
