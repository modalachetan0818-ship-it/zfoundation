import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import TopBar from './pages/TopBar/TopBar';
import Footer from './pages/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Volunteer from './components/Volunteer/Volunteer';
import Gallery from './components/Gallery/Gallery';
import Events from './components/Events/Events';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ContactUs from './components/ContactUs/ContactUs';
import Aboutsection from './components/Aboutsection/Aboutsection';
import WomenEmpowerment from './components/What We Do/WomenEmpowerment/WomenEmpowerment';
import Education from './components/What We Do/Education/Education';
import ChildNature from './components/What We Do/ChildNature/ChildNature';
import HumanitarianRelief from './components/What We Do/HumanitarianRelief/HumanitarianRelief';
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
        <Route path="/ChildNature" element={<ChildNature/>}/>
        <Route path="/HumanitarianRelief" element={<HumanitarianRelief/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
