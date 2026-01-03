import React from 'react';
import { motion } from 'framer-motion';
import styles from './OurProjects.module.css'; // This will be your new CSS file

const OurProjects = () => {
  // Animation variants for images (Zoom-in entry, no rotation)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
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
      {/* Hero Banner for Projects Page */}
      <div className={styles.heroBanner}>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, letterSpacing: "15px" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "4px" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className={styles.heroTitle}
        >
          OUR PROJECTS
        </motion.h1>
      </div>

      <div className={styles.container}>
        {/* Project Section 1: Sanitary Pad Incineration (Image Left) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            {/* Replace with your actual image path */}
            <img src="/images/Our Project/img1.png" alt="Sanitary Pad Incineration" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Sanitary Pad Incineration</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              The Z Foundation launched a large-scale initiative to promote menstrual hygiene and eco-friendly sanitary pad disposal. Incineration units were installed in 50+ Gurukul schools, and awareness sessions reached over 50,000 women and girls. The project improved health, hygiene, and environmental sustainability while encouraging the use of biodegradable and reusable menstrual products. This initiative not only reduced plastic waste but also provided safe, hygienic disposal solutions in schools, empowering women and fostering long-term sustainable menstrual care practices.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Project Section 2: Educational Support (Image Right) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={`${styles.infoSection} ${styles.reversed}`}
        >
          <motion.div 
            variants={{...imageVariants, hidden: { ...imageVariants.hidden, x: 50, rotateY: 0 }}} // Adjust x for reversed entry
            className={styles.imageBox}
          >
            {/* Replace with your actual image path */}
            <img src="/images/Our Project/img2.webp" alt="Educational Support" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Educational Support</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              Z Foundation’s Back-to-School Initiative focuses on supporting underprivileged students by providing them with essential academic supplies including school bags, notebooks, stationery, and complete school kits. This initiative aims to reduce the financial burden on families and ensure that every child starts the academic year with confidence, dignity, and the necessary tools to succeed in school. By bridging the gap in access to basic educational resources, the foundation empowers children to pursue their education with motivation and hope for a brighter future.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Project Section 3: Skill Development (Image Left) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={styles.infoSection}
        >
          <motion.div variants={imageVariants} className={styles.imageBox}>
            {/* Replace with your actual image path */}
            <img src="/images/Our Project/img3.webp" alt="Skill Development" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Skill Development</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              The Z Foundation empowers students and young professionals through a focused skill development initiative. This program enhances interview readiness, communication skills, and overall employability, preparing individuals for success in today’s competitive job market. With structured training modules and hands-on workshops, participants receive personalized coaching that emphasizes both technical expertise and essential soft skills like teamwork and problem-solving. This bridges the gap between education and industry needs, fostering economic growth and societal advancement.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Project Section 4: Healthcare Initiatives (Image Right) */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          className={`${styles.infoSection} ${styles.reversed}`}
        >
          <motion.div 
            variants={{...imageVariants, hidden: { ...imageVariants.hidden, x: 50, rotateY: 0 }}} // Adjust x for reversed entry
            className={styles.imageBox}
          >
            {/* Replace with your actual image path */}
            <img src="/images/Our Project/img4.webp" alt="Healthcare Initiatives" className={styles.roundedImg} />
          </motion.div>
          <motion.div variants={textContainer} className={styles.textBox}>
            <motion.h2 variants={textItem} className={styles.sectionHeading}>Healthcare Initiatives</motion.h2>
            <motion.p variants={textItem} className={styles.paragraph}>
              **Elderly Care:** Z Foundation organizes health camps and celebratory events for elderly residents in nursing homes, promoting their well-being and providing essential medical attention and monitoring.<br />
              **COVID-19 Relief:** During the pandemic, adopted four families and ensured they received monthly rations. Additionally, provided daily meals to traffic constables and attendants of COVID patients when eateries were closed.
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default OurProjects;