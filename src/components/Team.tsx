import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { team } from '../data/content';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Our Team
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[#041C4B] mb-6"
          >
            Trained FM{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#066FAD] to-[#EE212B]">
              Team
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Our team is made up of certified technicians, skilled engineers,
            project managers, and support specialists, each committed to
            delivering reliable, efficient, and top-tier facility solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 justify-items-center"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="group relative bg-white rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 w-64 h-64 flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-center">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-gray-300">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#066FAD] to-[#EE212B] rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-white/90">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/90">Certified Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-white/90">Years Average Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
