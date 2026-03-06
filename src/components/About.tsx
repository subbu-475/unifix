import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Info, PhoneCall, ShieldCheck, ThumbsUp, Users } from 'lucide-react';
import CountUp from 'react-countup';

const About = () => {
  return (
    <section className="relative bg-white py-20 px-6 lg:px-20 overflow-hidden" id='about'>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Image with Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661751844960-598e1f867b71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="UNIFIX Worker"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          {/* Floating Satisfied Count */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
            className="absolute -top-6 -left-6 bg-[#EE212B] text-white px-6 py-4 rounded-xl shadow-xl font-semibold text-base sm:text-lg flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            <CountUp end={99} duration={3} />% Satisfied Customers
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h5 className="flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wide text-[#EE212B]">
              <Info className="w-4 h-4 text-[#EE212B]" />
              About Us
            </h5>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#041C4B] leading-tight">
              Welcome to <span className="text-[#066FAD]">UNIFIX</span> – Your Trusted Partner in{" "}
              <span className="text-[#066FAD]">Facility Management</span>
            </h2>
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
            We specialize in <span className="text-[#041C4B] font-medium">Plumbing, Air conditioning</span>, and <span className="text-[#041C4B] font-medium">Electrical services</span>, offering reliable and responsive solutions for <span className="text-[#041C4B] font-medium">Residential, Commercial</span>, and <span className="text-[#041C4B] font-medium">Industrial clients</span>. From homes and offices to large-scale industrial facilities, we keep your essential systems running smoothly — so you don’t have to worry.
          </p>

          <p className="text-gray-600 text-base sm:text-lg text-justify">
            At Unifix, we believe well-maintained spaces create better living and working environments. Whether it’s a quick plumbing fix, a full HVAC setup, or complex electrical repairs, our skilled team is ready to deliver with care, speed, and precision. We blend technical know-how with practical service, ensuring quality you can count on — every time.
          </p>

          <h5 className="text-sm sm:text-base font-semibold uppercase tracking-wide text-[#EE212B] mb-4">
            Insured & Guaranteed
          </h5>

          {/* Trust Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Card 1 */}
            <div className="flex items-start gap-3 bg-white shadow-md hover:shadow-lg rounded-xl p-3 border border-gray-200 border-l-4 border-l-[#EE212B] transition-shadow duration-300">
              <ShieldCheck className="text-[#EE212B] w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-[#041C4B] leading-tight">Fully Insured Services</h4>
                <p className="text-xs text-gray-600 text-justify leading-snug">
                  We’re covered so you’re protected against accidents, damage, or unforeseen issues.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-3 bg-white shadow-md hover:shadow-lg rounded-xl p-3 border border-gray-200 border-l-4 border-l-[#066FAD] transition-shadow duration-300">
              <ThumbsUp className="text-[#066FAD] w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-[#041C4B] leading-tight">Workmanship Guarantee</h4>
                <p className="text-xs text-gray-600 text-justify leading-snug">
                  Every task comes with a service warranty. If something isn’t right, we’ll make it right.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-3 bg-white shadow-md hover:shadow-lg rounded-xl p-3 border border-gray-200 border-l-4 border-l-[#EE212B] transition-shadow duration-300">
              <CheckCircle className="text-[#EE212B] w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-[#041C4B] leading-tight">Transparent & Risk-Free</h4>
                <p className="text-xs text-gray-600 text-justify leading-snug">
                  No hidden surprises. No cutting corners. Just dependable, quality workmanship from a team you can rely on.
                </p>
              </div>
            </div>

          </div>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="tel:+919566632336"
              whileHover={{ scale: 1.05 }}
              className="bg-[#066FAD] hover:bg-[#055C94] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition"
            >
              <PhoneCall size={18} />
              Call Now
            </motion.a>

            <motion.button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#EE212B] hover:bg-[#C51B24] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition"
            >
              Learn More
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
