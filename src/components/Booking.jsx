import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiUser,
  FiPhone,
  FiCalendar,
  FiUsers,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { RESORT_INFO } from "../data/resortData";

const initialForm = {
  name: "",
  mobile: "",
  checkin: "",
  checkout: "",
  guests: "",
  requirements: "",
};

const initialErrors = {};

const Booking = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = "Please enter your full name (min 2 chars)";
    if (!form.mobile.match(/^[6-9]\d{9}$/))
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!form.checkin) newErrors.checkin = "Please select check-in date";
    if (!form.checkout) newErrors.checkout = "Please select check-out date";
    if (form.checkin && form.checkout && form.checkout <= form.checkin)
      newErrors.checkout = "Check-out must be after check-in";
    if (!form.guests || form.guests < 1 || form.guests > 50)
      newErrors.guests = "Enter number of guests (1–50)";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    // Simulate API call and redirect to WhatsApp
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      const msg = `Hi! I want to book at VD Resort.
Name: ${form.name}
Mobile: ${form.mobile}
Check-In: ${form.checkin}
Check-Out: ${form.checkout}
Guests: ${form.guests}
Requirements: ${form.requirements || "None"}`;

      window.open(
        `https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );

      setTimeout(() => {
        setSubmitted(false);
        setForm(initialForm);
      }, 4000);
    }, 1000);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="booking section-padding">
      <div className="container">
        <div className="booking-wrapper" ref={ref}>
          {/* Info Side */}
          <motion.div
            className="booking-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-badge">✦ Make a Reservation</div>
            <h2 className="section-title">
              Book Your Dream <span>Vacation Today</span>
            </h2>
            <div className="divider" style={{ margin: "1rem 0" }} />
            <p className="booking-info-text">
              Ready to experience the magic of VD Resort? Fill in your details
              and we'll get back to you within 30 minutes. Enjoy nature,
              luxury, and unforgettable memories.
            </p>

            <div className="booking-contact-quick">
              {[
                {
                  icon: <FiPhone />,
                  label: "Call Us",
                  value: RESORT_INFO.phone,
                  href: `tel:${RESORT_INFO.phone}`,
                },
                {
                  icon: "📱",
                  label: "WhatsApp",
                  value: `+91 ${RESORT_INFO.whatsapp}`,
                  href: `https://wa.me/${RESORT_INFO.whatsapp}`,
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: RESORT_INFO.email,
                  href: `mailto:${RESORT_INFO.email}`,
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: RESORT_INFO.address,
                  href: "#contact",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="quick-contact-item"
                  style={{ textDecoration: "none" }}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginBottom: 2 }}>
                      {item.label}
                    </div>
                    <div style={{ fontWeight: 500 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="booking-form-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="booking-form-title">📅 Reserve Your Stay</h3>

            {submitted ? (
              <div className="form-success-msg">
                <FiCheckCircle size={20} />
                Booking request sent! Opening WhatsApp...
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="booking-name">
                    <FiUser size={14} /> Full Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "error" : ""}`}
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={60}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                {/* Mobile */}
                <div className="form-group">
                  <label className="form-label" htmlFor="booking-mobile">
                    <FiPhone size={14} /> Mobile Number *
                  </label>
                  <input
                    id="booking-mobile"
                    type="tel"
                    name="mobile"
                    className={`form-control ${errors.mobile ? "error" : ""}`}
                    placeholder="10-digit mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                    maxLength={10}
                  />
                  {errors.mobile && <span className="form-error">{errors.mobile}</span>}
                </div>

                {/* Date Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-checkin">
                      <FiCalendar size={14} /> Check-In *
                    </label>
                    <input
                      id="booking-checkin"
                      type="date"
                      name="checkin"
                      className={`form-control ${errors.checkin ? "error" : ""}`}
                      value={form.checkin}
                      min={today}
                      onChange={handleChange}
                    />
                    {errors.checkin && <span className="form-error">{errors.checkin}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-checkout">
                      <FiCalendar size={14} /> Check-Out *
                    </label>
                    <input
                      id="booking-checkout"
                      type="date"
                      name="checkout"
                      className={`form-control ${errors.checkout ? "error" : ""}`}
                      value={form.checkout}
                      min={form.checkin || today}
                      onChange={handleChange}
                    />
                    {errors.checkout && <span className="form-error">{errors.checkout}</span>}
                  </div>
                </div>

                {/* Guests */}
                <div className="form-group">
                  <label className="form-label" htmlFor="booking-guests">
                    <FiUsers size={14} /> Number of Guests *
                  </label>
                  <input
                    id="booking-guests"
                    type="number"
                    name="guests"
                    className={`form-control ${errors.guests ? "error" : ""}`}
                    placeholder="e.g. 4"
                    value={form.guests}
                    onChange={handleChange}
                    min={1}
                    max={50}
                  />
                  {errors.guests && <span className="form-error">{errors.guests}</span>}
                </div>

                {/* Requirements */}
                <div className="form-group">
                  <label className="form-label" htmlFor="booking-requirements">
                    <FiMessageSquare size={14} /> Special Requirements
                  </label>
                  <textarea
                    id="booking-requirements"
                    name="requirements"
                    className="form-control"
                    placeholder="Any special requests, dietary needs, celebration arrangements..."
                    value={form.requirements}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary booking-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>⏳ Processing...</>
                  ) : (
                    <>
                      <FiSend size={16} /> Submit Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
