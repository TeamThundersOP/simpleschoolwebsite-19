import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  Building2,
  Award,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TOKENS } from "@/design/tokens-from-home";
import { AltSection } from "@/components/blocks/alt-section";
import { ImageContentSection } from "@/components/blocks/image-content-section";
import { Feature197ImageLeft } from "@/components/blocks/feature197-image-left";
import { Button } from "@/components/ui/button";

const SchoolManagementService = () => {
  const features = [
    {
      id: 1,
      title: "Strategic Implementation Plan",
      description:
        "Customized roadmap for integrating future-skills education aligned with your school's vision, resources, and timeline. Includes stakeholder mapping and change management strategies.",
      image: "/assets/logos/school-grads-primary.svg",
    },
    {
      id: 2,
      title: "Curriculum Alignment",
      description:
        "Seamless integration with existing curriculum and NEP 2020 requirements. Our team ensures coding and computational thinking enhance rather than compete with core subjects.",
      image: "/assets/logos/school-grads-primary.svg",
    },
    {
      id: 3,
      title: "Leadership Development",
      description:
        "Training for principals and administrators on leading digital transformation, supporting teachers, and communicating value to parents and stakeholders.",
      image: "/assets/logos/school-grads-primary.svg",
    },
    {
      id: 4,
      title: "Continuous Assessment",
      description:
        "Data-driven insights into program effectiveness, student engagement, and teacher development. Regular reports help optimize implementation and demonstrate ROI.",
      image: "/assets/logos/school-grads-primary.svg",
    },
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
                <h1 className={`${TOKENS.H1_CLASS} text-foreground mb-6`}>For School Management</h1>
                <p className={`${TOKENS.BODY_CLASS} text-foreground mb-8`}>
                  Strategic transformation and seamless adoption solutions that position your school
                  as a leader in future-ready education while ensuring smooth implementation and
                  measurable results.
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
                <div
                  className={`aspect-video bg-muted ${TOKENS.RADIUS_LARGE} overflow-hidden ${TOKENS.SHADOW_CLASS} relative group cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium bg-black/50 rounded px-3 py-1">
                      School transformation success story
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
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-8`}>Why School Leaders Choose Us</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "500+", label: "Schools transformed", icon: Building2 },
                  { number: "25+", label: "Countries worldwide", icon: TrendingUp },
                  { number: "98%", label: "Successful implementations", icon: CheckCircle },
                  { number: "4.9/5", label: "Leadership satisfaction", icon: Award },
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
                      <div className={`${TOKENS.H3_CLASS} text-white mb-2`}>{stat.number}</div>
                      <p className={`${TOKENS.BODY_SMALL} text-white opacity-90`}>{stat.label}</p>
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
          imageSrc="/assets/logos/school-grads-primary.svg"
          imageAlt="School leadership team planning digital transformation"
          title="Strategic vision meets practical implementation"
          body={
            <div>
              <p className="mb-4">
                We understand the challenges of educational transformation. Our approach combines
                strategic vision with practical implementation, ensuring your school's journey to
                future-ready education is smooth and successful.
              </p>
              <p>
                From initial planning to full deployment, we provide the expertise and support
                needed to position your school as a leader in innovative education.
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
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-4`}>What Schools Gain</h2>
              <p className={`${TOKENS.BODY_CLASS} text-white opacity-90 max-w-2xl mx-auto`}>
                Strategic advantages that enhance your school's reputation, attract families, and
                prepare students for the future job market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Global Benchmarked Curriculum",
                  description:
                    "Access to internationally recognized curriculum that meets the highest educational standards and prepares students for global opportunities.",
                },
                {
                  icon: TrendingUp,
                  title: "Stronger Innovation Profile",
                  description:
                    "Position your school as a forward-thinking institution that embraces technology and prepares students for the jobs of tomorrow.",
                },
                {
                  icon: Shield,
                  title: "NEP 2020 Alignment",
                  description:
                    "Full compliance with India's National Education Policy 2020, ensuring your school meets all future-skills requirements and mandates.",
                },
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
                    <h3 className={`${TOKENS.H4_CLASS} text-foreground mb-3`}>{benefit.title}</h3>
                    <p className={`${TOKENS.BODY_CLASS} text-foreground`}>{benefit.description}</p>
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
          title="What's Included in Our School Transformation"
          description="Comprehensive support system designed to ensure successful implementation and long-term sustainability of future-skills education."
          features={features}
          isDark={false}
        />
      </AltSection>

      {/* Image-Content Section 2 */}
      <AltSection index={sectionIndex++}>
        <ImageContentSection
          imageSrc="/assets/logos/school-grads-primary.svg"
          imageAlt="Complete implementation planning and support materials"
          title="End-to-end transformation support"
          body={
            <div>
              <p className="mb-4">
                Our comprehensive transformation package includes strategic planning, implementation
                support, teacher training, and ongoing evaluation to ensure lasting success.
              </p>
              <p>
                From stakeholder engagement to parent communication, we provide the tools and
                expertise needed for smooth organizational change.
              </p>
            </div>
          }
          ctaLabel="View Implementation Plan"
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
              <h2 className={`${TOKENS.H2_CLASS} text-foreground mb-8`}>Our Strategic Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Data-Driven Planning",
                    description:
                      "Use comprehensive assessment and analysis to create a customized implementation strategy that fits your school's unique context and goals.",
                  },
                  {
                    title: "Stakeholder Engagement",
                    description:
                      "Involve all stakeholders – teachers, parents, students, and board members – in the transformation process to ensure buy-in and success.",
                  },
                  {
                    title: "Continuous Improvement",
                    description:
                      "Regular monitoring, evaluation, and optimization to ensure the program delivers expected outcomes and adapts to changing needs.",
                  },
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
                    <h3 className={`${TOKENS.H4_CLASS} text-foreground mb-3`}>{approach.title}</h3>
                    <p className={`${TOKENS.BODY_CLASS} text-foreground`}>{approach.description}</p>
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
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-4`}>Your Transformation Journey</h2>
              <p className={`${TOKENS.BODY_CLASS} text-white opacity-90`}>
                A structured approach from initial assessment to full implementation, with support
                and guidance at every stage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Strategic Assessment",
                  description:
                    "Comprehensive evaluation of current state, stakeholder needs, and organizational readiness for transformation.",
                },
                {
                  step: "02",
                  title: "Phased Implementation",
                  description:
                    "Gradual rollout with pilot programs, teacher training, and continuous support to ensure smooth adoption.",
                },
                {
                  step: "03",
                  title: "Sustainable Growth",
                  description:
                    "Long-term support, performance monitoring, and continuous improvement to ensure lasting success and impact.",
                },
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
                  <h3 className={`${TOKENS.H4_CLASS} text-white mb-3`}>{step.title}</h3>
                  <p className={`${TOKENS.BODY_CLASS} text-white opacity-90`}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AltSection>

      {/* Image-Content Section 3 */}
      <AltSection index={sectionIndex++}>
        <ImageContentSection
          imageSrc="/assets/logos/school-grads-primary.svg"
          imageAlt="School celebrating successful digital transformation"
          title="Celebrating transformation success"
          body={
            <div>
              <p className="mb-4">
                See your school community come together to celebrate achievements in student
                learning, teacher development, and institutional innovation.
              </p>
              <p>
                Our success stories showcase schools that have successfully transformed their
                educational approach and positioned themselves as leaders in their communities.
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
                School Transformation Outcomes
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Enhanced Reputation",
                    description:
                      "Position your school as an innovative leader in education, attracting quality families and talented educators.",
                    icon: Award,
                  },
                  {
                    title: "Improved Outcomes",
                    description:
                      "Measurable improvements in student engagement, critical thinking skills, and preparation for future careers.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Sustainable Growth",
                    description:
                      "Build institutional capacity for continuous innovation and adaptation to future educational trends and requirements.",
                    icon: Target,
                  },
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
                      <h3 className={`${TOKENS.H4_CLASS} text-white mb-3`}>{outcome.title}</h3>
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
                Ready to lead your school's transformation to future-ready education?
              </h2>
              <p className={`${TOKENS.BODY_CLASS} text-foreground mb-8`}>
                Strategic planning. Proven implementation. Sustainable results for educational
                leaders worldwide.
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

export default SchoolManagementService;
