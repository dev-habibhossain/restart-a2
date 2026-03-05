import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TicketCard from "./components/TicketCard";
import TopSection from "./components/TopSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F5F5] min-h-[calc(100vh-100px)]">
        {/* Your body content goes here */}
        <div className="max-w-6xl mx-auto">
          <TopSection />
          {/* Ticket Card */}
          <TicketCard />
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default App;
