import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Award, CheckCircle, FileText, Users } from 'lucide-react';
import React from 'react'

const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out the admission form with your details and course preference.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit required documents for verification and eligibility assessment.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Counseling Session',
      description: 'Attend a counseling session to finalize course selection and schedule.',
      icon: Users
    },
    {
      step: 4,
      title: 'Enrollment Confirmation',
      description: 'Complete fee payment and receive your enrollment confirmation.',
      icon: Award
    }
  ];

const AdmissionProcessSteps = () => {
  return (
    <div>
        <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">Admission Process</CardTitle>
                <CardDescription>
                  Follow these simple steps to complete your admission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {admissionSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
    </div>
  )
}

export default AdmissionProcessSteps