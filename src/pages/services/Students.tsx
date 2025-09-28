import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  Users,
  Lightbulb,
  Code,
  Puzzle,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TOKENS } from "@/design/tokens-from-home";
import { AltSection } from "@/components/blocks/alt-section";
import { ImageContentSection } from "@/components/blocks/image-content-section";
import { Feature197ImageLeft } from "@/components/blocks/feature197-image-left";
import { Button } from "@/components/ui/button";

const StudentsService = () => {
  const features = [
    {
      id: 1,
      title: "Project-Based Learning",
      description:
        "Students work on real-world projects that combine coding, creativity, and problem-solving. From building games to creating digital stories, every project develops multiple skills simultaneously.",
      image: "/lovable-uploads/Primary.svg",
    },
    {
      id: 2,
      title: "Computational Thinking",
      description:
        "Break down complex problems into manageable parts. Students learn to think logically, recognize patterns, and develop step-by-step solutions that apply far beyond coding.",
      image: "/lovable-uploads/Primary.svg",
    },
    {
      id: 3,
      title: "Creative Expression",
      description:
        "Technology becomes a medium for artistic and creative expression. Students design, animate, and build their own digital creations while learning fundamental programming concepts.",
      image: "/lovable-uploads/Primary.svg",
    },
    {
      id: 4,
      title: "Collaborative Skills",
      description:
        "Work in teams, share ideas, and build together. Students develop communication and collaboration skills essential for the modern workplace through pair programming and group projects.",
      image: "/lovable-uploads/Primary.svg",
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
                <h1 className={`${TOKENS.H1_CLASS} text-foreground mb-6`}>For Students</h1>
                <p className={`${TOKENS.BODY_CLASS} text-foreground mb-8`}>
                  Develop future-ready skills through hands-on coding, creative projects, and
                  computational thinking that prepares students for tomorrow's challenges.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium bg-black/50 rounded px-3 py-1">
                      Students building their first app
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
                Why Students Love Our Programs
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "50,000+", label: "Students engaged", icon: Users },
                  { number: "25+", label: "Countries worldwide", icon: Lightbulb },
                  { number: "95%", label: "Project completion rate", icon: CheckCircle },
                  { number: "4.8/5", label: "Student satisfaction", icon: Rocket },
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
          imageSrc="/lovable-uploads/Primary.svg"
          imageAlt="Students collaborating in a coding classroom"
          title="Built by educators, proven worldwide"
          body={
            <div>
              <p className="mb-4">
                Our curriculum is designed by experienced educators who understand how students
                learn best. Tested in classrooms across 25+ countries, we know what works.
              </p>
              <p>
                Every lesson combines hands-on coding with creative problem-solving, ensuring
                students stay engaged while building real skills they'll use throughout their lives.
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
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-4`}>What Students Gain</h2>
              <p className={`${TOKENS.BODY_CLASS} text-white opacity-90 max-w-2xl mx-auto`}>
                Our programs develop essential 21st-century skills that prepare students for future
                careers and creative expression.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Coding & Programming",
                  description:
                    "Learn fundamental programming concepts through visual, block-based coding that gradually introduces text-based languages.",
                },
                {
                  icon: Puzzle,
                  title: "Problem-Solving Skills",
                  description:
                    "Break down complex challenges into manageable steps, developing logical thinking that applies across all subjects.",
                },
                {
                  icon: Lightbulb,
                  title: "Creative Expression",
                  description:
                    "Use technology as a medium for creativity, building games, animations, and interactive stories that showcase personal interests.",
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
          title="What's Included in Our Student Programs"
          description="Everything students need to succeed in their coding journey, from beginner-friendly lessons to advanced project challenges."
          features={features}
          isDark={false}
        />
      </AltSection>

      {/* Image-Content Section 2 */}
      <AltSection index={sectionIndex++}>
        <ImageContentSection
          imageSrc="/lovable-uploads/Primary.svg"
          imageAlt="Complete classroom coding kit"
          title="Everything you need to start"
          body={
            <div>
              <p className="mb-4">
                Our complete learning packages include all the materials, guides, and digital
                resources students need to dive into coding immediately.
              </p>
              <p>
                From step-by-step project guides to creative challenges, every resource is designed
                to keep students engaged and progressing at their own pace.
              </p>
            </div>
          }
          ctaLabel="View Sample Materials"
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
              <h2 className={`${TOKENS.H2_CLASS} text-foreground mb-8`}>Our Teaching Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Project-Based Learning",
                    description:
                      "Students learn by building real projects they care about, making abstract concepts concrete and meaningful.",
                  },
                  {
                    title: "Hands-On Exploration",
                    description:
                      "Learning through experimentation and discovery, with guidance that encourages curiosity and independent thinking.",
                  },
                  {
                    title: "Collaborative Growth",
                    description:
                      "Students work together, sharing ideas and supporting each other's learning journey through peer collaboration.",
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
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-4`}>How Students Get Started</h2>
              <p className={`${TOKENS.BODY_CLASS} text-white opacity-90`}>
                A smooth journey from introduction to mastery, with support every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Introduction & Setup",
                  description:
                    "Students get familiar with tools and complete their first simple project to build confidence.",
                },
                {
                  step: "02",
                  title: "Guided Projects",
                  description:
                    "Work through structured lessons that build skills progressively while creating exciting projects.",
                },
                {
                  step: "03",
                  title: "Independent Creation",
                  description:
                    "Apply learned skills to original projects, showcasing creativity and demonstrating mastery.",
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
          imageSrc="/lovable-uploads/Primary.svg"
          imageAlt="Students presenting their coding projects"
          title="Celebrating student achievements"
          body={
            <div>
              <p className="mb-4">
                Students showcase their projects in regular presentation sessions, building
                confidence and communication skills alongside their technical abilities.
              </p>
              <p>
                These celebrations of learning help students see the real-world applications of
                their new skills and inspire continued growth and exploration.
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
              <h2 className={`${TOKENS.H2_CLASS} text-white mb-8`}>Student Outcomes & Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Creative Confidence",
                    description:
                      "Students gain confidence in their ability to create, problem-solve, and express their ideas through technology.",
                    icon: Lightbulb,
                  },
                  {
                    title: "Technical Skills",
                    description:
                      "Develop foundational programming concepts and computational thinking that applies across multiple subjects.",
                    icon: Code,
                  },
                  {
                    title: "Future Readiness",
                    description:
                      "Build essential 21st-century skills including collaboration, communication, and critical thinking.",
                    icon: Rocket,
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
                Ready to inspire your students with future-ready skills?
              </h2>
              <p className={`${TOKENS.BODY_CLASS} text-foreground mb-8`}>
                Easy implementation. Engaging projects. Proven results in classrooms worldwide.
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

export default StudentsService;
