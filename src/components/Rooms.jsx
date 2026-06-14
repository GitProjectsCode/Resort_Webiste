import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiUsers, FiWifi, FiDroplet } from "react-icons/fi";
import { MdAir, MdTv, MdBalcony } from "react-icons/md";
import { GiShower } from "react-icons/gi";
import { ROOMS } from "../data/resortData";

const amenityIcons = {
  "Attached Bathroom": <GiShower size={13} />,
  "Hot Water": <FiDroplet size={13} />,
  WiFi: <FiWifi size={13} />,
  TV: <MdTv size={13} />,
  Balcony: <MdBalcony size={13} />,
  Fan: <MdAir size={13} />,
  "Mini Bar": <span style={{ fontSize: 12 }}>🍸</span>,
  "Living Area": <span style={{ fontSize: 12 }}>🛋️</span>,
  "Nature View": <span style={{ fontSize: 12 }}>🌿</span>,
};

const Rooms = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleViewDetails = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rooms" className="rooms section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">✦ Accommodation</div>
          <h2 className="section-title">
            Our <span>Luxury Rooms</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Each room is thoughtfully designed to offer comfort, style, and
            a deep connection with nature — perfect for families, couples, and groups.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          className="rooms-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {ROOMS.map((room) => (
            <motion.div
              key={room.id}
              className="room-card"
              variants={cardVariants}
            >
              {/* Image */}
              <div className="room-image-wrapper">
                <img src={room.image} alt={room.name} loading="lazy" />
                <div className="room-badge">{room.type}</div>
                <div className="room-overlay" />
              </div>

              {/* Body */}
              <div className="room-body">
                <div className="room-header">
                  <h3 className="room-name">{room.name}</h3>
                  <span className="room-price">{room.price}</span>
                </div>

                <div className="room-meta">
                  <div className="room-meta-item">
                    <FiUsers size={14} />
                    {room.capacity}
                  </div>
                  <div className="room-meta-item">
                    <MdAir size={14} />
                    {room.type}
                  </div>
                </div>

                <p className="room-description">{room.description}</p>

                <div className="room-amenities">
                  {room.amenities.map((amenity) => (
                    <span key={amenity} className="amenity-tag">
                      {amenityIcons[amenity] || "✓"} {amenity}
                    </span>
                  ))}
                </div>

                <button
                  className="btn btn-green"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={handleViewDetails}
                >
                  View Details & Book
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "2rem",
            color: "var(--gray-400)",
            fontSize: "var(--text-sm)",
          }}
        >
          * All rooms accommodate up to 5 persons. Contact us for group bookings.
        </motion.p>
      </div>
    </section>
  );
};

export default Rooms;
