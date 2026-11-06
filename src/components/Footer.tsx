import React from 'react';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenAbout?: () => void;
  onOpenServices?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAbout, onOpenServices }) => {
  return (
    <footer className="bg-white py-12 border-t border-zinc-100 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* Left: Nav Links in Teal (Matches Screenshot 3) */}
          <div className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-[#1E5B6E]">
            <a href="#" className="hover:text-[#102A38] transition-colors">
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
              className="hover:text-[#102A38] transition-colors cursor-pointer"
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
              className="hover:text-[#102A38] transition-colors"
            >
              Services
            </a>
            <button 
              type="button"
              onClick={onOpenBooking} 
              className="hover:text-[#102A38] transition-colors text-sm font-medium text-[#1E5B6E]"
            >
              Contact
            </button>
          </div>

          {/* Center: Mountain Icon above Brand Name (Matches Screenshot 3) */}
          <div className="flex flex-col items-center justify-center">
            <svg 
              className="w-10 h-7 text-[#1E5B6E] mb-1" 
              viewBox="0 0 48 28" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path d="M4 25L17 5L28 19L34 11L44 25H4Z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <span className="text-base font-extrabold tracking-[0.25em] uppercase text-[#102A38]">
              VASTRAA
            </span>
          </div>

          {/* Right: Copyright text (Matches Screenshot 3) */}
          <div className="text-zinc-500 text-xs sm:text-sm font-normal text-center md:text-right">
            Copyright © {new Date().getFullYear()} Vastraa
          </div>

        </div>
      </div>
    </footer>
  );
};
