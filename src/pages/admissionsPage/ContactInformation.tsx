import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import React from 'react'

const ContactInformation = () => {
  return (
    <div>
        <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Contact our admission office for assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Phone:</strong> +92-47-1234567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Email:</strong> admissions@jhangpolytechnic.edu.pk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm"><strong>Address:</strong> Jhang, Punjab, Pakistan</span>
                </div>
              </CardContent>
            </Card>
    </div>
  )
}

export default ContactInformation