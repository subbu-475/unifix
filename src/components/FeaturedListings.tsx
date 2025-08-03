import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const FeaturedListings: React.FC = () => {
  const listings = [
    {
      id: 1,
      title: 'Modern Downtown Loft',
      location: 'Manhattan, NY',
      price: '$2,850,000',
      beds: 3,
      baths: 2,
      sqft: '2,400',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 2,
      title: 'Luxury Beach House',
      location: 'Malibu, CA',
      price: '$4,200,000',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false
    },
    {
      id: 3,
      title: 'Contemporary Villa',
      location: 'Beverly Hills, CA',
      price: '$5,500,000',
      beds: 5,
      baths: 4,
      sqft: '4,800',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 4,
      title: 'Urban Penthouse',
      location: 'Chicago, IL',
      price: '$3,100,000',
      beds: 3,
      baths: 3,
      sqft: '2,800',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false
    },
    {
      id: 5,
      title: 'Waterfront Estate',
      location: 'Miami, FL',
      price: '$6,800,000',
      beds: 6,
      baths: 5,
      sqft: '5,200',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: 6,
      title: 'Mountain Retreat',
      location: 'Aspen, CO',
      price: '$4,900,000',
      beds: 4,
      baths: 4,
      sqft: '3,800',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            className="text-orange-500 font-semibold text-lg uppercase tracking-wider mb-4"
          >
            Featured Properties
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Exceptional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Listings</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our curated selection of premium properties, each offering unique luxury and unparalleled quality.
          </motion.p>
        </motion.div>

        {/* Listings Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Featured Badge */}
                {listing.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Like Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-300"
                >
                  <Heart className="w-5 h-5" />
                </motion.button>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {listing.location}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {listing.title}
                </h3>
                
                {/* Price */}
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {listing.price}
                </div>
                
                {/* Details */}
                <div className="flex items-center justify-between text-gray-600 border-t pt-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{listing.sqft} sqft</span>
                  </div>
                </div>
              </div>

              {/* Hover CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  View Details
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListings;