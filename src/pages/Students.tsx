import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import VideoModal, { VideoThumbnail } from "@/components/VideoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Clock, Play, CheckCircle, Target, Zap, Star } from "lucide-react";

const Students = () => {
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoUrl: "",
    title: "",
    posterUrl: "",
  });

  const openVideoModal = (videoUrl: string, title: string, posterUrl?: string) => {
    setVideoModal({ isOpen: true, videoUrl, title, posterUrl: posterUrl || "" });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: "", title: "", posterUrl: "" });
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <Navbar />
      <Seo
        title="Student Services – Simple School"
        description="Empowering students with innovative learning solutions, adaptive learning paths, and collaborative tools."
        canonical="https://schoolgrads.ai/students"
      />
      <main id="main" className="flex-1" role="main">
        {/* Hero Section */}
        <section className="bg-[#021223] py-20 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex items-center gap-8 lg:gap-20 max-lg:flex-col">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight">
                    Student Services
                  </h1>
                  <p className="text-lg sm:text-xl text-white leading-relaxed">
                    Empowering students with innovative learning solutions and personalized
                    educational experiences
                  </p>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Adaptive learning paths tailored to individual pace and style</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Gamified progress tracking and achievement system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>24/7 support and collaborative learning environment</span>
                    </li>
                  </ul>
                  <div className="flex gap-4 max-sm:flex-col">
                    <Button size="lg" className="bg-white text-[#021223] hover:bg-gray-100">
                      Get Started
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 max-lg:w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src="/assets/gallery/students-learning.jpg"
                    alt="Student Services Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#03182F] py-16 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-medium text-white text-center mb-12">
              What We Offer Students
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Personalized Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Adaptive learning paths tailored to your individual pace and learning style
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <Users className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Peer Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Connect with classmates and work together on projects and assignments
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <Trophy className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Achievement Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Monitor your progress and celebrate milestones with our gamified system
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <Clock className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Access help and resources whenever you need them, day or night
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="bg-[#021223] py-16 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-medium text-white text-center mb-12">
              Student Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoThumbnail
                videoUrl="https://example.com/videos/student-overview.mp4"
                title="Student Platform Overview"
                duration="2:30"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/student-overview.mp4",
                    "Student Platform Overview",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/personalized-learning.mp4"
                title="Personalized Learning in Action"
                duration="3:15"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/personalized-learning.mp4",
                    "Personalized Learning in Action",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/collaboration-tools.mp4"
                title="Collaboration Tools Demo"
                duration="2:45"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/collaboration-tools.mp4",
                    "Collaboration Tools Demo",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/achievement-system.mp4"
                title="Achievement Tracking System"
                duration="2:10"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/achievement-system.mp4",
                    "Achievement Tracking System",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/student-testimonials.mp4"
                title="Student Success Stories"
                duration="3:30"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/student-testimonials.mp4",
                    "Student Success Stories",
                  )
                }
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#03182F] py-16 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-white mb-8">Start Your Learning Journey</h2>
            <div className="flex justify-center gap-4 max-sm:flex-col max-sm:items-center">
              <Button size="lg" className="bg-white text-[#021223] hover:bg-gray-100">
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Free Trial
              </Button>
            </div>
            <p className="text-white/60 mt-4">
              Join thousands of students already transforming their learning experience
            </p>
          </div>
        </section>
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

export default Students;
