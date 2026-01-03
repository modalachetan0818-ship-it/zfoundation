import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2423456789!2d78.3892!3d17.4436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x1177e62a2aa968!2sKakatiya%20Hills%2C%20Guttala_Begumpet%2C%20Kavuri%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  // Animation Variants
  const leftSlide = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const rightSlide = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, subject, message } = formData;

    // Simple validation: Ensure all fields are filled
    if (!name || !email || !mobile || !subject || !message) {
      alert("Required Details Missing");
    } else {
      alert("Contacted Z Foundation Successfully");
      // Optional: Clear form after success
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <section className={styles.contactContainer}>
      {/* motion.div wrapper to trigger animation on scroll */}
      <motion.div
        className={styles.wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
      >

        {/* Left Side: Map Section - Slides from Left */}
        <motion.div className={styles.mapSection} variants={leftSlide}>
          <h2 className={styles.title}>Contact Us using Below Map</h2>
          <div className={styles.mapCard}>
            <iframe
              title="ZFoundation Location"
              src={mapUrl}
              className={styles.iframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Right Side: Form Section - Slides from Right */}
        <motion.div className={styles.formSection} variants={rightSlide}>
          <h2 className={styles.title}>Contact form</h2>
          <p className={styles.emailHint}>
            Or, you can just send an email: <span>info[at]ZFoundation.org</span>
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputRow}>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                className={styles.input}
                value={formData.mobile}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={styles.input}
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="How can we help you?"
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className={styles.sendBtn}>
              Send Message
            </button>
          </form>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ContactUsForm;