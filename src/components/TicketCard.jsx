import { useEffect, useState } from "react";
import AllCards from "./AllCards";
import TaskStatus from "./TaskStatus";

export default function TicketCard() {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    fetch("/ticket.json")
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error("Error loading tickets:", error));
  }, []);

  const handleResolve = (id) => {
    // 1. Update the ticket status in the list
    const updatedTickets = tickets.map((t) =>
      t.id === id ? { ...t, status: "Resolved" } : t
    );
    setTickets(updatedTickets);
    
    // 2. Clear selection (removes it from Task Status view as per requirement)
    setSelectedTicket(null);
  };

  // Filter lists for counts/display
  const inProgressTickets = tickets.filter(t => t.status !== "Resolved");
  const resolvedTickets = tickets.filter(t => t.status === "Resolved");

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {/* Only show tickets that are NOT resolved in the main list */}
          <AllCards 
            tickets={inProgressTickets} 
            onSelect={setSelectedTicket} 
          />
        </div>
        <div className="md:col-span-1">
          <TaskStatus 
            selectedTicket={selectedTicket} 
            onResolve={handleResolve}
            stats={{
                inProgress: inProgressTickets.length,
                resolved: resolvedTickets.length
            }}
          />
        </div>
      </div>
    </div>
  );
}