import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import React from "react";

const CourseDetailContactInfo = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>Phone:</strong> +92-47-1234567
          </p>
          <p>
            <strong>Email:</strong> info@jhangpolytechnic.edu.pk
          </p>
          <p>
            <strong>Address:</strong> Jhang, Punjab, Pakistan
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetailContactInfo;
