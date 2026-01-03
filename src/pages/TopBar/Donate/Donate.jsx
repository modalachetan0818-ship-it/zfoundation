import React from 'react';
import { motion } from 'framer-motion';
import { BsBank2 } from "react-icons/bs";
import styles from './Donate.module.css';

const Donate = () => {
  // Animation variants
  const cardEntry = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const formItems = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className={styles.donatePage}>
      <div className={styles.container}>

        {/* Left Side: Bank Details */}
        <motion.div
          variants={cardEntry} initial="hidden" animate="visible"
          className={styles.bankCard}
        >
          <div className={styles.bankIconHeader}>
            <div className={styles.iconCircle}>
            <BsBank2 />
            </div>
            <h2 className={styles.bankTitle}>Bank Account Details</h2>
          </div>
          <div className={styles.bankInfoList}>
            <div className={styles.bankItem}><strong>Z Foundation</strong></div>
            <div className={styles.bankItem}>A/C No: 50200057895032</div>
            <div className={styles.bankItem}>IFSC code: HDFC0001996</div>
            <div className={styles.bankItem}>Branch: Basheerbagh, Hyderabad</div>
          </div>
        </motion.div>

        {/* Right Side: Donation Form */}
        <motion.div
          variants={cardEntry} initial="hidden" animate="visible"
          className={styles.formCard}
        >
          <h2 className={styles.formTitle}>Make a Donation</h2>

          <form className={styles.donationForm}>
            {[
              { label: "Full Name*", placeholder: "", type: "text" },
              { label: "Email Address*", placeholder: "", type: "email" },
              { label: "Phone Number*", placeholder: "", type: "tel" },
              { label: "Donation Amount (₹)*", placeholder: "", type: "number" },
              { label: "PAN (Optional)", placeholder: "", type: "text" }
            ].map((field, i) => (
              <motion.div key={i} custom={i} variants={formItems} className={styles.inputGroup}>
                <label className={styles.label}>{field.label}</label>
                <input type={field.type} className={styles.input} required={field.label.includes('*')} />
              </motion.div>
            ))}

            <motion.div custom={5} variants={formItems} className={styles.inputGroup}>
              <label className={styles.label}>Donation Type*</label>
              <select className={styles.select} required>
                <option value=""></option>
                <option value="education">Education</option>
                <option value="nutrition">Nutrition</option>
                <option value="humanitarian">Humanitarian Relief</option>
              </select>
            </motion.div>

            <motion.div custom={6} variants={formItems} className={styles.checkboxGroup}>
              <input type="checkbox" id="confirm" required />
              <label htmlFor="confirm">I confirm that the above details are correct.</label>
            </motion.div>

            <p className={styles.taxNotice}>
              "YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER SECTION 80G AS
              AMMANI FOUNDATION IS REGISTERED AS NON PROFIT ORGANIZATION"
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className={styles.submitBtn}
            >
              Proceed to Payment
            </motion.button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Donate;