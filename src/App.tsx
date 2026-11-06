import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCards } from './components/FeaturedCards';
import { AboutBenefit } from './components/AboutBenefit';
import { CallToActionBanner } from './components/CallToActionBanner';
import { WorksGallery } from './components/WorksGallery';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WorkDetailModal } from './components/WorkDetailModal';
import { MobileActionBar } from './components/MobileActionBar';
import { ScrollToTop } from './components/ScrollToTop';
import { WorkItem } from './types';

export function App() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedGarment, setPreselectedGarment] = useState<string>('Blouse');

  const openBooking = (garmentName?: string) => {
    if (garmentName) {
      if (garmentName.includes('Kasavu') || garmentName.includes('Saree')) {
        setPreselectedGarment('Saree Draping');
      } else if (garmentName.includes('Bridal') || garmentName.includes('Aari') || garmentName.includes('Blouse')) {
        setPreselectedGarment('Blouse');
      } else if (garmentName.includes('Pattu') || garmentName.includes('Pavadai') || garmentName.includes('Kids')) {
        setPreselectedGarment('Kids Festive');
      } else if (garmentName.includes('Kurta') || garmentName.includes('Salwar')) {
        setPreselectedGarment('Kurta');
      } else if (garmentName.includes('Alteration') || garmentName.includes('Heirloom')) {
        setPreselectedGarment('Alterations');
      } else {
        setPreselectedGarment('Blouse');
      }
    }
    setIsBookingOpen(true);
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services') || document.getElementById('featured-services');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-mountain-navy flex flex-col selection:bg-[#1E5B6E] selection:text-white">
      {/* 1. Transparent Header (Matches Screenshot 1) */}
      <Navbar 
        onOpenBooking={() => openBooking()} 
        onOpenAbout={scrollToAbout}
        onOpenServices={scrollToServices}
      />

      <main className="flex-1">
        {/* 2. Full-Screen Atmospheric Hero (Matches Screenshot 1) */}
        <Hero 
          onOpenBooking={() => openBooking()} 
          onOpenServices={scrollToServices}
          onOpenAbout={scrollToAbout}
        />

        {/* 3. 3-Card Featured Services (Matches Screenshot 2) */}
        <FeaturedCards />

        {/* 4. "Amazing things for you" 2-Column Section (Matches Screenshot 3) */}
        <AboutBenefit />

        {/* 5. Full-Width "Call To Action" Banner (Matches Screenshot 4) */}
        <CallToActionBanner onOpenBooking={() => openBooking()} />

        {/* 6. 6-Grid Photo Gallery on Soft Ice-Blue (Matches Screenshot 5) */}
        <WorksGallery onSelectWork={(work) => setSelectedWork(work)} />
      </main>

      {/* 7. Clean White Footer (Matches Screenshot 6) */}
      <Footer 
        onOpenBooking={() => openBooking()} 
        onOpenAbout={scrollToAbout}
        onOpenServices={scrollToServices}
      />

      {/* Consultation Booking Modal (Includes Limited Slots Notice) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedGarment={preselectedGarment}
      />

      {/* Garment Details & Starting Price Modal */}
      <WorkDetailModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
        onBookStyle={(category) => {
          setSelectedWork(null);
          openBooking(category);
        }}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar onOpenBooking={() => openBooking()} />

      {/* Matching Scroll-to-Top Floating Arrow Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
