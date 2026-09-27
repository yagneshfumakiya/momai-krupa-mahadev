'use client';

import React from 'react';
import { Phone, MessageCircle, ArrowUp, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '@/data/navigation';
import { servicesData } from '@/data/services';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Katha', href: '#katha-saptah' },
    { name: 'Vastu', href: '#vastu-seva' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c2410c] text-white flex items-center justify-center font-bold text-lg">
                ॐ
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {siteConfig.brandName}
                </h3>
                <p className="text-xs text-stone-400 font-sans">
                  {siteConfig.panditName} • Vedic Pandit
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
              Vedic traditions and Sanatan religious ceremonies performed with devotion, dedication, and traditional rituals by Dhaval Maharaj ({siteConfig.fullName}).
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-stone-400 font-sans">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c2410c]" />
                <span>{siteConfig.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#c2410c]" />
                <span>Online Seva across India & International</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {servicesData.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${siteConfig.phones[0].number}`}
                className="flex items-center gap-2 bg-stone-800 p-2.5 rounded-xl text-stone-200 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c2410c]" />
                <span>{siteConfig.phones[0].formatted} (Primary)</span>
              </a>

              <a
                href={`tel:${siteConfig.phones[1].number}`}
                className="flex items-center gap-2 bg-stone-800 p-2.5 rounded-xl text-stone-200 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c2410c]" />
                <span>{siteConfig.phones[1].formatted} (Secondary)</span>
              </a>

              <a
                href={getWhatsAppLink('918141306110')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white py-2.5 rounded-xl font-semibold text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-stone-500">
          <p>© {currentYear} Momai Krupa Mahadev — Dhaval Maharaj. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs text-stone-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
