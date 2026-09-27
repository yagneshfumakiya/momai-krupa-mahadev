'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Building2, Flame, Flower2, CircleDot, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function PranPratishtha() {
  const highlights = [
    { title: 'Pran Pratishtha Mahotsav', desc: 'Dev-Pratima Jaladhivas, Dhanyadhivas, Shayyadhivas & Nyas Vidhi' },
    { title: 'Mandir Sthapana & Puja', desc: 'Naye Mandir Pujan, Shikhara Sthapana & Nitya Seva Vidhi' },
    { title: 'Ganesh Sthapana', desc: 'Shri Ganesh Pujan, Mandal Rachna & Atharvashirsha Ahuti' },
    { title: 'Vedic Yagna & Havan', desc: 'Devata Aavahan, Hom-Anushthan & Vishwa Shanti Yagna' },
    { title: 'Mantra Jaap & Nyas', desc: 'Purashcharan, Gayatri-Navarna Jaap & Beej Mantra Uchcharan' },
    { title: 'Anya Mandir Seva', desc: 'Dhwaja Sthapana, Murti Shuddhi & Vishesh Mahotsav Vidhi' },
  ];

  return (
    <section id="pran-pratishtha" className="py-20 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d97706] font-serif font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300">
            ॥ Shree Ganeshay Namah ॥
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2a040e] mt-4 mb-3">
            Mandir Seva & Pran Pratishtha
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d97706] to-[#b45309] mx-auto rounded-full mb-4" />
          <p className="text-stone-700 text-base sm:text-lg font-serif">
            Mandir Puja, Pran Pratishtha sambandhit karya aur anya dharmik Vedic seva ke liye sampark karein.
          </p>
        </div>

        {/* Feature Grid with Large Ceremonial Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-amber-50/70 p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-md">
          {/* Left Column: Authentic Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#d4af37]/50 bg-[#2a040e]">
              <Image
                src="/images/pran-pratishtha/pran-pratishtha.jpg"
                alt="Mandir Murti Pran Pratishtha Vidhi by Dhaval Maharaj"
                width={700}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a040e]/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[#facc15] font-serif text-xs uppercase tracking-widest font-bold">
                    Shastriya Vidhi Mahotsav
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Mandir Murti Pran Pratishtha
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#2a040e]">
                Pavitra Murti Pran Pratishtha & Mandir Pujan
              </h3>
              <p className="text-stone-700 text-sm sm:text-base font-serif leading-relaxed">
                Mandir pratishtha aur murti sthapana Shastriya vidhi-vidhan ke anusaar hi sampann hone chahiye. Dhaval Maharaj dwara Pindika Pujan, Adhivas Vidhi (Jaladhivas, Dhanyadhivas), Netronmeelan aur Mantra Nyas sateek aur bhaktimay dhang se karvaya jaata hai.
              </p>
            </div>

            {/* Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-xl border border-amber-200 flex items-start gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#2a040e]">
                      {item.title}
                    </h4>
                    <p className="text-stone-500 text-[11px] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('918141306110', 'Pran Pratishtha & Mandir Seva')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#4c0519] hover:bg-[#701a2e] text-[#facc15] px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all border border-[#d4af37]/40"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pran Pratishtha ke liye Sampark Karein</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
