import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center space-x-8">
            {[
              { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-600 hover:bg-blue-50' },
              { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-600 hover:bg-pink-50' },
              { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-700 hover:bg-blue-50' },
              { icon: Twitter, name: 'Twitter', color: 'hover:text-sky-500 hover:bg-sky-50' }
            ].map((social, index) => (
              <Link
                key={index}
                href="#"
                className={`p-4 rounded-full border-2 border-gray-200 text-gray-600 transition-all duration-300 animate-fade-in icon-bounce ${social.color} hover:scale-110 hover:shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.name}
              >
                <social.icon className="h-8 w-8" />
              </Link>
            ))}
          </div>
  )
}

export default SocialMediaIcons