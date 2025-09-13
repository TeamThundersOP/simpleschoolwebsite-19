import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, GraduationCap, Building2, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TOKENS } from "@/design/tokens-from-home";
import { AltSection } from "@/components/blocks/alt-section";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "For Students",
      description: "Future-ready learning programs that develop computational thinking and creativity",
      bullets: [
        "Project-based coding & AI curriculum",
        "Creative problem-solving skills",
        "Real-world application projects"
      ],
      href: "/services/students",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: GraduationCap,
      title: "For Teachers",
      description: "Professional development and comprehensive training for educators",
      bullets: [
        "No prior coding experience required",
        "Complete lesson plans & resources",
        "Ongoing certification & support"
      ],
      href: "/services/teachers",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Building2,
      title: "For School Management",
      description: "Strategic transformation and seamless adoption solutions",
      bullets: [
        "Global benchmarked curriculum",
        "Stronger innovation profile",
        "NEP 2020 alignment & compliance"
      ],
      href: "/services/school-management",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  let sectionIndex = 0;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <AltSection index={sectionIndex++}>
        <section className={`${TOKENS.SECTION_PADDING} pt-32`}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                className={`${TOKENS.H1_CLASS} ${TOKENS.TEXT_DARK} mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Services
              </motion.h1>
              <motion.p 
                className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_DARK} mb-8`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Future-skills for Students, practical training for Teachers, and seamless adoption for School Management.
              </motion.p>
              <motion.ul 
                className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_DARK} text-left max-w-2xl mx-auto mb-10 space-y-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Designed for classrooms, powered by Finnish pedagogy
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Complete implementation with teacher training & ongoing support
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  NEP 2020 aligned curriculum for Indian schools
                </li>
              </motion.ul>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button size="lg" className={TOKENS.BTN_CUSTOM_PRIMARY}>
                  Talk to us
                </Button>
                <Button variant="outline" size="lg">
                  See how it works
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AltSection>

      {/* Service Cards Grid */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    className={`${TOKENS.CARD_BASE} relative overflow-hidden border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Subtle gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className={`${TOKENS.ICON_SIZE} mb-4 p-2 rounded-lg bg-primary/10`}>
                        <Icon className={`w-full h-full text-primary`} />
                      </div>
                      
                      <h3 className={`${TOKENS.H3_CLASS} ${TOKENS.TEXT_DARK} mb-3`}>
                        {service.title}
                      </h3>
                      
                      <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_DARK} mb-4`}>
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        to={service.href}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        View service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      </AltSection>

      {/* Proof/Brands */}
      <AltSection index={sectionIndex++}>
        <section className={`${TOKENS.SECTION_PADDING} py-12`}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center">
              <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK} opacity-60`}>
                Trusted by schools across India for future-ready education
              </p>
            </div>
          </div>
        </section>
      </AltSection>

      {/* CTA Band */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_LIGHT} mb-4`}>
                Ready to transform your school's approach to future skills?
              </h2>
              <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT} mb-8 opacity-90`}>
                Fast pilot setup. Teacher-friendly implementation. NEP 2020 aligned curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Book a 20-minute consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Request sample lesson pack
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AltSection>

      <Footer />
    </div>
  );
};

export default Services;