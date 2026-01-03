import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import TopBar from './pages/TopBar/TopBar';
import Footer from './pages/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/Footer/AboutUs/AboutUs';
import Volunteer from './pages/Footer/Volunteer/Volunteer';
import Gallery from './components/Our Work/Gallery/Gallery';
import Events from './components/Our Work/Events/Events';
import PrivacyPolicy from './pages/Footer/PrivacyPolicy/PrivacyPolicy';
import ContactUs from './pages/Footer/ContactUs/ContactUs';
import Aboutsection from './components/Home Folder/Aboutsection/Aboutsection';
import WomenEmpowerment from './components/What We Do/WomenEmpowerment/WomenEmpowerment';
import Education from './components/What We Do/Education/Education';
import ChildNature from './components/What We Do/ChildNature/ChildNature';
import HumanitarianRelief from './components/What We Do/HumanitarianRelief/HumanitarianRelief';
import OurProjects from './components/OurProjects/OurProjects';
import Donate from './pages/TopBar/Donate/Donate';
import Videos from './components/Our Work/Videos/Videos';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/WomenEmpowerment" element={<WomenEmpowerment />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/ChildNature" element={<ChildNature />} />
        <Route path="/HumanitarianRelief" element={<HumanitarianRelief />} />
        <Route path="/OurProjects" element={<OurProjects />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Videos" element={<Videos/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
