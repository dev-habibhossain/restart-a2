import React, { useState } from "react"; // Added React import
import AllCards from "./AllCards";
import TaskStatus from "./TaskStatus";

export default function TicketCard({ tickets, onResolve }) {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const inProgressTickets = tickets.filter((t) => t.status !== "Resolved");
  const resolvedTickets = tickets.filter((t) => t.status === "Resolved");

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <AllCards tickets={inProgressTickets} onSelect={setSelectedTicket} />
        </div>
        <div className="md:col-span-1">
          <TaskStatus
            selectedTicket={selectedTicket}
            onResolve={(id) => {
              onResolve(id);
              setSelectedTicket(null);
            }}
            stats={{
              inProgress: inProgressTickets.length,
              resolved: resolvedTickets.length,
            }}
            resolvedTickets={resolvedTickets}
          />
        </div>
      </div>
    </div>
  );
}