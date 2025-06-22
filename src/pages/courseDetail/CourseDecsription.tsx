import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BookOpen } from "lucide-react";
import React from "react";

const CourseDescription = ({ course }: any) => {
  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Course Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            {course.fullDescription}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDescription;
