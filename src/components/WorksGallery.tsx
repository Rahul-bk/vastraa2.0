import React from 'react';
import { worksData } from '../data/worksData';
import { WorkItem } from '../types';

interface WorksGalleryProps {
  onSelectWork: (work: WorkItem) => void;
}

export const WorksGallery: React.FC<WorksGalleryProps> = ({ onSelectWork }) => {
  return (
    <section id="works" className="py-16 md:py-24 bg-[#EFF5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Clean 6-Photo Grid (Matches Screenshot 2 & 3: 3 columns x 2 rows, pure photos with equal gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {worksData.slice(0, 6).map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectWork(work)}
              className="group relative aspect-[4/3] overflow-hidden bg-zinc-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover Dark Overlay with Title & Starting Price */}
              <div className="absolute inset-0 bg-[#102A38]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                  {work.category}
                </span>
                <h3 className="text-sm font-bold line-clamp-1 mb-1">
                  {work.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-white/90 pt-2 border-t border-white/20">
                  <span>Starting {work.startingPrice}</span>
                  <span className="underline uppercase tracking-wider text-[11px] font-semibold text-white">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
