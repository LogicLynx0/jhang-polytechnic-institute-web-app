import CurrentFocusSection from "@/components/common/CurrentFocusSection";
import FAQ from "@/components/ui/FAQ";
import { aboutFAQs } from "@/lib/faqsData";
import AboutPageHeaderSection from "@/pages/aboutPage/AboutPageHeaderSection";
import AboutPageMissionSection from "@/pages/aboutPage/AboutPageMissionSection";
import AboutPageTimeline from "@/pages/aboutPage/AboutPageTimeline";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutPageHeaderSection />
        <AboutPageMissionSection />
        <AboutPageTimeline />
        <CurrentFocusSection />
        <FAQ
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about contacting us"
          faqs={aboutFAQs}
        />
      </div>
    </div>
  );
};

export default About;
