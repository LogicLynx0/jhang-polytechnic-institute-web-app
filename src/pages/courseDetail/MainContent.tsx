import React from 'react'
import CourseDetailHeader from './CourseDetailHeader'
import CourseImage from './CourseImage'
import CourseStats from './CourseStats'
import CourseDescription from './CourseDecsription'
import CourseModules from './CourseModules'
import CourseRequirements from './CourseRequirements'
import CourseBenefits from './CourseBenefits'
import UnavailableNote from './UnavailableNote'

const MainContent = ({course}: any) => {
  return (
    <div className="lg:col-span-2">
        <CourseDetailHeader course={course} />
        <CourseImage />
        <CourseStats course={course} />
        <CourseDescription course={course} />
        <CourseModules course={course} />
        <CourseRequirements course={course} />
        <CourseBenefits course={course} />
        <UnavailableNote course={course} />
    </div>
  )
}

export default MainContent