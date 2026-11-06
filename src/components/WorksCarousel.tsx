import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { worksData } from '../data/worksData';
import { WorkCategory, WorkItem } from '../types';

interface WorksCarouselProps {
  onSelectWork: (work: WorkItem) => void;
  onBookDesign: (category: string) => void;
}

const categories: { label: string; value: WorkCategory }[] = [
  { label: 'All Works', value: 'All' },
  { label: 'Kasavu Sarees', value: 'Kerala Kasavu & Sarees' },
  { label: 'Bridal Blouses', value: 'Bridal Aari Blouses' },
  { label: 'Festive Kids', value: 'Pattu Pavadai (Kids)' },
  { label: 'Kurtas', value: 'Handcrafted Kurtas' },
  { label: 'Alterations', value: 'Heirloom Alterations' },
];

export const WorksCarousel: React.FC<WorksCarouselProps> = ({ onSelectWork, onBookDesign }) => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredWorks = activeCategory === 'All'
    ? worksData
    : worksData.filter((item) => item.category === activeCategory);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = 360;
      const newIndex = Math.min(
        Math.max(0, Math.round(scrollLeft / cardWidth)),
        filteredWorks.length - 1
      );
      setCurrentIndex(newIndex);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="works" className="py-20 bg-zinc-50/50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Professional Arrow Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Completed Works
            </h2>
          </div>

          {/* Professional Minimal Arrows */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 font-medium mr-1">
              {String(currentIndex + 1).padStart(2, '0')} / {String(filteredWorks.length).padStart(2, '0')}
            </span>
            
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-900 text-zinc-700 hover:text-white transition-all duration-200 flex items-center justify-center active:scale-95 shadow-subtle"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-zinc-900 bg-white hover:bg-zinc-900 text-zinc-700 hover:text-white transition-all duration-200 flex items-center justify-center active:scale-95 shadow-subtle"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setCurrentIndex(0);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] snap-start bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div 
                className="relative aspect-[4/4.5] overflow-hidden bg-zinc-100 cursor-pointer"
                onClick={() => onSelectWork(work)}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3">
                  <span className="bg-white/95 backdrop-blur-md text-zinc-900 text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm border border-zinc-200">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Minimal Card Details with Normal Clean Font */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onSelectWork(work)}
                    className="text-base font-semibold text-zinc-900 hover:text-zinc-600 transition-colors cursor-pointer line-clamp-1"
                  >
                    {work.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xs mt-1.5 line-clamp-2 font-normal leading-relaxed">
                    {work.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-zinc-400 block tracking-wider">Starting</span>
                    <span className="text-sm font-bold text-zinc-900">{work.startingPrice}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectWork(work)}
                      className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 px-3 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors border border-transparent hover:border-zinc-200"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookDesign(work.category)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 px-3.5 py-1.5 rounded-lg transition-all active:scale-95"
                    >
                      <span>Book</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Slide Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-200/80 mt-2">
          <button
            onClick={() => scroll('left')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <span className="text-xs text-zinc-400 font-medium">
            {currentIndex + 1} of {filteredWorks.length}
          </span>

          <button
            onClick={() => scroll('right')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
