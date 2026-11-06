import React from 'react';

interface FeaturedCardsProps {
  onSelectCategory?: (category: string) => void;
}

export const FeaturedCards: React.FC<FeaturedCardsProps> = () => {
  const cards = [
    {
      id: 'kasavu',
      title: 'saree draping & kasavu',
      category: 'Kerala Kasavu & Sarees',
      image: '/images/traditional-kasavu-saree.png',
    },
    {
      id: 'bridal',
      title: 'bridal saari blouses',
      category: 'Bridal Saari Blouses',
      image: '/images/traditional-bridal-blouse.png',
    },
    {
      id: 'churidaar',
      title: 'Churidaar',
      category: 'Churidaar & Suits',
      image: '/images/churidaar.png',
    },
  ];

  return (
    <section id="services" className="bg-white py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative aspect-[4/3.2] sm:aspect-square overflow-hidden rounded-xl shadow-md border border-zinc-200/50"
            >
              {/* Background Photo */}
              <img
                src={card.image}
                alt={card.title}
                onError={(e) => {
                  // Fallback to traditional kurta image if churidaar.png is still compiling
                  (e.target as HTMLImageElement).src = '/images/traditional-handcrafted-kurta.png';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark subtle overlay (matches Screenshot 2) */}
              <div className="absolute inset-0 bg-[#102A38]/45 group-hover:bg-[#102A38]/35 transition-colors duration-300" />

              {/* Centered bold white text */}
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center select-none">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
