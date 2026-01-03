import React from 'react';
import styles from './TopBar.module.css';
import { Link } from 'react-router-dom'; // 1. Add this import
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';

const TopBar = () => {
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
            {/* Wrap logo in Link to go home */}
            <Link to="/"><img src="/logo.png" alt="Z-Foundation" className={styles.logoImg} /></Link>
          </div>

          <ul className={styles.navMenu}>
            {/* 2. Wrap menu items in Links */}
            <li className={styles.active}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/Aboutus" className={styles.navLink}>About Us</Link>
            </li>

            <li className={styles.hasDropdown}>
              What We Do <RiArrowDropDownLine className={styles.dropIcon} />
              <ul className={styles.dropdown}>
                <li><Link to="/WomenEmpowerment" className={styles.navLink}>WomenEmpowerment</Link></li>
                <li><Link to="/Education" className={styles.navLink}>Education</Link></li>
                <li><Link to="/ChildNature" className={styles.navLink}>ChildNature</Link></li>
                <li><Link to="/HumanitarianRelief" className={styles.navLink}>HumanitarianRelief</Link></li>
              </ul>
            </li>

            <li className={styles.hasDropdown}>
              Our Work <RiArrowDropDownLine className={styles.dropIcon} />
              <ul className={styles.dropdown}>
                <li><Link to="/gallery" className={styles.navLink}>Gallery</Link></li>
                <li><Link to="/videos" className={styles.navLink}>Videos</Link></li>
                <li><Link to="/Events" className={styles.navLink}>Events</Link></li>
              </ul>
            </li>


            <li>
              <Link to="/OurProjects" className={styles.navLink}>Our Projects</Link>
            </li>

            <li>
              <Link to="/contact" className={styles.navLink}>Contact Us</Link>
            </li>
          </ul>

          <Link to="/Donate">
            <button className={styles.donateBtn}>Donate</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;