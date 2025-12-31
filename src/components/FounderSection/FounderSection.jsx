import React from 'react';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed
import styles from './FounderSection.module.css';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

const FounderSection = () => {
  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, staggerChildren: 0.2 } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
      >
        
        {/* Left Side: Founder Image with Zoom-Fade */}
        <motion.div className={styles.imageContainer} variants={imageVariants}>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
            alt="ZFoundation Founder" 
            className={styles.founderImg}
          />
        </motion.div>

        {/* Right Side: Details Content with Staggered Slide */}
        <motion.div className={styles.detailsContent} variants={textVariants}>
          <motion.h2 className={styles.founderName} variants={childVariants}>
            Sarah Jenkins
          </motion.h2>
          <motion.p className={styles.designation} variants={childVariants}>
            Founder & Director
          </motion.p>

          <motion.h3 className={styles.quote} variants={childVariants}>
            "Manava Seva – Madava Seva"
          </motion.h3>
          
          <motion.p className={styles.highlightText} variants={childVariants}>
            “We ourselves feel that what we are doing is just a drop in the ocean. 
            But the ocean would be less because of that missing drop”.
          </motion.p>

          <motion.div className={styles.biography} variants={childVariants}>
            <p>
              Sarah began her journey with a vision to transform lives through education and 
              sustainability. Having witnessed the struggles of underprivileged communities 
              firsthand, she founded <strong>ZFoundation</strong> as a beacon of hope. 
            </p>
            <p>
              Her approach is rooted in empathy and measurable impact. From this vision, 
              ZFoundation has grown into a movement that empowers over 500 families 
              annually.
            </p>
          </motion.div>

          {/* Social Icons with a pop-up effect */}
          <motion.div className={styles.socialIcons} variants={childVariants}>
            <a href="#" className={styles.iconCircle}><FaYoutube /></a>
            <a href="#" className={styles.iconCircle1}><FaFacebookF /></a>
            <a href="#" className={styles.iconCircle2}><FaInstagram /></a>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default FounderSection;