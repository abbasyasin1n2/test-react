import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">CS — Ticket System</h1>
        
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Changelog</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Download</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            + New Ticket
          </button>
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          <button className="bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 text-sm">
            + New Ticket
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-800 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2">Changelog</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2">Download</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
