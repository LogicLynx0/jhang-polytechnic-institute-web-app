import React from 'react'
import EnrollmentCard from './EnrollmentCard'
import QuickInfo from './QuickInfo'
import CourseDetailContactInfo from './CourseDetailContactInfo'

const SideBar = ({course}) => {
  return (
    <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
            <EnrollmentCard course={course} />
            <QuickInfo course={course} />
            <CourseDetailContactInfo />
        </div>
    </div>
  )
}

export default SideBar