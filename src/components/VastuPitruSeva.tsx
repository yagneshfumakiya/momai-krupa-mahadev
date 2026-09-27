'use client';

import React from 'react';
import Image from 'next/image';
import { Home, Feather, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function VastuPitruSeva() {
  const vastuItems = [
    'Vastu Puja',
    'Vastu Shanti',
    'Vastu Yagna',
    'Griha Shanti',
    'New House Puja',
    'Office / Shop Puja',
  ];

  const pitruItems = [
    'Pitru Tarpan',
    'Shraddh Vidhi',
    'Pitru Karya',
    'Anushthan',
  ];

  return (
    <div id="vastu-seva" className="py-20 bg-white space-y-20 border-t border-stone-200/60">
      
      {/* Vastu Seva Feature Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                Vastu Shanti & Pravesh
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3 mb-2">
                Vastu Seva
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
                Ghar, office, shop ya naye property ke liye Vedic parampara ke anusaar vividh Puja aur Vastu Shanti karya.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {vastuItems.map((item) => (
                <div
                  key={item}
                  className="bg-white p-3 rounded-xl border border-stone-200/80 flex items-center gap-2 text-xs font-medium text-stone-800 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c2410c] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href={getWhatsAppLink('918141306110', 'Vastu Seva Enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire for Vastu Seva</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs">
              <Image
                src="/images/vastu/vastu.jpg"
                alt="Vastu Puja Ceremony by Dhaval Maharaj"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Pitru Seva Feature Card */}
      <section id="pitru-seva" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs">
              <Image
                src="/images/pitru/pitru.jpg"
                alt="Pitru Tarpan Ceremony by Dhaval Maharaj"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-xs font-bold text-stone-600 uppercase tracking-widest bg-stone-200/60 px-3 py-1 rounded-full">
                Shraddha & Tarpan
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3 mb-2">
                Pitru Seva
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
                Pitru sambandhit dharmik karya shraddha aur Vedic parampara ke anusaar karvaye jaate hain.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {pitruItems.map((item) => (
                <div
                  key={item}
                  className="bg-white p-3 rounded-xl border border-stone-200/80 flex items-center gap-2 text-xs font-medium text-stone-800 shadow-xs"
                >
                  <Feather className="w-4 h-4 text-[#c2410c] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-500 italic font-sans">
              "Pitru Seva ke liye puri vidhi aur avashyak samagri sambandhit margdarshan bhi diya ja sakta hai."
            </p>

            <div>
              <a
                href={getWhatsAppLink('918141306110', 'Pitru Seva Enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire for Pitru Seva</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
