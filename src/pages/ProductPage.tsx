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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ProductPage = () => {
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
        title="Code School Finland – Transform Coding Education"
        description="Bring Finnish pedagogy and innovative coding education to your classroom. Proven results, expert training, and comprehensive support."
        canonical="https://schoolgrads.ai/product"
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
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-highlight leading-tight">
                  Code School Finland
                </h1>
                <p className="text-lg sm:text-xl text-highlight opacity-80">
                  Transform your classroom with Finnish coding pedagogy and innovative digital
                  tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid bg-highlight text-white hover:bg-[#b2e61b] hover:border-[#b2e61b] transition-all duration-300 font-semibold">
                    Book Consultation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid border-highlight text-highlight hover:bg-highlight hover:text-white transition-all duration-300 font-semibold">
                    View Sample
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:block w-80">
              <div className="w-full h-64 bg-gradient-to-br from-[hsl(var(--highlight))]/10 to-[#b2e61b]/10 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-highlight rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-[#b2e61b]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip (Logos & Certifications) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-6 w-full m-0 p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center w-full">
              {["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"].map(
                (partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <span className="text-sm font-medium text-gray-600">{partner}</span>
                  </div>
                ),
              )}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center px-3 py-1 bg-[#b2e600]/10 text-[#004080] text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                UNESCO Certified
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-[#004080]/10 text-[#001f3f] text-xs font-medium rounded-full">
                <Star className="w-3 h-3 mr-1" />
                Award Winner 2024
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-[#001f3f]/10 text-[#004080] text-xs font-medium rounded-full">
                <Check className="w-3 h-3 mr-1" />
                ISO Compliant
              </span>
            </div>
          </div>
        </section>

        {/* Who It's For (3 Cards) */}
        <section className="box-border flex w-full flex-col items-center gap-8 sm:gap-12 bg-white m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              Who It's For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <Users className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Students",
                  points: ["Learn coding fundamentals", "Develop problem-solving skills"],
                },
                {
                  icon: <GraduationCap className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Teachers",
                  points: ["Easy-to-use curriculum", "Comprehensive training support"],
                },
                {
                  icon: <School className="w-8 h-8 text-[#b2e61b]" />,
                  title: "Schools",
                  points: ["Enhance reputation", "Future-ready education"],
                },
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
                      <li key={pointIndex} className="text-highlight opacity-80">
                        • {point}
                      </li>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
              {[
                "Finnish pedagogy proven globally",
                "No coding experience required",
                "Complete teacher training included",
                "Measurable learning outcomes",
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              Product Specs
            </h2>
            <div className="overflow-x-auto w-full">
              <div className="flex gap-3 pb-2 min-w-max">
                {[
                  { label: "Grades K-12", tooltip: "Suitable for all grade levels" },
                  { label: "40+ Lessons", tooltip: "Comprehensive curriculum" },
                  { label: "Teacher Guide", tooltip: "Step-by-step instructions" },
                  { label: "Digital Tools", tooltip: "Interactive online platform" },
                  { label: "Assessment", tooltip: "Built-in progress tracking" },
                  { label: "Multilingual", tooltip: "Available in multiple languages" },
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
              {[
                { step: "1", title: "Consultation", desc: "Book a free consultation call" },
                { step: "2", title: "Training", desc: "Teachers receive comprehensive training" },
                { step: "3", title: "Implementation", desc: "Start with pilot classroom" },
                { step: "4", title: "Scale", desc: "Expand across entire school" },
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
                  {index < 3 && (
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {[
                {
                  title: "Pilot One Grade",
                  desc: "Start small with single classroom implementation",
                },
                { title: "Teacher CPD", desc: "Professional development for existing educators" },
                { title: "Parent Showcases", desc: "Demonstrate student progress to families" },
                { title: "School Transformation", desc: "Complete institutional digital upgrade" },
                { title: "Curriculum Integration", desc: "Blend with existing subject areas" },
                { title: "Assessment Tools", desc: "Track and measure learning outcomes" },
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight text-center">
              Proven Outcomes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              {[
                { number: "90%", caption: "Student engagement increase" },
                { number: "85%", caption: "Teachers report confidence boost" },
                { number: "95%", caption: "Schools continue after pilot" },
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
                  <Star key={star} className="w-5 h-5 text-[#b2e600] fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-highlight mb-4">
                "Code School Finland transformed our approach to technology education. Our students
                are now excited about coding and our teachers feel confident delivering the
                curriculum."
              </blockquote>
              <cite className="text-highlight opacity-80 font-medium">
                — Principal, International School Mumbai
              </cite>
            </div>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {["School A", "School B", "School C", "School D"].map((school, index) => (
                <div key={index} className="text-sm font-medium text-gray-600">
                  {school}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture (Short Form) */}
        <section className="box-border flex w-full flex-col items-center gap-8 bg-gray-50 m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 w-full m-0 p-0">
            <div className="max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight mb-4">
                Get Started Today
              </h2>
              <p className="text-highlight opacity-80 mb-8">
                Book a consultation or request a sample lesson pack to see how Code School Finland
                can transform your classroom.
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
                  <option value="consultation">Book Consultation</option>
                  <option value="sample">Request Sample</option>
                  <option value="pilot">Start Pilot</option>
                  <option value="info">General Information</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="flex items-start gap-2 text-sm text-highlight opacity-80">
                  <input type="checkbox" className="mt-1" required />I agree to receive
                  communications about Code School Finland and understand that I can unsubscribe at
                  any time.
                </label>
              </div>
              <button
                type="submit"
                className="w-full box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-6 py-3 rounded-full border-solid bg-highlight text-white hover:bg-[#b2e61b] hover:border-[#b2e61b] transition-all duration-300 font-semibold"
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
            Sample
          </button>
          <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#b2e61b] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
            <Play className="w-4 h-4" />
            Demo
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
