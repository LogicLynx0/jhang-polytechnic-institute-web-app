import { mapLocation } from "@/lib/configrations";
import React from "react";

interface MapSectionProps {
  bgColor?: string; // optional prop, defaults to gray-50
}


const MapSection: React.FC<MapSectionProps> = ({ bgColor = "bg-gray-50" }) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Campus
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="animate-fade-in card-hover overflow-hidden rounded-lg shadow-lg h-[500px]">
          <iframe
            src={mapLocation}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Jhang Polytechnic Institute"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
