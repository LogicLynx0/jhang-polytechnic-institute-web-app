import { Award } from "lucide-react";
import React from "react";

const CourseImage = () => {
  return (
    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg mb-8 flex items-center justify-center">
      <Award className="h-24 w-24 text-primary" />
    </div>
  );
};

export default CourseImage;
