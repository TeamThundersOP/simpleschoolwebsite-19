import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Users, GraduationCap, School, Play, ChevronRight, Phone, Mail, Baby, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const KindieDays = () => {
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
        title="Kindie Days – Nurturing Early Childhood Development"
        description="Through play-based learning and creative exploration in a joyful, supportive environment. Trusted by 500+ families."
        canonical="https://simpleschoolwebsite-19.onrender.com/kindie-days"
      />
      
      <main id="main" className="w-full" role="main">
        
        {/* Hero (Compact) */}
        <section className="box-border flex w-full flex-col lg:flex-row items-center gap-8 lg:gap-16 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl w-full items-center gap-8 lg:gap-16 m-0 p-0">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C0504] leading-tight">
                  Kindie Days
                </h1>
                <p className="text-lg sm:text-xl text-[#0C0504] opacity-80">
                  Nurturing early childhood development through play-based learning and creative exploration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#b2e61b] hover:border-[#b2e61b] transition-all duration-300 font-semibold">
                    Enroll Today
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[#0C0504] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold">
                    Schedule Visit
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:block w-80">
              <div className="w-full h-64 bg-gradient-to-br from-[#0C0504]/10 to-[#b2e61b]/10 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-[#0C0504] rounded-full flex items-center justify-center">
                  <Baby className="w-10 h-10 text-[#b2e61b]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip (Logos & Certifications) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full">
              {['Early Learning', 'Child Development', 'Play-Based Learning', 'Family Support', 'Community Partners'].map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-gray-600">{partner}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                8+ Years Excellence
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                <Star className="w-3 h-3 mr-1" />
                500+ Families
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                <Heart className="w-3 h-3 mr-1" />
                98% Satisfaction
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
                  icon: <Baby className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Children (2-6 years)",
                  points: ["Age-appropriate activities", "Cognitive development focus"]
                },
                {
                  icon: <Users className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Parents",
                  points: ["Peace of mind", "Qualified educators"]
                },
                {
                  icon: <Heart className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Families",
                  points: ["Community connections", "Family involvement"]
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
                "Play-based learning approach",
                "Developmental milestone tracking",
                "Creative arts integration",
                "Social-emotional learning"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">Proven Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              {[
                { number: "500+", caption: "Happy families served" },
                { number: "98%", caption: "Parent satisfaction rate" },
                { number: "8+", caption: "Years of excellence" }
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
        <section className="box-border flex w-full flex-col items-center gap-8 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] mb-4">Give Your Child the Best Start</h2>
              <p className="text-[#0C0504] opacity-80 mb-8">
                Join hundreds of families who trust Kindie Days for nurturing early childhood development.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Parent/Guardian Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Child's Age"
                  value={formData.role}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="Location/Area"
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
                  <option value="enrollment">Enrollment Information</option>
                  <option value="visit">Schedule Visit</option>
                  <option value="programs">Program Details</option>
                  <option value="info">General Information</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="flex items-start gap-2 text-sm text-[#0C0504] opacity-80">
                  <input type="checkbox" className="mt-1" required />
                  I agree to receive communications about Kindie Days and understand that I can unsubscribe at any time.
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
            Visit
          </button>
          <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#b2e61b] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
            <Heart className="w-4 h-4" />
            Enroll
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KindieDays;