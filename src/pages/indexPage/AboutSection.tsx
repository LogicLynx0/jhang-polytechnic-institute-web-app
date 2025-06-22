import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Jhang Polytechnic Institute
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established in 1998, Jhang Polytechnic Institute has been at the
                forefront of technical education in Punjab. We began our journey
                with DAE programs and have evolved to become a leading
                institution for modern technical and safety training.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Today, we focus on industry-relevant courses that prepare
                students for the digital economy and workplace safety standards.
                Our commitment to quality education and practical training has
                made us a trusted name in skill development.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover-glow"
              >
                <Link href="/about">
                  Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in card-hover">
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg h-80 overflow-hidden">
                <Image
                  src="/images/aboutInstitute.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
