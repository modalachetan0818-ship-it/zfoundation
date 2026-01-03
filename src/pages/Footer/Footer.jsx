
import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'; // Added this import
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  const handleGetDirection = () => {
    const address = "H:NO 1-65/S/469, KAKATIYA HILLS, GUTTALA_BEGUMPET, KAVURI HILLS, JUBILEE HILLS, HYDERABAD, TELANGANA, 500081";
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          {/* Column 1: Logo and Mission */}
          <div className={styles.column}>
            <div className={styles.logoWrapper}>
              <img src="/logo.png" alt="Z-Foundation" className={styles.footerLogo} />
            </div>
            <p className={styles.missionText}>
              On a mission to build a better tomorrow through education, empowerment, and empathy.
            </p>
          </div>

          {/* Column 2: Quick Links - Navigation Added Here */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact Information</h3>
            <div className={styles.contactItem}>
              <IoCallOutline className={styles.contactIcon} />
              <span>93******10 / 91******00</span>
            </div>
            <div className={styles.contactItem}>
              <IoMailOutline className={styles.contactIcon} />
              <span>info[at]ZFoundation.org</span>
            </div>
            <div className={styles.contactItem}>
              <IoLocationOutline className={styles.contactIcon} />
              <span>
                H:NO 1-65/S/469,KAKATIYA HILLS ,GUTTALA_BEGUMPET,KAVURI HILLS  <br />
                JUBILEE HILLS, HYDERABAD, <br />
                TELANGANA, 500081.
              </span>
            </div>
            <button className={styles.directionBtn} onClick={handleGetDirection}>Get Direction</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Stats */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.copyright}>
            Copyright © 2023 Z FOUNDATION Designed & Developed By Akhil Kumar Bejjenki
          </div>

          {/* <div className={styles.stats}>
            <span className={styles.statBox}>Unique Views : 1848</span>
            <span className={styles.statBox}>Website Views : 4888</span>
          </div> */}

          <div className={styles.socialIcons}>
            <div className={styles.iconCircle}><FaFacebookF /></div>
            <div className={styles.iconCircle}><FaInstagram /></div>
            <div className={styles.iconCircle}><FaYoutube /></div>
            <div className={styles.iconCircle}><FaWhatsapp /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;