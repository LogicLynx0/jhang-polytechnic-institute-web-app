import { courses } from '@/data/courses';
import React from 'react'

const availableCount = courses.filter(c => c.available).length;
const unavailableCount = courses.filter(c => !c.available).length;


const CourseStats = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-green-800">{availableCount}</h3>
            <p className="text-green-600">Available Courses</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-blue-800">{courses.length}</h3>
            <p className="text-blue-600">Total Courses</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <h3 className="text-2xl font-bold text-yellow-800">{unavailableCount}</h3>
            <p className="text-yellow-600">Government Courses*</p>
          </div>
        </div>
  )
}

export default CourseStats