import React from 'react';
import { motion } from 'framer-motion'; 
import styles from './OurStory.module.css';
import { FiCheckCircle } from 'react-icons/fi';

const OurStory = () => {
  // 1. Image Animation: 3D Flip effect
  const imageReveal = {
    hidden: { opacity: 0, rotateY: -20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      scale: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  // 2. Text Card: Smooth Zoom and Fade
  const cardZoom = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "backOut" } 
    }
  };

  // 3. Bottom Cards: Staggered Slide Up
  const bottomSlide = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Image Section - 3D Flip Entrance */}
        <motion.div 
          className={styles.imageSection} 
          variants={imageReveal}
          style={{ perspective: 1000 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
            alt="ZFoundation Story" 
            className={styles.mainImg}
          />
        </motion.div>

        <div className={styles.contentSection}>
          
          {/* Top Story Card - Smooth Zoom */}
          <motion.div className={styles.storyCard} variants={cardZoom}>
            <h2 className={styles.title}>Our Story</h2>
            <h3 className={styles.subtitle}>A Journey of Kindness and Change</h3>
            <p className={styles.description}>
              Born from compassion, <strong>ZFoundation</strong> is a non-profit on a mission 
              to uplift lives. From feeding the hungry during COVID to empowering 
              women with job opportunities and educating children, we turn hope into 
              action. Every act of kindness counts.
            </p>
          </motion.div>

          <div className={styles.bottomGrid}>
            
            {/* Mission Box - Custom staggered index 1 */}
            <motion.div 
              className={styles.missionCard} 
              custom={1} 
              variants={bottomSlide}
            >
              <h4 className={styles.boxTitle}>Our Mission</h4>
              <ul className={styles.missionList}>
                <li><FiCheckCircle className={styles.icon} /> Empower Women to rise</li>
                <li><FiCheckCircle className={styles.icon} /> Educate the Child</li>
                <li><FiCheckCircle className={styles.icon} /> End Hunger, One Meal</li>
                <li><FiCheckCircle className={styles.icon} /> Stand by people in Extreme Need</li>
              </ul>
            </motion.div>

            {/* Stats Box - Custom staggered index 2 */}
            <motion.div 
              className={styles.statsCard} 
              custom={2} 
              variants={bottomSlide}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>300+</span>
                <p className={styles.statLabel}>No of Supporters</p>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>60+</span>
                <p className={styles.statLabel}>Volunteers Worldwide</p>
              </div>
                 <div className={styles.statItem}>
                <span className={styles.statNumber}>50%</span>
                <p className={styles.statLabel}>Completed Projects</p>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default OurStory;