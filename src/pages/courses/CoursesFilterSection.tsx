'use client'
import { Button } from '@/components/ui/Button'
import CourseCard from '@/components/ui/CourseCard'
import { Input } from '@/components/ui/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { courses } from '@/data/courses'
import { Badge, Filter, Search, X } from 'lucide-react'
import React, { useMemo, useState } from 'react'

const CoursesFilterSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('title');
  const [showUnavailable, setShowUnavailable] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter;
      const matchesAvailability = showUnavailable || course.available;
      
      return matchesSearch && matchesCategory && matchesAvailability;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'students':
          return b.students - a.students;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, categoryFilter, sortBy, showUnavailable]);

  const clearFilters = () => {
    setSearchTerm('');
    setCategoryFilter('All');
    setSortBy('title');
    setShowUnavailable(false);
  };

  return (
    <div>
    <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Tech">Tech Courses</SelectItem>
                  <SelectItem value="Safety">Safety Courses</SelectItem>
                  <SelectItem value="Government">Government Courses</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Sort by Title</SelectItem>
                  <SelectItem value="duration">Sort by Duration</SelectItem>
                  <SelectItem value="students">Sort by Popularity</SelectItem>
                  <SelectItem value="category">Sort by Category</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowUnavailable(!showUnavailable)}
                className={showUnavailable ? 'bg-primary text-white' : ''}
              >
                <Filter className="h-4 w-4 mr-2" />
                Show Unavailable
              </Button>
              
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1">
                Search: {searchTerm}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm('')} />
              </Badge>
            )}
            {categoryFilter !== 'All' && (
              <Badge variant="secondary" className="gap-1">
                Category: {categoryFilter}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setCategoryFilter('All')} />
              </Badge>
            )}
            {showUnavailable && (
              <Badge variant="secondary" className="gap-1">
                Including Unavailable
                <X className="h-3 w-3 cursor-pointer" onClick={() => setShowUnavailable(false)} />
              </Badge>
            )}
          </div>
        </div>
        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        {filteredAndSortedCourses.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button onClick={clearFilters}>Clear All Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        )}

        </div>
        
  )
}

export default CoursesFilterSection