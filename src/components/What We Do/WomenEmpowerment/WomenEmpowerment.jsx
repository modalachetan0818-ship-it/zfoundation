import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './WomenEmpowerment.module.css';

const WomenEmpowerment = () => {
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
          WOMEN EMPOWERMENT
        </motion.h1>
      </div>

      <div className={styles.container}>
        {/* Section 1: Standing with the Vulnerable */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            <img src="/images/What We do img/women empowerment/img4.webp" alt="Standing with the Vulnerable" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Breaking Barriers for women</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              At Z Foundation, we believe women are the true backbone of families, communities, and society. Yet millions of women are silenced by poverty, gender inequality, and lack of opportunities. Many are denied access to education, trapped in low-paying jobs, or left helpless as widows and single mothers struggling to survive. Without support, their dreams remain unfulfilled and their voices unheard. Our mission is to break these barriers and restore dignity by giving women the tools, resources, and confidence to lead empowered lives. We aim to transform them from victims of circumstance into leaders, breadwinners, and role models who uplift their families and communities. When women are empowered, entire societies progress—and that is the change we are determined to create.
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
            <img src="/images/What We do img/women empowerment/img5.webp" alt="Relief in Crisis" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Skills Support & Self Reliance</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              True empowerment begins with opportunity. At Z Foundation, we provide skill development programs in tailoring, handicrafts, digital literacy, and entrepreneurship—giving women the power to earn a stable income and live with dignity. Our initiatives especially focus on widows, single mothers, and abandoned women who carry the immense responsibility of raising families on their own. Beyond financial stability, we prioritize health awareness, legal rights, and mental well-being, ensuring women can live without fear or dependence. Every woman we train not only secures her livelihood but also becomes a beacon of hope for others in her community. She proves that resilience, when supported with the right opportunities, can turn into strength and inspire others to believe in themselves. This ripple effect is the true power of empowerment.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 3: Be the Lifeline */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            <img src="/images/What We do img/women empowerment/img6.webp" alt="Lifeline" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>A Future Transformed by Your Support</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              When you empower one woman, you don’t just change her life—you transform generations. The financial independence and knowledge she gains are passed on to her children, ensuring better education, health, and brighter opportunities for the next generation. A mother’s strength becomes her family’s foundation, and her success becomes a community’s inspiration. With your support, we can train more women, fund small businesses, provide seed capital, and give hope to those who are waiting for a chance to rebuild their lives. Your donation is not just charity—it is an investment in breaking cycles of poverty, creating sustainable livelihoods, and inspiring women to dream without limits. Together, we can give them more than survival—we can give them the power to thrive, to lead, and to shape a stronger tomorrow.
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

export default WomenEmpowerment;
