export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  date?: string;
  location?: string;
}

export const galleryCategories: string[] = [
  'All',
  'Puja',
  'Katha',
  'Yagna & Havan',
  'Vastu',
  'Sanskar',
  'Mandir Seva',
  'Pitru Karya',
  'Mataji Seva',
  'Ganesh Puja',
  'Pran Pratishtha',
  'Other',
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'puja-01',
    src: '/images/gallery/puja/puja-1.jpg',
    alt: 'Vedic Puja Vidhi performed by Dhaval Maharaj',
    caption: 'Vedic Puja & Shodhshopachar Ceremony',
    category: 'Puja',
    location: 'Ahmedabad, Gujarat',
  },
  {
    id: 'puja-02',
    src: '/images/gallery/puja/puja-2.jpg',
    alt: 'Paramparik Vedic Pujan Rituals',
    caption: 'Paramparik Shastriya Vedic Vidhi',
    category: 'Puja',
    location: 'Ahmedabad, Gujarat',
  },
  {
    id: 'katha-01',
    src: '/images/gallery/katha/katha-1.jpg',
    alt: 'Dharmik Katha & Saptah Aayojan by Dhaval Maharaj',
    caption: 'Bhaktimay Katha & Vyas Pith Pujan',
    category: 'Katha',
    location: 'Gujarat',
  },
  {
    id: 'saptah-01',
    src: '/images/gallery/saptah/saptah-1.jpg',
    alt: 'Shrimad Bhagwat Saptah Mahotsav',
    caption: 'Shrimad Bhagwat Saptah Mahotsav',
    category: 'Katha',
    location: 'Gujarat',
  },
  {
    id: 'yagna-01',
    src: '/images/gallery/yagna/yagna-1.jpg',
    alt: 'Vedic Yagna & Hom-Havan',
    caption: 'Vedic Yagna & Ahuti Vidhi',
    category: 'Yagna & Havan',
    location: 'Ahmedabad',
  },
  {
    id: 'havan-01',
    src: '/images/gallery/havan/havan-1.jpg',
    alt: 'Sacred Agni Havan Ritual',
    caption: 'Pavitra Agni Havan & Mantra Jaap',
    category: 'Yagna & Havan',
    location: 'Ahmedabad',
  },
  {
    id: 'rudrabhishek-01',
    src: '/images/gallery/rudrabhishek/rudrabhishek-1.jpg',
    alt: 'Bhagwan Mahadev Rudrabhishek Puja',
    caption: 'Shivling Abhishek & Rudri Path',
    category: 'Puja',
    location: 'Ahmedabad',
  },
  {
    id: 'pitru-01',
    src: '/images/gallery/pitru/pitru-1.jpg',
    alt: 'Pitru Karya & Tarpan Vidhi',
    caption: 'Pitru Tarpan & Shraddh Seva',
    category: 'Pitru Karya',
    location: 'Ahmedabad',
  },
  {
    id: 'mataji-01',
    src: '/images/gallery/mataji/mataji-1.jpg',
    alt: 'Mataji Seva & Navchandi Anushthan',
    caption: 'Mataji Seva & Chandi Path',
    category: 'Mataji Seva',
    location: 'Gujarat',
  },
  {
    id: 'ganesh-01',
    src: '/images/gallery/ganesh/ganesh-1.jpg',
    alt: 'Shri Ganesh Pujan & Sthapana',
    caption: 'Shri Ganesh Pujan & Atharvashirsha',
    category: 'Ganesh Puja',
    location: 'Ahmedabad',
  },
  {
    id: 'vastu-01',
    src: '/images/gallery/vastu/vastu-1.jpg',
    alt: 'Vastu Puja & Griha Shanti',
    caption: 'Vastu Shanti Yagna & Griha Pravesh',
    category: 'Vastu',
    location: 'Ahmedabad',
  },
  {
    id: 'mandir-01',
    src: '/images/gallery/mandir/mandir-1.jpg',
    alt: 'Mandir Seva & Pujan',
    caption: 'Mandir Pujan & Dev Seva',
    category: 'Mandir Seva',
    location: 'Gujarat',
  },
  {
    id: 'pran-pratishtha-01',
    src: '/images/gallery/pran-pratishtha/pran-pratishtha-1.jpg',
    alt: 'Mandir Murti Pran Pratishtha Mahotsav',
    caption: 'Mandir Murti Pran Pratishtha Vidhi',
    category: 'Pran Pratishtha',
    location: 'Gujarat',
  },
  {
    id: 'gor-bapa-01',
    src: '/images/gallery/gor-bapa/gor-bapa-1.jpg',
    alt: 'Gor Bapa Paramparik Seva',
    caption: 'Gor Bapa Seva & Sanskar Vidhi',
    category: 'Sanskar',
    location: 'Gujarat',
  },
  {
    id: 'other-01',
    src: '/images/gallery/other/other-1.jpg',
    alt: 'Sanatan Dharmik Karyakram Seva',
    caption: 'Vedic Sanatan Dharmik Karya',
    category: 'Other',
    location: 'Gujarat',
  },
];
