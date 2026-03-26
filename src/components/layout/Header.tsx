import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Directory', path: '/directory' },
    { name: 'List Your Business', path: '/list-business' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FCD116] rounded-full flex items-center justify-center font-bold text-[#4B3621]">
            TE
          </div>
          <span className="text-xl font-bold tracking-tight text-[#4B3621]">Travel Ethiopia</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-[#FCD116] ${
                  isActive ? 'text-[#FCD116]' : 'text-[#4B3621]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/checklist"
            className="group px-6 py-3 bg-[#FCD116] text-[#4B3621] rounded-full text-sm font-bold shadow-lg shadow-[#FCD116]/20 hover:bg-[#e6bf14] hover:shadow-xl transition-all flex items-center gap-2"
          >
            Traveler’s Checklist
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#4B3621]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-6 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-lg font-semibold text-[#4B3621]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/checklist"
            className="w-full py-4 bg-[#FCD116] text-[#4B3621] rounded-xl text-center font-bold shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Traveler’s Checklist
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;