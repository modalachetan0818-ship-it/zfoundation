import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Education.module.css';

const Education = () => {
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
          EDUCATION
        </motion.h1>
      </div>

      <div className={styles.container}>
        {/* Section 1: Standing with the Vulnerable */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            <img src="/images/What We do img/Education/img4.webp" alt="Standing with the Vulnerable" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>The Key to Opportunity</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              Education is more than just reading and writing—it is the foundation that empowers children to dream big, achieve financial independence, and break free from the vicious cycle of poverty. Sadly, thousands of children from underprivileged families are denied this basic right because survival takes precedence over schooling. Parents struggling with daily wages are often compelled to send their children to work rather than classrooms, robbing them of a childhood filled with learning and growth. At Ammani Foundation, we believe education should never be a privilege for a few—it must be a right for all. Through education, we nurture confidence, dignity, and hope in every child, opening doors to limitless opportunities and building a society where dreams are not restricted by background or circumstance.
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
            <img src="/images/What We do img/Education/img5.webp" alt="Relief in Crisis" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Removing Barriers to Learnings</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              For a child from an underserved community, something as simple as a notebook, a pair of shoes, or a school bag can decide whether they continue learning or drop out. That’s why Ammani Foundation works tirelessly to remove these barriers by providing school kits, uniforms, textbooks, and financial support to children who need them most. We go into orphanages, slum areas, and rural villages where children face the highest risk of abandoning school due to lack of resources. Beyond materials, we also conduct awareness sessions for parents to help them understand the long-term benefits of education, while workshops for children build self-confidence and problem-solving skills. Each time a child steps into a classroom instead of a workplace, we are not just changing one life—we are uplifting an entire family and community toward a brighter tomorrow.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Section 3: Be the Lifeline */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            <img src="/images/What We do img/Education/img6.webp" alt="Lifeline" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Every Child Deserves a Future</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              When you choose to support a child’s education, you are not just funding books or fees—you are investing in their dreams and shaping future leaders, innovators, and changemakers. Even a small contribution can ensure a child gets nutritious meals to stay focused in school, or receives the learning tools that fuel curiosity and growth. Imagine the ripple effect—an educated girl inspiring her siblings, an educated boy helping his family rise above poverty, or a once-struggling child becoming a doctor, teacher, or community leader. Education has the power to transform generations, and with your support, no child will have to give up on their future. At Ammani Foundation, we believe every dream is worth fighting for, and together with your kindness, we can ensure those dreams don’t just survive—they flourish.
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

export default Education;
