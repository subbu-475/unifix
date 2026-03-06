import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../data/content';
import customer1 from '../assets/customer1.png';
import customer2 from '../assets/customer2.png';
import customer3 from '../assets/customer3.png';
import customer4 from '../assets/customer4.png';
import customer5 from '../assets/customer5.png';

const AnimatedCounter: React.FC<{ end: number; suffix: string; duration?: number }> = ({
  end,
  suffix,
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-[#EE212B]">
      {count}
      {suffix}
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#041C4B] to-[#066FAD] relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built on Trust & Performance
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Over the years, we've successfully delivered exceptional facility management
            services, building lasting relationships with our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                <div className="text-white/80 text-lg font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-8 text-lg">Trusted by hundreds of satisfied customers</p>
          <div className="flex justify-center items-center space-x-4 flex-wrap gap-4">
            {[customer1, customer2, customer3, customer4, customer5].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Customer ${index + 1}`}
                className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />
            ))}
            <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-white font-semibold text-sm">
              +50
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
