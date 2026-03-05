import{ use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const CustomerTickets = ({ticketsPromise,onSelectTicket}) => {

    const ticketsData = use(ticketsPromise)
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <h2 className='text-2xl font-semibold'>Customer Tickets</h2>

                <div className='grid md:grid-cols-2 gap-4'>

                    {
                        ticketsData.map((t)=>(
                            <TicketCard key={t?.id} ticket={t} onSelect={onSelectTicket}/>
                        ))
                    
                        
                    }

                </div>


            </div>
        </div>
    );
};

export default CustomerTickets;