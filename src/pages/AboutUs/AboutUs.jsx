import React from 'react';
import styles from './AboutUs.module.css';
import BoardMember from '../../components/BoardMember/BoardMember';

const AboutUs = () => {
  const valuesData = [
    {
      title: 'Compassion',
      icon: 'https://ammanifoundation.org/assets/img/icon/compassion.png',
      text: 'Our compassionate approach ensures that every individual we serve is treated with dignity and love. Through compassion, we strive to heal, uplift, and build a more humane and inclusive society for all.'
    },
    {
      title: 'Diversity & Inclusion',
      icon: 'https://ammanifoundation.org/assets/img/icon/diversity.png',
      text: 'Ammani Foundation celebrates diversity and ensures inclusion by empowering all—regardless of gender, age, or background—creating equal opportunities and a united, compassionate community.'
    },
    {
      title: 'Collaboration',
      icon: 'https://ammanifoundation.org/assets/img/icon/collaboration.png',
      text: 'Ammani Foundation thrives on collaboration, uniting communities, partners, and volunteers to drive impactful change through shared goals, collective action, and compassionate service for all.'
    },
    {
      title: 'Accountability',
      icon: 'https://ammanifoundation.org/assets/img/icon/accountability.png',
      text: 'Ammani Foundation upholds accountability by staying transparent, responsible, and committed to our mission—ensuring every action, resource, and outcome serves the community with integrity and trust.'
    }
  ];

  return (
    <div className={styles.mainWrapper}>
      {/* 1. Hero Section with Pattern */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>About US</h1>
      </div>

      {/* 2. Welcome Information Section */}
      <div className={styles.welcomeContainer}>
        <div className={styles.innerContent}>
          <h2 className={styles.redHeading}>Welcome to Ammani Foundation</h2>
          <p className={styles.infoText}>
            Ammani Foundation is a non-profit organization established with a heartfelt mission to uplift the underserved and create lasting, meaningful change in society. Rooted in the values of compassion, inclusivity, and service, we work tirelessly to address the pressing social challenges faced by vulnerable communities across India.
          </p>
          <p className={styles.infoText}>
            At Ammani Foundation, we believe that real change starts at the grassroots. Our initiatives span across multiple impact areas, women empowerment, youth development, environmental responsibility, and social recognition.
          </p>
        </div>
      </div>

      {/* 3. Our Values Section */}
      <div className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.valuesMainHeading}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {valuesData.map((item, index) => (
              <div key={index} className={styles.valueCard}>
                <h3 className={styles.valueCardTitle}>{item.title}</h3>
                <div className={styles.whiteCircle}>
                  <img src={item.icon} alt={item.title} className={styles.centerIcon} />
                </div>
                <p className={styles.valueText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.visionWorkSection}>
        <div className={styles.container}>
          <div className={styles.topVisionGrid}>
            <div className={styles.visionItem}>
              <h3 className={styles.redSubHeading}>Our Vision</h3>
              <p className={styles.visionPara}>To build a compassionate and inclusive society by empowering women, children, and underprivileged communities through education, health, and sustainable initiatives, inspiring collective responsibility to create lasting impact and a brighter future for generations to come.</p>
            </div>
            <div className={styles.visionItem}>
              <h3 className={styles.redSubHeading}>What We Do</h3>
              <p className={styles.visionPara}>Ammani Foundation is involved in a range of activities, including Women Empowerment, Child Education, Home for Senior citizens, Child Nurture, Humanitarian Relief etc. We believe in taking a holistic approach to address complex issues.</p>
            </div>
          </div>
          <div className={styles.helpFullWidth}>
            <h3 className={styles.redSubHeading}>How You Can Help</h3>
            <p className={styles.visionPara}>As a volunteer, there are several ways in which you can actively contribute to Ammani Foundation. By offering your time, skills, and resources, you can make a positive impact for those in need. Whether it's assisting an event, participating in fundraising events, or simply lending a helping hand to those less fortunate, your involvement can truly make a difference. Remember, every small act of kindness can go a long way in building a stronger and more supportive community.</p>
          </div>
        </div>
      </div>

      <BoardMember/>
    </div>
  );
};

export default AboutUs;