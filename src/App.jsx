import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TicketCard from "./components/TicketCard";
import TopSection from "./components/TopSection";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const savedTickets = localStorage.getItem("my_tickets");
    
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    } else {
      fetch("/ticket.json")
        .then((res) => res.json())
        .then((data) => {
          setTickets(data);
          localStorage.setItem("my_tickets", JSON.stringify(data));
        })
        .catch((err) => console.error("Error fetching tickets:", err));
    }
  }, []);

  const handleResolve = (id) => {
    const updated = tickets.map((t) => 
      t.id === id ? { ...t, status: "Resolved" } : t
    );
    setTickets(updated);
    localStorage.setItem("my_tickets", JSON.stringify(updated));
  };

  const resCount = tickets.filter((t) => t.status === "Resolved").length;
  const inProgCount = tickets.filter((t) => t.status !== "Resolved").length;

  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5F5] min-h-[calc(100vh-100px)] pb-10">
        <div className="max-w-6xl mx-auto px-4">
          
          <TopSection 
            resolvedCount={resCount} 
            inProgressCount={inProgCount} 
          />

          <TicketCard 
            tickets={tickets} 
            onResolve={handleResolve} 
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;