import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';
import { IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <div className={styles.contactPage}>
      {/* 1. MOVED OUTSIDE CONTAINER FOR FULL SCREEN WIDTH */}
      <div className={styles.heroBanner}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, letterSpacing: "15px" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "4px" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className={styles.heroTitle}>
          CONTACT US
        </motion.h1>
      </div>

      <div className={styles.container}>
        <div className={styles.contactCard}>
          {/* Left Side: Information Box */}
          <div className={styles.infoBox}>
            <h2 className={styles.infoHeading}>Contact Us if You have Questions or Suggestions</h2>
            <p className={styles.infoSubtext}>
              As the world leader in volunteerism we feel a responsibility to unite our broader community, and to use this moment to become stronger.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <IoCallOutline className={styles.icon} />
                <span>93******10 / 91******00</span>
              </div>
              <div className={styles.detailItem}>
                <IoMailOutline className={styles.icon} />
                <span>info[at]ZFoundation.org</span>
              </div>
              <div className={styles.detailItem}>
                <IoLocationOutline className={styles.icon} />
                <span>
                  Kakatiya Hills, Guttala_Begumpet, Kavuri Hills Jubilee Hills,<br />
                  Hyderabad, Telangana, 500081
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className={styles.formBox}>
            <h2 className={styles.formHeading}>Contact</h2>
            <p className={styles.requiredLabel}>* Required</p>

            <form className={styles.form}>
              <input type="text" placeholder="Name *" className={styles.input} required />
              <input type="email" placeholder="Email *" className={styles.input} required />
              <input type="tel" placeholder="Mobile *" className={styles.input} required />
              <input type="text" placeholder="Subject *" className={styles.input} required />
              <textarea placeholder="Message *" className={styles.textarea} rows="4" required></textarea>

              <div className={styles.btnWrapper}>
                <button type="submit" className={styles.submitBtn}>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <h2 className={styles.mapHeading}>Contact Us using Below Map</h2>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.242224021284!2d78.388832!3d17.447118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f24001d5%3A0x1234567890abcdef!2sKakatiya+Hills!5e0!3m2!1sen!2sin!4v1704278400000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="ZFoundation Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;