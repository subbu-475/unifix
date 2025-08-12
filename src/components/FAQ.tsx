import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Pin, Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Unifix Facility Management offer?',
      answer:
        'We provide complete facility management solutions, including HVAC, electrical, plumbing, preventive maintenance, emergency repair, and general upkeep for residential, commercial, and industrial properties.',
    },
    {
      question: 'Do you offer 24/7 emergency support?',
      answer:
        'Yes! Our team is available 24/7 to handle urgent repairs and critical maintenance issues with quick response times and reliable solutions.',
    },
    {
      question: 'Are your technicians certified and insured?',
      answer:
        'Absolutely. All our professionals are certified, trained, and fully insured, ensuring safe, high-quality service in every job we undertake.',
    },
    {
      question: 'Can I customize a service package to suit my property?',
      answer:
        "Yes. We offer flexible, customizable service plans that can be tailored to your property's size, needs, and budget—whether it's a one-time service or a long-term contract.",
    },
    {
      question: 'How do I request a quote or schedule a service?',
      answer:
        'You can contact us via phone, email, or our website form. Our team will get in touch promptly to understand your needs and provide a detailed estimate.',
    },
    {
      question: 'Do you offer eco-friendly or sustainable solutions?',
      answer:
        'Yes, sustainability is part of our approach. We use energy-efficient equipment and green materials wherever possible to help you reduce costs and environmental impact.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#EE212B] font-bold text-md uppercase mb-2 flex items-center justify-center gap-2">
            <Pin className="w-6 h-6" /> FAQs
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#041C4B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#333] max-w-2xl mx-auto font-medium">
            We understand that choosing the right facility management partner is an important decision. To help you make an informed choice, we’ve compiled answers to some of the most common questions our clients ask, from service offerings to support availability and pricing flexibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md border transition duration-300 ${isOpen ? 'border-[#EE212B]' : 'border-white'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left px-6 py-5 flex justify-between items-center rounded-xl ${
                    isOpen
                      ? 'text-[#EE212B] font-bold'
                      : 'text-[#041C4B] font-semibold'
                  }`}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-[#EE212B]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#066FAD]" />
                  )}
                </button>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`px-6 pt-0 text-[#333] overflow-hidden ${
                    isOpen ? 'pb-6' : 'pb-0'
                  }`}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
