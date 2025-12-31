import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPage}>
      {/* Hero Section with Illustrative Background */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Privacy Policy</h1>
      </div>

      {/* Main Content Card */}
      <div className={styles.contentWrapper}>
        <div className={styles.policyCard}>
          <header className={styles.cardHeader}>
            <h2 className={styles.mainTitle}>Privacy Policy</h2>
            <p className={styles.effectiveDate}>Effective Date: 01-01-2025</p>
            <div className={styles.addressInfo}>
              <strong>Ammani Foundation</strong><br />
              PAIGAH PLAZA, FLAT NO 802, <br />
              LIBERTY X ROAD, BASHEERBAGH, HYDERABAD, Telangana, 500029.<br />
              info[at]ammanifoundation.org<br />
              +91-9398444410
            </div>
          </header>

          <section className={styles.section}>
            <h3>1. Introduction</h3>
            <p>At Ammani Foundation ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with us through our website, events, services, and communications.</p>
          </section>

          <section className={styles.section}>
            <h3>2. Information We Collect</h3>
            <div className={styles.subSection}>
              <h4>a. Personal Information:</h4>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Donation information</li>
                <li>Employment or volunteer application data</li>
              </ul>
            </div>
            <div className={styles.subSection}>
              <h4>b. Non-Personal Information:</h4>
              <ul>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Pages visited</li>
                <li>Time and date of visits</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h3>3. How We Use Your Information</h3>
            <p>We may use the information we collect to:</p>
            <ul>
              <li>Process donations and provide receipts</li>
              <li>Communicate with you about our programs and events</li>
              <li>Respond to inquiries and provide support</li>
              <li>Manage volunteer or employment applications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>4. Sharing Your Information</h3>
            <p>We do <strong>not</strong> sell, rent, or trade your personal information. We may share your information with:</p>
            <ul>
              <li>Service providers assisting in operations (e.g., donation platforms, email services)</li>
              <li>Legal or regulatory authorities when required by law</li>
              <li>Event co-hosts or partners, if applicable (with your consent where required)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3>5. Data Retention</h3>
            <p>We retain your information only as long as necessary for the purposes stated in this policy or as required by law.</p>
          </section>

          <section className={styles.section}>
            <h3>6. Your Rights</h3>
            <p>Depending on your location, you may have rights such as:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Withdrawal of consent</li>
              <li>Objection to processing</li>
            </ul>
            <p>To exercise your rights, contact us at: info[at]ammanifoundation.org</p>
          </section>

          <section className={styles.section}>
            <h3>7. Security</h3>
            <p>We implement appropriate technical and organizational measures to protect your information. However, no method of transmission or storage is 100% secure.</p>
          </section>

          <section className={styles.section}>
            <h3>8. Children's Privacy</h3>
            <p>Our services are not directed to children under the age of 13, and we do not knowingly collect personal data from them.</p>
          </section>

          <section className={styles.section}>
            <h3>9. Third-Party Links</h3>
            <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices or content.</p>
          </section>

          <section className={styles.section}>
            <h3>10. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
          </section>

          <footer className={styles.section}>
            <h3>11. Contact Us</h3>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <div className={styles.finalContact}>
              <p>📧 info[at]ammanifoundation[dot]org</p>
              <p>📍 PAIGAH PLAZA, FLAT NO 802, LIBERTY X ROAD, BASHEERBAGH, HYDERABAD, Telangana, 500029.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;