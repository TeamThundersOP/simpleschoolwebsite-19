import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoModal, { VideoThumbnail } from "@/components/VideoModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  BarChart3,
  Calendar,
  FileText,
  Play,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";

const Teachers = () => {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
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
                    Teacher Resources
                  </h1>
                  <p className="text-lg sm:text-xl text-white leading-relaxed">
                    Comprehensive tools and resources to enhance your teaching experience and
                    student outcomes
                  </p>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Intuitive curriculum management and organization tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Detailed student analytics and progress tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Comprehensive assessment and grading platform</span>
                    </li>
                  </ul>
                  <div className="flex gap-4 max-sm:flex-col">
                    <Button size="lg" className="bg-white text-[#021223] hover:bg-gray-100">
                      Start Teaching
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      View Resources
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
                <div
                  className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() =>
                    openVideoModal(
                      "https://example.com/videos/teacher-hero.mp4",
                      "Teacher Resources Overview",
                    )
                  }
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <motion.div
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-6 h-6 text-[#021223] ml-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#03182F] py-16 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-medium text-white text-center mb-12">
              Empower Your Teaching
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Curriculum Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Create, organize, and manage your curriculum with our intuitive tools
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Student Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Track student progress and identify areas for improvement with detailed
                    analytics
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Class Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Efficiently manage your schedule and coordinate with students and colleagues
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <FileText className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Assessment Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Create and grade assignments with our comprehensive assessment platform
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
              Teacher Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoThumbnail
                videoUrl="https://example.com/videos/teacher-overview.mp4"
                title="Teacher Platform Overview"
                duration="2:40"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/teacher-overview.mp4",
                    "Teacher Platform Overview",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/curriculum-tools.mp4"
                title="Curriculum Management Tools"
                duration="3:25"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/curriculum-tools.mp4",
                    "Curriculum Management Tools",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/student-analytics.mp4"
                title="Student Analytics Dashboard"
                duration="2:55"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/student-analytics.mp4",
                    "Student Analytics Dashboard",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/assessment-tools.mp4"
                title="Assessment & Grading Tools"
                duration="2:30"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/assessment-tools.mp4",
                    "Assessment & Grading Tools",
                  )
                }
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/teacher-testimonials.mp4"
                title="Teacher Success Stories"
                duration="3:15"
                onPlay={() =>
                  openVideoModal(
                    "https://example.com/videos/teacher-testimonials.mp4",
                    "Teacher Success Stories",
                  )
                }
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#03182F] py-16 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-white mb-8">
              Transform Your Teaching Experience
            </h2>
            <div className="flex justify-center gap-4 max-sm:flex-col max-sm:items-center">
              <Button size="lg" className="bg-white text-[#021223] hover:bg-gray-100">
                Get Started
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
              Powerful tools. Better outcomes. Enhanced teaching experience.
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

export default Teachers;
