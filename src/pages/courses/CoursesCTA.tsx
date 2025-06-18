import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const CoursesCTA = () => {
  return (
    <div className="text-center mt-16">
      <div className="bg-primary/5 rounded-lg p-8 card-hover hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us to discuss custom training programs or get more information
          about upcoming courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="hover-glow">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-glow">
            <Link href="/admissions">Apply for Available Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCTA;
