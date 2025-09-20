import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Users, GraduationCap, School, Play, ChevronRight, Phone, Mail, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const FinnishExperience = () => {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    email: '',
    phone: '',
    intent: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="Finnish Experience – World-Class Education Excellence"
        description="Immerse yourself in the Finnish education system and Nordic learning culture that leads the world. Experience #1 ranked education firsthand."
        canonical="https://simpleschoolwebsite-19.onrender.com/finnish-experience"
      />
      
      <main id="main" className="w-full" role="main">
        
        {/* Hero (Compact) */}
        <section className="box-border flex w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-[rgb(17,24,39)] m-0 pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-x-hidden">
          <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 flex-1 w-full m-0 p-0">
            {/* Content Section - Left */}
            <div className="box-border flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-4 sm:gap-6 lg:gap-8 m-0 p-0 lg:pt-6">
              <motion.div
                className="box-border flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 w-full m-0 p-0"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight m-0 p-0 break-words"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Finnish Experience
                </motion.h1>
                <motion.p
                  className="box-border w-full text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0 p-0 max-w-2xl break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Discover world‑renowned education excellence and Nordic learning culture.
                </motion.p>
              </motion.div>
              <motion.div
                className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="box-border text-[#0C0504] font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Explore Finland
                  </span>
                </motion.button>
                <motion.button
                  className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.08)] transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Learn More
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Illustration Section - Right */}
            <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
              <div className="relative w-full max-w-lg">
                <div className="aspect-video bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <Globe className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-medium">World-Class Education</p>
                      <p className="text-sm opacity-70">Experience the Finnish way</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip (Logos & Certifications) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full">
              {['Education Finland', 'University Partners', 'PISA Rankings', 'Nordic Council', 'Global Schools'].map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-gray-600">{partner}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                #1 Global Ranking
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                <Star className="w-3 h-3 mr-1" />
                PISA Leader
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                99% Literacy
              </span>
            </div>
          </div>
        </section>

        {/* Who It's For (3 Cards) */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">Who It's For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Users className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Educators",
                  points: ["Professional development", "Innovative teaching methods"]
                },
                {
                  icon: <GraduationCap className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Students",
                  points: ["Student-centered learning", "Wellbeing focus"]
                },
                {
                  icon: <School className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Organizations",
                  points: ["Institutional transformation", "Culture development"]
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-2xl h-full"
                >
                  {card.icon}
                  <h3 className="text-xl font-semibold text-[#0C0504]">{card.title}</h3>
                  <ul className="space-y-2 text-center">
                    {card.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-[#0C0504] opacity-80">• {point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Highlights (Bulleted) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">Key Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
              {[
                "World's #1 education system",
                "Student wellbeing focused",
                "Stress-free learning approach",
                "20+ years PISA leadership"
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-[#b2e61b] flex-shrink-0" />
                  <span className="text-[#0C0504] font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes / Stats (3 Metric Cards) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">Finnish Excellence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              {[
                { number: "#1", caption: "Global education ranking" },
                { number: "99%", caption: "Literacy rate achieved" },
                { number: "20+", caption: "Years leading PISA" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#b2e61b] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#0C0504] opacity-80">{stat.caption}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture (Short Form) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] mb-4">Experience Finnish Excellence</h2>
              <p className="text-[#0C0504] opacity-80 mb-8">
                Join educators worldwide who have transformed their practice through Finnish educational philosophy.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Role/Position"
                  value={formData.role}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="School/Organization"
                  value={formData.organization}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                />
                <select
                  name="intent"
                  value={formData.intent}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                >
                  <option value="">Select Intent</option>
                  <option value="experience">Finnish Experience Program</option>
                  <option value="consultation">Educational Consultation</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="info">General Information</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="flex items-start gap-2 text-sm text-[#0C0504] opacity-80">
                  <input type="checkbox" className="mt-1" required />
                  I agree to receive communications about Finnish Experience and understand that I can unsubscribe at any time.
                </label>
              </div>
              <button
                type="submit"
                className="w-full box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#b2e61b] hover:border-[#b2e61b] transition-all duration-300 font-semibold"
              >
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* CTA Bar (Sticky on Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
        <div className="flex gap-2">
          <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#b2e61b] transition-all duration-300 font-semibold text-sm">
            <Phone className="w-4 h-4" />
            Call
          </button>
          <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-[#0C0504] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
            <Mail className="w-4 h-4" />
            Info
          </button>
          <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#b2e61b] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
            <Globe className="w-4 h-4" />
            Explore
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default FinnishExperience;