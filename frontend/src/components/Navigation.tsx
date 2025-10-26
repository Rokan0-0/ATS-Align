import { Button } from "./ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-semibold text-[#364F6B]">ATS-Align</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#364F6B] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#364F6B] transition-colors">
              Pricing
            </a>
            <a href="#blog" className="text-gray-600 hover:text-[#364F6B] transition-colors">
              Blog
            </a>
            <Button variant="outline" className="border-[#364F6B] text-[#364F6B] hover:bg-[#364F6B] hover:text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
