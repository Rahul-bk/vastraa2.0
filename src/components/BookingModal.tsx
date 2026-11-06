import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { 
  X,
  Check, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Info,
  MapPin
} from 'lucide-react';

const garmentOptions = [
  'Blouse',
  'Kurta',
  'Saree Draping',
  'Kids Festive',
  'Alterations',
  'Multiple Items',
];

const timeSlots = [
  'Morning (10:00 AM – 01:00 PM)',
  'Afternoon (02:00 PM – 05:00 PM)',
  'Evening (05:00 PM – 08:00 PM)',
];

const getNextDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      dateStr: d.toISOString().split('T')[0],
      display: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    });
  }
  return days;
};

const bookingSchema = z.object({
  garment: z.string().min(1, 'Please select a garment'),
  consultationType: z.enum(['atelier', 'doorstep']),
  bookingDate: z.string().min(1, 'Please choose a date'),
  timeSlot: z.string().min(1, 'Please choose a time window'),
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().regex(/^[0-9]{10}$/, 'Enter a valid 10-digit number'),
  email: z.string().email('Enter a valid email address'),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGarment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedGarment }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationData, setConfirmationData] = useState<{
    id: string;
    values: FormValues;
  } | null>(null);

  const availableDays = getNextDays();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      garment: preselectedGarment || 'Blouse',
      consultationType: 'atelier',
      bookingDate: availableDays[0].dateStr,
      timeSlot: timeSlots[0],
      fullName: '',
      phoneNumber: '',
      email: '',
      notes: '',
    },
  });

  const selectedGarment = watch('garment');
  const selectedMode = watch('consultationType');

  if (!isOpen) return null;

  const onSubmit = async (values: FormValues) => {
    const generatedId = `VAS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Connect to shared persistent database
    try {
      await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: generatedId,
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          garment: values.garment,
          consultationType: values.consultationType,
          bookingDate: values.bookingDate,
          timeSlot: values.timeSlot,
          notes: values.notes,
          source: 'website'
        })
      });
    } catch (err) {
      console.warn('Network sync error, fallback to local storage:', err);
      try {
        const stored = JSON.parse(localStorage.getItem('vastraa_shared_appointments') || '[]');
        stored.push({ id: generatedId, ...values, createdAt: new Date().toISOString() });
        localStorage.setItem('vastraa_shared_appointments', JSON.stringify(stored));
      } catch (e) {
        // safe
      }
    }

    setConfirmationData({
      id: generatedId,
      values,
    });
    setIsSuccess(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#1E5B6E', '#164757', '#102A38', '#A1A1AA'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#102A38]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-sm shadow-2xl border border-zinc-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-sm bg-white/90 hover:bg-zinc-100 text-zinc-700 hover:text-[#102A38] border border-zinc-200 transition-all active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 max-h-[88vh] overflow-y-auto no-scrollbar">
          
          {/* Header */}
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E5B6E] block mb-1.5">
              Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A38] tracking-tight">
              Book an Appointment
            </h2>
            
            {/* Prominent advisory note */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#EFF5F7] text-[#102A38] text-xs mt-3 border border-[#D7E3E7]">
              <Info className="w-3.5 h-3.5 text-[#1E5B6E] shrink-0" />
              <span className="font-medium">There may be a booking charge due to limited slots</span>
            </div>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* 1. Garment Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A38] mb-2">
                  Service / Garment
                </label>
                <div className="flex flex-wrap gap-2">
                  {garmentOptions.map((g) => {
                    const isSelected = selectedGarment === g;
                    return (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setValue('garment', g, { shouldValidate: true })}
                        className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wide transition-all border ${
                          isSelected
                            ? 'bg-[#1E5B6E] text-white border-[#1E5B6E] shadow-sm'
                            : 'bg-white hover:bg-[#EFF5F7] text-zinc-700 border-zinc-200'
                        }`}
                      >
                        {g}
                      </button>
                    );
                  })}
                </div>
                {errors.garment && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{errors.garment.message}</p>
                )}
              </div>

              {/* 2. Consultation Mode */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A38] mb-2">
                  Consultation Location
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setValue('consultationType', 'atelier')}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      selectedMode === 'atelier'
                        ? 'border-[#1E5B6E] bg-[#EFF5F7] shadow-sm'
                        : 'border-zinc-200 hover:bg-[#EFF5F7]/50 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-[#102A38]">Studio Visit</span>
                      {selectedMode === 'atelier' && <Check className="w-3.5 h-3.5 text-[#1E5B6E]" />}
                    </div>
                    <span className="text-[11px] text-zinc-500 block">Atelier Studio Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setValue('consultationType', 'doorstep')}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      selectedMode === 'doorstep'
                        ? 'border-[#1E5B6E] bg-[#EFF5F7] shadow-sm'
                        : 'border-zinc-200 hover:bg-[#EFF5F7]/50 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-[#102A38]">Doorstep Visit</span>
                      {selectedMode === 'doorstep' && <Check className="w-3.5 h-3.5 text-[#1E5B6E]" />}
                    </div>
                    <span className="text-[11px] text-zinc-500 block">Measurement at your home</span>
                  </button>
                </div>
              </div>

              {/* 3. Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102A38] mb-1.5">
                    Preferred Date
                  </label>
                  <select
                    {...register('bookingDate')}
                    className="w-full text-xs p-2.5 rounded-sm border border-zinc-200 bg-white text-zinc-900 focus:border-[#1E5B6E] outline-none"
                  >
                    {availableDays.map((d) => (
                      <option key={d.dateStr} value={d.dateStr}>
                        {d.display}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102A38] mb-1.5">
                    Time Window
                  </label>
                  <select
                    {...register('timeSlot')}
                    className="w-full text-xs p-2.5 rounded-sm border border-zinc-200 bg-white text-zinc-900 focus:border-[#1E5B6E] outline-none"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Contact Information */}
              <div className="space-y-3 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A38]">
                  Contact Information
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="Your Full Name"
                      className="w-full text-xs p-2.5 rounded-sm border border-zinc-200 focus:border-[#1E5B6E] outline-none text-zinc-900"
                    />
                    {errors.fullName && (
                      <p className="text-[10px] text-red-600 mt-1 font-medium">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      maxLength={10}
                      {...register('phoneNumber')}
                      placeholder="10-digit Phone"
                      className="w-full text-xs p-2.5 rounded-sm border border-zinc-200 focus:border-[#1E5B6E] outline-none text-zinc-900"
                    />
                    {errors.phoneNumber && (
                      <p className="text-[10px] text-red-600 mt-1 font-medium">{errors.phoneNumber.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="Email Address"
                      className="w-full text-xs p-2.5 rounded-sm border border-zinc-200 focus:border-[#1E5B6E] outline-none text-zinc-900"
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-600 mt-1 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <input
                  type="text"
                  {...register('notes')}
                  placeholder="Special requests or event date (optional)"
                  className="w-full text-xs p-2.5 rounded-sm border border-zinc-200 focus:border-[#1E5B6E] outline-none text-zinc-900"
                />
              </div>

              {/* Footer with Mandatory Writing & Submit Button */}
              <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-zinc-500 font-normal">
                  * There may be a booking charge due to limited slots.
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-sm text-xs font-semibold text-zinc-600 hover:text-zinc-900 border border-zinc-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#1E5B6E] hover:bg-[#164757] transition-all active:scale-95 disabled:opacity-50 shadow-sm"
                  >
                    <span>Request Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                  </button>
                </div>
              </div>

            </form>
          ) : (
            /* Confirmation View */
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#EFF5F7] text-[#1E5B6E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 stroke-[2]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#102A38]">
                  Appointment Request Received
                </h3>
                <p className="text-zinc-500 text-xs mt-1">
                  Our atelier team will verify availability and confirm your booking.
                </p>
                <p className="text-[#1E5B6E] text-xs mt-1.5 font-semibold">
                  Note: There may be a booking charge due to limited slots.
                </p>
              </div>

              {confirmationData && (
                <div className="max-w-sm mx-auto bg-[#EFF5F7] rounded-sm p-4 border border-[#D7E3E7] text-left text-xs space-y-1.5 text-zinc-700">
                  <div className="flex justify-between border-b border-[#D7E3E7] pb-1.5 mb-1.5 font-mono text-[11px]">
                    <span className="text-zinc-500">REFERENCE</span>
                    <span className="font-bold text-[#102A38]">{confirmationData.id}</span>
                  </div>
                  <div><strong>Client:</strong> {confirmationData.values.fullName}</div>
                  <div><strong>Garment:</strong> {confirmationData.values.garment}</div>
                  <div><strong>Date & Time:</strong> {confirmationData.values.bookingDate} ({confirmationData.values.timeSlot})</div>
                  <div><strong>Location:</strong> {confirmationData.values.consultationType === 'atelier' ? 'Studio Visit' : 'Doorstep Measurement'}</div>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 pt-3">
                <a
                  href="https://maps.google.com/?q=Indiranagar+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#102A38] bg-white hover:bg-zinc-50 px-4 py-2 rounded-sm border border-zinc-200 transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#1E5B6E]" />
                  <span>Studio Location</span>
                </a>

                <button
                  onClick={() => {
                    reset();
                    setIsSuccess(false);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-zinc-900 px-3 py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Book Another</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-white bg-[#1E5B6E] hover:bg-[#164757]"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

