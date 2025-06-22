import { Award, Clock, Users } from "lucide-react";
import React from "react";

const CourseStats = ({course}: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
        <Clock className="h-8 w-8 text-primary" />
        <div>
          <p className="text-sm text-gray-600">Duration</p>
          <p className="text-lg font-semibold">{course.duration}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
        <Users className="h-8 w-8 text-primary" />
        <div>
          <p className="text-sm text-gray-600">Students Enrolled</p>
          <p className="text-lg font-semibold">{course.students}+</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
        <Award className="h-8 w-8 text-primary" />
        <div>
          <p className="text-sm text-gray-600">Certificate</p>
          <p className="text-lg font-semibold">Professional</p>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
