import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import styles from './Aboutsection.module.css';

const Aboutsection = () => {
  const cardData = [
    { id: 1, title: 'Become a', bold: 'volunteer', img: '/images/aboutsection/about1.webp' },
    { id: 2, title: 'Make a', bold: 'Donation', img: '/images/aboutsection/about2.webp' },
    { id: 3, title: 'Gift with', bold: 'Purpose', img: '/images/aboutsection/about3.webp' },
    { id: 4, title: 'Partner', bold: 'With Us', img: '/images/aboutsection/about4.webp' },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This makes cards appear one by one
      }
    }
  };

  // Animation variants for each item (Slide from Left)
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      className={styles.wrapper}
      initial="hidden"
      whileInView="visible" // Triggers when you scroll to this section
      viewport={{ once: true, amount: 0.3 }} // Runs once when 30% is visible
      variants={containerVariants}
    >
      <motion.div className={styles.header} variants={itemVariants}>
        <h1 className={styles.mainTitle}>ZFoundation</h1>
        <p className={styles.subtitle}>
          Leading the way in Women Empowerment, Child Education & Social Welfare in Hyderabad
        </p>
      </motion.div>

      <div className={styles.grid}>
        {cardData.map((item) => (
          <motion.div 
            key={item.id} 
            className={styles.card}
            variants={itemVariants}
          >
            <div className={styles.interactionArea}>
              <div className={styles.ovalBackground}></div>
              <img src={item.img} alt={item.bold} className={styles.cardImg} />
              <p className={styles.label}>
                {item.title} <span className={styles.boldText}>{item.bold}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Aboutsection;