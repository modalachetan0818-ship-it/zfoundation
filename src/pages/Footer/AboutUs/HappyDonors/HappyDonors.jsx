import React, { useState, useEffect } from 'react';
import styles from './HappyDonors.module.css';

const HappyDonors = () => {
  const donors = [
    {
      id: 1,
      name: "Bejjanki Rajesh,",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Z Foundation is a good and reliable charitable organization. It gives me confidence and satisfaction to know how these people utilize our donations in serving the poor people."
    },
    {
      id: 2,
      name: "Maria S,",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "It is of great satisfaction & humbling experience to work with Z Foundation members. Their commitment to support the needy & the poor is inspiring & they always step forward for the society - Great Work! Kudos for the team!!"
    },
    {
      id: 3,
      name: "Narasimha Reddy,",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "They are connected with the marginal sections of the community and that's how they help them. I am very happy to be associated with them and have huge respect for the founder and the team members."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth automation without layout shifts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % donors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [donors.length]);

  return (
    <section className={styles.donorSection}>
      {/* Decorative Corner Shapes */}
      <div className={styles.topCircle}></div>
      <div className={styles.bottomCircle}></div>

      <div className={styles.container}>
        <h2 className={styles.heading}>Happy Donors</h2>

        {/* Fixed height container to prevent screen shaking */}
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialWrapper}>
            <span className={styles.quoteIcon}>“</span>
            <p className={styles.testimonialText}>
              {donors[activeIndex].text}
            </p>
            <span className={styles.quoteIcon}>”</span>
          </div>
        </div>

        {/* Donor Selection Area */}
        <div className={styles.donorNav}>
          {donors.map((donor, index) => (
            <div 
              key={donor.id} 
              className={`${styles.donorItem} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Name Bubble - Absolute positioned to avoid shaking */}
              {index === activeIndex && (
                <div className={styles.namePop}>
                  {donor.name}
                  <div className={styles.arrowDown}></div>
                </div>
              )}
              
              <img 
                src={donor.img} 
                alt={donor.name} 
                className={styles.donorImg} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyDonors;