import React from 'react'
import "./Offer.css"
import loan from "../../Images/real-estate.png"
import car from "../../Images/new-car.png"
import education from "../../Images/scholarship.png"
const Offer = () => {
  return (
    <>
     <div className="service_area">
        <div className='line'></div>
        <div className='offer-text'>
            <h2>What we offer for you</h2>
            <p>We provide online instant cash loans with quick approval that suit your term</p>
        </div>
        <div className='cards'>
            <div className='home'>
                <div className='home-head'>
                   <img src={loan} alt='home-loan' className='loan-icon' /> 
                   <h5>Home Loan</h5>
                   <h2>$3000-$10000</h2>
                </div>
                <div className='home-info'> 
                    <ul>
                        <li>Borrow - $350 over 3 months</li>
                        <li>Interest rate - 292% pa fixed</li>
                        <li>Total amount payable - $525.12</li>
                        <li>Representative - 1,286% APR</li>
                    </ul>
                </div>
                <div className="ml-20 pt-2 mt-6 ">
  <a
    href="apply.html"
    className="btnn   py-3 px-6 rounded-lg transition duration-300 ease-in-out"
  >
    Apply for a Loan
  </a>
</div>
            </div>
            <div className='car'>
            <div className='home-head'>
                   <img src={car} alt='home-loan' className='loan-icon' /> 
                   <h5>Car Loan</h5>
                   <h2>$3000-$10000</h2>
                </div>
                <div className='home-info'> 
                    <ul>
                        <li>Borrow - $350 over 3 months</li>
                        <li>Interest rate - 292% pa fixed</li>
                        <li>Total amount payable - $525.12</li>
                        <li>Representative - 1,286% APR</li>
                    </ul>
                </div>
                <div className="ml-20 pt-2 mt-6 ">
  <a
    href="apply.html"
    className="btnn   py-3 px-6 rounded-lg transition duration-300 ease-in-out"
  >
    Apply for a Loan
  </a>
</div>
            
            </div>
            <div className='education'>
            <div className='home-head'>
                   <img src={education} alt='home-loan' className='loan-icon' /> 
                   <h5>Home Loan</h5>
                   <h2>$3000-$10000</h2>
                </div>
                <div className='home-info'> 
                    <ul>
                        <li>Borrow - $350 over 3 months</li>
                        <li>Interest rate - 292% pa fixed</li>
                        <li>Total amount payable - $525.12</li>
                        <li>Representative - 1,286% APR</li>
                    </ul>
                </div>
                <div className="ml-20 pt-2 mt-6 ">
  <a
    href="apply.html"
    className="btnn   py-3 px-6 rounded-lg transition duration-300 ease-in-out"
  >
    Apply for a Loan
  </a>
</div>
            </div>
        </div>
       </div>
   

    </>
  )
}

export default Offer