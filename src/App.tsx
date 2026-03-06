import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import BlogSection from './components/Blogs';
import BlogArticle from './pages/BlogArticle';

function HomePage() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        {/* <Features /> */}
        <Services />
        <WhyChooseUs />
        <Projects />
        <Achievements />
        <Team />
        <Testimonials />
        {/* <Pricing /> */}

        {/* FAQ Section */}
        <FAQ />
        <BlogSection />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Smooth scrolling for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';

    // Update page title
    document.title = 'UNIFIX - Professional Facility Management Services';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
      </Routes>
    </Router>
  );
}

export default App;