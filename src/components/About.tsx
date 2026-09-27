'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/navigation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Clean Authentic Ceremony Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white p-3 shadow-md">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src="/images/about/dhaval-maharaj.jpg"
                    alt="Dhaval Maharaj performing Vedic ceremony"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Biography & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200/60">
                Hamare Baare Mein
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 pt-2">
                Dhaval Maharaj <span className="text-stone-500 font-sans text-lg block sm:inline font-normal">({siteConfig.fullName})</span>
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg font-serif leading-relaxed">
              <p>
                Dhaval Maharaj ke madhyam se Vedic parampara aur Sanatan sanskriti se jude vividh dharmik karya shraddha, samarpan aur vidhi-purvak karvaye jaate hain.
              </p>
              <p className="text-stone-900 font-medium font-sans text-sm sm:text-base bg-amber-50/60 p-4 rounded-xl border border-amber-200/50">
                Puja, Katha, Saptah, Yagna, Anushthan, Pitru Karya, Vastu, Mataji Seva, Jyotish evam anya Vedic karya ke liye aap sampark kar sakte hain.
              </p>
              <p className="italic text-stone-600 text-sm sm:text-base">
                Hamari prerna Vedic parampara, Sanatan sanskriti aur dharmik seva ko aage badhana hai.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {['Shraddha', 'Seva', 'Sanskar', 'Sanatan Parampara'].map((val) => (
                <div
                  key={val}
                  className="bg-white p-3 rounded-xl border border-stone-200 text-center shadow-xs"
                >
                  <span className="font-serif font-bold text-sm text-stone-900 block">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('918141306110', 'About Dhaval Maharaj - Enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Dhaval Maharaj</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
