import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import VideoModal, { VideoThumbnail } from '@/components/VideoModal';
import { CheckCircle, MapPin, Heart, Star, Coffee, Users, Award, Globe } from 'lucide-react';
import { Feature197 } from '@/components/blocks/accordion-feature-section';
import Section from '@/components/ui/section';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const demoData = {
  features: [
    {
      id: 1,
      title: "World-Class Education System",
      image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
      description: "Experience the education system consistently ranked #1 globally for excellence, innovation, and student wellbeing.",
    },
    {
      id: 2,
      title: "Student-Centered Approach",
      image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
      description: "Holistic development focus with emphasis on mental health, happiness, and individual learning styles and needs.",
    },
    {
      id: 3,
      title: "Cultural Immersion Experience",
      image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
      description: "Authentic Finnish culture and lifestyle experience while learning about Nordic values and educational philosophy.",
    },
    {
      id: 4,
      title: "Innovative Teaching Methods",
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      description: "Discover the Finnish approach to stress-free, effective education with research-backed pedagogical practices.",
    },
    {
      id: 5,
      title: "Professional Development",
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      description: "Comprehensive professional development opportunities for educators to learn and implement Finnish teaching methods.",
    },
  ],
};

const FinnishExperience = () => {
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
                Finnish Experience
              </h1>
              <p className="box-border w-full text-foreground text-2xl font-semibold leading-tight m-0 p-0">
                Discover World-Renowned Education Excellence
              </p>
              <p className="box-border w-full text-muted-foreground text-xl font-normal leading-relaxed m-0 p-0">
                Immerse yourself in the Finnish education system and Nordic learning culture that leads the world.
              </p>
              <div className="box-border flex items-start gap-4 w-full m-0 p-0 max-sm:flex-col">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-base">World-class education system ranked #1 globally</span>
              </div>
              <div className="box-border flex items-start gap-4 w-full m-0 p-0 max-sm:flex-col">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-base">Focus on student wellbeing and mental health</span>
              </div>
              <div className="box-border flex items-start gap-4 w-full m-0 p-0 max-sm:flex-col">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground text-base">Stress-free, effective education approach</span>
              </div>
              <div className="box-border flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full m-0 p-0">
                <Button size="lg">Explore Finland</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="box-border flex-1 m-0 p-0">
              <VideoThumbnail
                videoUrl="https://example.com/finnish-hero.mp4"
                title="Finnish Experience Demo"
                posterUrl="https://api.builder.io/api/v1/image/assets/TEMP/finnish-hero.jpg"
                onPlay={() => openVideoModal(
                  "https://example.com/finnish-hero.mp4",
                  "Finnish Experience - World-Class Education",
                  "https://api.builder.io/api/v1/image/assets/TEMP/finnish-hero.jpg"
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
                Why Finnish Education?
              </h2>
            </div>
            <div className="box-border grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full m-0 p-0">
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border text-white text-4xl sm:text-5xl font-bold leading-tight m-0 p-0">#1</div>
                <p className="box-border text-white text-base font-normal leading-6 m-0 p-0">Global Education Ranking</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border text-white text-4xl sm:text-5xl font-bold leading-tight m-0 p-0">99%</div>
                <p className="box-border text-white text-base font-normal leading-6 m-0 p-0">Literacy Rate</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border text-white text-4xl sm:text-5xl font-bold leading-tight m-0 p-0">20+</div>
                <p className="box-border text-white text-base font-normal leading-6 m-0 p-0">Years Leading PISA</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section index={2} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl text-center m-0 p-0">
              <h2 className="box-border w-full text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Experience Benefits
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
                      For Educators
                    </h3>
                    <p className="box-border w-full text-foreground text-sm sm:text-base font-normal leading-6 m-0 p-0">
                      Professional development opportunities to learn innovative teaching methods and implement world-class educational practices.
                    </p>
                  </div>
                </div>
                
                <div className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl m-0 p-0">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                    <h3 className="box-border w-full text-foreground text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                      For Students
                    </h3>
                    <p className="box-border w-full text-foreground text-sm sm:text-base font-normal leading-6 m-0 p-0">
                      Experience student-centered learning with focus on wellbeing, creativity, and holistic development in a supportive environment.
                    </p>
                  </div>
                </div>
                
                <div className="box-border flex flex-col items-start gap-6 lg:gap-8 w-72 lg:w-full flex-shrink-0 m-0 p-6 bg-gray-50 rounded-2xl lg:rounded-[32px]">
                  <div className="box-border flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl m-0 p-0">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div className="box-border flex flex-col items-start gap-4 lg:gap-6 w-full m-0 p-0">
                    <h3 className="box-border w-full text-foreground text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight m-0 p-0">
                      For Organizations
                    </h3>
                    <p className="box-border w-full text-foreground text-sm sm:text-base font-normal leading-6 m-0 p-0">
                      Transform institutional culture with Finnish educational philosophy and practices that promote excellence and innovation.
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

        {/* Experience Steps */}
        <Section index={4} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl text-center m-0 p-0">
              <h2 className="box-border w-full text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Your Finnish Journey
              </h2>
            </div>
            <div className="box-border grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full m-0 p-0">
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-xl m-0 p-0">1</div>
                <h3 className="box-border text-foreground text-xl font-semibold leading-tight m-0 p-0">Cultural Orientation</h3>
                <p className="box-border text-muted-foreground text-sm font-normal leading-6 m-0 p-0">Introduction to Finnish culture, values, and educational philosophy.</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-xl m-0 p-0">2</div>
                <h3 className="box-border text-foreground text-xl font-semibold leading-tight m-0 p-0">Educational Immersion</h3>
                <p className="box-border text-muted-foreground text-sm font-normal leading-6 m-0 p-0">Hands-on experience with Finnish teaching methods and classroom practices.</p>
              </div>
              <div className="box-border flex flex-col items-center gap-4 text-center m-0 p-0">
                <div className="box-border flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-xl m-0 p-0">3</div>
                <h3 className="box-border text-foreground text-xl font-semibold leading-tight m-0 p-0">Implementation Support</h3>
                <p className="box-border text-muted-foreground text-sm font-normal leading-6 m-0 p-0">Ongoing guidance to implement Finnish practices in your context.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Video Gallery */}
        <Section index={5} className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 m-0 px-4 sm:px-8 lg:px-16">
          <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
            <div className="box-border flex flex-col items-center gap-4 w-full max-w-3xl text-center m-0 p-0">
              <h2 className="box-border w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
                Discover Finnish Education
              </h2>
            </div>
            <div className="box-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full m-0 p-0">
              <VideoThumbnail
                videoUrl="https://example.com/finnish-overview.mp4"
                title="Finnish Education System"
                duration="3:20"
                onPlay={() => openVideoModal(
                  "https://example.com/finnish-overview.mp4",
                  "Understanding Finnish Education"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/classroom-culture.mp4"
                title="Finnish Classroom Culture"
                duration="2:45"
                onPlay={() => openVideoModal(
                  "https://example.com/classroom-culture.mp4",
                  "Inside Finnish Classrooms"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/wellbeing-approach.mp4"
                title="Student Wellbeing Approach"
                duration="2:55"
                onPlay={() => openVideoModal(
                  "https://example.com/wellbeing-approach.mp4",
                  "Student Wellbeing in Finland"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/cultural-immersion.mp4"
                title="Cultural Experience"
                duration="3:10"
                onPlay={() => openVideoModal(
                  "https://example.com/cultural-immersion.mp4",
                  "Finnish Cultural Experience"
                )}
              />
              <VideoThumbnail
                videoUrl="https://example.com/education-outcomes.mp4"
                title="Educational Outcomes"
                duration="2:40"
                onPlay={() => openVideoModal(
                  "https://example.com/education-outcomes.mp4",
                  "Proven Educational Results"
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
                Experience Finnish Excellence
              </h2>
              <p className="box-border w-full text-muted-foreground text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
                World-class education with student-centered approach and proven excellence.
              </p>
            </div>
            <div className="box-border flex flex-col sm:flex-row gap-4 justify-center w-full m-0 p-0">
              <Button size="lg">
                Explore Finland
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
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

export default FinnishExperience;