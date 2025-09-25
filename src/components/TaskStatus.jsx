import React from 'react'

const TaskStatus = ({ 
  inProgressTickets, 
  resolvedTickets, 
  onCompleteTask, 
  onRemoveFromResolved 
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Task Status</h2>
      
      <div className="mb-6">
        {inProgressTickets.length > 0 ? (
          <div className="space-y-3">
            {inProgressTickets.map((ticket) => (
              <div key={ticket.id} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">{ticket.title}</h4>
                <button 
                  onClick={() => onCompleteTask(ticket)}
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Select a ticket to add to Task Status</p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">Resolved Task</h3>
        {resolvedTickets.length > 0 ? (
          <div className="space-y-3">
            {resolvedTickets.map((ticket) => (
              <div key={ticket.id} className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{ticket.title}</h4>
                  <span className="text-green-600 text-sm">✓ Completed</span>
                </div>
                <button 
                  onClick={() => onRemoveFromResolved(ticket)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Click to remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  )
}

export default TaskStatus
