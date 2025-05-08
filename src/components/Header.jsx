
import React, { useState } from 'react';
import { MapPin, Search, User, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-medical-600">DoctorCompass</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-medical-600">
              <MapPin size={16} />
              <span>Delhi NCR</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-700 hover:text-medical-600">Doctors</a></li>
                <li><a href="#" className="text-gray-700 hover:text-medical-600">Hospitals</a></li>
                <li><a href="#" className="text-gray-700 hover:text-medical-600">Medicines</a></li>
                <li><a href="#" className="text-gray-700 hover:text-medical-600">Lab Tests</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-1 text-medical-600">
              <User size={16} />
              <span>Login / Register</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-1 text-gray-700 py-2">
              <MapPin size={16} />
              <span>Delhi NCR</span>
            </div>
            <nav className="py-2">
              <ul className="space-y-2">
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#" className="block">Doctors</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#" className="block">Hospitals</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#" className="block">Medicines</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#" className="block">Lab Tests</a></li>
              </ul>
            </nav>
            <div className="flex items-center justify-center space-x-1 text-medical-600 py-2">
              <User size={16} />
              <span>Login / Register</span>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="search"
              className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-medical-500 focus:border-medical-500"
              placeholder="Search for doctors, specialties, hospitals..."
            />
          </div>
        </div>
      </div>

      {/* Secondary Navigation - Specialty Tabs */}
      <div className="bg-medical-50 overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 py-3 whitespace-nowrap">
            <a href="#" className="text-medical-600 font-medium border-b-2 border-medical-600 px-1">General Physician</a>
            <a href="#" className="text-gray-600 hover:text-medical-600 px-1">Pediatrician</a>
            <a href="#" className="text-gray-600 hover:text-medical-600 px-1">Gynecologist</a>
            <a href="#" className="text-gray-600 hover:text-medical-600 px-1">Dermatologist</a>
            <a href="#" className="text-gray-600 hover:text-medical-600 px-1">Cardiologist</a>
            <a href="#" className="text-gray-600 hover:text-medical-600 px-1">Orthopedician</a>
            <a href="#" className="text-gray-600 hover:text-medical-600 px-1">Neurologist</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
