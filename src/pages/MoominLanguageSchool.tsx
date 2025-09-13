import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import VideoModal, { VideoThumbnail } from '@/components/VideoModal';
import { CheckCircle, Globe2, BookOpen, Users, Sparkles, Award, Star, Heart } from 'lucide-react';
import { Feature197 } from '@/components/blocks/accordion-feature-section';
import Section from '@/components/ui/section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const demoData = {
  features: [
    {
      id: 1,
      title: "Story-Driven Language Learning",
      image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
      description: "Learn languages naturally through engaging Moomin stories and adventures that make learning memorable and fun.",
    },
    {
      id: 2,
      title: "Interactive Character Lessons",
      image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
      description: "Immersive language activities featuring beloved Moomin characters that guide learners through their language journey.",
    },
    {
      id: 3,
      title: "Multi-Language Support",
      image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
      description: "Support for various languages with native speaker pronunciation and culturally authentic content and expressions.",
    },
    {
      id: 4,
      title: "Family Learning Environment",
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      description: "Safe and nurturing environment perfect for children and families to learn together in the magical world of Moomins.",
    },
    {
      id: 5,
      title: "Progressive Skill Building",
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      description: "Structured learning path that builds language skills progressively through age-appropriate content and activities.",
    },
  ],
};

const MoominLanguageSchool = () => {
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: '',
    title: '',
    posterUrl: ''
  });

  const openVideoModal = (videoUrl: string, title: string, posterUrl?: string) => {
    setVideoModal({
      isOpen: true,
      videoUrl,
      title,
      posterUrl: posterUrl || ''
    });
  };

  const closeVideoModal = () => {
    setVideoModal({
      isOpen: false,
      videoUrl: '',
      title: '',
      posterUrl: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0">
      <Navbar />
      <main className="w-full">
        {/* Hero Section */}
        <Section index={0} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl w-full items-center gap-12 lg:gap-20 m-0 p-0 max-lg:flex-col">
            <div className="box-border flex flex-col items-start gap-6 lg:gap-8 flex-1 text-center lg:text-left m-0 p-0">
              <h1 className="box-border w-full text-foreground text-4xl md:text-6xl font-bold leading-tight tracking-tight m-0 p-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Moomin Language School
              </h1>
              <p className="box-border w-full text-foreground text-2xl font-semibold leading-tight m-0 p-0">
                Learn Languages Through Beloved Characters
              </p>
              <p className="box-border w-full text-muted-foreground text-xl font-normal leading-relaxed m-0 p-0">
                Natural language learning through immersive storytelling and the magical world of Moomins.
              </p>
              <div className="box-border flex items-start gap-4 w-full m-0 p-0 max-sm:flex-col">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-base">Story-driven learning through engaging Moomin adventures</span>
              </div>
              <div className="box-border flex items-start gap-4 w-full m-0 p-0 max-sm:flex-col">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-base">Interactive lessons with beloved Moomin characters</span>
              </div>
              <div className="box-border flex items-start gap-4 w-full m-0 p-0 max-sm:flex-col">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-base">Safe and nurturing environment perfect for families</span>
              </div>
              <div className="box-border flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full m-0 p-0">
                <Button size="lg">Start Learning</Button>
                <Button variant="outline" size="lg">Meet the Moomins</Button>
              </div>
            </div>
            <div className="box-border flex-1 m-0 p-0">
              <VideoThumbnail
                videoUrl="https://example.com/moomin-hero.mp4"
                title="Moomin Language School Demo"
                posterUrl="https://api.builder.io/api/v1/image/assets/TEMP/moomin-hero.jpg"
                onPlay={() => openVideoModal(
                  "https://example.com/moomin-hero.mp4",
                  "Moomin Language School - Learn Through Stories",
                  "https://api.builder.io/api/v1/image/assets/TEMP/moomin-hero.jpg"
                )}
                className="w-full"
              />
            </div>
          </div>
        </Section>

        {/* Trust Section */}
        <Section index={1} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl text-center m-0 p-0">
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Loved Worldwide
              </h2>
            </div>
            <div className="box-border grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full m-0 p-0">
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border text-white text-4xl sm:text-5xl font-bold leading-tight m-0 p-0">75+</div>
                <p className="box-border text-white text-base font-normal leading-6 m-0 p-0">Years of Moomin Magic</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border text-white text-4xl sm:text-5xl font-bold leading-tight m-0 p-0">50+</div>
                <p className="box-border text-white text-base font-normal leading-6 m-0 p-0">Languages & Countries</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border text-white text-4xl sm:text-5xl font-bold leading-tight m-0 p-0">10M+</div>
                <p className="box-border text-white text-base font-normal leading-6 m-0 p-0">Moomin Fans Globally</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section index={2} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl text-center m-0 p-0">
              <h2 className="box-border w-full text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Learning Made Magical
              </h2>
            </div>
            <div className="box-border w-full overflow-x-auto lg:overflow-visible m-0 p-0">
              <div className="box-border flex items-start gap-6 lg:gap-12 min-w-max lg:grid lg:grid-cols-3 lg:min-w-0 m-0 p-0">
                <div className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl m-0 p-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                    <h3 className="box-border w-full text-foreground text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                      For Children
                    </h3>
                    <p className="box-border w-full text-foreground text-sm sm:text-base font-normal leading-6 m-0 p-0">
                      Engaging language learning through beloved Moomin characters and stories that make learning fun and memorable.
                    </p>
                  </div>
                </div>
                
                <div className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl m-0 p-0">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                    <h3 className="box-border w-full text-foreground text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                      For Families
                    </h3>
                    <p className="box-border w-full text-foreground text-sm sm:text-base font-normal leading-6 m-0 p-0">
                      Shared learning experiences that bring families together through the timeless values and adventures of Moominvalley.
                    </p>
                  </div>
                </div>
                
                <div className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl m-0 p-0">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                    <h3 className="box-border w-full text-foreground text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                      For Educators
                    </h3>
                    <p className="box-border w-full text-foreground text-sm sm:text-base font-normal leading-6 m-0 p-0">
                      Structured curriculum with proven story-based methodology that makes language teaching engaging and effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Feature197 Section */}
        <Section index={3}>
          <Feature197 {...demoData} />
        </Section>

        {/* Learning Journey */}
        <Section index={4} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl text-center m-0 p-0">
              <h2 className="box-border w-full text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Your Learning Adventure
              </h2>
            </div>
            <div className="box-border grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full m-0 p-0">
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-xl m-0 p-0">1</div>
                <h3 className="box-border text-foreground text-xl font-semibold leading-tight m-0 p-0">Meet the Moomins</h3>
                <p className="box-border text-muted-foreground text-sm font-normal leading-6 m-0 p-0">Begin your journey in Moominvalley with beloved characters as your guides.</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-xl m-0 p-0">2</div>
                <h3 className="box-border text-foreground text-xl font-semibold leading-tight m-0 p-0">Story Adventures</h3>
                <p className="box-border text-muted-foreground text-sm font-normal leading-6 m-0 p-0">Learn through engaging stories and interactive activities with Moomin friends.</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-xl m-0 p-0">3</div>
                <h3 className="box-border text-foreground text-xl font-semibold leading-tight m-0 p-0">Language Mastery</h3>
                <p className="box-border text-muted-foreground text-sm font-normal leading-6 m-0 p-0">Build confidence and fluency through progressive lessons and practice.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Video Gallery */}
        <Section index={5} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl text-center m-0 p-0">
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Explore Moomin Language Learning
              </h2>
            </div>
            <div className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full m-0 p-0">
              <VideoThumbnail
                videoUrl="https://example.com/moomin-overview.mp4"
                title="Moomin School Overview"
                duration="2:25"
                onPlay={() => openVideoModal(
                  "https://example.com/moomin-overview.mp4",
                  "Moomin Language School Overview"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/story-lessons.mp4"
                title="Story-Based Lessons"
                duration="3:00"
                onPlay={() => openVideoModal(
                  "https://example.com/story-lessons.mp4",
                  "Learning Through Moomin Stories"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/character-interactions.mp4"
                title="Character Interactions"
                duration="2:35"
                onPlay={() => openVideoModal(
                  "https://example.com/character-interactions.mp4",
                  "Interactive Moomin Characters"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/language-progress.mp4"
                title="Language Progress Tracking"
                duration="2:15"
                onPlay={() => openVideoModal(
                  "https://example.com/language-progress.mp4",
                  "Track Your Learning Progress"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/family-learning.mp4"
                title="Family Learning Together"
                duration="2:50"
                onPlay={() => openVideoModal(
                  "https://example.com/family-learning.mp4",
                  "Families Learning Together"
                )}
              />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section index={6} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 lg:gap-12 w-full text-center m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl m-0 p-0">
              <h2 className="box-border w-full text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Begin Your Language Adventure
              </h2>
              <p className="box-border w-full text-muted-foreground text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
                Story-driven learning with beloved characters in a family-friendly experience.
              </p>
            </div>
            <div className="box-border flex flex-col sm:flex-row gap-4 justify-center w-full m-0 p-0">
              <Button size="lg">
                Start Learning
              </Button>
              <Button size="lg" variant="outline">
                Free Trial
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      
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

export default MoominLanguageSchool;