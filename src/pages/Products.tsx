import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Code, Globe, Zap, Laptop, Users, GraduationCap, School, CheckCircle, BookOpen, Target, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoModal, { VideoThumbnail } from '@/components/VideoModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoUrl: string;
    title: string;
    posterUrl?: string;
  }>({
    isOpen: false,
    videoUrl: '',
    title: '',
    posterUrl: ''
  });

  const openVideoModal = (videoUrl: string, title: string, posterUrl?: string) => {
    setVideoModal({ isOpen: true, videoUrl, title, posterUrl });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', title: '', posterUrl: '' });
  };

  const galleryVideos = [
    {
      title: "Program Overview",
      duration: "2:45",
      videoUrl: "https://example.com/videos/overview.mp4",
      posterUrl: "/api/placeholder/480/270"
    },
    {
      title: "Teacher Training Walkthrough",
      duration: "3:10",
      videoUrl: "https://example.com/videos/training.mp4",
      posterUrl: "/api/placeholder/480/270"
    },
    {
      title: "Classroom Kit in Action",
      duration: "1:55",
      videoUrl: "https://example.com/videos/classroom-kit.mp4",
      posterUrl: "/api/placeholder/480/270"
    },
    {
      title: "NEP 2020 Alignment Explained",
      duration: "2:20",
      videoUrl: "https://example.com/videos/nep.mp4",
      posterUrl: "/api/placeholder/480/270"
    },
    {
      title: "Student Project Showcase",
      duration: "2:40",
      videoUrl: "https://example.com/videos/projects.mp4",
      posterUrl: "/api/placeholder/480/270"
    }
  ];

  const curriculumStages = [
    {
      stage: "Early Years (K–2 | Ages 5–7)",
      program: "Future Thinker",
      description: "Introduction to logical thinking and basic digital concepts"
    },
    {
      stage: "Lower Primary (Grades 1–3 | Ages 6–9)",
      program: "Little AI Learner, Junior Coder",
      description: "Basic coding concepts and AI awareness through play"
    },
    {
      stage: "Upper Primary (Grades 3–6 | Ages 8–11)",
      program: "Code & Create + AI",
      description: "Hands-on coding projects and AI applications"
    },
    {
      stage: "Middle School (Grades 3–8 | Ages 8–13)",
      program: "Automate; Develop & Test",
      description: "Programming fundamentals and testing methodologies"
    },
    {
      stage: "Lower Secondary (Grades 6–9 | Ages 11–15)",
      program: "Solutions & Syntax; AI Vision",
      description: "Advanced programming and AI implementation"
    },
    {
      stage: "Upper Secondary (Grades 8–12 | Ages 13–17)",
      program: "ICT Explorer; Web Innovator; Teachable Machine",
      description: "Web development and machine learning projects"
    },
    {
      stage: "Senior Secondary (Grades 9–12 | Ages 14–18)",
      program: "Sensor Challenger",
      description: "IoT and sensor-based project development"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section 
          className="box-border flex w-full min-h-[900px] flex-col items-center gap-12 lg:gap-20 bg-[#021223] m-0 pt-[152px] pb-20 px-4 sm:px-8 lg:px-16 max-sm:min-h-[auto] max-sm:pt-[120px] max-sm:pb-[60px] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 flex-1 w-full m-0 p-0">
            <div className="box-border flex items-center flex-1 w-full gap-8 lg:gap-20 m-0 p-0 max-lg:flex-col max-lg:gap-10">
              <motion.div 
                className="box-border flex flex-col justify-center items-start gap-6 lg:gap-8 flex-1 m-0 p-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                  <motion.h1 
                    className="box-border w-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-normal leading-tight tracking-tight m-0 p-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Code School Finland
                  </motion.h1>
                  <motion.h2 
                    className="box-border w-full text-white text-xl sm:text-2xl md:text-3xl font-medium leading-tight m-0 p-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Transforming How Indian Schools Teach Coding, AI & Future Skills
                  </motion.h2>
                  <motion.p 
                    className="box-border shrink-0 w-full text-white text-base sm:text-lg font-normal leading-relaxed m-0 p-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Designed for classrooms. Powered by Finnish pedagogy. Delivered in India by School Grads.
                  </motion.p>
                  <motion.ul 
                    className="box-border flex flex-col gap-2 w-full text-white text-sm sm:text-base m-0 p-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                      Coding, AI, robotics & future skills from basics to advanced
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                      Designed for teachers with no prior coding experience
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                      Globally benchmarked, locally adaptable curriculum
                    </li>
                  </motion.ul>
                </div>
                <motion.div 
                  className="box-border flex items-start gap-4 m-0 p-0 max-sm:flex-col max-sm:w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button 
                    className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-4 py-2.5 rounded-full border-solid border-white max-sm:w-full max-sm:justify-center hover:bg-gray-100 transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="box-border text-[#0C0504] font-normal leading-6 m-0 p-0">
                      Book a 20-minute consultation
                    </span>
                  </motion.button>
                  <motion.button 
                    className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2.5 rounded-full border-solid border-[rgba(255,255,255,0.20)] max-sm:w-full max-sm:justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="box-border text-white font-normal leading-6 m-0 p-0">
                      Request a sample lesson pack
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
              
              {/* Hero Video */}
              <motion.div 
                className="box-border flex justify-center items-center flex-1 m-0 p-0 max-lg:w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <VideoThumbnail
                  videoUrl="https://example.com/videos/hero.mp4"
                  title="Code School Finland Hero Video"
                  posterUrl="/api/placeholder/640/360"
                  onPlay={() => openVideoModal("https://example.com/videos/hero.mp4", "Code School Finland Overview", "/api/placeholder/640/360")}
                  className="w-full max-w-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Trust & Pedagogy Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-[#03182F] m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-12">
                Why Code School Finland
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {[
                { icon: Code, title: "Built by educators", desc: "Co-created and tested with Finnish teachers" },
                { icon: Globe, title: "Trusted worldwide", desc: "Implemented in 20+ countries, available in 7 languages" },
                { icon: Zap, title: "Proven at scale", desc: "3,00,000+ learners, thousands of trained teachers" },
                { icon: Laptop, title: "Faster adoption", desc: "Up to 80% less teacher training time, 90% less lesson prep" }
              ].map((item, index) => (
                <motion.article 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-medium text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </motion.article>
              ))}
            </div>

            <motion.blockquote 
              className="text-center text-xl italic text-white/80 max-w-3xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              "Great teachers don't need to be coders—they need the right tools."
              <footer className="mt-4 text-sm font-semibold text-white">
                — Kaisu Pallaskallio, CEO & Co-Founder, Code School Finland
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* What You Gain Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-4">
                What You Gain
              </h2>
              <p className="box-border w-full text-[#0C0504] text-base sm:text-lg font-normal leading-relaxed m-0 p-0 max-w-2xl mx-auto">
                At SchoolGrads, our mission is to bring the best global teaching practices to Indian classrooms in a way that is easy, affordable, and scalable.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                {
                  icon: Users,
                  title: "What Students Gain",
                  items: [
                    "Coding, AI, robotics, and future skills are taught from basics to advanced levels",
                    "Hands-on projects that build creativity, logic, and problem-solving",
                    "Digital skills designed to match global standards and future needs"
                  ]
                },
                {
                  icon: GraduationCap,
                  title: "What Teachers Gain",
                  items: [
                    "Designed for teachers with no prior coding experience",
                    "Comes with ready-to-use lesson plans, worksheets, and assessments",
                    "Short, practical training along with certification, plus continuous support from experts"
                  ]
                },
                {
                  icon: School,
                  title: "What Schools Gain",
                  items: [
                    "Globally benchmarked curriculum, locally adaptable to boards and timetables",
                    "Stronger innovation profile and brand positioning",
                    "Seamless NEP 2020 alignment for computational thinking & digital literacy"
                  ]
                }
              ].map((column, index) => (
                <motion.div 
                  key={index}
                  className="text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-[#021223]/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <column.icon className="h-8 w-8 text-[#021223]" />
                  </div>
                  <h3 className="font-medium text-[#0C0504] text-xl mb-4">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-[#0C0504] text-sm">
                        <div className="w-1.5 h-1.5 bg-[#021223] rounded-full flex-shrink-0 mt-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-[#03182F] m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-4">
                What's Included
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 w-full">
              {[
                {
                  title: "Custom Implementation Plan",
                  description: "Designed around your school's grades, subjects, and vision"
                },
                {
                  title: "Flexible Teacher Training",
                  description: "Along with the certification, teachers get short, blended modules that fit into busy schedules"
                },
                {
                  title: "Complete Classroom Kit",
                  description: "Lesson plans, worksheets, guides, projects, and assessment guides included"
                },
                {
                  title: "Continuous Support",
                  description: "Live and offline expert guidance, regular resource updates, and a dedicated helpdesk"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-white text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pedagogy & Fit for India Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-4">
                Pedagogy & Fit for India
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                {
                  icon: Target,
                  title: "Project-based & hands-on",
                  description: "Students learn by building, testing, and creating together"
                },
                {
                  icon: BookOpen,
                  title: "Research-led",
                  description: "Focus on creativity, collaboration, and critical thinking"
                },
                {
                  icon: CheckCircle,
                  title: "Aligned with NEP 2020",
                  description: "Supports digital literacy and computational thinking goals"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-[#021223]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-[#021223]" />
                  </div>
                  <h3 className="font-medium text-[#0C0504] text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[#0C0504]/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation with School Grads Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-[#03182F] m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-4">
                Implementation with School Grads
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                "Rapid onboarding for leadership and staff",
                "Timetable integration across subjects and grades",
                "Monitoring, assessments, and showcase events (hackathons, exhibitions)"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                  <p className="text-white text-sm">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-4">
                Outcomes You Can Expect
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[
                "Teachers confidently leading coding & AI lessons without extra burden",
                "Students who can design, code, and present real-world projects",
                "A visible \"future-skills\" identity for your school"
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-[#021223]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-[#021223]" />
                  </div>
                  <p className="text-[#0C0504] text-sm">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Roadmap Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-[#03182F] m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-4">
                Curriculum Roadmap: Future Skills from K–12
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {curriculumStages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2">{stage.stage}</h3>
                  <h4 className="text-white text-lg font-semibold mb-3">{stage.program}</h4>
                  <p className="text-white/80 text-sm">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-[#021223] m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-4">
                See Code School Finland in Action
              </h2>
              <p className="box-border w-full text-white/80 text-base sm:text-lg font-normal leading-relaxed m-0 p-0 max-w-2xl mx-auto">
                Watch how our program transforms classrooms and empowers both teachers and students
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {galleryVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <VideoThumbnail
                    videoUrl={video.videoUrl}
                    title={video.title}
                    duration={video.duration}
                    posterUrl={video.posterUrl}
                    onPlay={() => openVideoModal(video.videoUrl, video.title, video.posterUrl)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Code School Finland Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-start gap-12 lg:gap-20 w-full m-0 p-0">
            <motion.div 
              className="w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-[#0C0504] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-6">
                About Code School Finland
              </h2>
              <p className="box-border w-full text-[#0C0504] text-base sm:text-lg font-normal leading-relaxed m-0 p-0 max-w-3xl mx-auto">
                Founded in 2017 by Kaisu Pallaskallio, a computer scientist and EdTech leader, Code School Finland creates practical teaching resources that help any teacher confidently teach coding, AI, robotics, and future skills. These materials are constantly improved with feedback from classrooms around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Get Started CTA Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-[#03182F] m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 w-full text-center m-0 p-0">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0 mb-6">
                Get Started
              </h2>
              <p className="box-border w-full text-white/80 text-base sm:text-lg font-normal leading-relaxed m-0 p-0 max-w-3xl mx-auto mb-12">
                Bring future-ready skills to your classrooms, simply, effectively, and at scale. SchoolGrads takes care of the rollout, teacher training, and ongoing support.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button 
                className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-white m-0 px-6 py-3 rounded-full border-solid border-white hover:bg-gray-100 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="box-border text-[#0C0504] font-normal leading-6 m-0 p-0">
                  → Book a 20-minute consultation
                </span>
              </motion.button>
              <motion.button 
                className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="box-border text-white font-normal leading-6 m-0 p-0">
                  → Request a sample lesson pack
                </span>
              </motion.button>
              <motion.button 
                className="box-border flex justify-center items-center gap-2 cursor-pointer m-0 px-6 py-3 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="box-border text-white font-normal leading-6 m-0 p-0">
                  → Plan a pilot for one grade
                </span>
              </motion.button>
            </motion.div>
            
            <p className="text-white/60 text-sm">
              Fast pilot setup. Teacher-friendly. NEP 2020 aligned.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
        posterUrl={videoModal.posterUrl}
      />
    </div>
  );
};

export default Products;
