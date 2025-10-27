import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Navigation({ onNavigate, currentPage = "home" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string, hash?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
    
    // Handle smooth scroll to hash if on same page
    if (hash && currentPage === page) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex-shrink-0 cursor-pointer"
          >
            <span className="text-2xl font-semibold text-[#364F6B]">ATS-Align</span>
          </button>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick("home", "#features")}
              className="text-gray-600 hover:text-[#364F6B] transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick("home", "#pricing")}
              className="text-gray-600 hover:text-[#364F6B] transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavClick("tool")}
              className="text-gray-600 hover:text-[#364F6B] transition-colors"
            >
              Free Tool
            </button>
            <Button variant="outline" className="border-[#364F6B] text-[#364F6B] hover:bg-[#364F6B] hover:text-white">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#364F6B] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            <button
              onClick={() => handleNavClick("home", "#features")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#364F6B] hover:bg-gray-50 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick("home", "#pricing")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#364F6B] hover:bg-gray-50 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick("tool")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-[#364F6B] hover:bg-gray-50 transition-colors"
            >
              Free Tool
            </button>
            <div className="px-4">
              <Button 
                variant="outline" 
                className="w-full border-[#364F6B] text-[#364F6B] hover:bg-[#364F6B] hover:text-white"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
