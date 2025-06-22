import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { getCategoryColor } from '@/lib/heplers'
import { Separator } from '@radix-ui/react-select'
import { Badge } from 'lucide-react'
import React from 'react'

const QuickInfo = ({course}) => {
  return (
    <div>
        <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{course.category}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">{course.students}+</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium">
                      {course.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </CardContent>
              </Card>
    </div>
  )
}

export default QuickInfo