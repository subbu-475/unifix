import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar, ChevronRight } from 'lucide-react';
import HeroImage from '../assets/hero.jpg'; // Adjust the path as necessary

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
        {/* Left: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white-500 font-semibold text-sm uppercase tracking-wider"
          >
            Welcome To UNIFIX
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Reliable <span className="text-white">Maintenance</span> &{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
              Fixing Services
            </span>{" "}
            in India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-300 max-w-xl"
          >
            We encompass the coordination of people, processes, and systems to ensure the functionality, comfort, safety, and efficiency of buildings and their infrastructure.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              <Calendar size={18} />
              Book An Appointment
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              <PhoneCall size={18} />
            </button>
          </motion.div>
        </div>

        {/* Right: Quote Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-white rounded-xl shadow-xl px-6 py-4 space-y-4 w-full max-w-sm mx-auto text-gray-800 relative"
        >
          {/* Animated thread line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="origin-left h-1 w-full bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mb-4"
          />

          <h3 className="text-xl font-semibold mb-2 text-center">Request A Free Quote</h3>

          <form className="space-y-3">
            <div>
              <input className="w-full border border-gray-300 rounded-md p-2 text-sm" placeholder="Your Name" required />
            </div>

            <div>
              <input className="w-full border border-gray-300 rounded-md p-2 text-sm" placeholder="Email Address*" type="email" required />
            </div>

            <div>
              <input className="w-full border border-gray-300 rounded-md p-2 text-sm" placeholder="Phone Number*" type="tel" required />
            </div>

            <div>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500" defaultValue="">
                <option value="" disabled>Select Service</option>
                <option>HVAC</option>
                <option>Electrical</option>
                <option>Plumbing</option>
              </select>
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:opacity-90 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 text-sm">
              Submit <ChevronRight size={16} />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Counters */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-600 py-6 text-white text-center flex justify-center gap-12 text-xl font-semibold">
        <div>
          <span className="text-3xl font-bold">2.5k</span>
          <p>Completed Projects</p>
        </div>
        <div>
          <span className="text-3xl font-bold">1.8k</span>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
