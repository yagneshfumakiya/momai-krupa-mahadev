'use client';

import React from 'react';
import Image from 'next/image';
import { Home, Key, Compass, Building2, Sparkles, Flame, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function VastuSeva() {
  const cards = [
    { title: 'Vastu Puja', devanagari: 'वास्तु पूजन', desc: 'Bhawan ki Dishao evam Vastu Purush ki Shastriya Pujan vidhi.', icon: Home },
    { title: 'Vastu Shanti Yagna', devanagari: 'वास्तु शांति यज्ञ', desc: 'Bhawan dosh nivaran evam Urja shuddhi hetu Havan-Ahuti.', icon: Flame },
    { title: 'Griha Shanti Puja', devanagari: 'गृह शांति पूजा', desc: 'Parivarik Sukh-Samriddhi va Shanti hetu Grah & Griha Shanti.', icon: Compass },
    { title: 'Naye Ghar ki Puja', devanagari: 'नूतन गृह प्रवेश', desc: 'Naye ghar mein mangal pravesh, Dwar Pujan & Gau Pujan.', icon: Key },
    { title: 'Office & Commercial Vastu', devanagari: 'व्यापारिक वास्तु पूजन', desc: 'Dukaan, Office, Factory va Property ke liye Vastu Pujan.', icon: Building2 },
    { title: 'Vastu Dosh Nivaran', devanagari: 'वास्तु दोष निवारण', desc: 'Bina tod-fod Shastriya Mantron & Anushthan dwara Shanti.', icon: Sparkles },
  ];

  return (
    <section id="vastu-seva" className="py-20 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#d97706] font-serif font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300">
            ॥ Shree Ganeshay Namah ॥
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2a040e] mt-4 mb-3">
            Vastu Seva
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d97706] to-[#b45309] mx-auto rounded-full mb-4" />
          <p className="text-stone-700 text-base sm:text-lg font-serif">
            Ghar, office, shop ya naye property ke liye Vedic parampara ke anusaar vividh Puja aur Vastu sambandhit karya.
          </p>
        </div>

        {/* Top Banner Grid */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/vastu/vastu.jpg"
              alt="Vastu Puja Ceremony by Dhaval Maharaj"
              width={500}
              height={350}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#2a040e]">
              Ghar Va Vyapar Mein Sukh-Samriddhi Evam Urja Shuddhi
            </h3>
            <p className="text-stone-700 font-serif text-sm sm:text-base leading-relaxed">
              Vastu Shastra ke anusaar pratyek sthan ki dishayen aur urja parivar evam vyapar par gahra prabhav dalti hain. Dhaval Maharaj dwara Shastriya Vastu Pujan, Mandal Rachna, Gau Pujan aur Vastu Yagna dwara sateek vidhi karvaye jaate hain.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink('918141306110', 'Vastu Puja & Shanti Enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Vastu Seva Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm hover:shadow-md transition-all hover:border-[#d97706] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-100 text-[#d97706] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-xs font-bold text-[#b45309] bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      {card.devanagari}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#2a040e] mb-2">
                    {card.title}
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm font-serif leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>

                <a
                  href={getWhatsAppLink('918141306110', card.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-[#4c0519] hover:text-white bg-amber-50 hover:bg-[#4c0519] py-2.5 rounded-xl border border-amber-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
