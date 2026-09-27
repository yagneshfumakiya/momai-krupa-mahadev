'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Calendar, User, Send, Flame } from 'lucide-react';
import { servicesData } from '@/data/services';
import { siteConfig } from '@/data/navigation';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('918141306110');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; city?: string }>({});

  const validate = () => {
    const errs: { name?: string; phone?: string; city?: string } = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!phone.trim() || phone.trim().length < 10) {
      errs.phone = 'Valid 10-digit mobile number is required';
    }
    if (!city.trim()) errs.city = 'City/Location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const link = getWhatsAppLink(
      selectedNumber,
      selectedService || 'General Vedic Seva',
      name,
      city,
      date,
      message
    );

    window.open(link, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
            Connect With Maharaj
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mt-3 mb-3">
            Planning a Puja or Vedic Seva?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Connect directly with Dhaval Maharaj to discuss your ceremony requirements, muhurat, and sankalp.
          </p>
          
          {/* Top Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href={`tel:${siteConfig.phones[0].number}`}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold font-sans shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c2410c]" />
              <span>Call Now ({siteConfig.phones[0].formatted})</span>
            </a>

            <a
              href={getWhatsAppLink('918141306110', 'Direct Contact Page Enquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white px-5 py-2.5 rounded-full text-xs font-bold font-sans shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Maharaj</span>
            </a>
          </div>
        </div>

        {/* 2-Column Form & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#faf8f5] p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-[#c2410c] uppercase tracking-widest block mb-1">
                  ॥ Shree Ganeshay Namah ॥
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  {siteConfig.brandName}
                </h3>
                <p className="text-stone-600 text-sm font-sans font-medium mt-1">
                  {siteConfig.panditName} <span className="text-stone-400">({siteConfig.fullName})</span>
                </p>
              </div>

              {/* Numbers */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">
                  Direct Phone / WhatsApp:
                </h4>

                {siteConfig.phones.map((p) => (
                  <div key={p.number} className="bg-white p-4 rounded-2xl border border-stone-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">{p.primary ? 'Primary Contact' : 'Secondary Contact'}</span>
                      <a href={`tel:${p.number}`} className="font-mono font-bold text-stone-900 text-base hover:text-[#c2410c] transition-colors">
                        {p.formatted}
                      </a>
                    </div>
                    <a
                      href={getWhatsAppLink(p.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-600 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2.5 text-xs text-stone-600 font-sans pt-2">
                <MapPin className="w-4 h-4 text-[#c2410c] shrink-0 mt-0.5" />
                <span>{siteConfig.location} & Global Remote Seva</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#faf8f5] p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4"
            >
              <div className="border-b border-stone-200 pb-4">
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Send Seva Enquiry
                </h3>
                <p className="text-stone-500 text-xs font-sans mt-1">
                  Fill out the form below to construct a prefilled WhatsApp enquiry message.
                </p>
              </div>

              {/* Number toggle */}
              <div>
                <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider font-sans mb-1.5">
                  Send WhatsApp Enquiry To:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedNumber('918141306110')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold font-mono transition-all border ${
                      selectedNumber === '918141306110'
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-white text-stone-700 border-stone-200'
                    }`}
                  >
                    Primary (8141306110)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedNumber('918200206189')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold font-mono transition-all border ${
                      selectedNumber === '918200206189'
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-white text-stone-700 border-stone-200'
                    }`}
                  >
                    Secondary (8200206189)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                      errors.name ? 'border-red-500' : 'border-stone-200'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30`}
                  />
                  {errors.name && <p className="text-red-500 text-[11px] mt-0.5">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                      errors.phone ? 'border-red-500' : 'border-stone-200'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Ahmedabad"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border ${
                      errors.city ? 'border-red-500' : 'border-stone-200'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30`}
                  />
                  {errors.city && <p className="text-red-500 text-[11px] mt-0.5">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Select Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                >
                  <option value="">-- Select a Service --</option>
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.devanagariTitle})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your puja requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c2410c] hover:bg-[#9a3412] text-white py-3 px-6 rounded-xl font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send WhatsApp Enquiry</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
