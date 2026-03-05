import { SlCalender } from "react-icons/sl";

export default function AllCards({ tickets, onSelect }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Customer Tickets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tickets.length > 0 ? (
          tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => onSelect(ticket)}
              className="cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all bg-white p-4 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between"
            >
              {/* Title & Status */}
              <div className="flex justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800 truncate pr-2">
                  {ticket.title}
                </h2>
                <div className={`rounded-xl px-2 font-semibold flex items-center gap-1 text-sm ${
                    ticket.status === "Open" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                }`}>
                  <span className={`rounded-full w-2 h-2 ${ticket.status === "Open" ? "bg-green-600" : "bg-amber-600"}`}></span>
                  {ticket.status}
                </div>
              </div>

              <p className="text-gray-600 text-sm truncate mb-4">
                {ticket.description}
              </p>

              <div className="flex justify-between items-center text-xs text-gray-700">
                <div className="flex gap-2">
                  <p className="text-gray-400 font-medium">#{ticket.id + 1000}</p>
                  <p className={`uppercase font-medium ${
                    ticket.priority === "High" ? "text-red-500" : 
                    ticket.priority === "Medium" ? "text-amber-500" : "text-green-500"
                  }`}>
                    {ticket.priority} PRIORITY
                  </p>
                </div>
                <div className="flex gap-3">
                  <p className="text-gray-500 font-semibold">{ticket.customer}</p>
                  <p className="text-gray-500 font-semibold flex items-center gap-1">
                    <SlCalender /> {ticket.createdAt?.split('T')[0]}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">No active tickets.</p>
        )}
      </div>
    </div>
  );
}