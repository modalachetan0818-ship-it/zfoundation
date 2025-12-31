import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  // Your specific location encoded for Google Maps
  const locationAddress = "H:NO 1-65/S/469,KAKATIYA HILLS, GUTTALA_BEGUMPET, KAVURI HILLS JUBILEE HILLS, HYDERABAD, TELANGANA, 500081";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2423456789!2d78.3892!3d17.4436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x1177e62a2aa968!2sKakatiya%20Hills%2C%20Guttala_Begumpet%2C%20Kavuri%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  return (
    <section className={styles.contactContainer}>
      <div className={styles.wrapper}>
        
        {/* Left Side: Map Section */}
        <div className={styles.mapSection}>
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
        </div>

        {/* Right Side: Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.title}>Contact form</h2>
          <p className={styles.emailHint}>
            Or, you can just send an email: <span>info[at]ZFoundation.org</span>
          </p>

          <form className={styles.form}>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Name" className={styles.input} />
              <input type="email" placeholder="Email" className={styles.input} />
            </div>
            <div className={styles.inputRow}>
              <input type="text" placeholder="Mobile" className={styles.input} />
              <input type="text" placeholder="Subject" className={styles.input} />
            </div>
            <textarea 
              placeholder="How can we help you?" 
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.sendBtn}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;