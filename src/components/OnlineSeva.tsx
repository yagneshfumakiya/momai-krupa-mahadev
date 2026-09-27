'use client';

import React from 'react';
import { Globe, Video, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function OnlineSeva() {
  const locations = ['India', 'USA', 'UK', 'Canada', 'Worldwide Online'];

  const features = [
    { title: 'Live Video Sankalp & Puja', desc: 'Real-time interactive video stream of your sankalp & ceremony.' },
    { title: 'Online Mantra Jaap & Anushthan', desc: 'Special Purashcharan and mantra chanting tailored for your gotra.' },
    { title: 'Remote Jyotish Consultation', desc: 'Direct audio/video consultation for Kundli and Shubh Muhurat.' },
  ];

  return (
    <section id="online-seva" className="py-20 bg-[#faf8f5] relative border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#2d0612] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#d4af37]/30 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3c0919] text-[#facc15] text-xs font-semibold border border-[#d4af37]/30">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Sanatan Seva</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
                Vedic Seva, Wherever You Are
              </h2>

              <p className="text-amber-200/90 text-sm sm:text-base font-serif leading-relaxed">
                Aap India ke kisi bhi shehar mein ho ya abroad — USA, UK, Canada aur anya deshon mein — sankalp ke anusaar Online Vedic Puja, Mantra Jaap, Anushthan aur anya dharmik seva ki vyavastha ki ja sakti hai.
              </p>

              {/* Location Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {locations.map((loc) => (
                  <span
                    key={loc}
                    className="text-xs bg-[#3c0919] text-amber-100 px-3 py-1 rounded-full border border-[#d4af37]/20"
                  >
                    📍 {loc}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href={getWhatsAppLink('918141306110', 'Online Vedic Seva Enquiry')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all border border-amber-300/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire for Online Seva</span>
                </a>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-5 space-y-3">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#3c0919]/80 p-4 rounded-2xl border border-[#d4af37]/20 flex items-start gap-3.5"
                >
                  <Video className="w-5 h-5 text-[#facc15] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-sm text-amber-100">
                      {feat.title}
                    </h3>
                    <p className="text-amber-200/70 text-xs font-sans mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
