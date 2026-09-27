'use client';

import React from 'react';
import Image from 'next/image';
import { Feather, Heart, Sparkles, Check, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function PitruSeva() {
  const items = [
    { title: 'Pitru Tarpan Vidhi', desc: 'Jal, Til, Kusha aur Mantrondwara Purvajon ke hetu Pavitra Tarpan Karya.' },
    { title: 'Shraddh Vidhi Seva', desc: 'Shorash Shraddh, Varshik Shraddh evam Tithi anusaar Shastriya Shraddh Vidhi.' },
    { title: 'Pitru Dosh Shanti Karya', desc: 'Pitru Dosh Nivaran Havan, Pind Daan evam Sanatan Shastriya Vidhi-purvak Shanti.' },
    { title: 'Vishesh Anushthan & Pind Daan', desc: 'Purvajon ki Aatma Shanti aur Pariwar ki Unnati hetu Vishesh Vedic Anushthan.' },
  ];

  return (
    <section id="pitru-seva" className="py-20 bg-[#faf5eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#b45309] font-serif font-bold text-xs sm:text-sm uppercase tracking-widest bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">
            ॥ Shree Ganeshay Namah ॥
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2a040e] mt-4 mb-3">
            Pitru Seva
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d97706] to-[#b45309] mx-auto rounded-full mb-4" />
          <p className="text-stone-700 text-base sm:text-lg font-serif">
            Pitru sambandhit dharmik karya shraddha aur Vedic parampara ke anusaar karvaye jaate hain.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md">
              <Image
                src="/images/pitru/pitru.jpg"
                alt="Pitru Tarpan Ceremony by Dhaval Maharaj"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a040e]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[#facc15] font-serif text-sm font-semibold">
                  Shraddha & Shanti Vidhi
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#2a040e]">
                Purvajon ki Shanti va Aashirwad hetu Shastriya Vidhi
              </h3>
              <p className="text-stone-600 font-serif text-sm sm:text-base leading-relaxed">
                Pitru Seva ke dwara hum apne purvajon ke prati kritagyata vyakt karte hain. Dhaval Maharaj dwara Shastron mein bataye gaye vidhi-vidhan ke anusaar Pind Daan, Tarpan aur Shraddh Karma sampann karvaya jaata hai.
              </p>
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm font-serif italic">
                "Pitru Seva ke liye puri vidhi aur avashyak samagri sambandhit margdarshan bhi diya ja sakta hai."
              </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <div key={idx} className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/70">
                  <h4 className="font-serif font-bold text-sm text-[#2a040e] flex items-center gap-2 mb-1">
                    <Feather className="w-4 h-4 text-[#d97706]" />
                    {item.title}
                  </h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Enquiry CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('918141306110', 'Pitru Seva & Tarpan Enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#4c0519] hover:bg-[#701a2e] text-[#facc15] px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pitru Seva Enquiry on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
