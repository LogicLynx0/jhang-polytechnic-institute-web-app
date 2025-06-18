
import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'

interface SocialMediaPropsType{
    title: string;
    description: string;
}

const SocialMediaSection = ({title, description}: SocialMediaPropsType) => {
  return (
    <div>
        <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          <SocialMediaIcons />
          
        </div>
      </section>
    </div>
  )
}

export default SocialMediaSection