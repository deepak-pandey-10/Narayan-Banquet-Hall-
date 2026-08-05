import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-brand-light font-sans text-brand-dark overflow-x-hidden selection:bg-brand-gold selection:text-white">
        <Helmet>
          <title>Narayan Banquet Hall | Premium Event Venue</title>
          <meta name="description" content="Narayan Banquet Hall - The perfect premium venue for your weddings, corporate events, and grand celebrations." />
        </Helmet>
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
