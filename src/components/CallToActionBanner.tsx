import React from 'react';

interface CallToActionBannerProps {
  onOpenBooking: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 md:py-36 text-center text-white overflow-hidden bg-[#102A38]">
      {/* Background Image with Atmospheric Teal Overlay (100% Non-copyright tailoring project asset) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/traditional-patchwork.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#102A38]/90 via-[#164757]/85 to-[#102A38]/90 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Title in Normal Bold */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Call To Action
        </h2>

        {/* Subtitle with mandatory booking charge notice */}
        <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal mb-8">
          There may be a booking charge due to limited slots. Request your bespoke consultation at our atelier or arrange a doorstep measurement visit.
        </p>

        {/* Animated Rounded "BOOK" Button */}
        <div>
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center gap-2.5 px-12 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-[0.25em] text-white border-2 border-white bg-white/10 hover:bg-white hover:text-[#1E5B6E] transition-all duration-300 shadow-xl hover:shadow-[0_0_28px_rgba(255,255,255,0.45)] hover:scale-105 active:scale-95 animate-pulse hover:animate-none cursor-pointer"
          >
            <span>BOOK</span>
            <span className="inline-block text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

