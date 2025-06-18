import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Award, Flag, GraduationCap, Target, Users } from 'lucide-react'
import React from 'react'

const timeline = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'Jhang Polytechnic Institute was established with a vision to provide quality technical education.',
      icon: GraduationCap
    },
    {
      year: '1998-2019',
      title: 'DAE Programs Era',
      description: 'Offered comprehensive Diploma of Associate Engineering programs in various disciplines.',
      icon: Award
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Introduced specialized technical and safety courses to meet industry demands.',
      icon: Target
    },
    {
      year: '2020-Present',
      title: 'Modern Focus',
      description: 'Shifted focus to industry-relevant courses including tech and safety certifications.',
      icon: Users
    }
  ];

const AboutPageTimeline = () => {
  return (
    <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              From our humble beginnings to becoming a leading technical education institute
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-primary"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center animate-fade-in ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="hover-scale transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <p className="text-sm text-primary font-semibold">{item.year}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center flag icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-white border-4 border-primary rounded-full p-3 shadow-lg animate-pulse">
                      <Flag className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default AboutPageTimeline