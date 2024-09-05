import React from 'react'
import Abouthero from '../Components/Abouthero/Abouthero'
import Work from '../Components/Work/Work'
import Accordian from '../Components/Accordian/Accordian'
import Testimonial from '../Components/Testimonial/Testimonial'
import Choose from '../Components/Choose/Choose'
import Footer from '../Components/Footer/Footer'

const About = () => {
  return (
    <>
    <Abouthero name={"About"}/>
    <Choose/>
    <Work/>
    <Accordian/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default About