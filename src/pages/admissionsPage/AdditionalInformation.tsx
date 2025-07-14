import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import React from "react";

const AdditionalInformation = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Financial Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">
              Affordable Fee Structure
            </h4>
            <p className="text-sm text-green-700">
              We offer competitive pricing with flexible payment plans and
              installment options.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">
              Scholarships Available
            </h4>
            <p className="text-sm text-blue-700">
              Merit-based scholarships and financial assistance programs for
              deserving students.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What's Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">
              Quick Response
            </h4>
            <p className="text-sm text-purple-700">
              Our admission team will contact you within 24 hours of your
              application.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">
              Start Classes
            </h4>
            <p className="text-sm text-orange-700">
              Multiple intake sessions throughout the year. Start as soon as
              next week!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionalInformation;
