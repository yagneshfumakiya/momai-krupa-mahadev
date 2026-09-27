'use client';

import React, { useState } from 'react';
import {
  Flame,
  BookOpen,
  Sparkles,
  Home,
  Feather,
  Crown,
  Sun,
  Flower2,
  Compass,
  Key,
  Heart,
  Award,
  CircleDot,
  Globe,
  Building2,
  ShieldCheck,
  Scroll,
  Users,
  CheckCircle2,
  MessageCircle,
  Search
} from 'lucide-react';
import { servicesData, ServiceItem } from '@/data/services';
import { getWhatsAppLink } from '@/lib/whatsapp';

const iconMap: Record<string, React.ElementType> = {
  Flame,
  BookOpen,
  Sparkles,
  Home,
  Feather,
  Crown,
  Sun,
  Flower2,
  Compass,
  Key,
  Heart,
  Award,
  CircleDot,
  Globe,
  Building2,
  ShieldCheck,
  Scroll,
  Users,
  CheckCircle2,
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services (19)' },
    { id: 'puja', label: 'Puja & Sanskar' },
    { id: 'katha', label: 'Katha & Saptah' },
    { id: 'yagna', label: 'Yagna & Havan' },
    { id: 'vastu', label: 'Vastu Seva' },
    { id: 'pitru', label: 'Pitru Seva' },
    { id: 'jyotish', label: 'Jyotish' },
    { id: 'mandir', label: 'Mandir Seva' },
    { id: 'special', label: 'Anushthan & Special' },
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.devanagariTitle.includes(searchQuery) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-white relative border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Dharmik Seva
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3 mb-2">
            Hamari Dharmik Seva
          </h2>
          <p className="text-sm text-stone-600 font-sans">
            Vedic parampara aur Sanatan sanskriti se jude vividh dharmik karyon ke liye sampark karein.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-[#faf8f5] text-stone-700 hover:bg-stone-200/60 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service (e.g. Rudrabhishek, Vastu, Bhagwat Katha)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#faf8f5] border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
            />
          </div>
        </div>

        {/* Grid of Modern Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Flame;
            return (
              <div
                key={service.id}
                className="group bg-[#faf8f5] rounded-3xl p-6 border border-stone-200/80 soft-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#c2410c] flex items-center justify-center shadow-xs border border-stone-200/60 group-hover:bg-[#c2410c] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-stone-500 bg-white px-2.5 py-1 rounded-full border border-stone-200/80">
                      {service.devanagariTitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-[#c2410c] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-sans mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.highlights.slice(0, 3).map((hl, idx) => (
                      <span key={idx} className="text-[11px] bg-white text-stone-600 px-2 py-0.5 rounded-md border border-stone-200/60">
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppLink('918141306110', service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#15803d] text-stone-800 hover:text-white py-2.5 px-4 rounded-xl border border-stone-200 text-xs font-semibold transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#15803d] group-hover:text-white" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-stone-500 font-sans">
            No matching services found.
          </div>
        )}

      </div>
    </section>
  );
}
