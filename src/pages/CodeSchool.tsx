import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Users, GraduationCap, School, Play, ChevronRight, Phone, Mail, Code } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const CodeSchool = () => {
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
        title="Code School Finland × School Grads – Transforming Coding Education"
        description="Discover how Code School Finland partners with School Grads to bring Finnish pedagogy and innovative coding education to Indian classrooms."
        canonical="https://simpleschoolwebsite-19.onrender.com/code-school"
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
                  Code School Finland
                </h1>
                <p className="text-lg sm:text-xl text-[#0C0504] opacity-80">
                  Transform your classroom with Finnish coding pedagogy and innovative digital tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#b2e61b] hover:border-[#b2e61b] transition-all duration-300 font-semibold">
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[#0C0504] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold">
                    View Sample
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:block w-80">
              <div className="w-full h-64 bg-gradient-to-br from-[#0C0504]/10 to-[#b2e61b]/10 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-[#0C0504] rounded-full flex items-center justify-center">
                  <Code className="w-10 h-10 text-[#b2e61b]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip (Logos & Certifications) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full">
              {['Code School Finland', 'School Grads', 'Education Finland', 'Finnish Schools', 'Global Partners'].map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-gray-600">{partner}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                Finnish Pedagogy
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                <Star className="w-3 h-3 mr-1" />
                Proven Results
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                Teacher Training
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
                  title: "Students",
                  points: ["Learn coding fundamentals", "Develop problem-solving skills"]
                },
                {
                  icon: <GraduationCap className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Teachers",
                  points: ["Easy-to-use curriculum", "Comprehensive training support"]
                },
                {
                  icon: <School className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Schools",
                  points: ["Enhance reputation", "Future-ready education"]
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
                "Finnish pedagogy proven globally",
                "No coding experience required",
                "Complete teacher training included",
                "Measurable learning outcomes"
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

        {/* CTA Bar (Sticky on Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
          <div className="flex gap-2">
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#b2e61b] transition-all duration-300 font-semibold text-sm">
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-[#0C0504] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
              <Mail className="w-4 h-4" />
              Sample
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#b2e61b] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
              <Play className="w-4 h-4" />
              Demo
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CodeSchool;
