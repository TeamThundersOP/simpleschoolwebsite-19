import React from 'react';
import { 
  Play, 
  Phone, 
  Mail,
  Globe
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import InteractiveBentoGallery from '@/components/blocks/interactive-bento-gallery';

// Finnish Experience Components
import HeroSection from '@/components/FinnishExperience/HeroSection';
import TrustStripSection from '@/components/FinnishExperience/TrustStripSection';
import VisionSection from '@/components/FinnishExperience/VisionSection';
import WhatWeOfferSection from '@/components/FinnishExperience/WhatWeOfferSection';
import PartnershipModelsSection from '@/components/FinnishExperience/PartnershipModelsSection';
import WhyChooseSection from '@/components/FinnishExperience/WhyChooseSection';
import GetStartedCTASection from '@/components/FinnishExperience/GetStartedCTASection';

const FinnishExperience = () => {
  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="Finnish Education Solutions – Bringing the Finnish Experience® to India"
        description="Transform your school with world-class Finnish pedagogy. Join 1,000 schools in the Finnish Experience® movement with proven education practices."
        canonical="https://simpleschoolwebsite-19.onrender.com/finnish-experience"
      />
      
      <main id="main" className="w-full" role="main">
        
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Strip */}
        <TrustStripSection />

        {/* Vision Section */}
        <VisionSection />

        {/* What We Offer */}
        <WhatWeOfferSection />

        {/* Partnership Models */}
        <PartnershipModelsSection />

        {/* Why Choose Finnish Education */}
        <WhyChooseSection />

        {/* Get Started CTA */}
        <GetStartedCTASection />
        
        {/* Interactive Bento Gallery Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <InteractiveBentoGallery
            mediaItems={[
              {
                id: 1,
                type: "image",
                title: "Finnish School Classroom",
                desc: "Experience authentic Finnish pedagogy in action",
                url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
                span: "",
              },
              {
                id: 2,
                type: "video",
                title: "Teacher Training Session",
                desc: "Hands-on professional development",
                url: "https://cdn.pixabay.com/video/2022/03/06/109519-686204142_large.mp4",
                span: "",
              },
              {
                id: 3,
                type: "image",
                title: "Education Trip to Finland",
                desc: "Custom-made tours and learning experiences",
                url: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                span: "",
              },
              {
                id: 4,
                type: "image",
                title: "Finnish Experience School",
                desc: "Partner schools implementing Finnish practices",
                url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                span: "",
              },
              {
                id: 5,
                type: "video",
                title: "Workshop & Events",
                desc: "Expert-led conferences and training",
                url: "https://cdn.pixabay.com/video/2019/04/04/23264-329278009_large.mp4",
                span: "",
              }
            ]}
            title="Finnish Education Solutions Gallery"
            description="Discover world-class Finnish pedagogy and transformative learning experiences"
          />
        </section>

        {/* CTA Bar (Sticky on Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
          <div className="flex gap-2">
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-highlight text-white hover:bg-highlight/90 transition-all duration-300 font-semibold text-sm">
              <Phone className="w-4 h-4 text-white" />
              Call
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-highlight text-highlight hover:bg-highlight hover:text-white transition-all duration-300 font-semibold text-sm">
              <Mail className="w-4 h-4 text-highlight" />
              Info
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-highlight text-white hover:bg-highlight/90 transition-all duration-300 font-semibold text-sm">
              <Globe className="w-4 h-4 text-white" />
              Explore
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default FinnishExperience;