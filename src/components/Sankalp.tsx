'use client';

import React from 'react';
import { Flame, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/navigation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Sankalp() {
  const greetings = [
    '🙏 Jay Dwarkadhish',
    '🙏 Jay Mahadev',
    '🙏 Jay Mataji',
    '🙏 Jay Shree Ganesh',
  ];

  return (
    <section className="py-20 bg-[#2d0612] text-white relative overflow-hidden border-t border-[#d4af37]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
        
        <div className="inline-block p-3 rounded-full bg-[#3c0919] border border-[#d4af37]/30 shadow-md">
          <span className="text-[#facc15] font-serif text-2xl font-bold">
            ॐ
          </span>
        </div>

        <div>
          <span className="text-xs font-bold text-[#facc15] uppercase tracking-widest block mb-2 font-sans">
            Our Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">
            Hamara Sankalp
          </h2>
        </div>

        <p className="text-base sm:text-xl font-serif text-amber-100/90 leading-relaxed max-w-2xl mx-auto italic">
          "Sanatan Vedic Parampara ko shraddha ke saath aage badhana, dharmik sanskaron ko jeevan se jodna aur seva ke madhyam se Bhagwan ke charno mein apni ahuti dena."
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {greetings.map((g, idx) => (
            <div
              key={idx}
              className="bg-[#3c0919] py-3 px-3 rounded-xl border border-[#d4af37]/20 text-amber-200 font-serif text-xs sm:text-sm font-semibold"
            >
              {g}
            </div>
          ))}
        </div>

        <div className="pt-4 space-y-1">
          <h3 className="text-2xl font-serif font-bold text-[#facc15]">
            {siteConfig.brandName}
          </h3>
          <p className="text-amber-200 text-sm font-sans">
            {siteConfig.panditName} ({siteConfig.fullName})
          </p>
        </div>

        <div className="pt-2">
          <a
            href={getWhatsAppLink('918141306110', 'Final Sankalp Contact')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all border border-amber-300/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect for Vedic Seva</span>
          </a>
        </div>

      </div>
    </section>
  );
}
