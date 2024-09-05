import React, { useState } from 'react';
import "./Header.css";
import logo from "../../Images/logo.webp";
import bg from "../../Images/pexel.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.slicknav_nav');
    menu.classList.toggle('hidden');
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenubar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='overlay-head'></div>
      <div className='header-area border h-[95vh] border-black bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid">
            <div className="header-bottom-border pt-5">
              <div className="flex flex-wrap justify-between items-center">
                <div className=" lg:w-1/4 text-center lg:text-left">
                  <div className="logo">
                    <NavLink to="/">
                      <img src={logo} alt="Logo" className="mx-auto lg:mx-0" />
                    </NavLink>
                  </div>
                </div>
                <div className="hidden lg:flex space-x-4 text-white">
                  <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
                  <NavLink to="/loan" className="hover:text-gray-400">Loan</NavLink>
                  <NavLink to="/about" className="hover:text-gray-400">About</NavLink>
                  <div className="relative group">
                    <a href="#" className="hover:text-gray-400">Pages</a>
                    <ul className="submenu absolute left-0 hidden group-hover:block bg-white text-black p-2 shadow-md">
                      <li><NavLink to="/applyloan" className="block px-4 py-2 hover:bg-gray-100">Apply loan</NavLink></li>
                      <li><NavLink to="/element" className="block px-4 py-2 hover:bg-gray-100">Elements</NavLink></li>
                    </ul>
                  </div>
                  <div className="relative group">
                    <a href="#" className="hover:text-gray-400">Blog</a>
                    <ul className="submenu absolute left-0 hidden group-hover:block bg-white text-black p-2 shadow-md">
                      <li><NavLink to="/blogs" className="block px-4 py-2 hover:bg-gray-100">Blog</NavLink></li>
                      <li><NavLink to="/singleblog" className="block px-4 py-2 hover:bg-gray-100">Single blog</NavLink></li>
                    </ul>
                  </div>
                  <NavLink to="/FAQ" className="hover:text-gray-400">FAQ</NavLink>
                  <NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink>
                </div>
                <div className="col-xl-3 col-lg-3 hidden lg:flex">
                  <div className="appointment flex items-center justify-end">
                    <div className="phone-num hidden xl:block pt-3 text-white">
                      <a id="navigation" href="#" className="flex items-center">
                        <i className="fa fa-phone"></i> +10 673 567 367
                      </a>
                    </div>
                    <div className="ml-4 pt-2">
                      <a href="apply.html" className="btnn py-3 px-6 rounded-lg transition duration-300 ease-in-out">
                        Apply for a Loan
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden">
                  <button
                    onClick={toggleMenubar}
                    className="text-white focus:outline-none"
                  >
                    <span className="sr-only">Open main menu</span>
                    <div className="hamburger-icon">
                      <div className="w-6 h-0.5 bg-white mb-1"></div>
                      <div className="w-6 h-0.5 bg-white mb-1"></div>
                      <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 bg-gray-600 text-black p-4 `}>
                <NavLink to="/" className="block px-4 py-2 border-b hover:bg-gray-100" onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/loan" className="block px-4 py-2 border-b hover:bg-gray-100" onClick={toggleMenu}>Loan</NavLink>
                <NavLink to="/about" className="block px-4 py-2 border-b hover:bg-gray-100" onClick={toggleMenu}>About</NavLink>
                <div className="relative">
                  <button className="w-full text-left px-4 py-2 border-b hover:bg-gray-100">
                    Pages
                  </button>
                  <ul className="pl-4">
                    <li><NavLink to="/applyloan" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Apply loan</NavLink></li>
                    <li><NavLink to="/element" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Elements</NavLink></li>
                  </ul>
                </div>
                <div className="relative">
                  <button className="w-full text-left px-4 py-2 border-b hover:bg-gray-100">
                    Blog
                  </button>
                  <ul className="pl-4">
                    <li><NavLink to="/blogs" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Blog</NavLink></li>
                    <li><NavLink to="/singleblog" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Single blog</NavLink></li>
                  </ul>
                </div>
                <NavLink to="/FAQ" className="block px-4 py-2 border-b hover:bg-gray-100" onClick={toggleMenu}>FAQ</NavLink>
                <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Contact</NavLink>
              </div>
              </div>
            </div>
          
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-5/12 mt-16 lg:mt-56">
              <div className="slider_text">
                <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 animate__animated animate__fadeInRight animate__delay-1s">
                  Get Loan for your Business growth or startup
                </h3>
                <div className="sldier_btn animate__animated animate__fadeInLeft animate__delay-2s mt-6">
                  <a href="#" className="color text-white px-6 py-3 rounded">
                    How it Works
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 mt-16 lg:mt-40 h-72">
              <div className="payment_form bg-white p-8 shadow-lg rounded animate__animated animate__fadeInDown animate__delay-2s">
                <div className="info text-center mb-6">
                  <h4 className="text-xl font-semibold">How much do you want?</h4>
                  <p className="text-gray-600">We provide online instant cash loans with quick</p>
                </div>
                <div className="form">
                  <div className="mb-4">
                    <div className="single_input">
                      <select className="w-full px-4 py-2 border rounded">
                        <option value="">Amount</option>
                        <option value="10">$10</option>
                        <option value="40">$40</option>
                        <option value="50">$50</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="single_input">
                      <select className="w-full px-4 py-2 border rounded">
                        <option value="">Month</option>
                        <option value="3">3 Month</option>
                        <option value="6">6 Month</option>
                        <option value="9">9 Month</option>
                        <option value="12">12 Month</option>
                      </select>
                    </div>
                  </div>
                </div>
                <p className="mb-4">You have to pay: <span className="font-semibold">$0</span></p>
                <div className="submit_btn">
                  <button className="btnn px-6 py-3 rounded w-full">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
