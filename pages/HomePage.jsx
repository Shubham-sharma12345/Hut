import Navbar from "../src/components/Navbar"
import HeroSection from "../src/components/HeroSection"

import Category from "../src/components/Category"
import RecentPropeties from "../src/components/RecentPropeties"
import ToolAndResourses from "../src/components/ToolAndResourses"
import RealStateAgents from "../src/components/RealStateAgents"
import Contact from "../src/components/Contact"
import Testimonial from "../src/components/Testimonial"

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Category/>
      <RecentPropeties/>
      <ToolAndResourses/>
      <RealStateAgents/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default HomePage
