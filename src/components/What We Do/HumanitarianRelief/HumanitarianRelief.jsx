import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './HumanitarianRelief.module.css';

const HumanitarianRelief = () => {
  // Beautiful 3D Perspective Animation for Images
  const imageVariants = {
    hidden: { opacity: 0, rotateY: 30, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Staggered Text Reveal
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  return (
    <div className={styles.mainWrapper}>
      {/* Centered Hero with Letter-Spacing Animation */}
      <div className={styles.heroBanner}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, letterSpacing: "15px" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "4px" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className={styles.heroTitle}
        >
          HUMANITARIAN RELIEF
        </motion.h1>
      </div>

      <div className={styles.container}>
        {/* Section 1: Standing with the Vulnerable */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            <img src="/images/What We do img/Humanitarian Relief/img4.webp" alt="Standing with the Vulnerable" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Standing with the Vulnerable</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              Life can change in a single moment, and for the most vulnerable members of our society, disasters bring about unimaginable suffering. Whether it is the impact of a sudden flood, a fire, or the harsh daily reality of homelessness, families who are already burdened by extreme poverty often lose the very little they possess—including food, shelter, and their basic security for tomorrow. At Ammani Foundation, we stand as a dedicated pillar of hope during these moments of profound despair. Our relief programs are built on the foundational belief that no one should ever be left to struggle alone in the face of crisis. With compassion serving as our primary driving force, we reach out to affected families immediately to ensure they receive essential nourishment, water, and medical assistance when they need it most.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 2: Relief in Times of Crisis (Reversed) */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={`${styles.infoSection} ${styles.reversed}`}
        >
          <motion.div
            variants={{ ...imageVariants, hidden: { ...imageVariants.hidden, x: 50, rotateY: 30 } }}
            className={styles.imageBox}
          >
            <img src="/images/What We do img/Humanitarian Relief/img5.webp" alt="Relief in Crisis" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Relief in Times of Crisis</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              True humanitarian relief goes far beyond providing temporary solutions; it is fundamentally about helping displaced or suffering people find stability once again. At Ammani Foundation, our rapid response teams act swiftly during emergencies, delivering critical resources such as food packets, blankets, safe drinking water, and essential medicines to those in desperate need. Whether in rural villages affected by natural disasters or among the homeless on city streets, we ensure that help reaches its destination without delay. However, our support does not end with immediate aid; we focus heavily on long-term rehabilitation by helping families rebuild their homes, regain their livelihoods, and restore a sense of normalcy to their lives. We believe every individual deserves a chance to recover with dignity, and we remain committed to these communities until they find their strength again.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 3: Be the Lifeline */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            <img src="/images/What We do img/Humanitarian Relief/img6.webp" alt="Lifeline" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Be the Lifeline Someone Needs</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              Every act of kindness, no matter how small, has the inherent power to change a life forever. A warm meal provided to a hungry child, a blanket for someone shivering on the street, or timely medical intervention for a struggling mother can truly mean the difference between total despair and survival. By supporting the Ammani Foundation’s humanitarian relief programs, you become the reason someone finds hope during their darkest hour. Your donation translates directly into comfort, safety, and recovery for families who have lost everything. Together, we can create a chain of compassion that reaches every corner of society, ensuring that no one is left behind during times of crisis. When you choose to give, you are giving someone a chance to live, to recover, and to dream again.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Beautiful Pulsing Donate Button */}
        <div className={styles.buttonWrapper}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.buttonWrapper}
          >
            <Link to="/Donate">
              <button className={styles.donateBtn}>Donate Now</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HumanitarianRelief;
