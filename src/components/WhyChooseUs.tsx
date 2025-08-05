import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Wrench, Clock, ShieldCheck, ArrowUpRight, Pin } from 'lucide-react';

const whyCards = [
  {
    icon: Rocket,
    title: 'Fast & Reliable Service',
    description:
      'We understand that delays in facility maintenance can lead to costly disruptions. That’s why we’re committed to delivering prompt, dependable service—every time with quick response times, skilled & equipped teams, on-time, local presence, immediate support.',
  },
  {
    icon: Wrench,
    title: 'Top-Quality Materials',
    description:
      "We believe that long-lasting performance starts with the right materials. That’s why we use only top-quality, industry-approved products in every project—whether it's HVAC, electrical, plumbing, or general maintenance. Our strong partnerships with trusted suppliers ensure consistent quality, durability, and compliance with safety standards.",
  },
  {
    icon: Clock,
    title: '24/7 Premium Support',
    description:
      "Our dedicated support team is available 24/7, ensuring your facility runs smoothly at all times. Whether it’s a sudden HVAC breakdown, electrical fault, or plumbing emergency, we prioritize rapid response, expert troubleshooting, and dependable solutions to minimize disruptions and maximize safety.",
  },
  {
    icon: ShieldCheck,
    title: 'Certified Technicians',
    description:
      "Every technician, engineer, and service expert on our team is certified, trained, and experienced to handle complex facility challenges with precision. We adhere to strict industry standards and regulatory requirements to ensure safe, reliable, and compliant services across all sectors—residential, commercial, and industrial.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1748501749488-4212fa477bba?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="text-white max-w-xl space-y-6">
            <p className="font-medium text-white inline-flex items-center">
              <Pin className="w-4 h-4 mr-2 text-[#EE212B]" />
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why You Should <br />
              <span className="text-white">Choose Us</span>
            </h2>
            <h6 className="font-bold leading-tight text-white">
              Your Property. Our Priority.
            </h6>
            <p className="text-white/90 leading-relaxed">
              We go beyond just maintenance — we deliver peace of mind. From residential complexes and commercial spaces to industrial facilities, our expert team provides reliable, end-to-end facility management that’s efficient, cost-effective, and built on trust.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-[#EE212B] text-white font-semibold shadow-md hover:bg-[#c31a23] transition"
            >
              Learn More
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>

          {/* Right Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative bg-white text-[#041C4B] rounded-xl p-6 shadow-md"
              >
                {/* Floating Red Badge for the center card */}
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EE212B] text-white text-center px-4 py-2 rounded-lg z-10 shadow-lg">
                    <div className="text-sm font-semibold">Award Winner</div>
                  </div>
                )}

                <div className="mb-4 text-[#EE212B]">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 text-justify">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
