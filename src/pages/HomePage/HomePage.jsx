import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import Aboutsection from '../../components/Aboutsection/Aboutsection.jsx';
import OurStory from '../../components/OurStory/OurStory.jsx';
import FounderSection from '../../components/FounderSection/FounderSection.jsx';
import OurCauses from '../../components/OurCauses/OurCauses.jsx';
import WorkGallery from '../../components/WorkGallery/WorkGallery.jsx';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm.jsx';
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Aboutsection />
      <OurStory />
      <FounderSection />
      <OurCauses />
      <WorkGallery />
      <ContactUsForm />
    </div>
  )
}

export default HomePage;

