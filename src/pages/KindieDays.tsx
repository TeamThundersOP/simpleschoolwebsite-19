import React from 'react';
import { motion } from 'framer-motion';
import { Play, Baby, Smile, Palette, Music, Users, Award, Star, CheckCircle } from 'lucide-react';
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
      title: "Developmental Learning Stages",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=800",
      description: "Age-appropriate curriculum carefully designed to match each child's developmental milestones and learning readiness.",
    },
    {
      id: 2,
      title: "Play-Based Education",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=800",
      description: "Learning through play with hands-on activities that engage children and make education enjoyable and memorable.",
    },
    {
      id: 3,
      title: "Creative Arts Integration",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=800",
      description: "Encouraging artistic development through various creative mediums, projects, and self-expression opportunities.",
    },
    {
      id: 4,
      title: "Social-Emotional Learning",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=800",
      description: "Building emotional intelligence, social skills, and confidence in a nurturing and supportive environment.",
    },
  ],
};

const KindieDays = () => {
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
                Kindie Days: Nurturing Early Childhood Development
              </h1>
              <p className={`w-full ${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT} max-w-3xl`}>
                Through play-based learning and creative exploration in a joyful, supportive environment.
              </p>
            </motion.div>
            
            {/* Hero Video Placeholder */}
            <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-2xl lg:rounded-[32px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=1200" 
                alt="Kindie Days Preview"
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
                  Trusted Early Learning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Baby className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>8+ Years Excellence</h3>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>500+ Happy Families</h3>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>98% Satisfaction</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AltSection>

        {/* Image-Content Section 1 */}
        <AltSection index={sectionIndex++}>
          <ImageContentSection
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/3d273cd537999680136574d674e15be22eb8c484?width=1200"
            imageAlt="Children learning through play"
            title="Joyful Learning Through Play"
            body={
              <p>Our approach embraces the natural way children learn - through play, exploration, and discovery. Every activity is designed to nurture development while maintaining the joy and wonder of early childhood.</p>
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
                    Growing Together
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className={TOKENS.CARD_BASE}>
                    <Users className={TOKENS.ICON_SIZE + " text-blue-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Children</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Age-appropriate activities that nurture cognitive, social, emotional, and physical development.
                    </p>
                  </div>
                  <div className={TOKENS.CARD_BASE}>
                    <Award className={TOKENS.ICON_SIZE + " text-green-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Parents</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Peace of mind with qualified educators and developmentally appropriate practices.
                    </p>
                  </div>
                  <div className={TOKENS.CARD_BASE}>
                    <Star className={TOKENS.ICON_SIZE + " text-purple-600"} />
                    <h3 className={`${TOKENS.H4_CLASS} ${TOKENS.TEXT_DARK}`}>For Families</h3>
                    <p className={`${TOKENS.BODY_SMALL} ${TOKENS.TEXT_DARK}`}>
                      Strong community connections and family involvement opportunities.
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
            title="Our Learning Approach"
            description="Comprehensive early childhood education that nurtures every aspect of development"
            isDark={true}
          />
        </AltSection>

        {/* Image-Content Section 2 */}
        <AltSection index={sectionIndex++}>
          <ImageContentSection
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/8ead1f9a8371bab419bab0afeb7ef53a7d9481f2?width=1200"
            imageAlt="Creative learning environment"
            title="Creative Learning Environment"
            body={
              <p>Our thoughtfully designed spaces encourage exploration, creativity, and social interaction. Every corner is crafted to inspire learning and wonder.</p>
            }
            align="right"
            ctaLabel="Schedule Visit"
            ctaHref="#visit"
          />
        </AltSection>

        {/* CTA BAND */}
        <AltSection index={sectionIndex++}>
          <section className={`${TOKENS.SECTION_PADDING} text-center`}>
            <div className={TOKENS.CONTAINER_CLASS}>
              <div className="max-w-3xl mx-auto">
                <h2 className={`${TOKENS.H2_CLASS} ${TOKENS.TEXT_LIGHT} mb-4`}>
                  Give Your Child the Best Start
                </h2>
                <p className={`${TOKENS.BODY_CLASS} ${TOKENS.TEXT_LIGHT} mb-8`}>
                  Nurturing development through joyful learning and creative exploration.
                </p>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <button className="flex justify-center items-center gap-2 bg-white text-[#0C0504] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors min-w-[180px]">
                    Enroll Today
                  </button>
                  <button className="flex justify-center items-center gap-2 border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors min-w-[180px]">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </AltSection>
      </main>
      <Footer />
    </div>
  );
};

export default KindieDays;