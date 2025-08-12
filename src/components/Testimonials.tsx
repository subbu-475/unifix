import React, { useEffect, useState } from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../data/content';
import testiMoinialImage from '../assets/testimonial.jpg';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + itemsPerSlide) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials
    .concat(testimonials)
    .slice(currentIndex, currentIndex + itemsPerSlide);

  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/9242887/pexels-photo-9242887.jpeg)` }}
    >
      <div className="absolute inset-0 bg-[#041C4B]/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageSquareQuote className="text-[#EE212B] w-6 h-6" />
            <p className="text-[#EE212B] font-bold text-base uppercase tracking-wide">
              Testimonials
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Clients Testimonials
          </h2>
          <p className="text-[#D1D5DB] max-w-2xl mx-auto">
            We take pride in building long-term relationships through reliable service, expert solutions, and consistent quality.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8 transition-all duration-500 ease-in-out">
          {visibleTestimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden border-t-4 border-[#EE212B]"
            >
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 mb-6">{item.message}</p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#041C4B]">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Quote Icon */}
              <Quote className="absolute bottom-4 right-4 text-[#EE212B] opacity-10 w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
