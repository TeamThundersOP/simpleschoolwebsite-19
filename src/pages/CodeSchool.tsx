import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Users, GraduationCap, School, Play, ChevronRight, Phone, Mail, Code, BookOpen, Target, Globe, Award, Clock, Brain, Lightbulb, Cog, MonitorSpeaker, Eye, Gamepad2, Database, Shield } from 'lucide-react';
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
        title="Code School Finland × School Grads – Transforming How Indian Schools Teach Coding, AI & Future Skills"
        description="Designed for classrooms. Powered by Finnish pedagogy. Delivered in India by School Grads. Bring the best global teaching practices to Indian classrooms in a way that is easy, affordable, and scalable."
        canonical="https://simpleschoolwebsite-19.onrender.com/code-school"
      />
      
      <main id="main" className="w-full" role="main">
        
        {/* Hero (Compact) - Matching Home Page Style */}
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
                  Code School Finland
                </motion.h1>
                <motion.h2
                  className="box-border w-full text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight m-0 p-0 break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Transforming How Indian Schools Teach Coding, AI & Future Skills
                </motion.h2>
                <motion.p
                  className="box-border w-full text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed m-0 p-0 max-w-2xl break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Designed for classrooms. Powered by Finnish pedagogy. Delivered in India by School Grads.
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
                    Book Consultation
                  </span>
                </motion.button>
                <motion.button
                  className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.08)] transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Request Sample Pack
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Images Section - Right */}
            <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
              <div className="relative w-full max-w-lg">
                <div className="aspect-video bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <Code className="h-16 w-16 mx-auto mb-4 opacity-80 text-white" />
                      <p className="text-lg font-medium">Finnish Coding Education</p>
                      <p className="text-sm opacity-70">Transform your classroom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip (Logos & Certifications) */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
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
                <Check className="w-3 h-3 mr-1 text-green-800" />
                3,00,000+ Learners
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                <Globe className="w-3 h-3 mr-1 text-blue-800" />
                20+ Countries
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                <Star className="w-3 h-3 mr-1 text-purple-800" />
                7 Languages
              </span>
            </div>
          </div>
        </section>

        {/* School Grads Vision for India */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">School Grads Vision for India</h2>
            <div className="text-center max-w-4xl">
              <p className="text-lg text-[#0C0504] leading-relaxed mb-6">
                At SchoolGrads, our mission is to bring the best global teaching practices to Indian classrooms in a way that is easy, affordable, and scalable. With our partner, Code School Finland, we help schools give students—from early years to high school—practical skills in coding, AI, robotics, and future skills while also building their creativity, innovation, and problem-solving abilities.
              </p>
            </div>
          </div>
        </section>

        {/* What Students, Teachers & Schools Gain - 3 Cards */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">What They Gain</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Users className="w-8 h-8 text-[#0C0504]" />,
                  title: "What Students Gain",
                  points: [
                    "Coding, AI, robotics, and future skills are taught from basics to advanced levels",
                    "Hands-on projects that build creativity, logic, and problem-solving",
                    "Digital skills designed to match global standards and future needs"
                  ]
                },
                {
                  icon: <GraduationCap className="w-8 h-8 text-[#0C0504]" />,
                  title: "What Teachers Gain",
                  points: [
                    "Designed for teachers with no prior coding experience",
                    "Comes with ready-to-use lesson plans, worksheets, and assessments",
                    "Short, practical training along with certification, plus continuous support from experts"
                  ]
                },
                {
                  icon: <School className="w-8 h-8 text-[#0C0504]" />,
                  title: "What Schools Gain",
                  points: [
                    "Globally benchmarked curriculum, locally adaptable to boards and timetables",
                    "Stronger innovation profile and brand positioning",
                    "Seamless NEP 2020 alignment for computational thinking & digital literacy"
                  ]
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="box-border flex h-full w-full p-6 flex-col justify-start items-start gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      {card.icon}
                      <h3 className="text-xl font-semibold text-[#0C0504]">{card.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {card.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2 text-[#0C0504] opacity-80">
                          <span className="text-[#0C0504] font-bold text-lg">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Code School Finland */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">Why Code School Finland</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
              {[
                {
                  icon: <Users className="w-6 h-6 text-[#0C0504]" />,
                  title: "Built by educators",
                  desc: "Co-created and tested with Finnish teachers"
                },
                {
                  icon: <Globe className="w-6 h-6 text-[#0C0504]" />,
                  title: "Trusted worldwide", 
                  desc: "Implemented in 20+ countries, available in 7 languages"
                },
                {
                  icon: <Award className="w-6 h-6 text-[#0C0504]" />,
                  title: "Proven at scale",
                  desc: "3,00,000+ learners, thousands of trained teachers"
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#0C0504]" />,
                  title: "Faster adoption",
                  desc: "Up to 80% less teacher training time, 90% less lesson prep"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="box-border flex h-full w-full p-4 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-[#0C0504] mb-1">{item.title}</h3>
                      <p className="text-[#0C0504] opacity-80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Quote */}
            <div className="relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-center items-center gap-4 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm max-w-3xl text-center border-l-4 border-l-[#0C0504]">
                <p className="text-lg text-[#0C0504] italic mb-4">
                  "Great teachers don't need to be coders—they need the right tools."
                </p>
                <p className="text-sm text-[#0C0504] opacity-70 font-medium">
                  — Kaisu Pallaskallio, CEO & Co-Founder, Code School Finland
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[
                {
                  icon: <Target className="w-6 h-6 text-[#0C0504]" />,
                  title: "Custom Implementation Plan",
                  desc: "Designed around your school's grades, subjects, and vision"
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-[#0C0504]" />,
                  title: "Flexible Teacher Training",
                  desc: "Along with the certification, teachers get short, blended modules that fit into busy schedules"
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-[#0C0504]" />,
                  title: "Complete Classroom Kit",
                  desc: "Lesson plans, worksheets, guides, projects, and assessment guides included"
                },
                {
                  icon: <Users className="w-6 h-6 text-[#0C0504]" />,
                  title: "Continuous Support",
                  desc: "Live and offline expert guidance, regular resource updates, and a dedicated helpdesk"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-[#0C0504] mb-2">{item.title}</h3>
                      <p className="text-[#0C0504] opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pedagogy & Fit for India + Implementation */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-start gap-12 w-full m-0 p-0">
            {/* Pedagogy & Fit for India */}
            <div className="flex-1 relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-start gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0C0504] mb-6">Pedagogy & Fit for India</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Lightbulb className="w-5 h-5 text-[#0C0504]" />,
                      text: "Project-based & hands-on – Students learn by building, testing, and creating together"
                    },
                    {
                      icon: <Brain className="w-5 h-5 text-[#0C0504]" />,
                      text: "Research-led – Focus on creativity, collaboration, and critical thinking"
                    },
                    {
                      icon: <Check className="w-5 h-5 text-[#0C0504]" />,
                      text: "Aligned with NEP 2020 – Supports digital literacy and computational thinking goals"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {item.icon}
                      <span className="text-[#0C0504]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Implementation with School Grads */}
            <div className="flex-1 relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-start gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0C0504] mb-6">Implementation with School Grads</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Clock className="w-5 h-5 text-[#0C0504]" />,
                      text: "Rapid onboarding for leadership and staff"
                    },
                    {
                      icon: <Cog className="w-5 h-5 text-[#0C0504]" />,
                      text: "Timetable integration across subjects and grades"
                    },
                    {
                      icon: <Star className="w-5 h-5 text-[#0C0504]" />,
                      text: "Monitoring, assessments, and showcase events (hackathons, exhibitions)"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {item.icon}
                      <span className="text-[#0C0504]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes You Can Expect */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">Outcomes You Can Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                "Teachers confidently leading coding & AI lessons without extra burden",
                "Students who can design, code, and present real-world projects", 
                "A visible \"future-skills\" identity for your school"
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="box-border flex h-full w-full p-6 items-start gap-3 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                    <Check className="w-6 h-6 text-[#0C0504] flex-shrink-0 mt-1" />
                    <span className="text-[#0C0504] font-medium">{outcome}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Roadmap */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] mb-2">Code School Finland × School Grads</h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0C0504]">Curriculum Roadmap: Future Skills from K–12</h3>
            </div>

            <div className="w-full space-y-6">
              {[
                {
                  stage: "Early Years (K–2 | Ages 5–7)",
                  course: "Future Thinker",
                  description: "Help young children develop computational thinking through playful activities that spark curiosity and prepare them for digital learning.",
                  icon: <Brain className="w-6 h-6 text-[#0C0504]" />
                },
                {
                  stage: "Lower Primary (Grades 1–3 | Ages 6–9)",
                  course: "Little AI Learner",
                  description: "Discover AI through engaging, unplugged activities and creative exploration for young learners.",
                  icon: <Lightbulb className="w-6 h-6 text-[#0C0504]" />,
                  course2: "Junior Coder",
                  description2: "Develop computational thinking and problem-solving through hands-on ScratchJr activities."
                },
                {
                  stage: "Upper Primary (Grades 3–6 | Ages 8–11)",
                  course: "Code & Create + AI",
                  description: "Practise computational thinking by creating stories, games, and AI apps using Scratch.",
                  icon: <Code className="w-6 h-6 text-[#0C0504]" />
                },
                {
                  stage: "Middle School (Grades 3–8 | Ages 8–13)",
                  course: "Automate",
                  description: "Get practical experience in automation and embedded systems while building with sensors, processors, and actuators.",
                  icon: <Cog className="w-6 h-6 text-[#0C0504]" />,
                  course2: "Develop & Test",
                  description2: "Design and build educational games by applying product development principles."
                },
                {
                  stage: "Lower Secondary (Grades 6–9 | Ages 11–15)",
                  course: "Solutions & Syntax",
                  description: "Build work-life skills through innovative, project-based learning in a textual programming course.",
                  icon: <Code className="w-6 h-6 text-[#0C0504]" />,
                  course2: "AI Vision",
                  description2: "Create machine vision and augmented reality projects to explore AI creatively."
                },
                {
                  stage: "Upper Secondary (Grades 8–12 | Ages 13–17)",
                  course: "ICT Explorer",
                  description: "Learn to navigate the internet and computer systems safely and independently.",
                  icon: <Shield className="w-6 h-6 text-[#0C0504]" />,
                  course2: "Web Innovator",
                  description2: "Design stunning, functional webpages by progressing from basic web design to AI-enhanced applications.",
                  course3: "Teachable Machine",
                  description3: "Investigate AI classifiers and social media profiling through experimental, creative projects."
                },
                {
                  stage: "Senior Secondary (Grades 9–12 | Ages 14–18)",
                  course: "Sensor Challenger",
                  description: "Conduct experiments with electromechanics and embedded systems to build sensor-activated games in a project-based course.",
                  icon: <Gamepad2 className="w-6 h-6 text-[#0C0504]" />
                }
              ].map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="box-border flex h-full w-full p-6 items-start gap-4 bg-white m-0 rounded-xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm border-l-4 border-l-[#0C0504]">
                    {level.icon}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#0C0504] mb-2">{level.stage}</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-[#0C0504] mb-1">{level.course}</h5>
                          <p className="text-[#0C0504] opacity-80 text-sm">{level.description}</p>
                        </div>
                        
                        {level.course2 && (
                          <div>
                            <h5 className="font-semibold text-[#0C0504] mb-1">{level.course2}</h5>
                            <p className="text-[#0C0504] opacity-80 text-sm">{level.description2}</p>
                          </div>
                        )}
                        
                        {level.course3 && (
                          <div>
                            <h5 className="font-semibold text-[#0C0504] mb-1">{level.course3}</h5>
                            <p className="text-[#0C0504] opacity-80 text-sm">{level.description3}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Code School Finland */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C0504] text-center">About Code School Finland</h2>
            <div className="text-center max-w-4xl">
              <p className="text-lg text-[#0C0504] leading-relaxed">
                Founded in 2017 by Kaisu Pallaskallio, a computer scientist and EdTech leader, Code School Finland creates practical teaching resources that help any teacher confidently teach coding, AI, robotics, and future skills. These materials are constantly improved with feedback from classrooms around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-[rgb(17,24,39)] m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Get Started</h2>
            <p className="text-lg text-white leading-relaxed max-w-3xl">
              Bring future-ready skills to your classrooms, simply, effectively, and at scale. SchoolGrads takes care of the rollout, teacher training, and ongoing support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-6 py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors font-semibold text-[#0C0504] min-w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowRight className="w-4 h-4 text-[#0C0504]" />
                Book a 20-minute consultation
              </motion.button>
              <motion.button
                className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.08)] transition-colors font-semibold text-white min-w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <BookOpen className="w-4 h-4 text-white" />
                Request a sample lesson pack
              </motion.button>
              <motion.button
                className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.08)] transition-colors font-semibold text-white min-w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play className="w-4 h-4 text-white" />
                Plan a pilot for one grade
              </motion.button>
            </div>
          </div>
        </section>

        {/* CTA Bar (Sticky on Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
          <div className="flex gap-2">
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#0C0504]/80 transition-all duration-300 font-semibold text-sm">
              <Phone className="w-4 h-4 text-white" />
              Call
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-[#0C0504] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
              <Mail className="w-4 h-4 text-[#0C0504]" />
              Sample
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#0C0504]/80 transition-all duration-300 font-semibold text-sm">
              <Play className="w-4 h-4 text-white" />
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
