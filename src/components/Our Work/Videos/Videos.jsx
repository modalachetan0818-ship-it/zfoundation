import React from 'react';
import { motion } from 'framer-motion';
import styles from './Videos.module.css';

const Videos = () => {
  // A collection of relevant activity videos
 const videoList = [
    { id: "OtYxKNqa0ZU", title: "Empowering Rural Women through Skill Training" },
    { id: "8UQ9ijseAYk", title: "Emergency Food Relief for Flood-Affected Areas" },
    { id: "AV75LHA5Ny0", title: "Back-to-School: Providing Kits for Underprivileged Kids" },
    { id: "XmxGv6j1NLE", title: "Hygiene Awareness & Sanitary Pad Distribution" },
    { id: "CXppu0OhaGI", title: "Supporting the Elderly in Local Nursing Homes" },
    { id: "RaQF39Hs3Tw", title: "Winter Blanket Drive for Homeless Communities" },
    { id: "ncUENWU_s2w", title: "Daily Nutrition: Feeding the Hungry Program" },
    { id: "OtYxKNqa0ZU", title: "Digital Literacy Workshop for Young Girls" },
    { id: "8UQ9ijseAYk", title: "Clean Water Initiatives in Remote Villages" },
    { id: "RaQF39Hs3Tw", title: "Celebrating Festival Joy with Orphaned Children" }
  ];

  return (
    <div className={styles.videoPage}>
      {/* Dark Teal Hero Banner with Hand Pattern */}
     <div className={styles.heroBanner}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, letterSpacing: "15px" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "4px" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className={styles.heroTitle}
        >
          VIDEOS
        </motion.h1>
      </div>

      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Z Foundation Videos</h2>
        
        <div className={styles.videoGrid}>
          {videoList.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={styles.videoCard}
            >
              <h3 className={styles.videoTitle}>{video.title}</h3>
              <div className={styles.iframeWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;