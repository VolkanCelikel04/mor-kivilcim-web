import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SpiritualWellbeing from './pages/SpiritualWellbeing';
import SpiritualJourney from './pages/SpiritualJourney';
import AdminSupport from './pages/AdminSupport';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/spiritual-wellbeing" element={<SpiritualWellbeing />} />
            <Route path="/spiritual-journey" element={<SpiritualJourney />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/support" element={<AdminSupport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
