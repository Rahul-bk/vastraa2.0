import React from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { WorkItem } from '../types';

interface WorkDetailModalProps {
  work: WorkItem | null;
  onClose: () => void;
  onBookStyle: (category: string) => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({ work, onClose, onBookStyle }) => {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#102A38]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-sm shadow-2xl border border-zinc-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-sm bg-white/90 hover:bg-white text-zinc-700 hover:text-[#102A38] border border-zinc-200 shadow-sm transition-all active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto no-scrollbar">
          {/* Photo */}
          <div className="md:col-span-5 relative bg-zinc-100 min-h-[260px] md:min-h-[440px]">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-500 pb-2 border-b border-zinc-100">
                <span className="font-bold uppercase tracking-wider text-[10px] text-[#1E5B6E]">
                  {work.category}
                </span>
                <span className="font-medium text-zinc-600">Turnaround: {work.turnaround}</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#102A38] leading-snug">
                  {work.title}
                </h3>
                <div className="mt-1 text-base font-bold text-[#1E5B6E]">
                  {work.startingPrice} onwards
                </div>
              </div>

              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                {work.description}
              </p>

              {/* Specs */}
              <div className="space-y-2 pt-2 text-xs text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-[#1E5B6E] mt-0.5 shrink-0 stroke-[2.5]" />
                  <span><strong>Cut: </strong>{work.details.cut}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-[#1E5B6E] mt-0.5 shrink-0 stroke-[2.5]" />
                  <span><strong>Embroidery: </strong>{work.details.embroidery}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-[#1E5B6E] mt-0.5 shrink-0 stroke-[2.5]" />
                  <span><strong>Lining: </strong>{work.details.lining}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-zinc-100 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookStyle(work.category);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1E5B6E] hover:bg-[#164757] text-white py-2.5 px-5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              >
                <span>Book This Style</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-80" />
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-sm text-zinc-600 hover:text-[#102A38] text-xs font-bold uppercase tracking-wider border border-zinc-200 hover:bg-zinc-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
