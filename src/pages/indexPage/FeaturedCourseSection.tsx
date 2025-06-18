import { Button } from '@/components/ui/Button'
import CourseCard from '@/components/ui/CourseCard'
import { getFeaturedCourses } from '@/data/courses'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FeaturedCourseSection = () => {
    const featuredCourses = getFeaturedCourses();
  return (
    <div>
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most popular courses designed to meet industry demands and boost your career prospects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div key={course.id} className="animate-fade-in card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="hover-glow">
              <Link href="/courses">View All Courses <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedCourseSection