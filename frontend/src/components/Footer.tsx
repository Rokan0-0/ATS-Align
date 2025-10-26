export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 - Logo & Copyright */}
          <div className="space-y-4">
            <span className="text-2xl font-semibold text-[#364F6B]">ATS-Align</span>
            <p className="text-gray-500 text-sm">
              © 2025 All rights reserved.
            </p>
          </div>

          {/* Column 2 - Product */}
          <div className="space-y-4">
            <h4 className="text-[#1F2937]">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-[#364F6B] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-[#364F6B] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#login" className="text-gray-600 hover:text-[#364F6B] transition-colors">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="space-y-4">
            <h4 className="text-[#1F2937]">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#364F6B] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#364F6B] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-[#364F6B] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
