import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Futures with 
              <span className="block gradient-text text-yellow-300">Skill-Based Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 zoom-in">
              Your pathway to professional success. Join thousands of students who have transformed their careers with our comprehensive technical and safety training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 hover-glow transition-all duration-300">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary hover-glow transition-all duration-300">
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection