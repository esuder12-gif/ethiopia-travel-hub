import { Listing, Destination } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: 'Lalibela Churches',
    description: 'Breathtaking rock-hewn churches, a UNESCO World Heritage site.',
    image: 'https://images.unsplash.com/photo-1543332143-34e85740d99a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    title: 'Simien Mountains',
    description: 'Dramatic landscapes and unique wildlife in the Horn of Africa.',
    image: 'https://images.unsplash.com/photo-1590011985448-f9b96c813083?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    title: 'Omo Valley',
    description: 'Experience the diverse and ancient cultures of Southern Ethiopia.',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=1200'
  }
];

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Mountain Retreat',
    category: 'Accommodations',
    region: 'Amhara',
    location: 'Debre Berhan',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    gallery: [],
    description: 'A cozy retreat in the mountains.',
    features: ['Wi-Fi', 'Breakfast'],
    isVerified: true
  },
  {
    id: '2',
    title: 'Addis Spa & Wellness',
    category: 'Wellness & Culture',
    region: 'Addis Ababa',
    location: 'Bole',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d8e1c6?auto=format&fit=crop&q=80&w=800',
    gallery: [],
    description: 'Relax and rejuvenate.',
    features: ['Massage', 'Sauna'],
    isVerified: true
  },
  {
    id: '3',
    title: 'Historic North Tour',
    category: 'Tour Operators',
    region: 'Tigray',
    location: 'Axum',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1543332143-34e85740d99a?auto=format&fit=crop&q=80&w=800',
    gallery: [],
    description: 'Explore the history of Axum.',
    features: ['Guide', 'Transport'],
    isVerified: true
  },
  {
    id: '4',
    title: 'Danakil Expedition',
    category: 'Transportation',
    region: 'Afar',
    location: 'Dallol',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1590011985448-f9b96c813083?auto=format&fit=crop&q=80&w=800',
    gallery: [],
    description: 'Journey to the hottest place on Earth.',
    features: ['4x4', 'Full Board'],
    isVerified: true
  }
];