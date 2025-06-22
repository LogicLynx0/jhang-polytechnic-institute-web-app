import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import React from "react";

const CourseRequirements = ({ course }) => {
  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
          <CardDescription>What you need to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {course.requirements.map((requirement, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseRequirements;
