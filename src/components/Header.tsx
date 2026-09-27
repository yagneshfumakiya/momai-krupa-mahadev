'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/data/navigation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-[#faf8f5] py-4 border-b border-stone-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-amber-100/80 text-[#c2410c] flex items-center justify-center font-bold text-lg border border-amber-200/60 group-hover:bg-[#c2410c] group-hover:text-white transition-colors">
            ॐ
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-stone-900 group-hover:text-[#c2410c] transition-colors">
              Momai Krupa Mahadev
            </span>
            <span className="text-[11px] text-stone-500 font-sans tracking-wide">
              Dhaval Maharaj • Vedic Pandit
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right WhatsApp Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={getWhatsAppLink('918141306110', 'Header Quick Enquiry')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white px-4 py-2 rounded-full font-medium text-xs lg:text-sm transition-all shadow-xs hover:shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={getWhatsAppLink('918141306110')}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#15803d] text-white text-xs"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-[#c2410c] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-stone-100 space-y-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#c2410c] text-white py-2.5 rounded-xl text-sm font-semibold shadow-xs"
            >
              <span>Book a Seva</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
