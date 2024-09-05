import React from 'react'
import bannerr from "../../Images/aboutban.webp"
import logo0 from "../../Images/logo.webp"
const Heroelement = (props) => {
    const toggleMenu = () => {
        const menu = document.querySelector('.slicknav_nav');
        menu.classList.toggle('hidden');}
  return (
    <>
    <div className='overlay-about'></div>
    <div className="header-area border border-black h-[55vh] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bannerr})` }}>
      <div id="sticky-header" className="main-header-area">
        <div className="container-fluid">
          <div className="header-bottom-border pt-5">
            <div className="row flex justify-around">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo0} alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu hidden lg:flex">
                  <nav>
                    <ul id="navigation" className="flex justify-center space-x-4 pt-3 text-white">
                    <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/loan">Loan</NavLink></li>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li className="relative group">
                        <a href="#">Pages <i className="ti-angle-down"></i></a>
                        <ul className="submenu absolute left-0 hidden group-hover:block shadow-md">
                        <li><NavLink to="/applyloan">Apply loan</NavLink></li>
                          <li><a href="elements.html">Elements</a></li>
                        </ul>
                      </li>
                      <li className="relative group">
                        <a href="#">Blog <i className="ti-angle-down"></i></a>
                        <ul className="submenu absolute left-0 hidden group-hover:block shadow-md">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="single-blog.html">Single Blog</a></li>
                        </ul>
                      </li>
                      <li><a href="FAQ.html">FAQ</a></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 hidden lg:flex">
                <div className="appointment flex items-center justify-end">
                  <div className="phone-num hidden xl:block pt-3 text-white">
                    <a id="navigation" href="#" className="flex items-center ">
                      <i className="fa fa-phone "></i> +10 673 567 367
                    </a>
                  </div>
                  <div className="ml-4 pt-2">
                    <a href="apply.html" className="btnn py-3 px-6 rounded-lg transition duration-300 ease-in-out">
                      Apply for a Loan
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:hidden">
                <div className="mobile-menu">
                  <a href="#" className="slicknav_btn" onClick={toggleMenu}>
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </a>
                  <ul className="slicknav_nav hidden">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="Loan.html">Loan</a></li>
                    <li><a href="about.html">About</a></li>
                    <li className="relative">
                      <a href="#">Pages <i className="ti-angle-down"></i></a>
                      <ul className="submenu hidden">
                        <li><a href="apply.html">Apply Loan</a></li>
                        <li><a href="elements.html">Elements</a></li>
                      </ul>
                    </li>
                    <li className="relative">
                      <a href="#">Blog <i className="ti-angle-down"></i></a>
                      <ul className="submenu hidden">
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="single-blog.html">Single Blog</a></li>
                      </ul>
                    </li>
                    <li><a href="FAQ.html">FAQ</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-start mt-40 ml-52 ">
                <h1 className="text-white text-6xl font-bold"></h1>
              </div>
          </div>
        </div>
      </div>
      
      
    </div>
    </>
  )
}

export default Heroelement