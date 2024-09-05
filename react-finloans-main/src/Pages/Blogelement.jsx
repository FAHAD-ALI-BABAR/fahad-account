import React from 'react'
import Abouthero from '../Components/Abouthero/Abouthero'
import Singleblog from '../Components/singleblog/Singleblog'
import Footer from '../Components/Footer/Footer'

const Blogelement = () => {
  return (
    <>
    <Abouthero name={"Single blog"}/>
    <Singleblog/>
    <Footer/>
    </>
  )
}

export default Blogelement