import React from 'react'
import "./Footer.css"
import footerlogo from "../../Images/footerlogo.webp"
const Footer = () => {
  return (
    <>
     <footer className="footer bg-white text-white">
      <div className="footer_top py-10 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Footer Logo & Contact Info */}
            <div className="footer_widget">
              <div className="footer_logo mb-4">
                <a href="#">
                  <img src={footerlogo} alt="Footer Logo" className="w-32 " />
                </a>
              </div>
              <p>
                finloan@support.com <br />
                +10 873 672 6782 <br />
                600/D, Green road, NewYork
              </p>
              <div className="social_links mt-4">
                <ul className="flex space-x-4">
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="footer_widget">
              <h3 className="footer_title text-lg font-semibold mb-4 text-black">Services</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-400">SEO/SEM</a></li>
                <li><a href="#" className="hover:text-gray-400">Web design</a></li>
                <li><a href="#" className="hover:text-gray-400">Ecommerce</a></li>
                <li><a href="#" className="hover:text-gray-400">Digital marketing</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="footer_widget">
              <h3 className="footer_title text-lg font-semibold mb-4 text-black">Useful Links</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-400">About</a></li>
                <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                <li><a href="#" className="hover:text-gray-400">Support</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="footer_widget">
              <h3 className="footer_title text-lg font-semibold mb-4 text-black">Subscribe</h3>
              <form className="newsletter_form flex">
                <input
                  type="text"
                  placeholder="Enter your mail"
                  className="p-2 rounded-l bg-white  w-full"
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
                  Subscribe
                </button>
              </form>
              <p className="newsletter_text mt-4 text-sm">Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text py-4 bg-white mt-16">
        <div className="container mx-auto">
          <div className="footer_border mb-4 border-t border-gray-700"></div>
          <div className="text-center">
            <p className="copy_right">
              Copyright © {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer