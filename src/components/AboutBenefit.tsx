import React from 'react';

export const AboutBenefit: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24 border-t border-zinc-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Left Column (Matches "amazing things for you" in Screenshot 3) */}
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#102A38] tracking-tight leading-[1.15]">
              amazing things for you
            </h2>
          </div>

          {/* Right Column (Matches text in Screenshot 3) */}
          <div className="md:col-span-7 space-y-5">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Always tailored for your exact posture, comfort, and silhouette. We pair traditional master cutting with an 18-point anatomical measurement standard so every blouse, saree pleat, and kurta falls naturally.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              From hand-beaded Aari and Zardosi embroidery to heirloom restyling, each commission includes complimentary basting trials and our 15-day fit guarantee.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
