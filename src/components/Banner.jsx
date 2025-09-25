import React from 'react'

const Banner = ({ inProgressTickets, resolvedTickets }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg p-6 md:p-8 text-white">
          <h3 className="text-base md:text-lg font-medium mb-2">In-Progress</h3>
          <p className="text-3xl md:text-4xl font-bold">{inProgressTickets.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-lg p-6 md:p-8 text-white">
          <h3 className="text-base md:text-lg font-medium mb-2">Resolved</h3>
          <p className="text-3xl md:text-4xl font-bold">{resolvedTickets.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
