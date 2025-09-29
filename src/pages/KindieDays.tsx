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
  Baby,
  Heart,
  BookOpen,
  Monitor,
  FileText,
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

const KindieDays = () => {
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
        title="Kindiedays – Pedagogical Solutions for Early Education"
        description="Bringing the best of Finnish early childhood education to the world. Smart software, playful lesson plans, and interactive workshops for preschools and kindergartens."
        canonical="https://simpleschoolwebsite-19.onrender.com/kindie-days"
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
                <motion.h1
                  className="box-border w-full text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight m-0 p-0 break-words"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Kindiedays
                </motion.h1>
                <motion.h2
                  className="box-border w-full text-black text-lg sm:text-xl md:text-2xl font-semibold leading-tight m-0 p-0 break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Pedagogical Solutions for Early Education
                </motion.h2>
                <motion.p
                  className="box-border w-full text-gray-600 text-base md:text-lg font-normal leading-relaxed m-0 p-0 max-w-2xl break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Kindiedays brings the best of Finnish early childhood education to the world.
                  Founded in 2015 by Finnish ECEC teachers and guided by national early childhood
                  experts.
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
                    Book Demo
                  </span>
                </motion.button>
                <motion.button
                  className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-solid border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base font-semibold w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="box-border font-semibold leading-5 sm:leading-6 m-0 p-0">
                    Get Started
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Images Section - Right */}
            <div className="box-border w-full lg:w-1/2 flex justify-center lg:justify-end m-0 p-0">
              <div className="relative w-full max-w-lg">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200">
                  <img
                    src="/lovable-uploads/kdlogobroadjpgcopy.jpg"
                    alt="Kindie Days Early Education"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
            <div className="max-w-4xl text-center">
              <p className="text-lg sm:text-xl md:text-2xl text-highlight leading-relaxed font-medium">
                Our platform helps centres ensure consistent quality, document learning with ease,
                and foster strong home–school partnerships that last.
              </p>
            </div>
          </div>
        </section>

        {/* What Kindiedays Delivers */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              What Kindiedays Delivers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Monitor className="w-8 h-8 text-highlight" />,
                  title: "Smart Software for Collaboration",
                  points: [
                    "Manager, Educator, and Family apps connecting curriculum goals, daily observations, and parent engagement",
                    "Instant learning reports, statistics, and portfolios that save time and make progress visible",
                  ],
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-highlight" />,
                  title: "Playful Lesson Plans (Ages 1–6)",
                  points: [
                    "300 ready-to-use lesson plans across 10 themes and 3 developmental levels",
                    "Based on the Finnish National Curriculum for Early Childhood Education",
                    "Flexible and adaptable to NEL, NEP, and other local frameworks",
                  ],
                },
                {
                  icon: <Users className="w-8 h-8 text-highlight" />,
                  title: "Interactive Online Workshops",
                  points: [
                    "Live, certificate-bearing training sessions for up to 50 participants",
                    "Practical topics such as STEM through Play, Parents as Partners, Linguistic Development, and Finnish Classroom Inspiration",
                    "Hands-on strategies to plan, document, and assess playful learning",
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

        {/* Why Playful Learning Works - Hero Background */}
        <section className="box-border flex w-full flex-col items-center gap-0 bg-gray-50 m-0 px-0 py-0">
          {/* Hero Image Section with Overlay Text */}
          <div className="relative w-full">
            {/* Background Image */}
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Baby className="h-16 w-16 mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-medium">Playful Learning Image</p>
                </div>
              </div>
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
                  Why Playful Learning Works?
                </motion.h2>

                {/* Bullet Points */}
                <motion.div
                  className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8 max-w-6xl w-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {[
                    { heading: "Spark curiosity:", text: "creativity, and motivation" },
                    {
                      heading: "Activate multiple brain areas:",
                      text: "motor, language, and problem-solving",
                    },
                    {
                      heading: "Strengthen emotional and social skills:",
                      text: "that support lifelong learning",
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
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#b2e600] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                        <span className="text-[#b2e600] font-bold">{point.heading}</span>{" "}
                        {point.text}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-white/90 text-lg sm:text-xl leading-relaxed mt-8 max-w-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Teaching through play is scientifically proven to enhance children's development
                  across multiple dimensions.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* The Kindiedays Platform */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              The Kindiedays Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Target className="w-8 h-8 text-highlight" />,
                  title: "Manager App",
                  points: [
                    "Select or customise your curriculum (Finnish ECEC, NEL, etc.)",
                    "Generate reports and statistics instantly",
                    "Ensure consistent quality and holistic development across classrooms",
                  ],
                },
                {
                  icon: <FileText className="w-8 h-8 text-highlight" />,
                  title: "Educator App",
                  points: [
                    "Capture and document learning moments in real time",
                    "Link observations directly to curriculum objectives",
                    "Build child portfolios that showcase growth over time",
                  ],
                },
                {
                  icon: <Heart className="w-8 h-8 text-highlight" />,
                  title: "Family App",
                  points: [
                    "Share updates, photos, and progress instantly with parents",
                    "Strengthen trust through transparent portfolios and daily reports",
                    "Extra features: attendance, messaging, event invites, albums, and more",
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
                          <span className="text-[#b2e600] font-bold text-lg">•</span>
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

        {/* Benefits & Quick Facts */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col lg:flex-row items-start gap-12 w-full m-0 p-0">
            {/* Benefits for Centres */}
            <div className="flex-1 relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-start gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-highlight mb-6">
                  Benefits for Centres
                </h2>
                <div className="space-y-4">
                  {[
                    "Strengthens parent engagement and trust",
                    "Saves time with curriculum-linked documentation",
                    "Helps centres stand out with transparent, play-based pedagogy",
                    "Supports consistent quality across classrooms",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-[#b2e600] font-bold text-lg mt-1">•</span>
                      <span className="text-highlight opacity-80 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="flex-1 relative group">
              <div className="box-border flex h-full w-full p-6 flex-col justify-start items-start gap-6 bg-white m-0 rounded-2xl border-[rgba(0,0,0,0.12)] border-solid border opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-highlight mb-6">Quick Facts</h2>
                <div className="space-y-4">
                  {[
                    { label: "Founded", value: "2015 by Finnish early childhood teachers" },
                    { label: "Audience", value: "Private preschools & kindergartens worldwide" },
                    { label: "Reach", value: "Serving centres in 25+ countries" },
                    { label: "Impact", value: "91% of customers recommend Kindiedays" },
                  ].map((fact, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <span className="text-highlight font-semibold">{fact.label}:</span>
                      <span className="text-highlight opacity-80 leading-relaxed">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Today */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight mb-4">
                Get Started Today
              </h2>
              <p className="text-highlight opacity-80 text-lg mb-8">
                Bring playful learning to life. Start with Kindiedays today!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Monitor className="w-6 h-6 text-white" />,
                  title: "Book a Demo",
                  description: "See how our apps simplify documentation and make learning visible",
                  buttonText: "Book Demo",
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-white" />,
                  title: "Access Lesson Plans",
                  description: "Explore 300 playful, curriculum-aligned activities for ages 1–6",
                  buttonText: "View Plans",
                },
                {
                  icon: <GraduationCap className="w-6 h-6 text-white" />,
                  title: "Train Your Team",
                  description: "Join live workshops and gain expertise in play-based pedagogy",
                  buttonText: "Join Workshop",
                },
              ].map((cta, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-md"
                >
                  <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center mb-4">
                    {cta.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-highlight mb-3">{cta.title}</h3>
                  <p className="text-highlight opacity-80 mb-6 leading-relaxed">
                    {cta.description}
                  </p>
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-highlight text-white m-0 px-6 py-3 rounded-full border-solid border-highlight hover:bg-highlight/90 transition-all duration-300 font-semibold">
                    {cta.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KindieDays;
