import { Calendar } from 'lucide-react'
import React from 'react'

const CurrentFocusSection = () => {
  return (
    <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Focus</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Private Courses - Available Year-Round</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 card-hover p-4 rounded-lg transition-all duration-300 hover:bg-green-50">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Tech</div>
                  <div>
                    <h4 className="font-semibold">Technology Courses</h4>
                    <p className="text-gray-600 text-sm">Graphics Design, Web Development, Digital Marketing, Mobile App Development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 card-hover p-4 rounded-lg transition-all duration-300 hover:bg-blue-50">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Safety</div>
                  <div>
                    <h4 className="font-semibold">Safety Courses</h4>
                    <p className="text-gray-600 text-sm">IOSH, NEBOSH - International safety certifications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="bg-gray-50 p-6 rounded-lg card-hover hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Courses Status</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-yellow-600 icon-bounce" />
                    <span className="font-semibold text-yellow-800">Currently Unavailable</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Government courses (DAE programs) are offered periodically based on government approvals and policy changes. 
                    These programs are currently suspended pending new approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CurrentFocusSection