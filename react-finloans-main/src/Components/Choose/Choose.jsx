import React from 'react'
import "./Choose.css"
import choose from "../../Images/choose.webp"
const Choose = () => {
  return (
    <>
    <section className='choose-us'>
        <div className='choose-pic'>
            <img src={choose} alt='choose-us'/>
        </div>
        <div className='choose-text'>
            <h2>Why Choose Us?</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable.</p>
            <ul>
                <li>Loans with quick approval.
                </li>
                <li>Customize a loan based on the amount.</li>
                <li>Good credit profile and you have built your loan.</li>
                <li>We provide online instant cash loans.</li>
            </ul>
            <div className="sldier_btn animate__animated animate__fadeInLeft animate__delay-2s mt-16 ml-5">
              <a href="#" className="color text-white px-6 py-3 rounded ">
                How it Works
              </a>
            </div>

        </div>
    </section>
    </>
  )
}

export default Choose