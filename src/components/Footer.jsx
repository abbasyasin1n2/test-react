import React from 'react'
import facebookLogo from '../assets/facebookLogo.png'
import twitterLogo from '../assets/twitterLogo.png'
import inLogo from '../assets/inLogo.png'
import mailLogo from '../assets/mailLogo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12 md:mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">CS — Ticket System</h3>
            <p className="text-gray-400 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
              Ipsum has been the industry's standard dummy text ever since the 1500's.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Products & Services</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <img src={twitterLogo} alt="Twitter" className="w-4 h-4" />
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={inLogo} alt="LinkedIn" className="w-4 h-4" />
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={facebookLogo} alt="Facebook" className="w-4 h-4" />
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={mailLogo} alt="Email" className="w-4 h-4" />
                <span>support@cs.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
