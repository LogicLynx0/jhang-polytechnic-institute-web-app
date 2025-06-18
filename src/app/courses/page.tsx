import Disclaimer from "@/components/common/Disclaimer";
import FAQ from "@/components/ui/FAQ";
import { coursesFAQs } from "@/lib/faqsData";
import CoursesCTA from "@/pages/courses/CoursesCTA";
import CoursesFilterSection from "@/pages/courses/CoursesFilterSection";
import CoursesPageHeaderSection from "@/pages/courses/CoursesPageHeaderSection";
import CourseStats from "@/pages/courses/CourseStats";
import React from "react";

const Courses = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoursesPageHeaderSection />
        <CourseStats />
        <Disclaimer />
        <CoursesFilterSection />
        <FAQ
          title="Frequently Asked Questions"
          subtitle="Common questions about our courses and enrollment process"
          faqs={coursesFAQs}
        />
        <CoursesCTA />

      </div>
    </div>
  );
};

export default Courses;
