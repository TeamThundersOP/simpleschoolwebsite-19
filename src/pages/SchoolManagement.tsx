import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoModal, { VideoThumbnail } from '@/components/VideoModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users2, TrendingUp, Shield, Play, CheckCircle, Target, Zap } from 'lucide-react';

const SchoolManagement = () => {
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', title: '', posterUrl: '' });

  const openVideoModal = (videoUrl: string, title: string, posterUrl?: string) => {
    setVideoModal({ isOpen: true, videoUrl, title, posterUrl: posterUrl || '' });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', title: '', posterUrl: '' });
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
                    School Management Solutions
                  </h1>
                  <p className="text-lg sm:text-xl text-white leading-relaxed">
                    Streamline your educational institution with comprehensive management tools and analytics
                  </p>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Comprehensive institutional overview in one dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Staff management with performance analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Built-in security and regulatory compliance</span>
                    </li>
                  </ul>
                  <div className="flex gap-4 max-sm:flex-col">
                    <Button size="lg" className="bg-white text-[#021223] hover:bg-gray-100">
                      Request Demo
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                      Contact Sales
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
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl lg:rounded-[32px] overflow-hidden group cursor-pointer"
                     onClick={() => openVideoModal('https://example.com/videos/management-hero.mp4', 'School Management Overview')}>
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
            <h2 className="text-3xl font-medium text-white text-center mb-12">Complete School Administration</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <Building2 className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Institution Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Get a comprehensive view of your entire educational institution in one dashboard
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <Users2 className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Staff Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Manage teacher schedules, performance reviews, and professional development
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Track institutional performance with detailed reports and insights
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <Shield className="h-10 w-10 text-white mb-4" />
                  <CardTitle className="text-white">Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    Ensure data security and regulatory compliance with built-in protection
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="bg-[#021223] py-16 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-medium text-white text-center mb-12">School Management in Action</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <VideoThumbnail
                videoUrl="https://example.com/videos/management-overview.mp4"
                title="Management Platform Overview"
                duration="3:15"
                onPlay={() => openVideoModal('https://example.com/videos/management-overview.mp4', 'Management Platform Overview')}
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/dashboard-demo.mp4"
                title="Administrative Dashboard"
                duration="2:45"
                onPlay={() => openVideoModal('https://example.com/videos/dashboard-demo.mp4', 'Administrative Dashboard')}
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/staff-management.mp4"
                title="Staff Management Tools"
                duration="2:50"
                onPlay={() => openVideoModal('https://example.com/videos/staff-management.mp4', 'Staff Management Tools')}
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/performance-analytics.mp4"
                title="Performance Analytics"
                duration="3:00"
                onPlay={() => openVideoModal('https://example.com/videos/performance-analytics.mp4', 'Performance Analytics')}
              />
              <VideoThumbnail
                videoUrl="https://example.com/videos/compliance-security.mp4"
                title="Security & Compliance"
                duration="2:30"
                onPlay={() => openVideoModal('https://example.com/videos/compliance-security.mp4', 'Security & Compliance')}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#03182F] py-16 px-4 sm:px-8 lg:px-16">
          <div className="container max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-white mb-8">Transform Your School Administration</h2>
            <div className="flex justify-center gap-4 max-sm:flex-col max-sm:items-center">
              <Button size="lg" className="bg-white text-[#021223] hover:bg-gray-100">
                Request Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
            <p className="text-white/60 mt-4">Comprehensive management. Detailed analytics. Secure and compliant.</p>
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

export default SchoolManagement;