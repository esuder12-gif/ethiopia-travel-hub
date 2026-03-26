import React from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'directory' | 'submission') => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', view: 'home' },
    { name: 'Destinations', view: 'home', anchor: 'destinations' },
    { name: 'Directory', view: 'directory' },
    { name: 'List Your Business', view: 'submission' },
  ];

  const handleNavClick = (view: any, anchor?: string) => {
    onNavigate(view);
    setIsOpen(false);
    if (anchor) {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-10 h-10 bg-[#FCD116] rounded-lg flex items-center justify-center font-bold text-[#4B3621] text-xl shadow-sm group-hover:scale-105 transition-transform">
            TE
          </div>
          <span className="text-xl font-bold text-[#4B3621] tracking-tight">Travel Ethiopia</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view, link.anchor)}
              className={`text-sm font-medium transition-colors hover:text-[#FCD116] ${
                currentView === link.view ? 'text-[#FCD116]' : 'text-[#4B3621]'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            className="bg-[#FCD116] text-[#4B3621] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-[#e2bc14] transition-all flex items-center gap-2"
          >
            Traveler’s Checklist
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#4B3621]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-4 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.view, link.anchor)}
              className="block w-full text-left py-2 text-lg font-medium text-[#4B3621]"
            >
              {link.name}
            </button>
          ))}
          <button className="w-full bg-[#FCD116] text-[#4B3621] py-3 rounded-lg font-bold">
            Traveler’s Checklist
          </button>
        </div>
      )}
    </header>
  );
};