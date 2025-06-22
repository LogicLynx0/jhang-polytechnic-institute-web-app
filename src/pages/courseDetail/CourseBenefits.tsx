import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Award } from "lucide-react";
import React from "react";

const CourseBenefits = ({ course }) => {
  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Course Benefits</CardTitle>
          <CardDescription>What you'll gain from this course</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseBenefits;
