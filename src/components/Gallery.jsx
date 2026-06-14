import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import { GALLERY_IMAGES } from "../data/resortData";

const CATEGORIES = ["all", "pool", "rooms", "garden", "food", "resort"];

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    setLightboxIndex((p) => (p > 0 ? p - 1 : filtered.length - 1));
  };

  const nextImage = () => {
    setLightboxIndex((p) => (p < filtered.length - 1 ? p + 1 : 0));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filtered.length]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">✦ Photo Gallery</div>
          <h2 className="section-title">
            Glimpse of <span>Paradise</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Browse through our collection of resort photos — from lush gardens
            and sparkling pools to cozy rooms and mouth-watering food.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="gallery-grid"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              variants={itemVariants}
              onClick={() => openLightbox(index)}
              layout
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  height: index % 3 === 0 ? "220px" : index % 3 === 1 ? "180px" : "260px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <div className="gallery-item-overlay">
                <FiZoomIn className="gallery-zoom-icon" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.alt}
              />

              <button className="lightbox-close" onClick={closeLightbox}>
                <FiX size={24} />
              </button>

              <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
                <FiChevronLeft size={20} />
              </button>

              <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                <FiChevronRight size={20} />
              </button>

              {/* Counter */}
              <div
                style={{
                  position: "absolute",
                  bottom: -36,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.8rem",
                  whiteSpace: "nowrap",
                }}
              >
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
