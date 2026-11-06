import React from 'react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Discuss neck cuts, fabric drape, and style preferences with our senior master cutter.',
    },
    {
      step: '02',
      title: 'Precision Measure',
      description: '18-point anatomical measurements taken to ensure seamless armhole and posture fit.',
    },
    {
      step: '03',
      title: 'Fitting Trial',
      description: 'Optional basting trial to fine-tune silhouette and comfort before final closure stitching.',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Steam-pressed and packaged with our complimentary 15-day fit adjustment guarantee.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-24 bg-[#EFF5F7] border-t border-[#D7E3E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E5B6E] block mb-2">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102A38] tracking-tight">
            The Bespoke Process
          </h2>
          <p className="text-zinc-600 text-sm mt-2 font-normal">
            Four methodical stages from measurement to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-7 rounded-sm border border-white/60 bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-extrabold text-[#1E5B6E] block mb-3 font-mono">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#102A38] mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-xs font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
