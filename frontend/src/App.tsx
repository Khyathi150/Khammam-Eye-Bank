import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import PageTransition from '@/components/PageTransition';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Resources from '@/pages/Resources';
import PublicHealth from '@/pages/PublicHealth';
import Education from '@/pages/Education';
import Partners from '@/pages/Partners';
import Contact from '@/pages/Contact';
import Research from '@/pages/Research';
import Careers from '@/pages/Careers';
import Gallery from '@/pages/Gallery';
import NotFound from '@/pages/NotFound';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
          <Route path="/public-health" element={<PageTransition><PublicHealth /></PageTransition>} />
          <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
          <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

          {/* Hidden pages: fully implemented, intentionally excluded from primaryNav */}
          <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />

          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
