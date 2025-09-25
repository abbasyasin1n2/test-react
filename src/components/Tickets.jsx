import React from 'react'
import TicketCard from './TicketCard'
import TaskStatus from './TaskStatus'

const Tickets = ({ 
  tickets, 
  inProgressTickets, 
  resolvedTickets, 
  onSelectTicket, 
  onCompleteTask, 
  onRemoveFromResolved 
}) => {
  const openOrInProgressTickets = tickets.filter(
    ticket => ticket.status === 'Open' || ticket.status === 'In-Progress'
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {openOrInProgressTickets.map((ticket) => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              onClick={() => onSelectTicket(ticket)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 lg:mt-0">
        <TaskStatus 
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          onCompleteTask={onCompleteTask}
          onRemoveFromResolved={onRemoveFromResolved}
        />
      </div>
    </div>
  )
}

export default Tickets
