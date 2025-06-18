import CallToAction from "@/components/common/CallToAction";
import MapSection from "@/components/common/MapSection";
import SocialMediaSection from "@/components/common/SocialMediaSection";
import AboutSection from "@/pages/indexPage/AboutSection";
import FeaturedCourseSection from "@/pages/indexPage/FeaturedCourseSection";
import HeroSection from "@/pages/indexPage/HeroSection";
import OurAffiliations from "@/pages/indexPage/OurAffiliations";
import StatusSection from "@/pages/indexPage/StatusSection";
import WhyChooseUs from "@/pages/indexPage/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatusSection />
      <AboutSection />
      <FeaturedCourseSection />
      <WhyChooseUs />
      <OurAffiliations />
      <SocialMediaSection title={'Connect With Us'} description={'Follow us on social media for updates, success stories, and educational content'} />
      <CallToAction />
      <MapSection />
    </div>
  );
};

export default Home;
