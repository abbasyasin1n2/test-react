import React from 'react'

const TicketCard = ({ ticket, onClick }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High Priority': 
        return 'text-red-600 bg-red-50'
      case 'Medium Priority': 
        return 'text-yellow-600 bg-yellow-50'
      case 'Low Priority': 
        return 'text-blue-600 bg-blue-50'
      default: 
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': 
        return 'bg-green-500'
      case 'In-Progress': 
        return 'bg-yellow-500'
      case 'Resolved': 
        return 'bg-blue-500'
      default: 
        return 'bg-gray-500'
    }
  }

  const handleClick = () => {
    if (ticket.status === 'Open' && onClick) {
      onClick()
    }
  }

  return (
    <div 
      onClick={handleClick}
      className={`bg-white rounded-lg border border-gray-200 p-4 transition-shadow ${
        ticket.status === 'Open' ? 'cursor-pointer hover:shadow-md' : 'cursor-default'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-medium text-gray-900 text-sm">{ticket.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(ticket.status)}`}>
          {ticket.status === 'In-Progress' ? '● In-Progress' : ticket.status}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {ticket.description}
      </p>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">{ticket.id}</span>
          <span className={`px-2 py-1 rounded ${getPriorityColor(ticket.priority)}`}>
            {ticket.priority}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <span>{ticket.customer}</span>
          <span>📅 {ticket.createdAt}</span>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
