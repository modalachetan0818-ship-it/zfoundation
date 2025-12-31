import React from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  // Array of images including your local "working images" and relevant NGO photos
  const galleryImages = [
    { id: 1, url: "/images/working images/img1.webp", title: "Food Distribution" },
    { id: 2, url: "/images/working images/img2.webp", title: "Community Service" },
    { id: 3, url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800", title: "Helping Hands" },
    { id: 4, url: "/images/working images/img3.webp", title: "ZFoundation Team" },
    { id: 5, url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800", title: "Support Program" },
    { id: 6, url: "/images/working images/img4.webp", title: "Event Management" },
    { id: 7, url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800", title: "Education Drive" },
    { id: 8, url: "/images/working images/img5.webp", title: "Volunteer Group" },
    { id: 9, url: "/images/working images/img6.webp", title: "Aid Distribution" },
    { id: 10, url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800", title: "Humanitarian Care" },
    { id: 11, url: "/images/working images/img7.webp", title: "Mission Day" },
    { id: 12, url: "/images/working images/img8.webp", title: "Success Celebration" },
  ];

  return (
    <div className={styles.galleryPage}>
      {/* Header Banner */}
      <div className={styles.heroBanner}>
        <h1 className={styles.heroTitle}>Our Gallery</h1>
        <p className={styles.heroSubtitle}>Capturing moments of change and compassion at ZFoundation</p>
      </div>

      <div className={styles.container}>
        <div className={styles.masonryGrid}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.galleryItem}>
              <div className={styles.imageWrapper}>
                <img src={image.url} alt={image.title} className={styles.image} />
                {/* Hover Overlay */}
                <div className={styles.overlay}>
                  <span className={styles.imageTitle}>{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;