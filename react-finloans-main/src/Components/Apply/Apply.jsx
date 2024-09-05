import React from 'react';
import "./Apply.css";
import apply from "../../Images/apply.webp";

const Apply = () => {
  return (
    <>
      <section className='apply-sec'>
        <div className='apply-info'>
          <h2>Apply for a loan for your startup, education, or company</h2>
        </div>
        <div className="slider-btn animate__animated animate__fadeInLeft animate__delay-2s mt-6">
          <a href="#" className="apply-btn text-white px-6 py-3 rounded">
            How it Works
          </a>
        </div>
      </section>
    </>
  );
}

export default Apply;
