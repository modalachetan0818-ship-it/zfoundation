import React from 'react';
import HeroSection from '../../components/Home Folder/HeroSection/HeroSection.jsx';
import Aboutsection from '../../components/Home Folder/Aboutsection/Aboutsection.jsx';
import OurStory from '../../components/Home Folder/OurStory/OurStory.jsx';
import FounderSection from '../../components/Home Folder/FounderSection/FounderSection.jsx';
import OurCauses from '../../components/Home Folder/OurCauses/OurCauses.jsx';
import WorkGallery from '../../components/Home Folder/WorkGallery/WorkGallery.jsx';
import ContactUsForm from '../../components/Home Folder/ContactUsForm/ContactUsForm.jsx';

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

