import { getAvailableCourses } from "@/data/courses";
import { Award, Clock, GraduationCap, Users } from "lucide-react";
import React from "react";

const Admissions = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey towards a successful career. Apply now for our industry-relevant courses 
            and join thousands of successful graduates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-primary text-white p-6 rounded-lg text-center">
            <GraduationCap className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">{getAvailableCourses.length}</h3>
            <p className="text-sm opacity-90">Available Courses</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg text-center">
            <Users className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">95%</h3>
            <p className="text-sm opacity-90">Job Placement Rate</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
            <Clock className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">24hrs</h3>
            <p className="text-sm opacity-90">Application Response</p>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg text-center">
            <Award className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="text-sm opacity-90">Practical Training</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
