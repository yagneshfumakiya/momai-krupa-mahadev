export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Katha & Saptah', href: '#katha-saptah' },
  { name: 'Pran Pratishtha', href: '#pran-pratishtha' },
  { name: 'Pitru Seva', href: '#pitru-seva' },
  { name: 'Vastu Seva', href: '#vastu-seva' },
  { name: 'Online Seva', href: '#online-seva' },
  { name: 'Jyotish', href: '#jyotish' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const siteConfig = {
  brandName: 'Momai Krupa Mahadev',
  panditName: 'Dhaval Maharaj',
  fullName: 'Dhaval Sanjaybhai Rajayguru',
  tagline: 'Vedic Puja • Katha • Saptah • Yagna • Anushthan • Vastu • Jyotish • Sanatan Seva',
  inscription: '॥ Shree Ganeshay Namah ॥',
  hindiDescription: 'श्रद्धा, समर्पण और वैदिक परंपरा के साथ विभिन्न धार्मिक कार्य विधि-विधानपूर्वक सम्पन्न करवाने के लिए संपर्क करें।',
  englishDescription: 'Vedic traditions and Sanatan religious ceremonies performed with devotion, dedication, and traditional rituals.',
  phones: [
    { number: '8141306110', formatted: '+91 81413 06110', whatsapp: '918141306110', primary: true },
    { number: '8200206189', formatted: '+91 82002 06189', whatsapp: '918200206189', primary: false },
  ],
  location: 'Ahmedabad, Gujarat, India',
  onlineServicesCoverage: 'India (Ahmedabad & nationwide) & Abroad (USA, UK, Canada, Australia, UAE, Europe)',
};
