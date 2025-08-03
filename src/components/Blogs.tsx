import React from 'react';
import { ArrowUpRight, Phone, CalendarCheck } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: '5 Smart Ways to Cut Property Maintenance Costs',
    date: '03',
    month: 'Aug',
    description:
      'Discover practical strategies to reduce maintenance expenses without compromising on quality or safety.',
    image:
      'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg',
  },
  {
    id: 2,
    title: 'How Facility Management Boosts Property Value',
    date: '27',
    month: 'Jul',
    description:
      'Explore how professional facility services enhance long-term property value and tenant satisfaction.',
    image:
      'https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg',
  },
  {
    id: 3,
    title: 'Top Challenges in Commercial Facility Management',
    date: '16',
    month: 'Jul',
    description:
      'Learn about the common challenges businesses face in maintaining commercial spaces—and how to solve them.',
    image:
      'https://images.pexels.com/photos/12142829/pexels-photo-12142829.jpeg',
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16" id='blogs'>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <p className="text-orange-500 font-medium text-sm flex items-center gap-2">
              <CalendarCheck className="w-4 h-4" /> Industry Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Latest Articles on Property & Facility Management
            </h2>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm text-slate-500 max-w-md text-center md:text-left">
              Stay updated with expert advice and real-world insights to make informed decisions about your property.
            </p>
            <button className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-medium transition">
              View All <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-md text-sm font-semibold text-center leading-tight">
                  <div>{post.date}</div>
                  <div className="text-xs">{post.month}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{post.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{post.description}</p>
                <button className="inline-flex items-center text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-medium transition">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white mt-20 px-6 py-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h3 className="text-3xl font-bold mb-4">Get In Touch With Our Facility Management Team?</h3>
          <p className="text-white/80 mb-6">
            Ready to experience seamless facility management? Whether you have a question, need a quick quote, or want to discuss a custom service plan, our team at Unifix Facility Management is here to help.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              <CalendarCheck className="w-4 h-4" /> Book Appointment
            </button>
            <button className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition">
              <Phone className="w-4 h-4" />+91 431 123 4567
            </button>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg"
          alt="CTA"
          className="w-full max-w-sm rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default BlogSection;
