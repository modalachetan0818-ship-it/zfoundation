import React from 'react';
import styles from './FounderSection.module.css';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';

const FounderSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        
        {/* Left Side: Founder Image */}
        <div className={styles.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
            alt="ZFoundation Founder" 
            className={styles.founderImg}
          />
        </div>

        {/* Right Side: Details Content */}
        <div className={styles.detailsContent}>
          <h2 className={styles.founderName}>Sarah Jenkins</h2>
          <p className={styles.designation}>Founder & Director</p>

          <h3 className={styles.quote}>"Manava Seva – Madava Seva"</h3>
          
          <p className={styles.highlightText}>
            “We ourselves feel that what we are doing is just a drop in the ocean. 
            But the ocean would be less because of that missing drop”.
          </p>

          <div className={styles.biography}>
            <p>
              Sarah began her journey with a vision to transform lives through education and 
              sustainability. Having witnessed the struggles of underprivileged communities 
              firsthand, she founded <strong>ZFoundation</strong> as a beacon of hope. 
              Under her leadership, the foundation has successfully launched programs 
              focused on women’s vocational training, child nutrition, and climate 
              resilience. 
            </p>
            <p>
              Her approach is rooted in empathy and measurable impact. From this vision, 
              ZFoundation has grown into a movement that empowers over 500 families 
              annually. Her journey serves as a reminder that even the smallest act 
              of service can ripple into global change.
            </p>
          </div>

          {/* Social Icons matching the image position */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconCircle}><FaYoutube /></a>
            <a href="#" className={styles.iconCircle1}><FaFacebookF /></a>
            <a href="#" className={styles.iconCircle2}><FaInstagram /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;