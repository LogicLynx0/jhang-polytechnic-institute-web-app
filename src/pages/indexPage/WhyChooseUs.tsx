import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Award, CheckCircle, GraduationCap, Users } from "lucide-react";
import React from "react";

const whyChooseUsArray = [
  {
    title: "Experienced Faculty",
    description:
      "Learn from industry professionals with years of practical experience.",
    icon: Users,
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art labs and equipment for hands-on learning.",
    icon: Award,
  },
  {
    title: "Industry Partnerships",
    description:
      "Strong connections with leading companies for internships and placements.",
    icon: CheckCircle,
  },
  {
    title: "Flexible Learning",
    description: "Multiple batches and flexible schedules to suit your needs.",
    icon: GraduationCap,
  },
  {
    title: "Career Support",
    description: "Comprehensive job placement assistance and career guidance.",
    icon: Users,
  },
  {
    title: "Affordable Fees",
    description:
      "Quality education at competitive prices with installment options.",
    icon: Award,
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsArray.map((feature, index) => (
              <Card
                key={index}
                className="text-center animate-fade-in card-hover transition-all duration-300 hover:shadow-xl hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 icon-bounce">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
