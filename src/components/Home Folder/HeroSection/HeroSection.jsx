import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from '../../SplashScreen/SplashScreen';

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.0 seconds duration

    return () => clearTimeout(timer);
  }, []);

  const slides = [
    { id: 1, url: '/images/hero-section/hero1.webp' },
    { id: 2, url: '/images/hero-section/hero2.webp' },
    { id: 3, url: '/images/hero-section/hero3.webp' },
    { id: 4, url: '/images/hero-section/hero4.webp' },
    { id: 5, url: '/images/hero-section/hero5.webp' },
    { id: 6, url: '/images/hero-section/hero6.webp' },
    { id: 7, url: '/images/hero-section/hero7.webp' },
    { id: 8, url: '/images/hero-section/hero8.webp' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className={styles.heroContainer}>
      {loading && <SplashScreen />}
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        {/* AnimatePresence ensures smooth transitions between slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // Reset animation on slide change
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.smallShapeWrapper}
          >
            <div className={styles.textContent}>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={styles.title}
              >
                Non-profit
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={styles.subtitle}
              >
                Support Us to help Needy
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className={`${styles.navBtn} ${styles.left}`} onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className={`${styles.navBtn} ${styles.right}`} onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;