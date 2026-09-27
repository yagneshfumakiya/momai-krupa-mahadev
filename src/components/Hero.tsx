'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/navigation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section id="hero" className="relative py-12 lg:py-20 bg-[#faf8f5] overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Modern Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Devotional Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-200 text-[#c2410c] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#c2410c]" />
              <span>॥ Shree Ganeshay Namah ॥</span>
            </div>

            {/* Main Brand & Pandit Headline */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-semibold text-[#c2410c] uppercase tracking-widest block font-sans">
                Momai Krupa Mahadev
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.15] tracking-tight">
                Dhaval Maharaj
              </h1>
            </div>

            {/* Tagline Services Bar */}
            <div className="text-xs sm:text-sm font-medium text-stone-600 font-sans tracking-wide py-1 border-y border-stone-200/80 inline-block">
              Vedic Puja • Katha • Yagna • Anushthan • Vastu • Jyotish
            </div>

            {/* Hindi / Hinglish Description */}
            <p className="text-base sm:text-lg text-stone-700 font-serif leading-relaxed max-w-2xl">
              "श्रद्धा, समर्पण और वैदिक परंपरा के साथ विभिन्न धार्मिक कार्य विधि-विधानपूर्वक सम्पन्न करवाने के लिए संपर्क करें।"
            </p>
            <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed max-w-xl">
              Authentic Sanatan religious ceremonies and traditional Vedic pujas performed with deep devotion and precise scriptural rituals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white px-7 py-3.5 rounded-2xl font-semibold text-sm shadow-sm hover:shadow-md transition-all group"
              >
                <span>Book a Seva</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getWhatsAppLink('918141306110', 'General Enquiry from Hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Statement */}
            <div className="pt-6 border-t border-stone-200/60 flex flex-wrap items-center gap-6 text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#c2410c]" />
                <span>Vedic Parampara</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#c2410c]" />
                <span>Shraddha & Samarpan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#c2410c]" />
                <span>Ahmedabad & Global Online Seva</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Photography Card Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft Ambient Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c2410c]/10 via-amber-200/40 to-stone-200/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
                  <Image
                    src="/images/about/dhaval-maharaj.jpg"
                    alt="Dhaval Maharaj performing Vedic Ceremony"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transform hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Glassmorphic Badge */}
                  <div className="absolute bottom-4 inset-x-4 glass-panel p-4 rounded-xl text-stone-900 shadow-md border border-white/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif font-bold text-base text-stone-900">
                          {siteConfig.panditName}
                        </h3>
                        <p className="text-xs text-stone-600 font-sans">
                          {siteConfig.fullName}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-amber-100 text-[#c2410c] text-[11px] font-bold">
                        Vedic Pandit
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
