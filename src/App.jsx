import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import TicketCard from './components/TicketCard/TicketCard'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import TaskStatus from './components/TaskStatus/TaskStatus'
import { toast, ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'

const fetchTickets= async()=>{
  const res = await fetch("/tickets.json")
  return res.json()

}


function App() {

  const ticketsPromise = fetchTickets();

  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState(0);

  const handleAddTask = (ticket) => {

    const alreadyAdded = tasks.find((t) => t.id === ticket.id);

    if (alreadyAdded) {
      toast.error("Ticket already added!");
      return;
    }

    setTasks([...tasks, ticket]);
    toast.success("Ticket added to Task Status!");
  };

   const handleCompleteTask = (id) => {

    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
    setResolved(resolved + 1); 
    toast("Task completed successfully");
  };

  return (
    <>
      <Navbar newAdd={()=>toast("Created New Ticket")}></Navbar>
      <Banner progressCount={tasks.length} resolvedCount={resolved}></Banner>

      <div className="w-11/12 mx-auto mt-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

          <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
        <CustomerTickets ticketsPromise={ticketsPromise} onSelectTicket={handleAddTask}></CustomerTickets>

      </Suspense>

        <TaskStatus tasks={tasks} onComplete={handleCompleteTask}></TaskStatus>
        </div>

      </div>
      <Footer></Footer>
      <ToastContainer />

    </>
  )
}

export default App
