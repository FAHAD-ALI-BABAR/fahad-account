import React from 'react'
import Offer from '../Components/Offer/Offer'
import Choose from '../Components/Choose/Choose'
import Work from '../Components/Work/Work'
import Accordian from '../Components/Accordian/Accordian'
import Testimonial from '../Components/Testimonial/Testimonial'
import Apply from '../Components/Apply/Apply'
import Footer from '../Components/Footer/Footer'
import Header from "../Components/Header/Header"

const Home = () => {
  return (
    <>
    <Header/>
     <Offer/>
     <Work/>
     <Choose/>
     <Testimonial/>
     <Accordian/>
     <Apply/>
     <Footer/>
    
    </>
  )
}

export default Home