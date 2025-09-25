import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const buttonStyle = {
    backgroundImage: 'linear-gradient(to right, #6D28D9, #4C1D95)',
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">CS — Ticket System</h1>
          </div>
          
          {/* Right Side: Navigation Links and Button for Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">FAQ</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Changelog</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Blog</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Download</a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
            <button
              style={buttonStyle}
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-white hover:opacity-90"
            >
              + New Ticket
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">FAQ</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Changelog</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Download</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <button
                style={buttonStyle}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-white hover:opacity-90"
              >
                + New Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar