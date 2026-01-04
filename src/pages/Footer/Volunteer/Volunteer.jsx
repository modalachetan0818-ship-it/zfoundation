import React from 'react';
import styles from './Volunteer.module.css';
import { motion } from 'framer-motion';

const Volunteer = () => {
  return (
    <>
      <div className={styles.heroBanner}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, letterSpacing: "15px" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "4px" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className={styles.heroTitle}
        >
          VOLUNTEER
        </motion.h1>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.formContainer}>
          {/* Header with Logo */}
          <div className={styles.header}>
            <img src="/logo.png" alt="Z Foundation" className={styles.logo} />
            <h2 className={styles.welcomeText}>We are glad to see you take this step</h2>
          </div>

          <form className={styles.form}>
            {/* Section: Personal Info */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Personal Info</h3>
              <div className={styles.inputRow}>
                <input type="text" placeholder="First Name" className={styles.input} required />
                <input type="text" placeholder="Last Name" className={styles.input} required />
              </div>
            </div>

            {/* Section: Profession & Gender */}
            <div className={styles.inputRow}>
              <div className={styles.column}>
                <h3 className={styles.sectionTitle}>Profession</h3>
                <label className={styles.radioLabel}><input type="radio" name="profession" value="employee" /> Employee</label>
                <label className={styles.radioLabel}><input type="radio" name="profession" value="student" /> Student</label>
                <label className={styles.radioLabel}><input type="radio" name="profession" value="business" /> Business</label>
              </div>
              <div className={styles.column}>
                <h3 className={styles.sectionTitle}>Gender</h3>
                <label className={styles.radioLabel}><input type="radio" name="gender" value="male" /> Male</label>
                <label className={styles.radioLabel}><input type="radio" name="gender" value="female" /> Female</label>
              </div>
            </div>

            {/* Section: Contact Details */}
            <div className={styles.inputRow}>
              <input type="tel" placeholder="Mobile Number" className={styles.input} required />
              <input type="tel" placeholder="Alternate Mobile Number" className={styles.input} />
            </div>
            <input type="email" placeholder="Email" className={styles.inputFull} required />
            <textarea placeholder="Address" className={styles.textarea} rows="3"></textarea>
            <input type="text" placeholder="Preferred Working Time" className={styles.inputFull} />

            {/* Section: Skills/Areas to Volunteer */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Please Indicate areas to volunteer according to your skills</h3>
              <div className={styles.checkboxGrid}>
                <label className={styles.radioLabel}><input type="checkbox" /> Women Empowerment</label>
                <label className={styles.radioLabel}><input type="checkbox" /> Education</label>
                <label className={styles.radioLabel}><input type="checkbox" /> Home for senior citizens</label>
                <label className={styles.radioLabel}><input type="checkbox" /> Child Nutrition</label>
                <label className={styles.radioLabel}><input type="checkbox" /> Humanitarian Relief</label>
                <label className={styles.radioLabel}><input type="checkbox" /> Others</label>
              </div>
            </div>

            {/* Section: Experience & Comments */}
            <textarea placeholder="Any Previous Experience / NGO Activities" className={styles.textarea} rows="3"></textarea>
            <textarea placeholder="Comments" className={styles.textarea} rows="3"></textarea>

            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Volunteer;