import { motion } from 'framer-motion';
import {
  Plug,
  ShowerHead,
  ThermometerSnowflake,
} from 'lucide-react';
import serviceImage from '../assets/services.jpg'; // ✅ Corrected variable name typo

const services = [
  { title: 'HVAC – Air Conditioning', icon: ThermometerSnowflake, desc: ' We provide specialized HVAC and air conditioning solutions designed to keep your spaces comfortable, energy-efficient, and operating smoothly all year round. Whether it’s a high-rise commercial building, an industrial facility, or a residential complex, our expert team delivers end-to-end HVAC services tailored to your property’s unique needs.' },
  { title: 'Electrical', icon: Plug, desc: "We provide comprehensive electrical solutions as part of our integrated facility management services, ensuring your property remains safe, efficient, and fully operational. From routine maintenance to complex electrical upgrades, our certified electricians deliver precision-driven service for residential towers, commercial buildings, industrial plants, and more." },
  { title: 'Plumbing', icon: ShowerHead, desc: "We deliver expert plumbing services as a key part of our integrated facility management solutions. From minor repairs to full system overhauls, we ensure safe, efficient, and uninterrupted water systems across commercial, residential, and industrial properties." },
];

const ServicesSection = () => {
  return (
    <section className="bg-white pt-0 pb-20 relative overflow-hidden">
      {/* ✅ Top Half Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${serviceImage})`,

        }}

      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      {/* ✅ Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-80">
        <motion.h5
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-orange-500 font-semibold uppercase text-center"
        >
          Services
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center text-white"
        >
          Our Facility Management Services
        </motion.h2>


        {/* ✅ Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500"
              >
                <Icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center text-slate-800">{service.title}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {service?.desc}
                </p>
                <div className="mt-4 text-center">
                  <a
                    href="#"
                    className="text-orange-500 text-sm font-medium inline-flex items-center hover:underline"
                  >
                    Read More <span className="ml-1">➝</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
