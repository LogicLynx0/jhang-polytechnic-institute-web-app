import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Link from "next/link";
import React from "react";

const EnrollmentCard = ({ course }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            {course.available ? "Enroll Now" : "Course Unavailable"}
          </CardTitle>
          <CardDescription>
            {course.available
              ? "Start your learning journey today"
              : "This course is currently not available"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {course.available ? (
            <>
              <Button asChild size="lg" className="w-full">
                <Link href="/admissions">Apply for This Course</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/contact">Contact for More Info</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/courses">View Available Courses</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="w-full">
                <Link href="/contact">Contact for Updates</Link>
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EnrollmentCard;
