'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function KathaSaptah() {
  const kathaTags = [
    'Shrimad Bhagwat Katha',
    'Shiv Katha',
    'Ram Katha',
    'Satyanarayan Katha',
    'Devi Bhagwat',
    'Sundarkand',
    'Hanuman Katha',
    'Anya Dharmik Katha',
  ];

  return (
    <section id="katha-saptah" className="py-20 bg-[#faf8f5] relative border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Vyas Pith Seva
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3 mb-2">
            Katha & Saptah
          </h2>
          <p className="text-sm text-stone-600 font-sans">
            Vividh dharmik kathao aur saptah ka aayojan Vedic parampara aur shraddha ke saath.
          </p>
        </div>

        {/* 2-Column Visual & Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Large Ceremony Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              <Image
                src="/images/katha/katha.jpg"
                alt="Dhaval Maharaj performing Bhagwat Katha"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Modern Content & Chips */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold text-[#c2410c] block mb-1">
                Sangeetmay & Shastriya Aayojan
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Bhagwat, Shiv & Ram Katha Mahotsav
              </h3>
            </div>

            <p className="text-stone-600 text-sm sm:text-base font-sans leading-relaxed">
              Dhaval Maharaj ke madhyam se Shrimad Bhagwat Saptah, Shiv Purana, Ramcharitmanas Gyan Yagna evam Satyanarayan Vrat Katha ka Bhaktimay va Shastriya vidhi dwara aayojan karvaya jaata hai.
            </p>

            {/* Modern Chips/Tags Grid */}
            <div>
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                Available Katha & Saptah Seva:
              </h4>
              <div className="flex flex-wrap gap-2">
                {kathaTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-[#faf8f5] text-stone-800 px-3 py-1.5 rounded-full border border-stone-200 hover:border-[#c2410c] transition-colors"
                  >
                    ✨ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('918141306110', 'Katha & Saptah Aayojan Enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire for Katha Aayojan</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
