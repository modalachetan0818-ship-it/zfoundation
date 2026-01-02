import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import styles from './BoardMember.module.css';

const BoardMember = () => {
  // Use state to track which member's info is visible
  const [activeMemberId, setActiveMemberId] = useState(null);

  const toggleInfo = (id) => {
    setActiveMemberId(activeMemberId === id ? null : id);
  };

  const members = [
    { 
      id: 1, 
      name: "Amani Malugu", 
      role: "Founder", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400", // Representative image
      info: "Amani, Founder of Ammani Foundation, is a visionary leader driven by compassion and a strong sense of social responsibility. Her leadership transforms empathy into impactful initiatives." 
    },
    { id: 2, name: "Tarun Sai Meduri", role: "Vice President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", info: "Tarun is a young leader driven by purpose, dedicating his skills and energy to uplift those in need." },
    { id: 3, name: "Sravanthi M", role: "General Secretary", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400", info: "Sravanthi manages foundation operations with a focus on community empowerment." },
    { id: 4, name: "Dr. Swayam Smita", role: "Joint Secretary", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400", info: "Dr. Smita oversees healthcare and nutrition programs for the underserved." },
    { id: 5, name: "M. Yamuna Rani", role: "Treasurer", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400", info: "Yamuna manages financial integrity, ensuring every donation reaches its intended cause." }
  ];

  return (
    <section className={styles.boardSection}>
      <h2 className={styles.redHeading}>Our Board of Directors</h2>
      
      {/* 1. Founder Block - Exactly same style as remain blocks */}
      <div className={styles.founderWrapper}>
        <MemberCard 
          member={members[0]} 
          isOpen={activeMemberId === members[0].id} 
          onToggle={() => toggleInfo(members[0].id)} 
        />
      </div>

      {/* 2. Executive Member Grid */}
      <div className={styles.memberGrid}>
        {members.slice(1).map((member) => (
          <MemberCard 
            key={member.id} 
            member={member} 
            isOpen={activeMemberId === member.id} 
            onToggle={() => toggleInfo(member.id)} 
          />
        ))}
      </div>
    </section>
  );
};

// Reusable card component to ensure same-to-same look
const MemberCard = ({ member, isOpen, onToggle }) => (
  <div className={styles.memberCard}>
    <div className={styles.imgWrapper}>
      <img src={member.img} alt={member.name} className={styles.avatarImg} />
    </div>
    <h4 className={styles.memberName}>{member.name}</h4>
    <p className={styles.memberRole}>{member.role}</p>
    
    <div className={styles.plusBox} onClick={onToggle}>
      <FaPlusCircle 
        className={styles.greenIcon} 
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }} 
      />
    </div>

    {isOpen && (
      <div className={styles.detailsBox}>
        <p className={styles.detailsText}>{member.info}</p>
      </div>
    )}
  </div>
);

export default BoardMember;