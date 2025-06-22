import { getCourseById } from '@/data/courses';
import BreadCrumb from '@/pages/courseDetail/BreadCrumb';
import CourseDetailMainContent from '@/pages/courseDetail/CourseDetailMainContent';
import CourseDetailRelatedCourses from '@/pages/courseDetail/CourseDetailRelatedCourses';
import React from 'react'

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}


const CourseDetailPage = async ({params}: CourseDetailPageProps) => {
  const courseId = params.slug
  const course = getCourseById(courseId || '');

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb course={course}/>
        <CourseDetailMainContent course={course} />
        <CourseDetailRelatedCourses course={course} />
      </div>
    </div>
  )
}

export default CourseDetailPage