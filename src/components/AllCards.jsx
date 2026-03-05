import React, { useEffect, useState } from 'react';

export default function AllCards() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch data from the public ticket.json file
    fetch('/ticket.json') // This assumes ticket.json is in the public folder
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error('Error loading tickets:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Ticket List</h1>

      {/* Grid with 2 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Render each ticket */}
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-340 h-35.75 flex flex-col justify-between"
            >
              {/* Title */}
              <div className='flex justify-between'>
                <h2 className="text-xl font-semibold text-gray-800 truncate">{ticket.title}</h2>
                {
                    ticket.status == 'Open'? <div className='rounded-xl border-none bg-green-100 text-green-600 text-md px-2 font-semibold flex items-center gap-1'><span className='rounded-full w-3 h-3 border  bg-green-600'></span> Open</div>:<div className='rounded-xl border-none bg-amber-100 text-amber-600 text-sm px-2 font-semibold flex items-center gap-1'><span className='rounded-full w-3 h-3 border  bg-amber-600'></span>In-progress</div>
                }
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm truncate">{ticket.description}</p>

              {/* Footer with Flexbox for the details */}
              <div className="flex justify-between items-center text-xs text-gray-700 mt-2">
                {/* Customer */}
                <p><strong>Customer:</strong> {ticket.customer}</p>

                {/* Priority with red text */}
                <p className="text-red-500"><strong>Priority:</strong> {ticket.priority}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading tickets...</p>
        )}
      </div>
    </div>
  );
}