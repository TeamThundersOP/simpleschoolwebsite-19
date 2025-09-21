import React from "react";
import { motion } from "framer-motion";
import { Play, Users, BookOpen, Award, CheckCircle, Lightbulb, GraduationCap, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TOKENS } from "@/design/tokens-from-home";
import { AltSection } from "@/components/blocks/alt-section";
import { ImageContentSection } from "@/components/blocks/image-content-section";
import { Feature197ImageLeft } from "@/components/blocks/feature197-image-left";
import { Button } from "@/components/ui/button";

const TeachersService = () => {
  const features = [
    {
      id: 1,
      title: "Complete Lesson Plans",
      description: "Ready-to-use lesson plans with detailed instructions, learning objectives, and assessment rubrics. No preparation time needed – just open and teach.",
      image: "/lovable-uploads/Primary.svg"
    },
    {
      id: 2,
      title: "Professional Development",
      description: "Comprehensive training program that builds your confidence and expertise. From basic concepts to advanced pedagogy, we support your growth every step.",
      image: "/lovable-uploads/Primary.svg"
    },
    {
      id: 3,
      title: "Ongoing Support",
      description: "Access to our expert team through live sessions, forums, and direct support. Never feel alone in your teaching journey with our responsive help system.",
      image: "/lovable-uploads/Primary.svg"
    },
    {
      id: 4,
      title: "Certification Program",
      description: "Earn recognized certification in computational thinking and coding education. Add valuable credentials to your professional profile.",
      image: "/lovable-uploads/Primary.svg"
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className={`${TOKENS.H1_CLASS} text-foreground mb-6`}>
                  For Teachers
                </h1>
                <p className={`${TOKENS.BODY_CLASS} text-foreground mb-8`}>
                  Professional development and comprehensive training that empowers educators to confidently teach coding and computational thinking – no prior experience required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className={TOKENS.BTN_CUSTOM_PRIMARY}>
                    Book Consultation
                  </Button>
                  <Button variant="outline" size="lg">
                    Request Sample Pack
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={`aspect-video bg-muted ${TOKENS.RADIUS_LARGE} overflow-hidden ${TOKENS.SHADOW_CLASS} relative group cursor-pointer`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium bg-black/50 rounded px-3 py-1">
                      Teacher training session in action
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AltSection>

      {/* Why/Trust Section */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-8`}>
                Why Teachers Choose Our Programs
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "10,000+", label: "Teachers trained", icon: Users },
                  { number: "25+", label: "Countries worldwide", icon: BookOpen },
                  { number: "95%", label: "Feel confident teaching", icon: CheckCircle },
                  { number: "4.9/5", label: "Training satisfaction", icon: Award }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Icon className={`${TOKENS.ICON_SIZE} text-white mx-auto mb-4`} />
                      <div className={`${TOKENS.H3_CLASS} text-white mb-2`}>
                        {stat.number}
                      </div>
                      <p className={`${TOKENS.BODY_SMALL} text-white opacity-90`}>
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AltSection>

      {/* Image-Content Section 1 */}
      <AltSection index={sectionIndex++}>
        <ImageContentSection
          imageSrc="/lovable-uploads/Primary.svg"
          imageAlt="Teacher confidently leading a coding lesson"
          title="Built by educators, for educators"
          body={
            <div>
              <p className="mb-4">
                Our programs are designed by experienced educators who understand the challenges teachers face. We provide everything you need to succeed, regardless of your technical background.
              </p>
              <p>
                From your first lesson to advanced concepts, our support system ensures you feel confident and prepared every step of the way.
              </p>
            </div>
          }
          align="left"
          isDark={false}
        />
      </AltSection>

      {/* Benefits Section */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center mb-12">
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-4`}>
                What Teachers Gain
              </h2>
              <p className={`${TOKENS.BODY_CLASS} text-white opacity-90 max-w-2xl mx-auto`}>
                Professional development that enhances your teaching practice and opens new opportunities for career growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "No Prior Experience Needed",
                  description: "Start teaching coding and computational thinking from day one with our beginner-friendly approach and comprehensive support."
                },
                {
                  icon: BookOpen,
                  title: "Ready-to-Use Resources",
                  description: "Complete lesson plans, student worksheets, assessment tools, and presentation materials – everything prepared for you."
                },
                {
                  icon: HeartHandshake,
                  title: "Ongoing Professional Support",
                  description: "Access to expert mentors, peer community, and continuous learning opportunities to grow your expertise."
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className={`${TOKENS.CARD_BASE} ${TOKENS.CARD_HOVER_SHADOW} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Icon className={`${TOKENS.ICON_SIZE} text-primary mx-auto mb-4`} />
                    <h3 className={`${TOKENS.H4_CLASS} text-foreground mb-3`}>
                      {benefit.title}
                    </h3>
                    <p className={`${TOKENS.BODY_CLASS} text-foreground`}>
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AltSection>

      {/* What's Included + Feature197 */}
      <AltSection index={sectionIndex++}>
        <Feature197ImageLeft
          title="What's Included in Our Teacher Training"
          description="Comprehensive support system designed to build your confidence and expertise in teaching future-ready skills."
          features={features}
          isDark={false}
        />
      </AltSection>

      {/* Image-Content Section 2 */}
      <AltSection index={sectionIndex++}>
        <ImageContentSection
          imageSrc="/lovable-uploads/Primary.svg"
          imageAlt="Complete teacher training materials and resources"
          title="Everything you need to succeed"
          body={
            <div>
              <p className="mb-4">
                Our comprehensive training package includes detailed lesson plans, video tutorials, hands-on workshops, and ongoing mentorship to ensure your success.
              </p>
              <p>
                From classroom management tips to technical guidance, we provide practical support that makes teaching coding enjoyable and effective.
              </p>
            </div>
          }
          ctaLabel="View Training Materials"
          ctaHref="#"
          align="right"
          isDark={true}
        />
      </AltSection>

      {/* Pedagogy Section */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className={`${TOKENS.H2_CLASS} text-foreground mb-8`}>
                Our Teacher Development Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Gradual Skill Building",
                    description: "Start with basics and progressively build expertise through hands-on practice and guided learning experiences."
                  },
                  {
                    title: "Practical Application",
                    description: "Learn by doing – practice teaching methods with real lessons and receive feedback from experienced mentors."
                  },
                  {
                    title: "Collaborative Learning",
                    description: "Connect with fellow educators, share experiences, and learn from a supportive community of teachers."
                  }
                ].map((approach, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-primary rounded-full" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} text-foreground mb-3`}>
                      {approach.title}
                    </h3>
                    <p className={`${TOKENS.BODY_CLASS} text-foreground`}>
                      {approach.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AltSection>

      {/* Implementation Section */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-4`}>
                Your Professional Development Journey
              </h2>
              <p className={`${TOKENS.BODY_CLASS} text-white opacity-90`}>
                A structured pathway from introduction to expertise, with support and guidance every step of the way.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Foundation Training",
                  description: "Learn basic concepts and pedagogical approaches through interactive workshops and hands-on practice sessions."
                },
                {
                  step: "02", 
                  title: "Classroom Implementation",
                  description: "Begin teaching with full support, mentorship, and ready-made lesson plans tailored to your schedule."
                },
                {
                  step: "03",
                  title: "Expert Development",
                  description: "Advance your skills, earn certification, and become a leader in future-skills education at your school."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className={`${TOKENS.H4_CLASS} text-white mb-3`}>
                    {step.title}
                  </h3>
                  <p className={`${TOKENS.BODY_CLASS} text-white opacity-90`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AltSection>

      {/* Image-Content Section 3 */}
      <AltSection index={sectionIndex++}>
        <ImageContentSection
          imageSrc="/lovable-uploads/Primary.svg"
          imageAlt="Teachers collaborating and sharing best practices"
          title="Join a community of innovative educators"
          body={
            <div>
              <p className="mb-4">
                Connect with teachers worldwide who are transforming education through technology. Share experiences, learn from each other, and grow together.
              </p>
              <p>
                Our community provides ongoing support, inspiration, and professional development opportunities that extend far beyond initial training.
              </p>
            </div>
          }
          align="left"
          isDark={false}
        />
      </AltSection>

      {/* Outcomes Section */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-8`}>
                Teacher Outcomes & Results
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Teaching Confidence",
                    description: "Gain the skills and confidence to lead engaging coding lessons that inspire and educate students effectively.",
                    icon: GraduationCap
                  },
                  {
                    title: "Professional Growth",
                    description: "Expand your skill set, earn valuable certifications, and enhance your career prospects in education.",
                    icon: Award
                  },
                  {
                    title: "Student Impact",
                    description: "See your students develop critical thinking, creativity, and problem-solving skills that benefit all subjects.",
                    icon: Lightbulb
                  }
                ].map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Icon className={`${TOKENS.ICON_SIZE} text-white mx-auto mb-4`} />
                      <h3 className={`${TOKENS.H4_CLASS} text-white mb-3`}>
                        {outcome.title}
                      </h3>
                      <p className={`${TOKENS.BODY_CLASS} text-white opacity-90`}>
                        {outcome.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AltSection>

      {/* CTA Band */}
      <AltSection index={sectionIndex++}>
        <section className={TOKENS.SECTION_PADDING}>
          <div className={TOKENS.CONTAINER_CLASS}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`${TOKENS.H2_CLASS} text-foreground mb-4`}>
                Ready to advance your teaching career with future-ready skills?
              </h2>
              <p className={`${TOKENS.BODY_CLASS} text-foreground mb-8`}>
                Comprehensive training. Ongoing support. Proven results for educators worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className={TOKENS.BTN_CUSTOM_PRIMARY}>
                  → Book a 20-minute consultation
                </Button>
                <Button variant="outline" size="lg">
                  → Request a sample lesson pack
                </Button>
                <Button variant="ghost" size="lg">
                  → Plan a pilot for one grade
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

export default TeachersService;