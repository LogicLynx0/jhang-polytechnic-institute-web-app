import { MapPin } from 'lucide-react'
import React from 'react'

const MapSection = () => {
  return (
    <div>
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
            {/* <div className="animate-fade-in">
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3 icon-bounce" />
                  <h3 className="text-xl font-semibold">Our Location</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Located in the heart of Jhang, our campus is easily accessible and equipped with modern facilities 
                  to provide the best learning environment for our students.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Main Campus, Jhang, Punjab, Pakistan</p>
                  <p><strong>Phone:</strong> +92-47-1234567</p>
                  <p><strong>Email:</strong> info@jhangpolytechnic.edu.pk</p>
                </div>
              </div>
            </div> */}
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center animate-fade-in card-hover">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4 icon-bounce" />
                <p>Interactive Map</p>
                <p className="text-sm">Visit us at our Jhang campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MapSection