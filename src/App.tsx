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
import AdminLogin from './pages/AdminLogin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
// Blog imports
import FourFourFourBreathing from './pages/blog/444Breathing';
import BodyScan from './pages/blog/BodyScan';
import Hooponopono from './pages/blog/Hooponopono';
import Reiki from './pages/blog/Reiki';
import TraumaSensitiveMeditation from './pages/blog/TraumaSensitiveMeditation';
import SleepMeditation from './pages/blog/SleepMeditation';
import WalkingMeditation from './pages/blog/WalkingMeditation';
import GratitudeWriting from './pages/blog/GratitudeWriting';
import Affirmations from './pages/blog/Affirmations';
import FamilyConstellation from './pages/blog/FamilyConstellation';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              {/* Blog Routes */}
              <Route path="/blog/444-breathing" element={<FourFourFourBreathing />} />
              <Route path="/blog/beden-taramasi" element={<BodyScan />} />
              <Route path="/blog/hooponopono" element={<Hooponopono />} />
              <Route path="/blog/reiki" element={<Reiki />} />
              <Route path="/blog/travma-duyarli-meditasyon" element={<TraumaSensitiveMeditation />} />
              <Route path="/blog/uyku-meditasyonu" element={<SleepMeditation />} />
              <Route path="/blog/yuruyus-meditasyonu" element={<WalkingMeditation />} />
              <Route path="/blog/sukran-yazim" element={<GratitudeWriting />} />
              <Route path="/blog/onaylamalar" element={<Affirmations />} />
              <Route path="/blog/aile-dizimi" element={<FamilyConstellation />} />
              <Route path="/spiritual-wellbeing" element={<SpiritualWellbeing />} />
              <Route path="/spiritual-journey" element={<SpiritualJourney />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/support" element={
                <ProtectedRoute>
                  <AdminSupport />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
