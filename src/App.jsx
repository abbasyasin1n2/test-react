import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Tickets from './components/Tickets'
import Footer from './components/Footer'

function App() {
  const [tickets, setTickets] = useState([])
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  useEffect(() => {
    fetch('/tickets.json')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error('Error loading tickets:', error))
  }, [])

  const handleSelectTicket = (ticket) => {
    if (ticket.status === 'Open') {
      const isAlreadyInProgress = inProgressTickets.find(t => t.id === ticket.id)
      
      if (!isAlreadyInProgress) {
        setInProgressTickets([...inProgressTickets, { ...ticket, status: 'In-Progress' }])
        
        const updatedTickets = tickets.map(t => 
          t.id === ticket.id ? { ...t, status: 'In-Progress' } : t
        )
        setTickets(updatedTickets)
        
        toast.success('Ticket moved to In-Progress!')
      }
    }
  }

  const handleCompleteTask = (ticketToComplete) => {
    if (ticketToComplete) {
      const updatedInProgressTickets = inProgressTickets.filter(t => t.id !== ticketToComplete.id)
      setInProgressTickets(updatedInProgressTickets)
      
      setResolvedTickets([...resolvedTickets, { ...ticketToComplete, status: 'Resolved' }])
      
      const updatedTickets = tickets.filter(t => t.id !== ticketToComplete.id)
      setTickets(updatedTickets)
      
      toast.success('Ticket has been resolved!')
    }
  }

  const handleRemoveFromResolved = (ticket) => {
    const updatedResolvedTickets = resolvedTickets.filter(t => t.id !== ticket.id)
    setResolvedTickets(updatedResolvedTickets)
    
    const reopenedTicket = { ...ticket, status: 'Open' }
    setTickets([...tickets, reopenedTicket])
    
    toast.info('Ticket has been reopened.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner inProgressTickets={inProgressTickets} resolvedTickets={resolvedTickets} />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Tickets 
          tickets={tickets}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          onSelectTicket={handleSelectTicket}
          onCompleteTask={handleCompleteTask}
          onRemoveFromResolved={handleRemoveFromResolved}
        />
      </div>
      <Footer />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
