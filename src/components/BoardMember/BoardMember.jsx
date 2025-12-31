import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import styles from './BoardMember.module.css';

const BoardOfDirectors = () => {
  // Track ONLY the ID of the member whose info is open
  const [activeMemberId, setActiveMemberId] = useState(null);

  const toggleInfo = (id) => {
    // If clicking the same button, close it. Otherwise, open the new one
    setActiveMemberId(activeMemberId === id ? null : id);
  };

  const boardMembers = [
    { 
      id: 1, name: "Amani Malugu", role: "Founder", 
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      info: "Amani is a visionary leader driven by compassion. She has built a platform that empowers communities and inspires collective action." 
    },
    { 
      id: 2, name: "Tarun Sai Meduri", role: "Vice President", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      info: "Tarun is a young leader driven by purpose, dedicating his skills to uplift and support those in need." 
    },
    { 
      id: 3, name: "Sravanthi M", role: "General Secretary", 
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      info: "Sravanthi manages foundation operations with a focus on community empowerment and transparency." 
    },
    { 
      id: 4, name: "Dr. Swayam Smita", role: "Joint Secretary", 
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
      info: "Dr. Smita oversees our healthcare programs, ensuring professional care for the underserved." 
    },
    { 
      id: 5, name: "M. Yamuna Rani", role: "Treasurer", 
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400",
      info: "Yamuna manages the foundation's financial integrity, ensuring every donation reaches its cause." 
    },
    { 
      id: 6, name: "Sridhar G", role: "Executive Member", 
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      info: "Sridhar focuses on grassroots level engagement and volunteer coordination." 
    },
    { 
      id: 7, name: "Mamatha M", role: "Executive Member", 
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
      info: "Mamatha leads our women empowerment workshops, teaching sustainable vocational skills." 
    }
  ];

  return (
    <div className={styles.boardSection}>
      <div className={styles.container}>
        <h2 className={styles.redHeading}>Our Board of Directors</h2>
        
        {/* Founder Row - Centered on top */}
        <div className={styles.founderRow}>
          <MemberCard 
            member={boardMembers[0]} 
            isOpen={activeMemberId === boardMembers[0].id} 
            onToggle={() => toggleInfo(boardMembers[0].id)} 
          />
        </div>

        {/* Member Grid - 4 per row */}
        <div className={styles.memberGrid}>
          {boardMembers.slice(1).map((member) => (
            <MemberCard 
              key={member.id} 
              member={member} 
              isOpen={activeMemberId === member.id} 
              onToggle={() => toggleInfo(member.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Internal component for the individual blocks
const MemberCard = ({ member, isOpen, onToggle }) => (
  <div className={styles.memberCard}>
    <div className={styles.imgWrapper}>
      <img src={member.img} alt={member.name} className={styles.avatarImg} />
    </div>
    <h4 className={styles.memberName}>{member.name}</h4>
    <p className={styles.memberRole}>{member.role}</p>
    
    {/* The plus button only controls THIS block */}
    <div className={styles.plusBox} onClick={onToggle}>
      <FaPlusCircle 
        className={styles.greenIcon} 
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }} 
      />
    </div>

    {/* Info opens ONLY if this specific card is active */}
    {isOpen && (
      <div className={styles.detailsBox}>
        <p className={styles.detailsText}>{member.info}</p>
      </div>
    )}
  </div>
);

export default BoardOfDirectors;