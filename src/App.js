import { Routes, Route } from 'react-router-dom';
import TopBar from './pages/TopBar/TopBar';
import Footer from './pages/Footer/Footer';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Volunteer from './components/Volunteer/Volunteer';
import Gallery from './components/WorkGallery/WorkGallery';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
