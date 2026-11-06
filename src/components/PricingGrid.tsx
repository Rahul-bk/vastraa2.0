import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { pricingData } from '../data/pricingData';
import { ServicePriceItem } from '../types';

interface PricingGridProps {
  onSelectService: (service: ServicePriceItem) => void;
}

export const PricingGrid: React.FC<PricingGridProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-24 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E5B6E] block mb-2">
            Pricing & Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102A38] tracking-tight">
            Transparent Atelier Rates
          </h2>
          <p className="text-zinc-600 text-sm mt-3 font-normal leading-relaxed">
            Clear baseline rates with primary linings, precision fitting trials, and complimentary 15-day adjustments included.
          </p>
        </div>

        {/* 3-Column Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-sm p-7 border border-zinc-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Turnaround Badge */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="uppercase tracking-wider font-bold text-[10px] text-[#1E5B6E]">
                    {service.category}
                  </span>
                  <span className="bg-[#EFF5F7] px-2.5 py-0.5 rounded-sm font-semibold text-[#102A38] text-[11px]">
                    {service.turnaroundDays}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#102A38] mb-2 group-hover:text-[#1E5B6E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-xs line-clamp-2 font-normal leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Price Display */}
                <div className="py-3 px-4 rounded-sm bg-[#EFF5F7] border border-[#D7E3E7] mb-6 flex items-baseline justify-between">
                  <span className="text-xs text-zinc-500 font-medium">Starting from</span>
                  <span className="text-2xl font-bold text-[#102A38]">
                    ₹{service.startingPrice}
                  </span>
                </div>

                {/* Inclusions */}
                <ul className="space-y-2.5 mb-7 text-xs text-zinc-600 font-normal">
                  {service.included.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#1E5B6E] mt-0.5 shrink-0 stroke-[2.5]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service)}
                className="w-full py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#1E5B6E] hover:bg-[#164757] transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
              >
                <span>Select & Book</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
