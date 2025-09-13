import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, BookOpen, Award, CheckCircle, Clock, Target, Briefcase, Globe, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AltSection } from '@/components/blocks/alt-section';
import { ImageContentSection } from '@/components/blocks/image-content-section';
import { Feature197ImageLeft } from '@/components/blocks/feature197-image-left';
import { TOKENS } from '@/design/tokens-from-home';

const demoData = {
  features: [
    {
      id: 1,
      title: "Project-Based Learning",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description: "Students build real projects while learning coding fundamentals, making abstract concepts tangible and engaging.",
    },
    {
      id: 2,
      title: "Finnish Pedagogy Integration",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description: "Research-backed Finnish education methods adapted for Indian classrooms, emphasizing creativity and critical thinking.",
    },
    {
      id: 3,
      title: "Teacher Training & Support",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description: "Comprehensive training programs that empower teachers with confidence and practical skills in coding education.",
    },
    {
      id: 4,
      title: "NEP 2020 Alignment",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description: "Curriculum designed to meet National Education Policy guidelines while maintaining global standards.",
    },
  ],
};

const CodeSchool = () => {
  let sectionIndex = 0;

  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0">
      <Navbar />
      <main className="w-full">
        {/* HERO - Keep existing hero with video placeholder */}
        <section className="box-border flex w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex-col items-center gap-8 lg:gap-16 bg-[#021223] m-0 pt-[100px] sm:pt-[120px] lg:pt-[152px] pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 relative">
          <div className={`${TOKENS.CONTAINER_CLASS} flex flex-col items-center gap-8 lg:gap-16 flex-1 w-full`}>
            <motion.div
              className="flex flex-col items-center text-center w-full gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`w-full ${TOKENS.H1_CLASS} ${TOKENS.TEXT_LIGHT} max-w-4xl`}>
                Code School Finland: Empowering Indian Schools with World-Class Coding Education
              </h1>
              <p className={`w-full ${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT} max-w-3xl`}>
                Bring Finnish pedagogy and cutting-edge coding curriculum to your classrooms with our comprehensive K-12 programming suite.
              </p>
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <button className="flex justify-center items-center gap-2 bg-white text-[#0C0504] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors min-w-[160px]">
                  Start Free Trial
                </button>
                <button className="flex justify-center items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors min-w-[160px]">
                  Watch Demo
                </button>
              </div>
            </motion.div>
            
            {/* Hero Video Placeholder */}
            <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl lg:rounded-[32px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=1200" 
                alt="Code School Finland Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Play className="w-6 h-6 text-gray-900 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY / TRUST */}
        <AltSection index={sectionIndex++}>
          <section className={TOKENS.SECTION_PADDING}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="flex flex-col items-center text-center gap-8 lg:gap-12 max-w-4xl mx-auto">
                <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_DARK}`}>
                  Why Choose Code School Finland?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>Proven in 150+ Countries</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK} text-center`}>
                      Trusted by millions of students worldwide with research-backed results.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>Finnish Excellence</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK} text-center`}>
                      Built on the world's most admired education system.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>Measurable Impact</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK} text-center`}>
                      Track student progress with detailed analytics and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AltSection>

        {/* Image-Content Section 1 */}
        <AltSection index={sectionIndex++}>
          <ImageContentSection
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=1200"
            imageAlt="Students coding in classroom"
            title="Built by Educators, Proven Worldwide"
            body={
              <p>Our curriculum combines the best of Finnish pedagogy with practical coding skills, making programming accessible and engaging for students aged 6-18. Every lesson is designed by educators who understand how children learn best.</p>
            }
            align="left"
            isDark={true}
          />
        </AltSection>

        {/* BENEFITS */}
        <AltSection index={sectionIndex++}>
          <section className={TOKENS.SECTION_PADDING}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="flex flex-col gap-12 lg:gap-16">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_DARK} mb-4`}>
                    Benefits for Everyone
                  </h2>
                  <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_DARK}`}>
                    Our comprehensive approach ensures success for students, teachers, and schools.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className={TOKENS.CARD_BASE}>
                    <Users className={TOKENS.ICON_SIZE + " text-blue-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Students</h3>
                    <h4 className="text-base font-semibold text-gray-900">21st Century Skills</h4>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Build computational thinking, creativity, and problem-solving skills through hands-on coding projects.
                    </p>
                  </div>
                  <div className={TOKENS.CARD_BASE}>
                    <BookOpen className={TOKENS.ICON_SIZE + " text-green-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Teachers</h3>
                    <h4 className="text-base font-semibold text-gray-900">Comprehensive Training</h4>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Get certified with our teacher training programs and ongoing professional development support.
                    </p>
                  </div>
                  <div className={TOKENS.CARD_BASE}>
                    <Briefcase className={TOKENS.ICON_SIZE + " text-purple-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Schools</h3>
                    <h4 className="text-base font-semibold text-gray-900">Complete Solution</h4>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Transform your school with curriculum, training, assessment tools, and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AltSection>

        {/* FEATURES + Feature197 */}
        <AltSection index={sectionIndex++}>
          <Feature197ImageLeft 
            features={demoData.features}
            title="What's Included"
            description="Everything you need to bring world-class coding education to your school"
            isDark={true}
          />
        </AltSection>

        {/* Image-Content Section 2 */}
        <AltSection index={sectionIndex++}>
          <ImageContentSection
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/8ead1f9a8371bab419bab0afeb7ef53a7d9481f2?width=1200"
            imageAlt="Complete classroom kit"
            title="Everything You Need to Start"
            body={
              <div>
                <p className="mb-4">Our comprehensive kit includes curriculum, teacher guides, student materials, and ongoing support to ensure successful implementation.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Grade-appropriate curriculum for K-12</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Teacher training and certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Assessment and progress tracking tools</span>
                  </li>
                </ul>
              </div>
            }
            align="right"
            ctaLabel="Get Started"
            ctaHref="#contact"
          />
        </AltSection>

        {/* PEDAGOGY */}
        <AltSection index={sectionIndex++}>
          <section className={TOKENS.SECTION_PADDING}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="flex flex-col gap-8 lg:gap-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_LIGHT} mb-4`}>
                    Our Pedagogy
                  </h2>
                  <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT}`}>
                    Research-backed teaching methods that make coding accessible and engaging
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Project-Based Learning</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_LIGHT}>
                        Students learn by building real projects, making abstract concepts tangible and meaningful.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Collaborative Learning</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_LIGHT}>
                        Peer programming and group projects build communication and teamwork skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">NEP 2020 Aligned</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_LIGHT}>
                        Curriculum designed to meet National Education Policy guidelines for computational thinking.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Inclusive Design</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_LIGHT}>
                        Materials and activities designed to be accessible to all learners, regardless of background.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AltSection>

        {/* IMPLEMENTATION */}
        <AltSection index={sectionIndex++}>
          <section className={TOKENS.SECTION_PADDING}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="flex flex-col gap-12 lg:gap-16 max-w-4xl mx-auto">
                <div className="text-center">
                  <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_DARK} mb-4`}>
                    How It Works
                  </h2>
                  <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_DARK}`}>
                    Simple implementation process designed for busy schools
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Assessment", desc: "We assess your school's needs and current capabilities" },
                    { step: "02", title: "Training", desc: "Comprehensive teacher training and certification program" },
                    { step: "03", title: "Launch", desc: "Gradual rollout with full support and monitoring" },
                    { step: "04", title: "Growth", desc: "Ongoing support, updates, and professional development" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mb-4 mx-auto">
                        {item.step}
                      </div>
                      <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK} mb-2`}>
                        {item.title}
                      </h3>
                      <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AltSection>

        {/* Image-Content Section 3 */}
        <AltSection index={sectionIndex++}>
          <ImageContentSection
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=1200"
            imageAlt="Teacher training session"
            title="Rapid Onboarding, Ongoing Support"
            body={
              <p>Our teacher training program gets your educators up and running quickly, with continuous professional development to ensure long-term success. We're with you every step of the way.</p>
            }
            align="left"
            ctaLabel="Learn More"
            ctaHref="#training"
            isDark={true}
          />
        </AltSection>

        {/* OUTCOMES */}
        <AltSection index={sectionIndex++}>
          <section className={TOKENS.SECTION_PADDING}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="flex flex-col gap-8 lg:gap-12 max-w-4xl mx-auto text-center">
                <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_DARK} mb-4`}>
                  Expected Outcomes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <Target className="w-12 h-12 text-blue-600" />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>
                      Enhanced Student Engagement
                    </h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      95% of students report increased interest in STEM subjects after participating in our coding programs.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Award className="w-12 h-12 text-green-600" />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>
                      Teacher Confidence
                    </h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Teachers gain confidence and skills to integrate technology effectively across all subjects.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <TrendingUp className="w-12 h-12 text-purple-600" />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>
                      School Recognition
                    </h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Join a network of innovative schools recognized for excellence in 21st-century education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AltSection>

        {/* CTA BAND */}
        <AltSection index={sectionIndex++}>
          <section className={`${TOKENS.SECTION_PADDING} text-center`}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="max-w-3xl mx-auto">
                <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_LIGHT} mb-4`}>
                  Ready to Transform Your School?
                </h2>
                <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT} mb-8`}>
                  Join thousands of schools worldwide that trust Code School Finland for their coding education needs.
                </p>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <button className="flex justify-center items-center gap-2 bg-white text-[#0C0504] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors min-w-[180px]">
                    Start Free Trial
                  </button>
                  <button className="flex justify-center items-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors min-w-[180px]">
                    Schedule Demo
                  </button>
                </div>
                <p className="text-white/80 text-sm mt-4">
                  No setup fees • 30-day money-back guarantee • Full support included
                </p>
              </div>
            </div>
          </section>
        </AltSection>
      </main>
      <Footer />
    </div>
  );
};

export default CodeSchool;
