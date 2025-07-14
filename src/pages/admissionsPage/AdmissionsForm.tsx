'use client'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { getAvailableCourses } from '@/data/courses'
import { useToast } from '@/lib/hooks/useToast'
import React, { useState } from 'react'

const AdmissionsForm = () => {
    const availableCourses = getAvailableCourses();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    category: '',
    education: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCourseChange = (courseId: string) => {
    const course = availableCourses.find(c => c.id === courseId);
    setFormData(prev => ({
      ...prev,
      course: courseId,
      category: course?.category || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted Successfully!",
      description: "We will contact you within 24 hours to discuss your admission.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      category: '',
      education: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <div>
        <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>
                  Fill out this form to apply for admission. We'll contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="education">Educational Background *</Label>
                      <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="matriculation">Matriculation</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="course">Select Course *</Label>
                    <Select value={formData.course} onValueChange={handleCourseChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableCourses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.title} ({course.category}) - {course.duration}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Any additional information or questions?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
    </div>
  )
}

export default AdmissionsForm