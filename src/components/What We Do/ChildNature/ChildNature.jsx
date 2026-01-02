import React from 'react';
import { motion } from 'framer-motion';
import styles from './ChildNature.module.css';

const ChildNature = () => {
  // 1. Beautiful Liquid Fade & Scale for Images
  const liquidImage = {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // 2. Elegant Staggered Text Reveal
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className={styles.mainWrapper}>
      {/* Banner with Tracking Animation */}
      <motion.div 
        initial={{ opacity: 0, letterSpacing: "-5px" }}
        animate={{ opacity: 1, letterSpacing: "2px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={styles.heroBanner}
      >
        <h1 className={styles.heroTitle}>Child Nature</h1>
      </motion.div>

      <div className={styles.container}>
        {/* Section 1: Image Left */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className={styles.infoSection}
        >
          <motion.div variants={liquidImage} className={styles.imageBox}>
            <img src="/images/What We do img/Chlid Nature/img4.webp" alt="Nourishment" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Nourishment for Every Child</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
        Proper nutrition is the foundation of a healthy childhood, yet millions of children are denied this basic right every single day. Across underprivileged communities, countless little ones go to bed hungry, surviving on empty stomachs and inadequate diets that rob them of energy, focus, and growth. Malnutrition not only weakens their bodies but also hinders their learning, confidence, and ability to dream. At Ammani Foundation, we believe no child should face the injustice of hunger. We work to ensure that every child receives wholesome meals that nourish their bodies, fuel their curiosity, and instill hope for a brighter future. Because when a child eats well, they do more than survive—they learn, grow, and thrive.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 2: Reversed Position */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className={`${styles.infoSection} ${styles.reversed}`}
        >
          <motion.div variants={liquidImage} className={styles.imageBox}>
            <img src="/images/What We do img/Chlid Nature/img5.webp" alt="Foundations" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Building Healthy Foundations</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              Our feeding programs are designed not just to fill plates, but to transform lives. Every day, we provide nutritious meals, distribute specially curated nutrition kits, and conduct health awareness sessions for children and their families living in vulnerable conditions. The meals are rich in proteins, vitamins, and essential nutrients that help build strong immunity, sharper minds, and healthier bodies. Alongside, we organize health check-ups, educate parents on the importance of balanced, affordable diets, and guide communities in cultivating better food habits. By addressing malnutrition early, we give children the strength to laugh, play, and learn without the burden of weakness. Each meal becomes a stepping stone, laying the foundation for a generation that grows healthy, capable, and full of potential.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 3: Final Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          className={styles.infoSection}
        >
          <motion.div variants={liquidImage} className={styles.imageBox}>
            <img src="/images/What We do img/Chlid Nature/img6.webp" alt="Fighting Hunger" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Your Role in Fighting Hunger</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              The fight against child hunger is not something we can do alone—it is a collective mission. Every meal you help provide is far more than food on a plate; it is hope, dignity, and the gift of a healthier tomorrow. Your contribution gives children the chance to study without distraction, to dream without despair, and to walk confidently into a future they deserve. With your support, Ammani Foundation can expand its reach, feeding more children, empowering more families, and breaking the vicious cycle of malnutrition. Together, we can create a world where no child suffers from hunger and every child has the strength to pursue their dreams. Be the reason a child smiles today—because your donation has the power to change a life forever.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Donate Button Beautiful Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.buttonWrapper}
        >
          <button className={styles.donateBtn}>Donate Now</button>
        </motion.div>
      </div>
    </div>
  );
};

export default ChildNature;