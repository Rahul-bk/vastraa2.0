export type WorkCategory = 
  | 'All' 
  | 'Kerala Kasavu & Sarees' 
  | 'Bridal Aari Blouses' 
  | 'Pattu Pavadai (Kids)' 
  | 'Handcrafted Kurtas' 
  | 'Patchwork & Borders' 
  | 'Heirloom Alterations';

export interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, 'All'>;
  fabric: string;
  tags: string[];
  image: string;
  turnaround: string;
  startingPrice: string;
  cardIndex?: string;
  description: string;
  details: {
    cut: string;
    embroidery: string;
    lining: string;
    recommendedFor: string;
  };
}

export interface ServicePriceItem {
  id: string;
  title: string;
  startingPrice: number;
  turnaroundDays: string;
  popular?: boolean;
  category: string;
  shortDesc: string;
  included: string[];
  popularAddons?: { name: string; price: string }[];
}

export interface BookingFormData {
  garmentTypes: string[];
  bookingDate: string;
  timeSlot: string;
  consultationType: 'atelier' | 'doorstep';
  specialRequirements?: string;
  fullName: string;
  whatsappNumber: string;
  email: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  garment: string;
  review: string;
  rating: number;
  date: string;
  occasion: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
