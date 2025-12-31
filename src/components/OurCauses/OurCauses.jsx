import React from 'react';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed
import styles from './OurCauses.module.css';

const OurCauses = () => {
  const causes = [
    {
      id: 1,
      title: 'Women Empowerment',
      description: 'The world has always challenged women, yet their strength prevails. ZFoundation is dedicated to empowering women by providing resources, support, and equal opportunities.',
      img: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 2,
      title: 'Education',
      description: 'Education is the key to breaking barriers. ZFoundation works to ensure every child has access to learning, tools, and opportunities that shape a brighter, more empowered future.',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 3,
      title: 'Serving with compassion',
      description: 'At ZFoundation, we believe true service comes from the heart. With empathy and care, we reach out to the needy, bringing hope, dignity, and a touch of humanity to every life we serve.',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000',
    }
  ];

  // Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delay between each card's appearance
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.section 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
      variants={containerVariants}
    >
      <motion.h2 variants={cardVariants} className={styles.sectionTitle}>
        Our Causes
      </motion.h2>
      <div className={styles.grid}>
        {causes.map((cause) => (
          <motion.div 
            key={cause.id} 
            className={styles.card}
            variants={cardVariants}
          >
            <div className={styles.imageContainer}>
              <img src={cause.img} alt={cause.title} className={styles.zoomImg} />
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.causeTitle}>{cause.title}</h3>
              <p className={styles.description}>{cause.description}</p>
            </div>
            
            <button className={styles.donateBtn}>Donate now</button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurCauses;