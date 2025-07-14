import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { CheckCircle } from 'lucide-react'
import React from 'react'

const RequiredDocuments = () => {
  return (
    <div>
        <Card className="mb-6">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Please prepare these documents for admission</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Educational certificates (matriculation/intermediate)',
                    'CNIC copy (front and back)',
                    'Recent passport-size photographs (2 copies)',
                    'Character certificate from previous institution',
                    'Medical certificate (if required for specific courses)'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
    </div>
  )
}

export default RequiredDocuments