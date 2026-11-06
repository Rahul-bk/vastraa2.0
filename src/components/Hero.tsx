import React from 'react';

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenServices?: () => void;
  onOpenAbout?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenServices, onOpenAbout }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-[#102A38]">
      {/* Background Image with Atmospheric Teal / Slate Overlay (100% Non-Copyright Bespoke Tailoring Project Asset) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-102"
        style={{
          backgroundImage: `url('/images/bespoke-hero-bg.png')`,
        }}
      >
        {/* Teal & Slate atmospheric overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#102A38]/75 via-[#164757]/65 to-[#102A38]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-24 pb-16">
        
        {/* Kicker tag (like "multi-purpose template" in screenshot) */}
        <span className="text-white/90 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase block mb-4">
          bespoke tailoring atelier
        </span>

        {/* Big Bold Headline (like "create your website" in screenshot) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.12] mb-6">
          craft your bespoke fit
        </h1>

        {/* Clear Description (Centered, readable white text) */}
        <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          Made-to-measure bridal saari blouses, traditional Kasavu saree pre-pleating, bespoke Churidaar sets, and precision alterations. Measured individually to your posture and style.
        </p>

        {/* Dual CTA Buttons (Matches the Outlined & White solid buttons in screenshot) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            onClick={(e) => {
              if (onOpenServices) {
                e.preventDefault();
                onOpenServices();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-white border border-white hover:bg-white hover:text-[#1E5B6E] transition-all duration-200 cursor-pointer"
          >
            Services
          </a>

          <a
            href="#about"
            onClick={(e) => {
              if (onOpenAbout) {
                e.preventDefault();
                onOpenAbout();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest text-[#1E5B6E] bg-white hover:bg-white/90 transition-all duration-200 shadow-lg cursor-pointer"
          >
            About Us
          </a>
        </div>

      </div>
    </section>
  );
};
