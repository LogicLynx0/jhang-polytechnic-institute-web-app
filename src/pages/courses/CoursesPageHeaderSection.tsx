import React from "react";

const CoursesPageHeaderSection = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">
        Our Courses
      </h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto zoom-in">
        Explore our comprehensive range of technical and safety courses designed
        to boost your career prospects.
      </p>
    </div>
  );
};

export default CoursesPageHeaderSection;
