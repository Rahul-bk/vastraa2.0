import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col items-end">
      {/* Tooltip bubble with traditional aesthetic */}
      {showTooltip && (
        <div className="mb-2 mr-1 bg-parchment-50 p-3 rounded-2xl shadow-warm-lg border border-zari-400 max-w-[220px] animate-in slide-in-from-bottom-2 duration-300 relative text-left hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-0.5 text-stone-400 hover:text-stone-700"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="text-[11px] font-sans font-bold text-zinc-900 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Master Tailor Online</span>
          </div>
          <p className="text-[11px] text-stone-700 mt-0.5 leading-tight font-sans font-normal">
            Need urgent Kasavu draping or Aari blouse quotes? Chat with Masterji!
          </p>
        </div>
      )}

      {/* Button with gentle pulsing glow */}
      <a
        href="https://wa.me/919876543210?text=Namaskaram%20Vastraa,%20I%20would%20like%20to%20inquire%20about%20traditional%20tailoring."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-warm-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group border-2 border-white/60"
        aria-label="Chat with Master Tailor on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-crimson-600 border-2 border-white rounded-full"></span>
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};
