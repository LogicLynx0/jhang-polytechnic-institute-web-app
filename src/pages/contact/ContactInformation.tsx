import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactInformation = () => {
  return (
    <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="card-hover hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Multiple ways to reach us. We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Address</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Main Campus, Jhang, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Phone</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">+92-47-1234567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Email</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">info@jhangpolytechnic.edu.pk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group card-hover p-3 rounded-lg transition-all duration-300 hover:bg-primary/5">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-primary icon-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">Office Hours</h3>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="card-hover hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-16 w-16 mx-auto mb-4 icon-bounce" />
                    <p className="text-lg font-medium">Campus Location</p>
                    <p className="text-sm">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
  )
}

export default ContactInformation