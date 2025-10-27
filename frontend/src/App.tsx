import { Navigation } from "./components/Navigation";
import { LandingPage } from "./components/LandingPage";
import { FreeToolPage } from "./components/FreeToolPage";
import { Footer } from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === "home" && <LandingPage onNavigateToTool={() => handleNavigate("tool")} />}
      {currentPage === "tool" && <FreeToolPage />}
      
      <Footer />
    </div>
  );
}
