import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";
import React from "react";

const ourAffiliationsArray = [
  {
    name: "PSDA",
    fullName: "Punjab Skill Development Authority",
    icon: "/images/psda.png",
  },
  {
    name: "TEVTA",
    fullName: "Technical Education & Vocational Training Authority",
    icon: "/images/logo.jpeg",
  },
  {
    name: "PSDF",
    fullName: "Punjab Skills Development Fund",
    icon: "/images/psdf.png",
  },
  {
    name: "NAVTCC",
    fullName: "National Vocational & Technical Training Commission",
    icon: "/images/navtcc.png",
  },
];

const OurAffiliations = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Affiliations
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud to be affiliated with leading educational authorities and
              organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourAffiliationsArray?.map((affiliate, index) => (
              <Card
                key={index}
                className="text-center card-hover hover:shadow-lg transition-all duration-300 animate-fade-in hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mx-auto mb-3 icon-bounce">
                    <Image
                      src={affiliate.icon}
                      alt={affiliate.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {affiliate.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{affiliate.fullName}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurAffiliations;
