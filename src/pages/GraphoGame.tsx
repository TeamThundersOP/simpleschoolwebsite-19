import React from "react";
import { Play, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";

// GraphoGame Components
import HeroSection from "@/components/GraphoGame/HeroSection";
import TrustStripSection from "@/components/GraphoGame/TrustStripSection";
import VisionSection from "@/components/GraphoGame/VisionSection";
import WhatIsGraphoGameSection from "@/components/GraphoGame/WhatIsGraphoGameSection";
import WhyLiteracyMattersSection from "@/components/GraphoGame/WhyLiteracyMattersSection";
import GlobalResearchSection from "@/components/GraphoGame/GlobalResearchSection";
import EvidenceRecognitionSection from "@/components/GraphoGame/EvidenceRecognitionSection";
import ProvenImpactSection from "@/components/GraphoGame/ProvenImpactSection";
import WhoBenefitsSection from "@/components/GraphoGame/WhoBenefitsSection";
import WhyChooseSection from "@/components/GraphoGame/WhyChooseSection";
import GetStartedCTASection from "@/components/GraphoGame/GetStartedCTASection";

const GraphoGame = () => {
  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="GraphoGame – Revolutionary Reading Game for Children"
        description="Making learning to read fun and effective through scientifically-designed interactive games. Trusted by over 1 million children worldwide."
        canonical="https://simpleschoolwebsite-19.onrender.com/grapho-game"
      />

      <main id="main" className="w-full" role="main">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Strip */}
        <TrustStripSection />

        {/* School Grads Vision */}
        <VisionSection />

        {/* What is GraphoGame */}
        <WhatIsGraphoGameSection />

        {/* Why Literacy Matters */}
        <WhyLiteracyMattersSection />

        {/* Global Research & Collaborations */}
        <GlobalResearchSection />

        {/* Evidence & Recognition */}
        <EvidenceRecognitionSection />

        {/* Proven Impact */}
        <ProvenImpactSection />

        {/* Who Benefits */}
        <WhoBenefitsSection />

        {/* Why Choose GraphoGame with School Grads */}
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
                title: "GraphoGame Learning Session",
                desc: "Children engaged in interactive literacy games",
                url: "/lovable-uploads/School Grads/IMG-20250924-WA0005.jpg",
                span: "",
              },
              {
                id: 2,
                type: "image",
                title: "Reading Development",
                desc: "Research-backed reading development",
                url: "/lovable-uploads/School Grads/IMG-20250924-WA0006.jpg",
                span: "",
              },
              {
                id: 3,
                type: "image",
                title: "Global Classroom Success",
                desc: "Proven literacy outcomes worldwide",
                url: "/lovable-uploads/School Grads/IMG-20250924-WA0007.jpg",
                span: "",
              },
              {
                id: 4,
                type: "image",
                title: "University Research Partners",
                desc: "Academic collaboration and validation",
                url: "/lovable-uploads/School Grads/IMG-20250924-WA0009.jpg",
                span: "",
              },
              {
                id: 5,
                type: "image",
                title: "Digital Literacy Learning",
                desc: "Personalized reading pathways",
                url: "/lovable-uploads/School Grads/IMG-20250924-WA0010.jpg",
                span: "",
              },
            ]}
            title="GraphoGame Gallery"
            description="Experience the world's most researched digital literacy game"
          />
        </section>

        {/* CTA Bar (Sticky on Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
          <div className="flex gap-2">
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-highlight text-white hover:bg-highlight/90 transition-all duration-300 font-semibold text-sm">
              <Play className="w-4 h-4 text-white" />
              Play
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-highlight text-highlight hover:bg-highlight hover:text-white transition-all duration-300 font-semibold text-sm">
              <Mail className="w-4 h-4 text-highlight" />
              Info
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-highlight text-white hover:bg-highlight/90 transition-all duration-300 font-semibold text-sm">
              <Phone className="w-4 h-4 text-white" />
              Call
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GraphoGame;
