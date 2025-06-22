import Image from "next/image";
import React from "react";

const CourseImage = ({ course }: any) => {
  return (
    <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg mb-8 flex items-center justify-center">
      <Image src={course.image} alt="" fill className="object-cover" />
    </div>
  );
};

export default CourseImage;
