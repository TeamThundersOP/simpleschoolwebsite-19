import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Star,
  Users,
  GraduationCap,
  School,
  Play,
  ChevronRight,
  Phone,
  Mail,
  Code,
  BookOpen,
  Target,
  Globe,
  Award,
  Clock,
  Brain,
  Lightbulb,
  Cog,
  MonitorSpeaker,
  Eye,
  Gamepad2,
  Database,
  Shield,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";
import CurriculumRoadmap from "@/components/ui/curriculum-roadmap";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

// Code School Finland Logo Component
const CodeSchoolFinlandLogo = ({
  className = "",
  size = "large",
}: {
  className?: string;
  size?: "small" | "medium" | "large";
}) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto md:h-20",
  };

  return (
    <img
      src="/lovable-uploads/CSF-LOGO-simple+1580x1040++(1).png"
      alt="Code School Finland Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

const CodeSchool = () => {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    organization: "",
    email: "",
    phone: "",
    intent: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (import.meta.env.DEV) {
      console.log("Form submitted:", formData);
    }
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
        {/* Hero (Compact) - Light Version */}
        <section className="box-border flex w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-white m-0 pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px] pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-x-hidden">
          <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16 w-full m-0 p-0">
            {/* Content Section - Left */}
            <div className="box-border flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 gap-6 lg:gap-8 m-0 p-0">
              <motion.div
                className="box-border flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-6 w-full m-0 p-0"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <CodeSchoolFinlandLogo className="" size="large" />
                </motion.div>
                <motion.h2
                  className="box-border w-full text-black text-lg sm:text-xl md:text-2xl font-semibold leading-tight m-0 p-0 break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Transforming How Indian Schools Teach Coding, AI & Future Skills
                </motion.h2>
                <motion.p
                  className="box-border w-full text-gray-600 text-base md:text-lg font-normal leading-relaxed m-0 p-0 max-w-2xl break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Designed for classrooms. Powered by Finnish pedagogy. Delivered in India by School
                  Grads.
                </motion.p>
              </motion.div>
              <motion.div
                className="box-border flex flex-col sm:flex-row items-center gap-3 sm:gap-4 m-0 p-0 w-full sm:w-auto justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-gray-800 m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-800 hover:bg-gray-700 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Book Consultation
                  </span>
                </motion.button>
                <motion.button
                  className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
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
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <Code className="h-16 w-16 mx-auto mb-4 opacity-80 text-gray-600" />
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
        {/* <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
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
        </section> */}

        {/* School Grads Vision for India */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              School Grads Vision for India
            </h2>
            <div className="text-center max-w-4xl">
              <p className="text-lg text-highlight leading-relaxed mb-6">
                At SchoolGrads, our mission is to bring the best global teaching practices to Indian
                classrooms in a way that is easy, affordable, and scalable. With our partner, Code
                School Finland, we help schools give students—from early years to high
                school—practical skills in coding, AI, robotics, and future skills while also
                building their creativity, innovation, and problem-solving abilities.
              </p>
            </div>
          </div>
        </section>

        {/* What Students, Teachers & Schools Gain - 3 Cards */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              What They Gain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Users className="w-8 h-8 text-highlight" />,
                  title: "What Students Gain",
                  points: [
                    "Coding, AI, robotics, and future skills are taught from basics to advanced levels",
                    "Hands-on projects that build creativity, logic, and problem-solving",
                    "Digital skills designed to match global standards and future needs",
                  ],
                },
                {
                  icon: <GraduationCap className="w-8 h-8 text-highlight" />,
                  title: "What Teachers Gain",
                  points: [
                    "Designed for teachers with no prior coding experience",
                    "Comes with ready-to-use lesson plans, worksheets, and assessments",
                    "Short, practical training along with certification, plus continuous support from experts",
                  ],
                },
                {
                  icon: <School className="w-8 h-8 text-highlight" />,
                  title: "What Schools Gain",
                  points: [
                    "Globally benchmarked curriculum, locally adaptable to boards and timetables",
                    "Stronger innovation profile and brand positioning",
                    "Seamless NEP 2020 alignment for computational thinking & digital literacy",
                  ],
                },
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
                      <h3 className="text-xl font-semibold text-highlight">{card.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {card.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-2 text-highlight opacity-80"
                        >
                          <span className="text-highlight font-bold text-lg">•</span>
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
        <section className="box-border flex w-full flex-col items-center gap-0 bg-gray-50 m-0 px-0 py-0">
          {/* Hero Image Section with Overlay Text */}
          <div className="relative w-full">
            {/* Background Image */}
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Code School Finland Community"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay - clear at top, dark at bottom */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

              {/* Overlay Content - positioned in lower section */}
              <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Why Code School Finland
                </motion.h2>

                {/* Bullet Points */}
                <motion.div
                  className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8 max-w-6xl w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {[
                    {
                      heading: "Built by educators:",
                      text: "Co-created and tested with Finnish teachers",
                    },
                    {
                      heading: "Trusted worldwide:",
                      text: "Implemented in 20+ countries, available in 7 languages",
                    },
                    {
                      heading: "Proven at scale:",
                      text: "3,00,000+ learners, thousands of trained teachers",
                    },
                    {
                      heading: "Faster adoption:",
                      text: "Up to 80% less teacher training time, 90% less lesson prep",
                    },
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 text-left p-2 sm:p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                        <span className="text-yellow-400 font-bold">{point.heading}</span>{" "}
                        {point.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Enhanced Quote Section */}
          <div className="relative group w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="box-border flex h-full w-full p-6 sm:p-8 md:p-12 flex-col justify-center items-center gap-6 bg-gradient-to-br from-highlight/5 via-white to-highlight/10 m-0 rounded-3xl border-2 border-highlight/20 opacity-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:border-highlight/40 backdrop-blur-sm text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                  <div className="absolute top-8 left-8 w-16 h-16 border-2 border-highlight rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-highlight/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-8 h-8 border border-highlight/30 rotate-45"></div>
                </div>

                {/* Quote Icon */}
                <div className="relative z-10 w-12 sm:w-16 h-12 sm:h-16 bg-highlight/10 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-6 sm:w-8 h-6 sm:h-8 text-highlight"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-highlight leading-tight max-w-4xl">
                  "Great teachers don't need to be coders—they need the right tools."
                </blockquote>

                {/* Attribution */}
                <div className="relative z-10 flex flex-col items-center gap-3 mt-4">
                  <div className="w-16 h-px bg-highlight/30"></div>
                  <cite className="not-italic text-sm sm:text-base md:text-lg font-semibold text-highlight/80">
                    Kaisu Pallaskallio
                  </cite>
                  <p className="text-xs sm:text-sm text-highlight/60 font-medium">
                    CEO & Co-Founder, Code School Finland
                  </p>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-highlight/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[
                {
                  icon: <Target className="w-6 h-6 text-highlight" />,
                  title: "Custom Implementation Plan",
                  desc: "Designed around your school's grades, subjects, and vision",
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-highlight" />,
                  title: "Flexible Teacher Training",
                  desc: "Along with the certification, teachers get short, blended modules that fit into busy schedules",
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-highlight" />,
                  title: "Complete Classroom Kit",
                  desc: "Lesson plans, worksheets, guides, projects, and assessment guides included",
                },
                {
                  icon: <Users className="w-6 h-6 text-highlight" />,
                  title: "Continuous Support",
                  desc: "Live and offline expert guidance, regular resource updates, and a dedicated helpdesk",
                },
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
                      <h3 className="font-semibold text-highlight mb-2">{item.title}</h3>
                      <p className="text-highlight opacity-80">{item.desc}</p>
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
                <h2 className="text-2xl sm:text-3xl font-bold text-highlight mb-6">
                  Pedagogy & Fit for India
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      heading: "Project-based & hands-on",
                      text: "Students learn by building, testing, and creating together through practical coding projects",
                    },
                    {
                      heading: "Research-led approach",
                      text: "Focus on creativity, collaboration, and critical thinking skills for the digital age",
                    },
                    {
                      heading: "Aligned with NEP 2020",
                      text: "Supports digital literacy and computational thinking goals set by Indian education policy",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-highlight">
                        <span className="font-bold text-highlight">{item.heading}</span> –{" "}
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Implementation with School Grads */}
            <div className="flex-1 relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-start gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-highlight mb-6">
                  Implementation with School Grads
                </h2>
                <div className="space-y-4">
                  {[
                    "Rapid onboarding for leadership and staff with comprehensive training programs",
                    "Timetable integration across subjects and grades for seamless curriculum delivery",
                    "Monitoring, assessments, and showcase events including hackathons and exhibitions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-highlight">{item}</span>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              Outcomes You Can Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                "Teachers confidently leading coding & AI lessons without extra burden",
                "Students who can design, code, and present real-world projects",
                'A visible "future-skills" identity for your school',
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
                    <Check className="w-6 h-6 text-highlight flex-shrink-0 mt-1" />
                    <span className="text-highlight font-medium">{outcome}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Roadmap */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="text-center mb-8">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                <CodeSchoolFinlandLogo className="" size="medium" />
                <span className="text-2xl md:text-3xl font-bold text-gray-700">×</span>
                <img
                  src="/lovable-uploads/logo.svg"
                  alt="School Grads Logo"
                  className="h-8 w-auto md:h-12"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight mb-4">
                Curriculum Roadmap: Future Skills from K–12
              </h2>
              <p className="text-lg text-highlight/80 max-w-3xl mx-auto">
                A comprehensive journey through coding, AI, and future skills education from
                kindergarten to grade 12.
              </p>
            </div>

            <Timeline
              variant="roadmap"
              className="w-full max-w-4xl"
              items={[
                {
                  id: "early-years",
                  title: "Early Years (K–2)",
                  description:
                    "Future Thinker: Help young children develop computational thinking through playful activities that spark curiosity and prepare them for digital learning. Focus on play-based learning and foundational computational thinking skills.",
                  status: "completed",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  badge: "Ages 5–7",
                  timestamp: new Date("2024-01-15"),
                },
                {
                  id: "lower-primary",
                  title: "Lower Primary (Grades 1–3)",
                  description:
                    "Little AI Learner & Junior Coder: Discover AI through engaging, unplugged activities and develop computational thinking through hands-on ScratchJr activities. Students learn AI basics and problem-solving skills.",
                  status: "completed",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  badge: "Ages 6–9",
                  timestamp: new Date("2024-02-01"),
                },
                {
                  id: "upper-primary",
                  title: "Upper Primary (Grades 3–6)",
                  description:
                    "Code & Create + AI: Practice computational thinking by creating stories, games, and AI apps using Scratch. Students build their first interactive projects and explore creative coding.",
                  status: "completed",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  badge: "Ages 8–11",
                  timestamp: new Date("2024-02-15"),
                },
                {
                  id: "middle-school",
                  title: "Middle School (Grades 3–8)",
                  description:
                    "Automate & Develop: Get practical experience in automation and embedded systems while building with sensors, processors, and actuators. Design and build educational games applying product development principles.",
                  status: "completed",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  badge: "Ages 8–13",
                  timestamp: new Date("2024-03-01"),
                },
                {
                  id: "lower-secondary",
                  title: "Lower Secondary (Grades 6–9)",
                  description:
                    "Solutions & Syntax + AI Vision: Build work-life skills through innovative, project-based learning in textual programming. Create machine vision and augmented reality projects to explore AI creatively.",
                  status: "completed",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  badge: "Ages 11–15",
                  timestamp: new Date("2024-03-15"),
                },
                {
                  id: "upper-secondary",
                  title: "Upper Secondary (Grades 8–12)",
                  description:
                    "ICT Explorer, Web Innovator & Teachable Machine: Learn digital literacy and cybersecurity, design AI-enhanced web applications, and investigate AI classifiers through experimental projects.",
                  status: "completed",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  badge: "Ages 13–17",
                  timestamp: new Date("2024-04-01"),
                },
                {
                  id: "senior-secondary",
                  title: "Senior Secondary (Grades 9–12)",
                  description:
                    "Sensor Challenger: Conduct experiments with electromechanics and embedded systems to build sensor-activated games in a project-based course. Advanced hardware integration and game development.",
                  status: "completed",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  badge: "Ages 14–18",
                  timestamp: new Date("2024-04-15"),
                },
              ]}
            />

            {/* Key Learning Outcomes */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-700 mb-2">7</div>
                <div className="text-sm text-blue-600 font-medium">Grade Levels Covered</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-700 mb-2">12+</div>
                <div className="text-sm text-green-600 font-medium">Core Programs</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-700 mb-2">100%</div>
                <div className="text-sm text-purple-600 font-medium">NEP 2020 Aligned</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Code School Finland */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight">
                About Code School Finland
              </h2>
            </div>
            <div className="text-center max-w-4xl">
            <p className="text-lg text-highlight leading-relaxed">
                Founded in 2017 by Kaisu Pallaskallio, a computer scientist and EdTech leader, Code
                School Finland creates practical teaching resources that help any teacher
                confidently teach coding, AI, robotics, and future skills. These materials are
                constantly improved with feedback from classrooms around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-[rgb(17,24,39)] m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Get Started</h2>
            <p className="text-lg text-white leading-relaxed max-w-3xl">
              Bring future-ready skills to your classrooms, simply, effectively, and at scale.
              SchoolGrads takes care of the rollout, teacher training, and ongoing support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-6 py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors font-semibold text-[#0C0504] min-w-[200px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowRight className="w-4 h-4 text-highlight" />
                <span className="text-highlight">Book a 20-minute consultation</span>
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

        {/* Interactive Bento Gallery Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <InteractiveBentoGallery
            mediaItems={[
              {
                id: 1,
                type: "image",
                title: "Code School Finland Classroom",
                desc: "Students engaged in coding activities",
                url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
                span: "",
              },
              {
                id: 2,
                type: "video",
                title: "Teacher Training Session",
                desc: "Professional development in action",
                url: "https://cdn.pixabay.com/video/2022/03/06/109519-686204142_large.mp4",
                span: "",
              },
              {
                id: 3,
                type: "image",
                title: "AI Learning Lab",
                desc: "Future-ready technology education",
                url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                span: "",
              },
              {
                id: 4,
                type: "image",
                title: "Student Project Showcase",
                desc: "Creative coding achievements",
                url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                span: "",
              },
              {
                id: 5,
                type: "video",
                title: "Curriculum Implementation",
                desc: "Real classroom integration",
                url: "https://cdn.pixabay.com/video/2019/04/04/23264-329278009_large.mp4",
                span: "",
              },
            ]}
            title="Code School Finland Gallery"
            description="Experience our innovative approach to coding education in Indian classrooms"
          />
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
