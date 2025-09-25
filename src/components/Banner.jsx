import React from 'react'
import vector1 from '../assets/vector1.png'

const Banner = ({ inProgressTickets, resolvedTickets }) => {
  const inProgressStyle = {
    background: `linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%), url(${vector1})`,
    backgroundBlendMode: 'overlay',
    backgroundSize: 'auto, 250px',
    backgroundPosition: 'center, bottom left',
    backgroundRepeat: 'no-repeat, no-repeat',
  }

  const resolvedStyle = {
    background: `linear-gradient(135deg, #059669 0%, #047857 100%), url(${vector1})`,
    backgroundBlendMode: 'overlay',
    backgroundSize: 'auto, 250px',
    backgroundPosition: 'center, bottom left',
    backgroundRepeat: 'no-repeat, no-repeat',
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        <div style={inProgressStyle} className="rounded-xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div 
            className="absolute bottom-0 right-0 w-[250px] h-[250px] opacity-80"
            style={{
              background: `url(${vector1})`,
              backgroundSize: '250px',
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
              transform: 'scaleX(-1)',
            }}
          />
          <h3 className="text-xl font-medium mb-4 relative z-10">In-Progress</h3>
          <p className="text-6xl font-bold relative z-10">{inProgressTickets.length}</p>
        </div>
        <div style={resolvedStyle} className="rounded-xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div 
            className="absolute bottom-0 right-0 w-[250px] h-[250px] opacity-80"
            style={{
              background: `url(${vector1})`,
              backgroundSize: '250px',
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
              transform: 'scaleX(-1)',
            }}
          />
          <h3 className="text-xl font-medium mb-4 relative z-10">Resolved</h3>
          <p className="text-6xl font-bold relative z-10">{resolvedTickets.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
