import React from 'react';
import styles from './Events.module.css';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const Events = () => {
  const foundationEvents = [
    {
      id: 1,
      title: "ZFoundation Food Distribution Drive",
      description: "ZFoundation organized a massive food distribution event to support underprivileged families. Our team worked tirelessly to ensure every individual received nutritious meals and essential supplies.",
      images: [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800",
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800",
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800"
      ]
    },
    {
      id: 2,
      title: "Educational Empowerment Workshop",
      description: "Empowering the next generation through education. ZFoundation conducted workshops for local students, providing them with school kits and mentorship to help them dream bigger.",
      images: [
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800",
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800"
      ]
    }
  ];

  return (
    <div className={styles.eventsPage}>
      {/* Hero Section with Illustrative Background */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Events</h1>
      </div>

      <div className={styles.container}>
        <h2 className={styles.mainHeading}>ZFoundation Events</h2>

        {foundationEvents.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.eventHeader}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDesc}>{event.description}</p>
            </div>

            <div className={styles.sliderWrapper}>
              {/* Displaying two images as per reference layout */}
              <div className={styles.imageGrid}>
                <img src={event.images[0]} alt="Event 1" className={styles.eventImage} />
                <img src={event.images[1]} alt="Event 2" className={styles.eventImage} />
              </div>

              {/* Navigation Buttons */}
              <button className={`${styles.navBtn} ${styles.prevBtn}`}>
                <IoChevronBackOutline />
              </button>
              <button className={`${styles.navBtn} ${styles.nextBtn}`}>
                <IoChevronForwardOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;