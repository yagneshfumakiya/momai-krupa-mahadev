'use client';

import React from 'react';
import { Compass, Calendar, Sun, Moon, Award, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Jyotish() {
  const items = [
    { title: 'Kundli Margdarshan', desc: 'Janmapatri vishleshana & Grah Dasha guidance.', icon: Compass },
    { title: 'Vivah & Gun Milan', desc: 'Kundli Gun Milan, Mangal Dosh & Shubh Muhurat.', icon: Calendar },
    { title: 'Career & Vyapar Jyotish', desc: 'Career, business & financial guidance according to planetary positions.', icon: Sun },
    { title: 'Grah Sthiti & Dasha', desc: 'Shani Sade Sati, Rahu-Ketu Shanti & Dasha Nivaran.', icon: Moon },
    { title: 'Shubh Muhurat Vidhi', desc: 'Shubh Muhurat for Griha Pravesh, Vivah & Business setup.', icon: Calendar },
    { title: 'Grah Shanti Anushthan', desc: 'Shastriya Grah Shanti Havan & Mantra Jaap.', icon: Award },
  ];

  return (
    <section id="jyotish" className="py-20 bg-white relative border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Jyotish Seva
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3 mb-2">
            Kundli & Jyotish Margdarshan
          </h2>
          <p className="text-sm text-stone-600 font-sans">
            Kundli sambandhit Jyotish Margdarshan, Vivah, Career, Grah Sthiti, Muhurat evam anya Jyotish seva ke liye sampark karein.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#faf8f5] p-6 rounded-2xl border border-stone-200/80 soft-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#c2410c] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={getWhatsAppLink('918141306110', item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c2410c] hover:text-[#9a3412]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
