import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Products from "@/components/Products";
import AboutUs from "@/components/AboutUs";
import TrustedSolutions from "@/components/TrustedSolutions";
import Seo from "@/components/Seo";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WebinarCarousel from "@/components/WebinarCarousel";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Feature197 } from "@/components/blocks/accordion-feature-section";

const demoData = {
  features: [
    {
      id: 1,
      title: "Global Pedagogy Integration",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description:
        "Bring world-class Finnish education methods directly to your classroom. Our proven pedagogy enhances student engagement and academic performance through research-backed teaching strategies that work across all subjects and grade levels.",
    },
    {
      id: 2,
      title: "Teacher Empowerment & Training",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description:
        "Comprehensive professional development programs that transform educators into confident innovators. Get practical training, certification, and continuous support to implement 21st-century teaching methods without overwhelming your schedule.",
    },
    {
      id: 3,
      title: "Future-Ready Digital Tools",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description:
        "Access award-winning educational technology from leading Finnish companies. From coding and AI to language learning and literacy apps, equip students with digital skills that prepare them for tomorrow's workforce.",
    },
    {
      id: 4,
      title: "School Transformation Support",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description:
        "Complete institutional transformation through our Finnish Experience® programs. Become a flagship school with global recognition, enhanced reputation, and proven results that attract families seeking excellence in education.",
    },
    {
      id: 5,
      title: "Measurable Learning Outcomes",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/43d51e42581e42c1cd3ce13625944e73c55a3263?width=800",
      description:
        "Track progress with data-driven insights and proven results. Our solutions are backed by research from leading universities and trusted by millions of students worldwide, ensuring your investment delivers real educational impact.",
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="Simple School – Modern Education Solutions"
        description="Discover innovative educational programs including CodeSchool, GraphoGame, and Moomin Language School. Quality education solutions for students and teachers."
        canonical="https://simpleschoolwebsite-19.onrender.com/"
      />
      <main id="main" className="w-full" role="main">
        <Hero />
        <Services />
        <AboutUs />
        <Products />
        <TrustedSolutions />
        {/* <Features /> */}
        <Feature197 {...demoData} />
        <Team />
        <Testimonials />
        <WebinarCarousel />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
