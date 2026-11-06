import { ServicePriceItem } from '../types';

export const pricingData: ServicePriceItem[] = [
  {
    id: 'kerala-kasavu-draping',
    title: 'Saree Pre-Pleating & Draping',
    startingPrice: 500,
    turnaroundDays: '1-2 Days',
    popular: true,
    category: 'Kasavu & Sarees',
    shortDesc: '60-second ready-to-wear pleating, height-measured waistband hooks, fall attachment, and hand-rolled pico.',
    included: [
      'Invisible micro-stitched pleating customized to height',
      'Adjustable 3-tier brass waistband closure (no pins needed)',
      'Pure cotton-satin fall attachment & pico edge roll',
      'Steam press & protective garment packing'
    ]
  },
  {
    id: 'bridal-aari-blouse',
    title: 'Bridal & Bespoke Blouse Stitching',
    startingPrice: 200,
    turnaroundDays: '2-4 Days',
    popular: true,
    category: 'Blouse',
    shortDesc: 'Precision-fitted blouses with customized neckline contours, padded cup options, and preshrunk cotton lining.',
    included: [
      '18-point anatomical shoulder & armhole measurement',
      'Preshrunk cotton satin lining with reinforced stays',
      'Choice of round, boat, U-neck, princess cut, or bridal cut',
      'Complimentary 1-time fitting adjustment within 15 days'
    ]
  },
  {
    id: 'handcrafted-kurtas-salwars',
    title: 'Kurtas & Tunics',
    startingPrice: 400,
    turnaroundDays: '3-4 Days',
    popular: false,
    category: 'Kurta',
    shortDesc: 'Made-to-measure straight cut and kalidar kurtas tailored in cotton, khadi linen, and tussar silks.',
    included: [
      'Precision chest, waist, and hip contouring without pulling',
      'Mandarin collar or classic notch with handmade plackets',
      'Concealed deep utility pocket (sized for phone & essentials)',
      'Reinforced side slits with generous seam allowances'
    ]
  },
  {
    id: 'pattu-pavadai-kids',
    title: "Kids Festive Wear (Pattu Pavadai)",
    startingPrice: 150,
    turnaroundDays: '2-3 Days',
    popular: false,
    category: 'Festive Wear',
    shortDesc: 'Auspicious South Indian Pattu Pavadai tailored with soft mulmul lining and growth-friendly expansion tucks.',
    included: [
      'Featherweight mulmul cotton lining to prevent itching',
      'Concealed 2-inch growth pleats for future expansion',
      'Traditional peplum or waist choli with potli button closures',
      'Reinforced soft waistband for child comfort'
    ]
  },
  {
    id: 'traditional-patchwork-borders',
    title: 'Patchwork & Embroidery Detailing',
    startingPrice: 50,
    turnaroundDays: '1-3 Days',
    popular: false,
    category: 'Detailing',
    shortDesc: 'Artisanal border trims, handcrafted bridal latkans, vintage zari repair, and neckline appliqué needlework.',
    included: [
      'Placement design consultation with senior cutter',
      'Soft protective felt backing to prevent skin chafing',
      'Colorfast lock stitching with rust-proof fasteners',
      'Hand-finishing and pressing'
    ]
  },
  {
    id: 'heirloom-alterations',
    title: 'Alterations & Restyling',
    startingPrice: 100,
    turnaroundDays: '24-48 Hours',
    popular: false,
    category: 'Alterations',
    shortDesc: 'Precision sizing corrections, vintage saree repurposing into lehengas, and hemline adjustments.',
    included: [
      'Full body re-measurement trial',
      'Careful preservation of original seam allowances',
      'Precise thread gauge matching',
      'Steaming and conditioning'
    ]
  }
];
