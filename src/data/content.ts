import Salman from '../assets/MOHAMED SALMAN B.jpeg';
import Varis from '../assets/S.MOHAMED VARIS.jpeg';
import customer1 from '../assets/customer1.png';
import customer3 from '../assets/customer3.png';
import customer5 from '../assets/customer5.png';

export const navigationItems = [
  { name: 'Home', href: '#home' },

  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Team', href: '#team' },
  // { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Blog', href: '#blogs' },
  { name: 'Contact', href: '#contact' }
];

export const contactInfo = {
  hours: 'MON – SAT 8:00 AM TO 9:00 PM',
  location: 'C-70,2nd Floor, 4th Cross, Thillai Nagar(West), Tiruchirappalli, Tamil Nadu 620018',
  phone: '+91 9566632336 / +91 89257 75111',
  email: 'info@unifix.com'
};

export const stats = [
  { number: 500, label: 'Completed Projects', suffix: '+' },
  { number: 1200, label: 'Happy Customers', suffix: '+' },
  { number: 99, label: 'Satisfied Customers', suffix: '%' }
];

export const services = [
  {
    id: 1,
    title: 'HVAC – Air Conditioning',
    description: 'Complete heating, ventilation, and air conditioning solutions for residential and commercial properties.',
    icon: 'Wind',
    image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Installation & Maintenance', 'Energy Efficient Systems', '24/7 Emergency Service']
  },
  {
    id: 2,
    title: 'Electrical Services',
    description: 'Professional electrical installation, maintenance, and repair services with certified technicians.',
    icon: 'Zap',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Wiring & Rewiring', 'Panel Upgrades', 'Safety Inspections']
  },
  {
    id: 3,
    title: 'Plumbing Solutions',
    description: 'Comprehensive plumbing services including installation, repair, and emergency response.',
    icon: 'Droplets',
    image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Pipe Installation', 'Leak Detection', 'Drain Cleaning']
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: 'Fast and Reliable',
    description: 'Quick response times with dependable service delivery every time.',
    icon: 'Clock'
  },
  {
    id: 2,
    title: 'Top Quality Management',
    description: 'Premium quality standards maintained across all our services.',
    icon: 'Award'
  },
  {
    id: 3,
    title: '24/7 Premium Support',
    description: 'Round-the-clock support for all your facility management needs.',
    icon: 'Headphones'
  },
  {
    id: 4,
    title: 'Certified Trainers',
    description: 'Highly trained and certified professionals handling your projects.',
    icon: 'GraduationCap'
  }
];

export const features = [
  {
    id: 1,
    title: 'Fully Insured Services',
    description: 'Complete insurance coverage for all our services and operations.',
    icon: 'Shield'
  },
  {
    id: 2,
    title: 'Workmanship Guarantee',
    description: 'Quality guarantee on all work performed by our expert team.',
    icon: 'CheckCircle'
  },
  {
    id: 3,
    title: 'Transparent & Risk-Free',
    description: 'Clear pricing and risk-free service agreements for peace of mind.',
    icon: 'Eye'
  }
];

export const projects = [
  {
    id: 1,
    title: 'Commercial HVAC Installation',
    category: 'HVAC',
    description: 'Complete HVAC system installation for a 50,000 sq ft commercial building.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Residential Electrical Upgrade',
    category: 'Electrical',
    description: 'Full electrical panel upgrade and rewiring for luxury residential complex.',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Industrial Plumbing System',
    category: 'Plumbing',
    description: 'Industrial-grade plumbing installation for manufacturing facility.',
    image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'In Progress'
  },
  {
    id: 4,
    title: 'Smart Building Integration',
    category: 'Technology',
    description: 'IoT-based facility management system for modern office complex.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Completed'
  }
];

export const team = [
  {
    id: 1,
    name: 'Mohamed Varis S',
    role: 'HVAC & MEP Manager',
    specialization: 'HVAC Systems',
    image: Salman,
    experience: '8+ Years'
  },
  {
    id: 2,
    name: 'Mohamed Salman B',
    role: 'MEP Engineer',
    specialization: 'Electrical Systems',
    image: Varis,
    experience: '6+ Years'
  },
  {
    id: 3,
    name: 'Arjun Kumar',
    role: 'Plumbing Specialist',
    specialization: 'Plumbing Solutions',
    image: 'https://images.pexels.com/photos/6476365/pexels-photo-6476365.jpeg',
    experience: '10+ Years'
  },

];

export const testimonials = [
  {
    id: 1,
    name: 'Suresh Babu',
    role: 'Property Manager',
    message: 'UNIFIX has been our trusted partner for facility management. Their professional approach and quality service have exceeded our expectations consistently.',
    avatar: customer1,
    rating: 5
  },
  {
    id: 2,
    name: 'Lakshmi Krishna',
    role: 'Homeowner',
    message: 'Excellent service quality and very responsive team. They completed our HVAC installation on time and within budget. Highly recommended!',
    avatar: customer3,
    rating: 5
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Commercial Client',
    message: 'Professional, reliable, and efficient. UNIFIX handled our complete electrical upgrade seamlessly. Their 24/7 support is truly valuable.',
    avatar: customer5,
    rating: 5
  }
];