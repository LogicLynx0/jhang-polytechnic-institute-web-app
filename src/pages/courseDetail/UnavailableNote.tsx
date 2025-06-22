import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import React from "react";

const UnavailableNote = ({ course }) => {
  return (
    <div>
      {!course.available && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-800">
              Course Currently Unavailable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-700 mb-4">
              This {course.category === "Government" ? "government" : ""} course
              is currently unavailable
              {course.category === "Government"
                ? " due to policy changes and pending approvals"
                : ""}
              .
              {course.category === "Government" &&
                " Government courses are offered periodically based on approvals."}
            </p>
            <p className="text-yellow-700">
              Please check our available courses or contact us for more
              information about when this course might become available again.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UnavailableNote;
