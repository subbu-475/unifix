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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-[#066FAD] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {member.experience}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#A9D5EF] font-medium">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-[#EE212B] mr-2" />
                    <span className="text-sm font-medium text-gray-600">Certified</span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 font-medium mb-2">Specialization:</p>
                <p className="text-[#041C4B] font-semibold">{member.specialization}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#066FAD]/10 to-[#EE212B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
