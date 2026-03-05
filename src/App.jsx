import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TicketCard from "./components/TicketCard";
import TopSection from "./components/TopSection";

function App() {
  const [tickets, setTickets] = useState([]);

  // Fetch the JSON once when the App loads
  useEffect(() => {
    fetch("/ticket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error fetching tickets:", err));
  }, []);

  // Function to handle resolving a ticket lively
  const handleResolve = (id) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "Resolved" } : t)),
    );
  };

  // Derived data for components
  const resolvedCount = tickets.filter((t) => t.status === "Resolved").length;
  const inProgressCount = tickets.filter((t) => t.status !== "Resolved").length;

  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5F5] min-h-[calc(100vh-100px)]">
        <div className="max-w-6xl mx-auto">
          {/* You MUST pass the variables here to make it lively */}
          <TopSection
            resolvedCount={
              tickets.filter((t) => t.status === "Resolved").length
            }
            inProgressCount={
              tickets.filter((t) => t.status !== "Resolved").length
            }
          />

          <TicketCard tickets={tickets} onResolve={handleResolve} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
