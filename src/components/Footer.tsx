import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/content';
import unifixImage from '../assets/unifix.png';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: [
      { name: 'HVAC Services', href: '#services' },
      { name: 'Electrical Services', href: '#services' },
      { name: 'Plumbing Solutions', href: '#services' },
      { name: 'Emergency Repairs', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Our Team', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: '24/7 Support', href: '#contact' },
      { name: 'Emergency Service', href: '#contact' },
      { name: 'Maintenance Plans', href: '#services' },
      { name: 'Consultation', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/16XY5opqyf/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/unifix_facility', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/unifix__facility/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/unifix-facility-management/', label: 'LinkedIn' }
  ];

  const contactDetails = [
    { icon: Phone, text: contactInfo.phone },
    { icon: Mail, text: 'info@unifix.com' },
    { icon: MapPin, text: contactInfo.location }
  ];

  return (
    <footer className="bg-[#041C4B] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-24 h-24 bg-gradient-to-r  rounded-lg flex items-center justify-center">
                <img src={unifixImage} alt="UNIFIX Logo" className="w-20 h-20" />
              </div>
              <span className="text-2xl font-bold">UNIFIX</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in smart, efficient facility management.
              We provide comprehensive solutions for all your maintenance and repair needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactDetails.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center text-gray-300 text-sm"
                  >
                    <IconComponent className="w-4 h-4 mr-3 text-[#066FAD]" />
                    {item.text}
                  </motion.div>
                );
              })}

            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-[#041C4B] hover:bg-gradient-to-r hover:from-[#066FAD] hover:to-[#EE212B] rounded-lg flex items-center justify-center transition-all duration-300 border border-[#133462] hover:border-transparent"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient bg-gradient-to-r from-[#EE212B] to-[#066FAD] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient bg-gradient-to-r from-[#EE212B] to-[#066FAD] bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gradient bg-gradient-to-r from-[#EE212B] to-[#066FAD] bg-clip-text text-transparent">
              Support
            </h3>

            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>


          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-[#133462]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 UNIFIX. All rights reserved. Built with excellence.
          </p>

          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;