'use client';

import React from 'react';
import { BookOpen, UserCheck, Sparkles, Globe } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      title: 'Vedic Parampara',
      description: 'Traditional Vedic methods performed strictly according to scriptural guidelines with sincere devotion.',
      icon: BookOpen,
    },
    {
      title: 'Personalized Sankalp',
      description: 'Every seva and ceremony is thoughtfully planned according to the devotee\'s specific family requirements.',
      icon: UserCheck,
    },
    {
      title: 'Traditional + Modern Convenience',
      description: 'Seamless arrangements for both authentic in-person ceremonies and online live video rituals.',
      icon: Sparkles,
    },
    {
      title: 'India & Overseas Seva',
      description: 'Dedicated online seva arrangements for devotees across India as well as USA, UK, Canada, and worldwide.',
      icon: Globe,
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Our Service Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3 mb-2">
            Why Dhaval Maharaj
          </h2>
          <p className="text-sm text-stone-600 font-sans">
            Timeless Sanatan traditions presented with modern devotion, transparency, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#faf8f5] p-6 rounded-2xl border border-stone-200/80 soft-shadow-hover hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-100/70 text-[#c2410c] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
