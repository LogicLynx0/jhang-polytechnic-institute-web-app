import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/courses";
import React from "react";

const CourseDetailRelatedCourses = ({ course }) => {
    const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id && c.available)
    .slice(0, 3);
  return (
    <div>
      {relatedCourses.length > 0 && (
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Courses
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Other courses in the {course.category} category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCourses.map((relatedCourse, index) => (
              <div
                key={relatedCourse.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...relatedCourse} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailRelatedCourses;
