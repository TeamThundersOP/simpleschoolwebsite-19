import React from 'react';
import { motion } from 'framer-motion';
import { Play, Gamepad2, Brain, Volume2, Trophy, Users, Award, Star, CheckCircle } from 'lucide-react';
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
      title: "Engaging Game Mechanics",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=800",
      description: "Interactive gameplay that makes reading practice enjoyable and motivating for children of all ages.",
    },
    {
      id: 2,
      title: "Scientific Foundation",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=800",
      description: "Scientifically designed to support phonological awareness and reading skill development through research-backed methods.",
    },
    {
      id: 3,
      title: "Audio-Visual Learning",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=800",
      description: "High-quality audio feedback and visual cues that reinforce letter-sound connections and reading comprehension.",
    },
    {
      id: 4,
      title: "Progress Monitoring",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=800",
      description: "Detailed progress tracking and achievements system to monitor reading development and celebrate milestones.",
    },
  ],
};

const GraphoGame = () => {
  let sectionIndex = 0;

  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0">
      <Navbar />
      <main className="w-full">
        {/* HERO */}
        <section className="box-border flex w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex-col items-center gap-8 lg:gap-16 bg-[#021223] m-0 pt-[100px] sm:pt-[120px] lg:pt-[152px] pb-16 sm:pb-20 px-4 sm:px-8 lg:px-16 relative">
          <div className={`${TOKENS.CONTAINER_CLASS} flex flex-col items-center gap-8 lg:gap-16 flex-1 w-full`}>
            <motion.div
              className="flex flex-col items-center text-center w-full gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`w-full ${TOKENS.H1_CLASS} ${TOKENS.TEXT_LIGHT} max-w-4xl`}>
                GraphoGame: Revolutionary Reading Game for Children Worldwide
              </h1>
              <p className={`w-full ${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT} max-w-3xl`}>
                Making learning to read fun and effective through scientifically-designed interactive games.
              </p>
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <button className="flex justify-center items-center gap-2 bg-white text-[#0C0504] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors min-w-[160px]">
                  Play Now
                </button>
                <button className="flex justify-center items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors min-w-[160px]">
                  For Parents
                </button>
              </div>
            </motion.div>
            
            {/* Hero Video Placeholder */}
            <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl lg:rounded-[32px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=1200" 
                alt="GraphoGame Preview"
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
                  Trusted Worldwide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Gamepad2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>15+ Languages</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK} text-center`}>
                      Available in multiple languages to support diverse learning communities.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>1M+ Children</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK} text-center`}>
                      Over one million children worldwide are learning to read with GraphoGame.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>50+ Countries</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK} text-center`}>
                      Used in schools and homes across more than 50 countries globally.
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
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/e7840efc9c98d295910c74f7a2f3fce9ee02d64f?width=1200"
            imageAlt="Children playing GraphoGame"
            title="Science-Backed Reading Success"
            body={
              <p>GraphoGame is built on decades of reading research and neuroscience. Our games are specifically designed to strengthen the neural pathways that support reading skills, making learning both effective and enjoyable for children aged 4-9.</p>
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
                    Perfect for Everyone
                  </h2>
                  <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_DARK}`}>
                    Supporting reading development at home, in schools, and in communities.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className={TOKENS.CARD_BASE}>
                    <Users className={TOKENS.ICON_SIZE + " text-blue-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Children</h3>
                    <h4 className="text-base font-semibold text-gray-900">Fun Learning Experience</h4>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Engaging games that make reading practice enjoyable while building essential literacy skills.
                    </p>
                  </div>
                  <div className={TOKENS.CARD_BASE}>
                    <Award className={TOKENS.ICON_SIZE + " text-green-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Parents</h3>
                    <h4 className="text-base font-semibold text-gray-900">Progress Tracking</h4>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Detailed insights into your child's reading development and achievements to celebrate.
                    </p>
                  </div>
                  <div className={TOKENS.CARD_BASE}>
                    <Star className={TOKENS.ICON_SIZE + " text-purple-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Educators</h3>
                    <h4 className="text-base font-semibold text-gray-900">Classroom Support</h4>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Evidence-based reading support tool that complements classroom instruction effectively.
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
            title="Game Features"
            description="Scientifically designed features that make reading practice effective and engaging"
            isDark={true}
          />
        </AltSection>

        {/* Image-Content Section 2 */}
        <AltSection index={sectionIndex++}>
          <ImageContentSection
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=1200"
            imageAlt="GraphoGame app interface"
            title="Adaptive Learning Technology"
            body={
              <div>
                <p className="mb-4">Our advanced algorithms adapt to each child's learning pace, ensuring optimal challenge levels and continuous progress.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Personalized difficulty adjustment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Multi-sensory learning approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Real-time progress feedback</span>
                  </li>
                </ul>
              </div>
            }
            align="right"
            ctaLabel="Try It Free"
            ctaHref="#download"
          />
        </AltSection>

        {/* PEDAGOGY */}
        <AltSection index={sectionIndex++}>
          <section className={TOKENS.SECTION_PADDING}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="flex flex-col gap-8 lg:gap-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_DARK} mb-4`}>
                    Research-Based Approach
                  </h2>
                  <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_DARK}`}>
                    Built on scientific understanding of how children learn to read
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Brain className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phonological Awareness</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_DARK}>
                        Strengthens the foundation of reading by developing sound-symbol connections.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Volume2 className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Audio-Visual Integration</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_DARK}>
                        High-quality audio and visual feedback reinforce learning through multiple senses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Gamepad2 className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Game-Based Learning</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_DARK}>
                        Motivation through gameplay mechanics that keep children engaged and learning.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Trophy className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Achievement System</h3>
                      <p className={TOKENS.BODY_SMALL + " " + TOKENS.TEXT_DARK}>
                        Progress tracking and rewards that celebrate learning milestones and build confidence.
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
                  <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_LIGHT} mb-4`}>
                    Simple Steps to Success
                  </h2>
                  <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT}`}>
                    Getting started with GraphoGame is easy and immediate
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { step: "01", title: "Start Playing", desc: "Download and begin with age-appropriate games that match your child's reading level" },
                    { step: "02", title: "Practice Daily", desc: "Consistent 15-20 minute sessions build strong reading foundations" },
                    { step: "03", title: "Track Progress", desc: "Monitor improvement with detailed reports and celebrate achievements" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                        {item.step}
                      </div>
                      <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_LIGHT} mb-2`}>
                        {item.title}
                      </h3>
                      <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_LIGHT}`}>
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
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/8ead1f9a8371bab419bab0afeb7ef53a7d9481f2?width=1200"
            imageAlt="Family using GraphoGame together"
            title="Supporting Families and Schools"
            body={
              <p>GraphoGame brings families and educators together in supporting children's reading journey. With detailed progress reports and educational resources, everyone can contribute to reading success.</p>
            }
            align="left"
            ctaLabel="Learn More"
            ctaHref="#support"
          />
        </AltSection>

        {/* OUTCOMES */}
        <AltSection index={sectionIndex++}>
          <section className={TOKENS.SECTION_PADDING}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="flex flex-col gap-8 lg:gap-12 max-w-4xl mx-auto text-center">
                <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_DARK} mb-4`}>
                  Proven Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <Brain className="w-12 h-12 text-blue-600" />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>
                      Improved Reading Skills
                    </h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Research shows significant improvement in phonological awareness and reading fluency.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Trophy className="w-12 h-12 text-green-600" />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>
                      Increased Motivation
                    </h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Children stay engaged and motivated to practice reading through fun gameplay.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Star className="w-12 h-12 text-purple-600" />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>
                      Long-term Benefits
                    </h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Strong reading foundations support academic success across all subjects.
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
                  Start Your Child's Reading Journey
                </h2>
                <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT} mb-8`}>
                  Join millions of families worldwide who trust GraphoGame for reading success.
                </p>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <button className="flex justify-center items-center gap-2 bg-white text-[#0C0504] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors min-w-[180px]">
                    Play Now
                  </button>
                  <button className="flex justify-center items-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors min-w-[180px]">
                    Parent Dashboard
                  </button>
                </div>
                <p className="text-white/80 text-sm mt-4">
                  Free to play • Safe for children • No ads or in-app purchases
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

export default GraphoGame;