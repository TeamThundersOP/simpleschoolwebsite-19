import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Users, GraduationCap, School, Play, ChevronRight, Phone, Mail, Brain, Volume2, Trophy, Gamepad2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const GraphoGame = () => {
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
        title="GraphoGame – Revolutionary Reading Game for Children"
        description="Making learning to read fun and effective through scientifically-designed interactive games. Trusted by over 1 million children worldwide."
        canonical="https://simpleschoolwebsite-19.onrender.com/grapho-game"
      />
      
      <main id="main" className="w-full" role="main">
        
        {/* Hero (Compact) - Matching Home Page Style */}
        <section className="box-border flex w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex-col items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-[#021223] m-0 pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-x-hidden">
          <div className="box-border flex max-w-screen-xl w-full items-center gap-8 lg:gap-16 m-0 p-0">
            <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-highlight leading-tight">
                  GraphoGame
              </h1>
                <p className="text-lg sm:text-xl text-highlight opacity-80">
                  Revolutionary reading game making literacy fun and effective for children worldwide.
              </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid bg-highlight text-white hover:bg-[#b2e61b] hover:border-[#b2e61b] transition-all duration-300 font-semibold">
                  Play Now
                    <Play className="w-4 h-4" />
                </button>
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-highlight text-highlight hover:bg-highlight hover:text-white transition-all duration-300 font-semibold">
                  For Parents
                </button>
              </div>
            </motion.div>
            </div>
            <div className="hidden lg:block w-80">
              <div className="w-full h-64 bg-gradient-to-br from-[hsl(var(--highlight))]/10 to-[#b2e61b]/10 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-highlight rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-10 h-10 text-[#b2e61b]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip (Logos & Certifications) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full">
              {['UNESCO', 'Research Partners', 'Education Finland', 'University Partners', 'Global Schools'].map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-gray-600">{partner}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                Research-Based
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                <Star className="w-3 h-3 mr-1" />
                1M+ Children
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                50+ Countries
              </span>
              </div>
            </div>
          </section>

        {/* Who It's For (3 Cards) */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Who It's For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Users className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Children (4-9 years)",
                  points: ["Fun interactive reading games", "Age-appropriate skill building"]
                },
                {
                  icon: <GraduationCap className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Parents",
                  points: ["Progress tracking dashboard", "Supporting home learning"]
                },
                {
                  icon: <School className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Educators",
                  points: ["Classroom reading support", "Evidence-based tool"]
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
                  <h3 className="text-xl font-semibold text-highlight">{card.title}</h3>
                  <ul className="space-y-2 text-center">
                    {card.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-highlight opacity-80">• {point}</li>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Key Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
              {[
                "Scientifically designed reading games",
                "Multi-sensory learning approach",
                "Adaptive difficulty adjustment",
                "Real-time progress feedback"
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
                  <span className="text-highlight font-medium">{highlight}</span>
                </motion.div>
              ))}
              </div>
            </div>
          </section>

        {/* Snapshot / Specs (Scrollable Chips) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Game Features</h2>
            <div className="overflow-x-auto w-full">
              <div className="flex gap-3 pb-2 min-w-max">
                {[
                  { label: "Ages 4-9", tooltip: "Suitable for early readers" },
                  { label: "15+ Languages", tooltip: "Available in multiple languages" },
                  { label: "Audio Feedback", tooltip: "High-quality sound support" },
                  { label: "Progress Tracking", tooltip: "Detailed learning analytics" },
                  { label: "Adaptive Learning", tooltip: "Adjusts to child's pace" },
                  { label: "No Ads", tooltip: "Safe, ad-free environment" }
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setSelectedChip(index)}
                    onMouseLeave={() => setSelectedChip(null)}
                  >
                    <span className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-[#b2e61b] hover:text-white text-highlight text-sm font-medium rounded-full border border-gray-200 cursor-pointer transition-all duration-200 whitespace-nowrap">
                      {spec.label}
                    </span>
                    {selectedChip === index && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg whitespace-nowrap z-10">
                        {spec.tooltip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                      </div>
                    )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        {/* How It Works (3-4 Steps) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { step: "1", title: "Start Playing", desc: "Download and begin with age-appropriate games" },
                { step: "2", title: "Practice Daily", desc: "15-20 minute sessions build reading skills" },
                { step: "3", title: "Track Progress", desc: "Monitor improvement and celebrate achievements" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="w-12 h-12 bg-highlight text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-highlight">{item.title}</h3>
                  <p className="text-highlight opacity-80">{item.desc}</p>
                  {index < 2 && (
                    <ChevronRight className="w-6 h-6 text-[#b2e61b] hidden md:block absolute top-6 -right-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases (Tiles) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                { title: "Home Learning", desc: "Support reading development at home" },
                { title: "Classroom Support", desc: "Complement classroom reading instruction" },
                { title: "Reading Recovery", desc: "Help struggling readers catch up" },
                { title: "ESL Support", desc: "Support English language learners" },
                { title: "Special Needs", desc: "Adaptive learning for diverse needs" },
                { title: "Early Intervention", desc: "Prevent reading difficulties early" }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-highlight mb-2">{useCase.title}</h3>
                  <p className="text-highlight opacity-80">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes / Stats (3 Metric Cards) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">Proven Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              {[
                { number: "1M+", caption: "Children learning worldwide" },
                { number: "50+", caption: "Countries using GraphoGame" },
                { number: "85%", caption: "Improvement in reading skills" }
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
                  <div className="text-highlight opacity-80">{stat.caption}</div>
                </motion.div>
              ))}
                  </div>
                </div>
        </section>

        {/* Social Proof (Testimonial / Case Logo Row) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl text-center">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-highlight mb-4">
                "GraphoGame has transformed how our children approach reading. The games are engaging and the progress tracking helps us support their learning journey."
              </blockquote>
              <cite className="text-highlight opacity-80 font-medium">
                — Parent, Helsinki Elementary School
              </cite>
            </div>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {['University of Jyväskylä', 'Education Finland', 'Reading Research', 'Global Schools'].map((partner, index) => (
                <div key={index} className="text-sm font-medium text-gray-600">{partner}</div>
              ))}
              </div>
            </div>
          </section>

        {/* Lead Capture (Short Form) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight mb-4">Start Your Child's Reading Journey</h2>
              <p className="text-highlight opacity-80 mb-8">
                  Join millions of families worldwide who trust GraphoGame for reading success.
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
                  placeholder="Role (Parent/Teacher/etc.)"
                  value={formData.role}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
                  required
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="School/Organization (Optional)"
                  value={formData.organization}
                  onChange={handleFormChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b2e61b]"
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
                  placeholder="Phone Number (Optional)"
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
                  <option value="download">Download App</option>
                  <option value="parent-info">Parent Information</option>
                  <option value="school-trial">School Trial</option>
                  <option value="research">Research Partnership</option>
                </select>
                </div>
              <div className="mb-4">
                <label className="flex items-start gap-2 text-sm text-highlight opacity-80">
                  <input type="checkbox" className="mt-1" required />
                  I agree to receive communications about GraphoGame and understand that I can unsubscribe at any time.
                </label>
              </div>
              <button
                type="submit"
                className="w-full box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid bg-highlight text-white hover:bg-[#b2e61b] hover:border-[#b2e61b] transition-all duration-300 font-semibold"
              >
                Get Started
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
            <Play className="w-4 h-4" />
            Play
          </button>
          <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-[#0C0504] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
            <Mail className="w-4 h-4" />
            Info
          </button>
          <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#b2e61b] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
            <Phone className="w-4 h-4" />
            Call
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GraphoGame;