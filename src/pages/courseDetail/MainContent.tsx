import React from 'react'
import CourseDetailHeader from './CourseDetailHeader'
import CourseImage from './CourseImage'
import CourseStats from './CourseStats'
import CourseDescription from './CourseDecsription'
import CourseModules from './CourseModules'
import CourseRequirements from './CourseRequirements'
import CourseBenefits from './CourseBenefits'
import UnavailableNote from './UnavailableNote'
import { Course } from '@/data/courses'

interface Props {
  course: Course; 
}

const MainContent = ({course}: Props) => {
  return (
    <div className="lg:col-span-2">
        <CourseDetailHeader course={course} />
        <CourseImage course={course}/>
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