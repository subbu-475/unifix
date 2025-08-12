import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Award, ChevronRight, Star, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      icon: Star,
      value: 600,
      suffix: '+',
      label: '5-Star Reviews',
    },
    {
      icon: Users,
      value: 1200,
      suffix: '+',
      label: 'Happy Clients',
    },
  ];

  return (
    <section id="achievements" className="relative py-20 bg-white overflow-hidden">
      {/* Background with very light blur */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg')`,
          // filter: 'blur(1px)',
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <div className="relative flex items-end gap-6">
            <img
              src="https://images.pexels.com/photos/16552856/pexels-photo-16552856.jpeg"
              alt="Worker"
              className="rounded-xl w-2/3 h-auto object-cover shadow-xl"
            />
            <img
              src="https://images.pexels.com/photos/26648949/pexels-photo-26648949.jpeg"
              alt="Roof Top"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-40 h-40 rounded-xl border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div>
            <p className="text-[#EE212B] font-semibold mb-2 inline-flex items-center uppercase">
              <Award className="w-4 h-4 mr-2 text-[#EE212B]" /> ACHIEVEMENT
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#041C4B] mb-4 ">
              Built on Trust & Performance
            </h2>

            <p className="text-gray-700 leading-relaxed max-w-xl mb-8 text-justify">
              Over the years, we’ve successfully delivered high-quality facility solutions to a diverse portfolio of residential, commercial, and industrial clients. From large-scale HVAC installations to complex electrical and plumbing projects, our commitment to excellence has earned us consistent recognition and client loyalty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  className="bg-white rounded-xl shadow-md p-6 text-center border border-[#066FAD]/20"
                >
                  <div className="text-3xl font-bold text-[#EE212B]">
                    <CountUp end={item.value} duration={2} />{item.suffix}
                  </div>
                  <div className="text-[#041C4B] text-sm mt-2">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#EE212B] hover:bg-[#C51B24] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition"
            >
              Learn More
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
