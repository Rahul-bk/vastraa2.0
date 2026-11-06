import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAbout?: () => void;
  onOpenServices?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAbout, onOpenServices }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#102A38]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Mountain icon & VASTRAA (Matches Screenshot 1) */}
          <a href="#" className="flex items-center gap-2.5 text-white group">
            <svg 
              className="w-8 h-8 text-white transition-transform group-hover:scale-105" 
              viewBox="0 0 48 48" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path d="M4 38L17 14L28 31L34 22L44 38H4Z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-extrabold tracking-[0.2em] text-white uppercase">
              VASTRAA
            </span>
          </a>

          {/* Desktop Nav Links (Matches "Home About Services Contact" in Screenshot 1) */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium text-white/90 hover:text-white tracking-wide transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  if (onOpenAbout) {
                    e.preventDefault();
                    onOpenAbout();
                  }
                }}
                className="text-sm font-medium text-white/90 hover:text-white tracking-wide transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  if (onOpenServices) {
                    e.preventDefault();
                    onOpenServices();
                  }
                }}
                className="text-sm font-medium text-white/90 hover:text-white tracking-wide transition-colors"
              >
                Services
              </a>
              <button
                type="button"
                onClick={onOpenBooking}
                className="text-sm font-medium text-white/90 hover:text-white tracking-wide transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Right Action Button: "Book Now" teal button with lightly rounded border */}
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#1E5B6E] hover:bg-[#164757] transition-all shadow-md active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#1E5B6E]"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#102A38] border-b border-white/10 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white/90 hover:text-white py-1.5 border-b border-white/5"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onOpenAbout) onOpenAbout();
              }}
              className="text-sm font-medium text-white/90 hover:text-white py-1.5 border-b border-white/5 cursor-pointer"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onOpenServices) onOpenServices();
              }}
              className="text-sm font-medium text-white/90 hover:text-white py-1.5 border-b border-white/5 cursor-pointer"
            >
              Services
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="text-left text-sm font-medium text-white/90 hover:text-white py-1.5 border-b border-white/5"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-2 w-full py-3 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-[#1E5B6E] text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
