import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import TicketCard from './components/TicketCard/TicketCard'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="grid md:grid-cols-2 gap-4">
  <TicketCard />
  <TicketCard />
  <TicketCard />
  <TicketCard />
</div>
    </>
  )
}

export default App
