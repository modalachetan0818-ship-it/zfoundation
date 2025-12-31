import React from 'react';
import styles from './OurCauses.module.css';

const OurCauses = () => {
  const causes = [
    {
      id: 1,
      title: 'Women Empowerment',
      description: 'The world has always challenged women, yet their strength prevails. ZFoundation is dedicated to empowering women by providing resources, support, and equal opportunities.',
      // Image focused on vocational training/entrepreneurship as requested
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

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Causes</h2>
      <div className={styles.grid}>
        {causes.map((cause) => (
          <div key={cause.id} className={styles.card}>
            {/* Animation is scoped ONLY to this container */}
            <div className={styles.imageContainer}>
              <img src={cause.img} alt={cause.title} className={styles.zoomImg} />
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.causeTitle}>{cause.title}</h3>
              <p className={styles.description}>{cause.description}</p>
            </div>
            
            <button className={styles.donateBtn}>Donate now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCauses;