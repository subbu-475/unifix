import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, Headphones, CheckCircle, AlertCircle, Loader2, FileText, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { contactInfo } from '../data/content';

// ─── EmailJS Config ────────────────────────────────────────────────────────────
// Replace with your actual EmailJS credentials from https://www.emailjs.com
const EMAILJS_SERVICE_ID = 'service_dnroz7c';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_MESSAGE = 'template_vnnwhpu'; // template for Send Message
const EMAILJS_TEMPLATE_QUOTE = 'template_fxefc9i';  // template for Request Quote
const EMAILJS_PUBLIC_KEY = 'FGIwUXIzWAAK62NiZ';    // e.g. 'abcXYZ123...'
// ──────────────────────────────────────────────────────────────────────────────

type Tab = 'message' | 'quote';
type Status = 'idle' | 'sending' | 'success' | 'error';

const services = [
  'HVAC – Air Conditioning',
  'Electrical Services',
  'Plumbing Solutions',
  'General Maintenance',
  'Emergency Repair',
  'Consultation',
];

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('message');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Listen for Hero quote-form clicks → switch to quote tab
  useEffect(() => {
    const handler = () => setActiveTab('quote');
    window.addEventListener('open-quote-tab', handler);
    return () => window.removeEventListener('open-quote-tab', handler);
  }, []);

  // ── Send Message form state ──────────────────────────────────────────────
  const [msgForm, setMsgForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [msgStatus, setMsgStatus] = useState<Status>('idle');
  const [msgError, setMsgError] = useState('');
  const msgFormRef = useRef<HTMLFormElement>(null);

  // ── Request Quote form state ─────────────────────────────────────────────
  const [quoteForm, setQuoteForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', description: '', timeline: ''
  });
  const [quoteStatus, setQuoteStatus] = useState<Status>('idle');
  const [quoteError, setQuoteError] = useState('');
  const quoteFormRef = useRef<HTMLFormElement>(null);

  const fieldFocus = (field: string) => () => setFocusedField(field);
  const fieldBlur = () => setFocusedField(null);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleMsgChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setMsgForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setQuoteForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleMsgSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsgStatus('sending');
    setMsgError('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_MESSAGE,
        {
          from_name:  msgForm.name,
          from_email: msgForm.email,
          phone:      msgForm.phone,
          service:    msgForm.service,
          message:    msgForm.message,
          to_email:   contactInfo.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setMsgStatus('success');
      setMsgForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err: any) {
      setMsgStatus('error');
      setMsgError(err?.text || 'Something went wrong. Please try again.');
    }
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteStatus('sending');
    setQuoteError('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_QUOTE,
        {
          from_name:  quoteForm.name,
          from_email: quoteForm.email,
          phone:      quoteForm.phone,
          company:    quoteForm.company,
          service:    quoteForm.service,
          budget:     quoteForm.budget,
          timeline:   quoteForm.timeline,
          message:    quoteForm.description,
          to_email:   contactInfo.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setQuoteStatus('success');
      setQuoteForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', description: '', timeline: '' });
    } catch (err: any) {
      setQuoteStatus('error');
      setQuoteError(err?.text || 'Something went wrong. Please try again.');
    }
  };

  // ── Contact sidebar info ──────────────────────────────────────────────────
  const contactDetails = [
    { icon: Phone, title: 'Phone', info: contactInfo.phone, subInfo: 'Available 24/7 for emergencies' },
    { icon: Headphones, title: 'Customer Care', info: contactInfo.customerCare, subInfo: 'Support & Enquiries' },
    { icon: Mail, title: 'Email', info: contactInfo.email, subInfo: 'We reply within 2 hours' },
    { icon: MapPin, title: 'Address', info: contactInfo.location, subInfo: 'Visit our office' },
    { icon: Clock, title: 'Business Hours', info: contactInfo.hours, subInfo: 'Emergency service available' },
  ];

  // ── Shared input class ────────────────────────────────────────────────────
  const inputCls = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#066FAD] transition-all bg-gray-50 text-[#041C4B]';
  const labelCls = 'block text-sm font-semibold text-[#041C4B] mb-2';

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer} className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-[#066FAD] font-semibold text-lg uppercase tracking-wider mb-4">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#041C4B] mb-6">
            Ready to Start Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE212B] to-[#066FAD]"> Project?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Send us a message or request a detailed quote — our team will get back to you within 2 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Left: Contact Info Sidebar ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-gradient-to-br from-[#EE212B] to-[#066FAD] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Ready to transform your facility management? Our expert team is here to help.
              </p>
              <div className="space-y-6">
                {contactDetails.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 shrink-0 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-white/90 break-words">{item.info}</p>
                        <p className="text-white/60 text-sm mt-0.5">{item.subInfo}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Emergency CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#FFF5F5] border border-[#FBD5D5] rounded-2xl p-6"
            >
              <h4 className="text-xl font-bold text-[#EE212B] mb-4">Emergency Service</h4>
              <p className="text-[#b91c1c] mb-6">
                Need immediate assistance? Our emergency team is available 24/7.
              </p>
              <motion.a
                href="tel:+919566632336"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="w-full block text-center bg-[#EE212B] hover:bg-[#c71c24] text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Call Emergency Line
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Tabbed Forms ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

              {/* Tab Switcher */}
              <div className="flex border-b border-gray-200">
                {([
                  { id: 'message', label: 'Send Message', icon: MessageSquare },
                  { id: 'quote', label: 'Request Quote', icon: FileText },
                ] as { id: Tab; label: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[]).map(tab => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-semibold text-base transition-all duration-300 border-b-2 ${active
                        ? 'border-[#066FAD] text-[#066FAD] bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-[#066FAD] hover:bg-gray-50'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">

                  {/* ── Send Message Tab ─────────────────────────────────── */}
                  {activeTab === 'message' && (
                    <motion.div
                      key="message"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
                    >
                      {msgStatus === 'success' ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center py-16 text-center gap-4"
                        >
                          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#041C4B]">Message Sent!</h3>
                          <p className="text-gray-500 max-w-sm">
                            Thank you for reaching out. We'll get back to you at <strong>{msgForm.email || 'your email'}</strong> within 2 hours.
                          </p>
                          <button
                            onClick={() => setMsgStatus('idle')}
                            className="mt-4 px-6 py-2 bg-[#066FAD] text-white rounded-lg font-semibold hover:bg-[#045d95] transition-colors"
                          >
                            Send Another
                          </button>
                        </motion.div>
                      ) : (
                        <form ref={msgFormRef} onSubmit={handleMsgSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <motion.div animate={{ scale: focusedField === 'msg_name' ? 1.02 : 1 }}>
                              <label className={labelCls}>Full Name *</label>
                              <input name="name" required value={msgForm.name} onChange={handleMsgChange}
                                onFocus={fieldFocus('msg_name')} onBlur={fieldBlur}
                                className={inputCls} placeholder="Enter your full name" />
                            </motion.div>
                            <motion.div animate={{ scale: focusedField === 'msg_email' ? 1.02 : 1 }}>
                              <label className={labelCls}>Email Address *</label>
                              <input name="email" type="email" required value={msgForm.email} onChange={handleMsgChange}
                                onFocus={fieldFocus('msg_email')} onBlur={fieldBlur}
                                className={inputCls} placeholder="Enter your email" />
                            </motion.div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <motion.div animate={{ scale: focusedField === 'msg_phone' ? 1.02 : 1 }}>
                              <label className={labelCls}>Phone Number</label>
                              <input name="phone" value={msgForm.phone} onChange={handleMsgChange}
                                onFocus={fieldFocus('msg_phone')} onBlur={fieldBlur}
                                className={inputCls} placeholder="Enter your phone number" />
                            </motion.div>
                            <motion.div animate={{ scale: focusedField === 'msg_service' ? 1.02 : 1 }}>
                              <label className={labelCls}>Service Needed</label>
                              <select name="service" value={msgForm.service} onChange={handleMsgChange}
                                onFocus={fieldFocus('msg_service')} onBlur={fieldBlur}
                                className={inputCls}>
                                <option value="">Select a service</option>
                                {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                              </select>
                            </motion.div>
                          </div>
                          <motion.div animate={{ scale: focusedField === 'msg_message' ? 1.02 : 1 }}>
                            <label className={labelCls}>Message *</label>
                            <textarea name="message" required rows={5} value={msgForm.message} onChange={handleMsgChange}
                              onFocus={fieldFocus('msg_message')} onBlur={fieldBlur}
                              className={`${inputCls} resize-none`} placeholder="Describe your facility management needs..." />
                          </motion.div>

                          {/* Hidden field for recipient info (used by EmailJS template) */}
                          <input type="hidden" name="to_email" value={contactInfo.email} />

                          {msgStatus === 'error' && (
                            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              {msgError}
                            </div>
                          )}

                          <motion.button
                            type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                            disabled={msgStatus === 'sending'}
                            className="w-full bg-gradient-to-r from-[#EE212B] to-[#066FAD] hover:from-[#d91e29] hover:to-[#045d95] disabled:opacity-70 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                          >
                            {msgStatus === 'sending' ? (
                              <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                            ) : (
                              <>Send Message <Send className="w-5 h-5" /></>
                            )}
                          </motion.button>
                          <p className="text-center text-xs text-gray-400">
                            Your message will be sent to <span className="font-medium text-gray-600">{contactInfo.email}</span>
                          </p>
                        </form>
                      )}
                    </motion.div>
                  )}

                  {/* ── Request Quote Tab ─────────────────────────────────── */}
                  {activeTab === 'quote' && (
                    <motion.div
                      key="quote"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
                    >
                      {quoteStatus === 'success' ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center py-16 text-center gap-4"
                        >
                          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-[#041C4B]">Quote Requested!</h3>
                          <p className="text-gray-500 max-w-sm">
                            We've received your quote request and will send a detailed proposal to <strong>{quoteForm.email || 'your email'}</strong> within 24 hours.
                          </p>
                          <button
                            onClick={() => setQuoteStatus('idle')}
                            className="mt-4 px-6 py-2 bg-[#066FAD] text-white rounded-lg font-semibold hover:bg-[#045d95] transition-colors"
                          >
                            Request Another
                          </button>
                        </motion.div>
                      ) : (
                        <form ref={quoteFormRef} onSubmit={handleQuoteSubmit} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <motion.div animate={{ scale: focusedField === 'q_name' ? 1.02 : 1 }}>
                              <label className={labelCls}>Full Name *</label>
                              <input name="name" required value={quoteForm.name} onChange={handleQuoteChange}
                                onFocus={fieldFocus('q_name')} onBlur={fieldBlur}
                                className={inputCls} placeholder="Enter your full name" />
                            </motion.div>
                            <motion.div animate={{ scale: focusedField === 'q_email' ? 1.02 : 1 }}>
                              <label className={labelCls}>Email Address *</label>
                              <input name="email" type="email" required value={quoteForm.email} onChange={handleQuoteChange}
                                onFocus={fieldFocus('q_email')} onBlur={fieldBlur}
                                className={inputCls} placeholder="Enter your email" />
                            </motion.div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <motion.div animate={{ scale: focusedField === 'q_phone' ? 1.02 : 1 }}>
                              <label className={labelCls}>Phone Number *</label>
                              <input name="phone" required value={quoteForm.phone} onChange={handleQuoteChange}
                                onFocus={fieldFocus('q_phone')} onBlur={fieldBlur}
                                className={inputCls} placeholder="Enter your phone number" />
                            </motion.div>
                            <motion.div animate={{ scale: focusedField === 'q_company' ? 1.02 : 1 }}>
                              <label className={labelCls}>Company / Property Name</label>
                              <input name="company" value={quoteForm.company} onChange={handleQuoteChange}
                                onFocus={fieldFocus('q_company')} onBlur={fieldBlur}
                                className={inputCls} placeholder="Your company or property name" />
                            </motion.div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <motion.div animate={{ scale: focusedField === 'q_service' ? 1.02 : 1 }}>
                              <label className={labelCls}>Service Required *</label>
                              <select name="service" required value={quoteForm.service} onChange={handleQuoteChange}
                                onFocus={fieldFocus('q_service')} onBlur={fieldBlur}
                                className={inputCls}>
                                <option value="">Select a service</option>
                                {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                              </select>
                            </motion.div>
                            <motion.div animate={{ scale: focusedField === 'q_budget' ? 1.02 : 1 }}>
                              <label className={labelCls}>Estimated Budget</label>
                              <select name="budget" value={quoteForm.budget} onChange={handleQuoteChange}
                                onFocus={fieldFocus('q_budget')} onBlur={fieldBlur}
                                className={inputCls}>
                                <option value="">Select budget range</option>
                                <option value="Under ₹50,000">Under ₹50,000</option>
                                <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000</option>
                                <option value="₹2,00,000 – ₹5,00,000">₹2,00,000 – ₹5,00,000</option>
                                <option value="₹5,00,000+">₹5,00,000+</option>
                                <option value="Not sure yet">Not sure yet</option>
                              </select>
                            </motion.div>
                          </div>
                          <motion.div animate={{ scale: focusedField === 'q_timeline' ? 1.02 : 1 }}>
                            <label className={labelCls}>Project Timeline</label>
                            <select name="timeline" value={quoteForm.timeline} onChange={handleQuoteChange}
                              onFocus={fieldFocus('q_timeline')} onBlur={fieldBlur}
                              className={inputCls}>
                              <option value="">Select timeline</option>
                              <option value="Urgent (within 1 week)">Urgent (within 1 week)</option>
                              <option value="1–4 weeks">1–4 weeks</option>
                              <option value="1–3 months">1–3 months</option>
                              <option value="3–6 months">3–6 months</option>
                              <option value="Flexible">Flexible</option>
                            </select>
                          </motion.div>
                          <motion.div animate={{ scale: focusedField === 'q_description' ? 1.02 : 1 }}>
                            <label className={labelCls}>Project Description *</label>
                            <textarea name="description" required rows={4} value={quoteForm.description} onChange={handleQuoteChange}
                              onFocus={fieldFocus('q_description')} onBlur={fieldBlur}
                              className={`${inputCls} resize-none`} placeholder="Describe your project requirements in detail..." />
                          </motion.div>

                          {/* Hidden field for recipient info */}
                          <input type="hidden" name="to_email" value={contactInfo.email} />

                          {quoteStatus === 'error' && (
                            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              {quoteError}
                            </div>
                          )}

                          <motion.button
                            type="submit" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                            disabled={quoteStatus === 'sending'}
                            className="w-full bg-gradient-to-r from-[#EE212B] to-[#066FAD] hover:from-[#d91e29] hover:to-[#045d95] disabled:opacity-70 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                          >
                            {quoteStatus === 'sending' ? (
                              <><Loader2 className="w-5 h-5 animate-spin" /> Submitting…</>
                            ) : (
                              <>Request Quote <FileText className="w-5 h-5" /></>
                            )}
                          </motion.button>
                          <p className="text-center text-xs text-gray-400">
                            Your quote request will be sent to <span className="font-medium text-gray-600">{contactInfo.email}</span>
                          </p>
                        </form>
                      )}
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
