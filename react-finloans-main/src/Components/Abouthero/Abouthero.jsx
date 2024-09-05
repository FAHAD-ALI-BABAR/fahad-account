import React, { useState } from 'react';
import banner from "../../Images/aboutban.webp";
import logo1 from "../../Images/logo.webp";
import { NavLink } from "react-router-dom";

const Abouthero = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='overlay-about'></div>
      <div
        className="header-area h-[55vh] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="main-header-area">
          <div className="container mx-auto">
            <div className="header-bottom-border pt-5">
              <div className="flex justify-around items-center">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo1} alt="Logo" />
                  </a>
                </div>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                  <button
                    onClick={toggleMenu}
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
                <NavLink to="/" className="block px-4 py-1 border-b hover:bg-gray-100" onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/loan" className="block px-4 py-1 border-b hover:bg-gray-100" onClick={toggleMenu}>Loan</NavLink>
                <NavLink to="/about" className="block px-4 py-1 border-b hover:bg-gray-100" onClick={toggleMenu}>About</NavLink>
                <div className="relative">
                  <button className="w-full text-left px-4 py-2 border-b hover:bg-gray-100">
                    Pages
                  </button>
                  <ul className="pl-4">
                    <li><NavLink to="/applyloan" className="block px-4 py-1 hover:bg-gray-100" onClick={toggleMenu}>Apply loan</NavLink></li>
                    <li><NavLink to="/element" className="block px-4 py-1 hover:bg-gray-100" onClick={toggleMenu}>Elements</NavLink></li>
                  </ul>
                </div>
                <div className="relative">
                  <button className="w-full text-left px-4 py-1 border-b hover:bg-gray-100">
                    Blog
                  </button>
                  <ul className="pl-4">
                    <li><NavLink to="/blogs" className="block px-4 py-1 hover:bg-gray-100" onClick={toggleMenu}>Blog</NavLink></li>
                    <li><NavLink to="/singleblog" className="block px-4 py-1 hover:bg-gray-100" onClick={toggleMenu}>Single blog</NavLink></li>
                  </ul>
                </div>
                <NavLink to="/FAQ" className="block px-4 py-1 border-b hover:bg-gray-100" onClick={toggleMenu}>FAQ</NavLink>
                <NavLink to="/contact" className="block px-4 py-1 hover:bg-gray-100" onClick={toggleMenu}>Contact</NavLink>
              </div>

              {/* Hero Section */}
              <div className="text-start mt-40 ml-5 lg:ml-52">
                <h1 className="text-white text-4xl lg:text-6xl font-bold">{props.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouthero;
