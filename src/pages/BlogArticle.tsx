import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogArticles: Record<string, {
    title: string;
    date: string;
    author: string;
    readTime: string;
    image: string;
    content: string[];
}> = {
    '1': {
        title: '5 Smart Ways to Cut Property Maintenance Costs',
        date: 'August 03, 2025',
        author: 'UNIFIX Team',
        readTime: '6 min read',
        image: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg',
        content: [
            'Property maintenance costs can quickly add up, especially for commercial and residential complexes. However, with smart planning and the right strategies, you can significantly reduce these expenses without compromising on quality or safety.',

            '1. Implement Preventive Maintenance Programs — One of the most effective ways to cut costs is by shifting from reactive to preventive maintenance. Regular inspections and scheduled servicing of HVAC systems, plumbing, and electrical infrastructure can prevent costly breakdowns. At UNIFIX, we recommend quarterly inspections for all critical systems. A well-maintained HVAC unit, for example, operates 15-20% more efficiently than a neglected one, directly reducing your energy bills.',

            '2. Invest in Energy-Efficient Systems — Upgrading to energy-efficient equipment may seem like a large upfront investment, but the long-term savings are substantial. Modern HVAC systems, LED lighting, and smart thermostats can reduce energy consumption by 25-40%. UNIFIX partners with leading manufacturers to provide energy audits and recommend the most cost-effective upgrades for your property.',

            '3. Use Technology for Facility Management — Digital tools and IoT sensors can monitor equipment health in real-time, alerting you to potential issues before they become expensive repairs. Building Management Systems (BMS) allow centralized control of all facility operations, optimizing energy usage and reducing manual labor costs. Our team at UNIFIX can help you implement smart monitoring solutions tailored to your property.',

            '4. Bundle Your Maintenance Services — Instead of hiring multiple vendors for different services, consider working with a comprehensive facility management provider like UNIFIX. Bundling HVAC, electrical, plumbing, and general maintenance under one provider not only simplifies coordination but also reduces overall costs through package pricing and improved efficiency.',

            '5. Train Your Staff on Basic Maintenance — Empowering your on-site staff with basic maintenance knowledge can prevent small issues from escalating. Simple tasks like changing air filters, checking for water leaks, and monitoring electrical panels can be handled in-house, saving on service call costs. UNIFIX offers basic maintenance training programs for property management teams.',

            'By implementing these strategies, property owners and managers can achieve significant cost savings while maintaining high standards of building performance and occupant comfort. Contact UNIFIX today to learn how we can help optimize your maintenance budget.',
        ],
    },
    '2': {
        title: 'How Facility Management Boosts Property Value',
        date: 'July 27, 2025',
        author: 'UNIFIX Team',
        readTime: '5 min read',
        image: 'https://images.pexels.com/photos/17063686/pexels-photo-17063686.jpeg',
        content: [
            'Professional facility management is not just about keeping the lights on and the water running. It plays a crucial role in enhancing and preserving the value of your property. Here is how strategic facility management can boost your property value significantly.',

            'Enhanced Tenant Satisfaction and Retention — Well-maintained facilities directly impact tenant satisfaction. When HVAC systems run efficiently, plumbing works flawlessly, and electrical systems are reliable, tenants are more likely to renew their leases. High occupancy rates translate to stable rental income and increased property value. At UNIFIX, we ensure your building systems operate at peak performance, keeping your tenants happy and your investment protected.',

            'Reduced Operating Costs — Efficient facility management reduces overall operating costs through preventive maintenance, energy optimization, and smart resource allocation. Lower operating costs improve Net Operating Income (NOI), which is a key factor in commercial property valuation. Properties with well-documented maintenance histories and efficient systems command higher market prices.',

            'Compliance and Safety Standards — Properties that meet or exceed safety and compliance standards are valued higher in the market. Professional facility management ensures your building complies with local fire safety codes, electrical standards, and health regulations. UNIFIX maintains comprehensive compliance records and conducts regular safety audits to protect your property and its occupants.',

            'Aesthetic Appeal and First Impressions — The physical appearance of a building significantly influences its perceived value. Regular maintenance of common areas, landscaping, and building exteriors creates positive first impressions for potential buyers or tenants. A well-maintained property signals quality management and attracts premium tenants.',

            'Extended Equipment Lifespan — Professional maintenance extends the lifespan of expensive building systems like HVAC units, elevators, and electrical panels. This means fewer major capital expenditures and better return on your initial investment. UNIFIX uses manufacturer-recommended maintenance schedules and high-quality replacement parts to maximize equipment longevity.',

            'Investing in professional facility management is one of the smartest decisions a property owner can make. Contact UNIFIX to discover how our comprehensive facility management solutions can enhance your property value.',
        ],
    },
    '3': {
        title: 'Top Challenges in Commercial Facility Management',
        date: 'July 16, 2025',
        author: 'UNIFIX Team',
        readTime: '7 min read',
        image: 'https://images.pexels.com/photos/12142829/pexels-photo-12142829.jpeg',
        content: [
            'Commercial facility management is a complex field that requires balancing multiple priorities simultaneously. From maintaining aging infrastructure to managing budgets and ensuring compliance, facility managers face numerous challenges daily. Here are the top challenges and how to overcome them.',

            'Aging Infrastructure and Equipment — Many commercial buildings in India operate with aging HVAC, plumbing, and electrical systems that require frequent repairs. The challenge is deciding when to repair versus replace equipment. UNIFIX helps facility managers make data-driven decisions by providing detailed equipment assessments and lifecycle cost analyses, ensuring optimal timing for upgrades.',

            'Budget Constraints — Facility managers are constantly pressured to do more with less. Balancing maintenance quality with budget limitations requires careful planning and prioritization. The key is implementing preventive maintenance programs that reduce emergency repair costs. UNIFIX works with clients to create customized maintenance plans that maximize the impact of every rupee spent.',

            'Energy Management — With rising energy costs, efficient energy management has become a top priority. Commercial buildings consume significant amounts of energy for HVAC, lighting, and operations. Implementing energy audits, upgrading to efficient systems, and using smart controls can dramatically reduce energy costs. UNIFIX provides comprehensive energy management solutions, including detailed audits and actionable recommendations.',

            'Skilled Labor Shortage — Finding and retaining skilled technicians for HVAC, electrical, and plumbing work is increasingly difficult. This shortage can lead to delayed maintenance and substandard repairs. UNIFIX addresses this challenge by maintaining a team of certified, trained professionals who deliver consistent, high-quality service across all trades.',

            'Regulatory Compliance — Navigating the complex landscape of building codes, safety regulations, and environmental standards is a constant challenge. Non-compliance can result in penalties, legal issues, and safety hazards. UNIFIX stays current with all regulatory requirements and ensures your facility meets or exceeds every standard.',

            'Emergency Preparedness — Unexpected equipment failures, natural disasters, and other emergencies can disrupt operations and cause significant damage. Having a robust emergency response plan and reliable service partners is essential. Our 24/7 emergency support team ensures rapid response times and effective solutions when you need them most.',

            'Overcoming these challenges requires a strategic approach and reliable partners. Contact UNIFIX to learn how our experienced team can help you tackle your facility management challenges head-on.',
        ],
    },
};

const BlogArticle: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const article = id ? blogArticles[id] : null;

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#041C4B] mb-4">Article Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#066FAD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#041C4B] transition"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    // Get other articles for "More Articles" section
    const otherArticles = Object.entries(blogArticles)
        .filter(([key]) => key !== id)
        .map(([key, val]) => ({ id: key, ...val }));

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Banner */}
            <div className="relative h-[400px] md:h-[500px]">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041C4B]/90 via-[#041C4B]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-4xl mx-auto">
                        <motion.button
                            onClick={() => navigate('/')}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
                        >
                            <ArrowLeft size={18} />
                            Back to Home
                        </motion.button>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-bold text-white leading-tight"
                        >
                            {article.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-6 mt-6 text-white/80 text-sm"
                        >
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {article.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={16} />
                                {article.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} />
                                {article.readTime}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    {article.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`text-gray-700 leading-relaxed text-lg ${index === 0 ? 'text-xl text-gray-800 font-medium' : ''
                                }`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 bg-gradient-to-r from-[#041C4B] to-[#066FAD] rounded-2xl p-8 text-white text-center"
                >
                    <h3 className="text-2xl font-bold mb-3">Need Expert Facility Management?</h3>
                    <p className="text-white/80 mb-6 max-w-xl mx-auto">
                        Get in touch with UNIFIX for reliable, professional facility management services tailored to your needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    const contact = document.getElementById('contact');
                                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                                }, 300);
                            }}
                            className="bg-white text-[#041C4B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
                        >
                            Contact Us
                            <ChevronRight size={18} />
                        </button>
                        <a
                            href="tel:+919566632336"
                            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#041C4B] transition"
                        >
                            Call: +91 9566632336
                        </a>
                        <a
                            href="tel:+918925775111"
                            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#041C4B] transition"
                        >
                            Call: +91 89257 75111
                        </a>
                    </div>
                </motion.div>

                {/* More Articles */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-[#041C4B] mb-8">More Articles</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {otherArticles.map((otherArticle) => (
                            <motion.div
                                key={otherArticle.id}
                                onClick={() => {
                                    navigate(`/blog/${otherArticle.id}`);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                whileHover={{ y: -4 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100 hover:shadow-lg transition-all"
                            >
                                <img
                                    src={otherArticle.image}
                                    alt={otherArticle.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-5">
                                    <h4 className="font-bold text-[#041C4B] text-lg mb-2">{otherArticle.title}</h4>
                                    <p className="text-sm text-gray-500">{otherArticle.date}</p>
                                    <span className="text-[#EE212B] text-sm font-semibold mt-3 inline-flex items-center gap-1">
                                        Read Article <ChevronRight size={14} />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogArticle;
