'use client'
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Send } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  return (
    <div className="animate-fade-in">
      <Card className="card-hover hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-2xl">Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="hover-glow focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="hover-glow focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className="hover-glow focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Inquiry Type
                </label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) =>
                    handleInputChange("inquiryType", value)
                  }
                >
                  <SelectTrigger className="hover-glow focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="courses">Course Information</SelectItem>
                    <SelectItem value="admissions">Admissions</SelectItem>
                    <SelectItem value="campus-tour">Campus Tour</SelectItem>
                    <SelectItem value="financial">
                      Financial Assistance
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <Textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us more about your inquiry..."
                className="hover-glow focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full hover-glow transition-all duration-300"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
