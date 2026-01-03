import React, { useState, useEffect } from 'react';
import styles from './WorkGallery.module.css';

const WorkGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: "/images/working images/img1.webp" },
    { url: "/images/working images/img2.webp" },
    { url: "/images/working images/img3.webp" },
    { url: "/images/working images/img4.webp" },
    { url: "/images/working images/img5.jpg" },
    { url: "/images/working images/img6.jpg" },
    { url: "/images/working images/img7.jpg" },
    { url: "/images/working images/img8.jpg" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  const getCardClass = (index) => {
    const total = images.length;
    
    // Active Center Image
    if (index === currentIndex) return `${styles.card} ${styles.active}`;
    
    // Backside Image Positions
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    const farPrevIndex = (currentIndex - 2 + total) % total;
    const farNextIndex = (currentIndex + 2) % total;

    if (index === prevIndex) return `${styles.card} ${styles.prev}`;
    if (index === nextIndex) return `${styles.card} ${styles.next}`;
    if (index === farPrevIndex) return `${styles.card} ${styles.farPrev}`;
    if (index === farNextIndex) return `${styles.card} ${styles.farNext}`;
    
    return `${styles.card} ${styles.hidden}`;
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>ZFoundation at Working Images</h2>
      
      <div className={styles.sliderViewport}>
        <div className={styles.cardStack}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={getCardClass(index)}
              onClick={() => handleCardClick(index)}
            >
              <img src={image.url} alt={`ZFoundation Activity ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>

        {/* Navigation Dots - Animated Blue Active State */}
        <div className={styles.pagination}>
          {images.map((_, index) => (
            <div 
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;