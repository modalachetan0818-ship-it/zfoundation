import React, { useState } from 'react';
import styles from './TopBar.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className={styles.header}>
      {/* 1. Top Orange Info Bar */}
      <div className={styles.topInfoBar}>
        <div className={styles.container}>
          <div className={styles.contactDetails}>
            <div className={styles.infoItem}>
              <IoLocationSharp className={styles.icon} />
              <span>H:NO 1-65/S/469, KAKATIYA HILLS, HYDERABAD</span>
            </div>
            <div className={styles.infoItem}>
              <IoMail className={styles.icon} />
              <span>info[at]ZFoundation.org</span>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <FaFacebookF /> <FaInstagram /> <FaYoutube /> <FaWhatsapp />
          </div>
        </div>
      </div>

      {/* 2. Main Navbar with Z-Foundation Logo */}
      <nav className={styles.mainNav}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Link to="/"><img src="/logo.png" alt="Z-Foundation" className={styles.logoImg} /></Link>
          </div>

          <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.mobileActive : ''}`}>
            <li className={styles.active} onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/Aboutus" className={styles.navLink}>About Us</Link>
            </li>

            <li className={styles.hasDropdown}>
              What We Do <RiArrowDropDownLine className={styles.dropIcon} />
              <ul className={styles.dropdown}>
                <li onClick={() => setIsMobileMenuOpen(false)}><Link to="/WomenEmpowerment" className={styles.navLink}>WomenEmpowerment</Link></li>
                <li onClick={() => setIsMobileMenuOpen(false)}><Link to="/Education" className={styles.navLink}>Education</Link></li>
                <li onClick={() => setIsMobileMenuOpen(false)}><Link to="/ChildNature" className={styles.navLink}>ChildNature</Link></li>
                <li onClick={() => setIsMobileMenuOpen(false)}><Link to="/HumanitarianRelief" className={styles.navLink}>HumanitarianRelief</Link></li>
              </ul>
            </li>

            <li className={styles.hasDropdown}>
              Our Work <RiArrowDropDownLine className={styles.dropIcon} />
              <ul className={styles.dropdown}>
                <li onClick={() => setIsMobileMenuOpen(false)}><Link to="/gallery" className={styles.navLink}>Gallery</Link></li>
                <li onClick={() => setIsMobileMenuOpen(false)}><Link to="/videos" className={styles.navLink}>Videos</Link></li>
                <li onClick={() => setIsMobileMenuOpen(false)}><Link to="/Events" className={styles.navLink}>Events</Link></li>
              </ul>
            </li>


            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/OurProjects" className={styles.navLink}>Our Projects</Link>
            </li>

            <li onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contact" className={styles.navLink}>Contact Us</Link>
            </li>
          </ul>

          <Link to="/Donate" className={styles.donateLink}>
            <button className={styles.donateBtn}>Donate</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;