import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { studioContact } from '../config/contact';

interface MobileActionBarProps {
  onOpenBooking: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200 px-4 py-2.5 flex items-center gap-3">
      {studioContact.phone && (
        <a
          href={`tel:${studioContact.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-zinc-100 text-zinc-800 text-xs font-semibold border border-zinc-200"
        >
          <Phone className="w-3.5 h-3.5 text-zinc-600" />
          <span>Call</span>
        </a>
      )}

      <button
        onClick={onOpenBooking}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-[#1E5B6E] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Appointment</span>
      </button>
    </div>
  );
};
