import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Eye, Heart, Target } from 'lucide-react'
import React from 'react'

const AboutPageMissionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="animate-fade-in card-hover hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
            <CardHeader className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                To provide high-quality, industry-relevant technical education that empowers students with practical skills 
                and knowledge needed for successful careers in today's competitive job market.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in card-hover hover:shadow-2xl hover:border-primary/30 transition-all duration-500" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                To be the leading technical education institute in the region, recognized for excellence in teaching, 
                innovation, and producing skilled professionals who contribute to national development.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in card-hover hover:shadow-2xl hover:border-primary/30 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Excellence in education, integrity in all practices, innovation in teaching methods, and commitment to 
                student success and career development.
              </p>
            </CardContent>
          </Card>
        </div>
  )
}

export default AboutPageMissionSection