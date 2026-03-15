import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { contactInfo } from '../data/content';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      info: contactInfo.phone,
      subInfo: 'Available 24/7 for emergencies'
    },
    {
      icon: Headphones,
      title: 'Customer Care',
      info: contactInfo.customerCare,
      subInfo: 'Support & Enquiries'
    },
    {
      icon: Mail,
      title: 'Email',
      info: contactInfo.email,
      subInfo: 'We reply within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: contactInfo.location,
      subInfo: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: contactInfo.hours,
      subInfo: 'Emergency service available'
    }
  ];

  const services = [
    'HVAC - Air Conditioning',
    'Electrical Services',
    'Plumbing Solutions',
    'General Maintenance',
    'Emergency Repair',
    'Consultation'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#066FAD] font-semibold text-lg uppercase tracking-wider mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[#041C4B] mb-6"
          >
            Ready to Start Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE212B] to-[#066FAD]"> Project?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Contact us today for professional facility management services. Our team is ready to help you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-gradient-to-br from-[#EE212B] to-[#066FAD] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Ready to transform your facility management? Our expert team is here to help.
              </p>

              <div className="space-y-6">
                {contactDetails.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 shrink-0 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-white/90">{item.info}</p>
                        <p className="text-white/60 text-sm mt-0.5">{item.subInfo}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Emergency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#FFF5F5] border border-[#FBD5D5] rounded-2xl p-6"
            >
              <h4 className="text-xl font-bold text-[#EE212B] mb-4">Emergency Service</h4>
              <p className="text-[#b91c1c] mb-6">
                Need immediate assistance? Our emergency team is available 24/7.
              </p>
              <motion.a
                href="tel:+919566632336"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full block text-center bg-[#EE212B] hover:bg-[#c71c24] text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Call Emergency Line
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div className="relative" animate={{ scale: focusedField === 'name' ? 1.02 : 1 }}>
                    <label className="block text-sm font-semibold text-[#041C4B] mb-2">Full Name *</label>
                    <input
                      name="name"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      value={formData.name}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#066FAD] transition-all bg-gray-50"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div className="relative" animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}>
                    <label className="block text-sm font-semibold text-[#041C4B] mb-2">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      value={formData.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#066FAD] transition-all bg-gray-50"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <motion.div className="relative" animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}>
                    <label className="block text-sm font-semibold text-[#041C4B] mb-2">Phone Number</label>
                    <input
                      name="phone"
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      value={formData.phone}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#066FAD] transition-all bg-gray-50"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>

                  {/* Service */}
                  <motion.div className="relative" animate={{ scale: focusedField === 'service' ? 1.02 : 1 }}>
                    <label className="block text-sm font-semibold text-[#041C4B] mb-2">Service Needed</label>
                    <select
                      name="service"
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleInputChange}
                      value={formData.service}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#066FAD] transition-all bg-gray-50"
                    >
                      <option value="">Select a service</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div className="relative" animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}>
                  <label className="block text-sm font-semibold text-[#041C4B] mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleInputChange}
                    value={formData.message}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#066FAD] transition-all bg-gray-50 resize-none"
                    placeholder="Describe your facility management needs..."
                  />
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#EE212B] to-[#066FAD] hover:from-[#d91e29] hover:to-[#045d95] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
