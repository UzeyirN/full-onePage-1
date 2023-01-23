import React from 'react'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import Collaboration from '../components/Collaboration/Collaboration'
import InfoSection from '../components/InfoSection/InfoSection'
import InfraStructure from '../components/InfraStructor/InfraStructure'
import ProjectName from '../components/ProjectName/ProjectName'
import ProjectSec from '../components/ProjectsSec/ProjectSec'
import Slider from '../components/Slider/Slider'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <Slider />
      <InfoSection />
      <InfraStructure />
      <Collaboration />
      <ProjectSec />
      <ProjectName />
      <Testimonial />
      <BlogPosts />
    </>
  )
}

export default Home