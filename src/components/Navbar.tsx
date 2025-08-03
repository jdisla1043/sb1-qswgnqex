import React, { useState } from 'react';
import { Menu, X, Phone, SprayCan as Spray, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 text-blue-900">
            <div className="flex items-center">
              <Spray className="w-8 h-8" />
              <Shield className="w-8 h-8 -ml-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none">Florida</span>
              <span className="text-sm leading-none">Commercial Cleaning</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
            <div className="relative group">
              <Link to="/services" className="px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors">
                Services
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services/mold-remediation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Mold Remediation
                </Link>
                <Link to="/services/post-construction" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Post Construction
                </Link>
                <Link to="/services/commercial-cleaning" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Commercial Cleaning
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link to="/foodborne" className="px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors">
                Food Safety
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/foodborne/ecoli" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  E. coli Response
                </Link>
                <Link to="/foodborne/listeria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Listeria Response
                </Link>
                <Link to="/foodborne/salmonella" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Salmonella Response
                </Link>
              </div>
            </div>
            <Link to="/cities" className="px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors">Service Areas</Link>
            <Link to="/blog" className="px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors">Blog</Link>
            <a href="/#contact" className="px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            <a 
              href="tel:8137384220" 
              className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Phone size={20} />
              (813) 738-4220
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-blue-900">Services</Link>
            <Link to="/foodborne/ecoli" className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-900">- E. coli Response</Link>
            <Link to="/foodborne/listeria" className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-900">- Listeria Response</Link>
            <Link to="/foodborne/salmonella" className="block py-2 pl-4 text-sm text-gray-600 hover:text-blue-900">- Salmonella Response</Link>
            <Link to="/cities" className="block py-2 text-gray-700 hover:text-blue-900">Service Areas</Link>
            <Link to="/blog" className="block py-2 text-gray-700 hover:text-blue-900">Blog</Link>
            <a href="/#contact" className="block py-2 text-gray-700 hover:text-blue-900">Contact</a>
            <a 
              href="tel:8137384220" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
            >
              <Phone size={20} />
              (813) 738-4220
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;