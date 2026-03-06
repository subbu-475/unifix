import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { navigationItems, contactInfo } from '../data/content';
import unifixImage from '../assets/unifix.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is currently visible using IntersectionObserver
  useEffect(() => {
    const sectionIds = navigationItems.map((item) => item.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = useCallback((href: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll after a small delay
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  }, [location.pathname, navigate]);

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <>
      {/* Contact Bar */}
      <div className="bg-[#041C4B] text-white py-2 text-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#066FAD]" />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#066FAD]" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/share/16XY5opqyf/', label: 'Facebook' },
                { Icon: Twitter, href: 'https://x.com/unifix_facility', label: 'Twitter' },
                { Icon: Instagram, href: 'https://www.instagram.com/unifix__facility/', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/unifix-facility-management/', label: 'LinkedIn' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-[#066FAD] transition-colors"
                >
                  <social.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg mt-0'
          : 'bg-transparent sm:mt-12 mt-0'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={unifixImage} alt="unifix" className="w-16 h-16" />
              </div>
              <span
                className={`text-2xl font-bold ${isScrolled ? 'text-[#041C4B]' : 'text-white'
                  }`}
              >
                UNIFIX
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative font-medium transition-colors pb-1 ${isActive(item.href)
                    ? 'text-[#EE212B]'
                    : isScrolled
                      ? 'text-[#041C4B] hover:text-[#EE212B]'
                      : 'text-white/90 hover:text-[#EE212B]'
                    }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EE212B] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="bg-[#066FAD] hover:bg-[#041C4B] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-[#041C4B]' : 'text-white'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium transition-colors py-2 ${isActive(item.href)
                    ? 'text-[#EE212B] border-l-4 border-[#EE212B] pl-3'
                    : 'text-[#041C4B] hover:text-[#EE212B]'
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-[#066FAD] hover:bg-[#041C4B] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
