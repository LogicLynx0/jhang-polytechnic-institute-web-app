import { getCategoryColor } from "@/lib/heplers";
import { Badge } from "lucide-react";
import React from "react";


const CourseDetailHeader = ({course}) => {

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Badge className={getCategoryColor(course.category)}>
          {course.category}
        </Badge>
        <span className="font-medium">{course.category}</span>
        {!course.available && (
          <Badge variant="secondary">Currently Unavailable</Badge>
        )}
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
      <p className="text-xl text-gray-600">{course.description}</p>
    </div>
  );
};

export default CourseDetailHeader;
