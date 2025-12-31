import React from 'react';
import styles from './OurStory.module.css';
import { FiCheckCircle } from 'react-icons/fi';

const OurStory = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        
        {/* Left Side: Large Featured Image */}
        <div className={styles.imageSection}>
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
            alt="ZFoundation Story" 
            className={styles.mainImg}
          />
        </div>

        {/* Right Side: Story Content */}
        <div className={styles.contentSection}>
          
          {/* Top Story Card */}
          <div className={styles.storyCard}>
            <h2 className={styles.title}>Our Story</h2>
            <h3 className={styles.subtitle}>A Journey of Kindness and Change</h3>
            <p className={styles.description}>
              Born from compassion, <strong>ZFoundation</strong> is a non-profit on a mission 
              to uplift lives. From feeding the hungry during COVID to empowering 
              women with job opportunities and educating children, we turn hope into 
              action. Every act of kindness counts. Join us. Be the reason someone 
              smiles, learns, or eats today.
            </p>
          </div>

          {/* Bottom Row: Mission and Stats */}
          <div className={styles.bottomGrid}>
            
            {/* Mission Box */}
            <div className={styles.missionCard}>
              <h4 className={styles.boxTitle}>Our Mission</h4>
              <ul className={styles.missionList}>
                <li><FiCheckCircle className={styles.icon} /> Empower Women to rise</li>
                <li><FiCheckCircle className={styles.icon} /> Educate the Child</li>
                <li><FiCheckCircle className={styles.icon} /> End Hunger, One Meal at a Time</li>
                <li><FiCheckCircle className={styles.icon} /> Stand by People in Extreme Need</li>
              </ul>
            </div>

            {/* Stats Box */}
            <div className={styles.statsCard}>
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
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;