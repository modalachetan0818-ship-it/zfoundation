import React from 'react';
import styles from './Aboutsection.module.css';

const Aboutsection = () => {
  const cardData = [
    { id: 1, title: 'Become a', bold: 'volunteer', img: '/images/aboutsection/about1.webp' },
    { id: 2, title: 'Make a', bold: 'Donation', img: '/images/aboutsection/about2.webp' },
    { id: 3, title: 'Gift with', bold: 'Purpose', img: '/images/aboutsection/about3.webp' },
    { id: 4, title: 'Partner', bold: 'With Us', img: '/images/aboutsection/about4.webp' },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>ZFoundation</h1>
        <p className={styles.subtitle}>
          Leading the way in Women Empowerment, Child Education & Social Welfare in Hyderabad
        </p>
      </div>

      <div className={styles.grid}>
        {cardData.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.interactionArea}>
              {/* This div creates the green oval background on hover */}
              <div className={styles.ovalBackground}></div>
              
              {/* Image loaded from your specific folder path */}
              <img src={item.img} alt={item.bold} className={styles.cardImg} />
              
              {/* Text that changes color on hover */}
              <p className={styles.label}>
                {item.title} <span className={styles.boldText}>{item.bold}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutsection;