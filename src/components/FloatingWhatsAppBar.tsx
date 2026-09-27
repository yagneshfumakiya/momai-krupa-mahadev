'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/navigation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function FloatingWhatsAppBar() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden pointer-events-none">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200 shadow-xl pointer-events-auto">
        <a
          href={`tel:${siteConfig.phones[0].number}`}
          className="flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 py-2.5 px-3 rounded-xl text-xs font-bold font-sans transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#c2410c]" />
          <span>Call Now</span>
        </a>

        <a
          href={getWhatsAppLink('918141306110', 'Mobile Quick Enquiry')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#15803d] hover:bg-[#166534] text-white py-2.5 px-3 rounded-xl text-xs font-bold font-sans shadow-xs transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
