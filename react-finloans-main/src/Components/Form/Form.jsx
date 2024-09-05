import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Form = () => {
  return (
    <>
     <div className="flex justify-start flex-wrap ml-52 mt-16">
      <div className="w-3/4">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      </div>
      <div className="w-full lg:w-2/3">
        <form
          className="space-y-4"
          action="contact_process.php"
          method="post"
          id="contactForm"
          noValidate="novalidate"
        >
          <div className="w-full">
            <div className="mb-4">
              <textarea
                className="w-full p-4 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="message"
                id="message"
                cols="30"
                rows="9"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Enter Message')}
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="mb-4">
              <input
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="name"
                id="name"
                type="text"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Enter your name')}
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="mb-4">
              <input
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="email"
                id="email"
                type="email"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Enter email address')}
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4">
              <input
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="subject"
                id="subject"
                type="text"
                onFocus={(e) => (e.target.placeholder = '')}
                
                onBlur={(e) => (e.target.placeholder = 'Enter Subject')}
                placeholder="Enter Subject"
              />
            </div>
          </div>
          <div className="sldier_btn animate__animated animate__fadeInLeft animate__delay-2s ">
                <a href="#" className="color text-white px-6 py-3 rounded ">
                  Send Message
                </a>
              </div>
        </form>
      </div>
      <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
        <div className="flex items-start space-x-4 mb-6 flex-wrap">
          <span className="text-indigo-600">
            <i className="ti-home text-xl"></i>
          </span>
          <div className=" w-60 p-4">
      <div className="flex items-center space-x-2 flex-wrap">
        <IoHomeOutline className="text-gray-800 text-xl " />
        <h3 className="text-gray-800 font-semibold">Buttonwood, California.</h3>
      </div>
      <p className="text-gray-600 ml-7">Rosemead, CA 91770</p>
    </div>
        </div>
        <div className="flex items-start space-x-4 mb-6">
          <span className="text-indigo-600">
            <i className="ti-tablet text-xl"></i>
          </span>
          <div className=" w-60 p-4">
      <div className="flex items-center space-x-2">
         <BsPhone  className="text-gray-800 text-xl" />
        <h3 className="text-gray-800 font-semibold">00 (440) 9865 562</h3>
      </div>
      <p className="text-gray-600 ml-7">Mon to Fri 9am to 6pm</p>
    </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-indigo-600">
            <i className="ti-email text-xl"></i>
          </span>
          <div className=" w-60 p-4">
      <div className="flex items-center space-x-2">
        <HiOutlineMail 
        className="text-gray-800 text-xl" />
        <h3 className="text-gray-800 font-semibold">support@colorlib.com</h3>
      </div>
      <p className="text-gray-600 ml-7">Send us your query anytime!</p>
    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Form