import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { projects } from '../data/content';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#f8f9fa] to-white">
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
            Our Work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-[#041C4B] mb-6"
          >
            Our Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#066FAD] to-[#EE212B]">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our recent successful projects showcasing our expertise across various facility management domains.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              whileHover={{ y: -8 }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#EE212B] text-white'
                }`}>
                  {project.status}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>2024</span>
                  </div>

                  <motion.button
                    className="flex items-center text-[#066FAD] font-semibold hover:text-[#EE212B] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </div>

              {/* Subtle Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#066FAD]/5 to-[#EE212B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-[#066FAD] to-[#EE212B] hover:from-[#041C4B] hover:to-[#EE212B] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
