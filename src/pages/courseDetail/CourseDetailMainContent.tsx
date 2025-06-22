import React from 'react'
import MainContent from './MainContent'
import SideBar from './SideBar'

const CourseDetailMainContent = ({course}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <MainContent course={course}/>
        <SideBar course={course} />
    </div>
  )
}

export default CourseDetailMainContent