import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Basic Care',
      price: '$499',
      period: '/month',
      description: 'Essential maintenance for small properties',
      popular: false,
      features: [
        'Preventive maintenance checks',
        '24/7 emergency support',
        'Basic electrical & plumbing',
        'Monthly property inspection',
        'HVAC seasonal tune-up'
      ],
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$899',
      period: '/month',
      description: 'Comprehensive care for medium properties',
      popular: true,
      features: [
        'All Basic Care features',
        'Priority emergency response',
        'Advanced HVAC maintenance',
        'Bi-weekly property inspection',
        'Dedicated account manager',
        'Vendor coordination'
      ],
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large properties',
      popular: false,
      features: [
        'All Professional features',
        'Customized service plans',
        'On-site facility manager',
        'Energy efficiency audits',
        'Sustainability consulting',
        'Advanced reporting',
        '24/7 dedicated support team'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#066FAD] font-bold text-lg uppercase tracking-wide mb-4"
          >
            Flexible Pricing Plans
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold text-[#041C4B] mb-6"
          >
            Transparent Pricing,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE212B] to-[#066FAD]"> No Surprises</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            We understand that every client has unique needs.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 items-stretch"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative flex flex-col border-2 rounded-2xl overflow-hidden ${plan.popular ? 'border-[#EE212B] shadow-xl' : 'border-gray-200'
                }`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#EE212B] to-[#066FAD] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="p-8 bg-white flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-extrabold text-[#041C4B]">{plan.name}</h3>
                  {plan.popular && (
                    <Star className="w-5 h-5 ml-2 text-[#EE212B] fill-[#EE212B]/30" />
                  )}
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#041C4B]">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                  <p className="text-gray-600 mt-2 font-medium">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#066FAD] mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button pinned to bottom */}
                <motion.button
                  className={`mt-auto w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-r from-[#EE212B] to-[#066FAD] text-white'
                      : 'bg-gradient-to-r from-[#066FAD] to-[#041C4B] text-white'
                    } shadow-md hover:shadow-lg`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-[#066FAD] to-[#041C4B] p-8 flex flex-col justify-center">
              <Zap className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Custom Solutions</h3>
              <p className="text-blue-100">
                Need something tailored? We create personalized plans for unique requirements.
              </p>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#041C4B] mb-2">
                    Request a Custom Quote
                  </h4>
                  <p className="text-gray-600 font-medium">
                    Get a personalized plan with flexible services and pricing.
                  </p>
                </div>
                <motion.button
                  className="mt-4 md:mt-0 bg-gradient-to-r from-[#066FAD] to-[#EE212B] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Custom Quote
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
