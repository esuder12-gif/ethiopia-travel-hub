import { Listing, Destination } from '../lib/types';

export const LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Simien Lodge',
    category: 'Accommodations',
    region: 'Amhara',
    location: 'Simien Mountains',
    rating: 4.8,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-eco-lodge-0f8cd039-1774535345450.webp',
    description: 'The highest hotel in Africa, offering unparalleled views of the Simien Mountains and sustainable luxury.',
    gallery: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/hero-simien-mountains-9c041635-1774535349517.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-eco-lodge-0f8cd039-1774535345450.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-hotel-32add5f5-1774535352957.webp'
    ],
    features: ['High Altitude', 'Eco-friendly', 'Restaurant', 'Guided Tours'],
    isVerified: true
  },
  {
    id: '2',
    title: 'Ethio-Historic Tours',
    category: 'Tour Operators',
    region: 'Multi-region',
    location: 'Addis Ababa',
    rating: 4.9,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-tour-guide-95b59b08-1774535344257.webp',
    description: 'Expert-led tours covering the Historical Circuit, including Lalibela, Axum, and Gondar.',
    gallery: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/destination-lalibela-c565940c-1774535345483.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-tour-guide-95b59b08-1774535344257.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/destination-danakil-4ff503c0-1774535349647.webp'
    ],
    features: ['Multilingual Guides', 'Transportation included', 'Historical expertise'],
    isVerified: true
  },
  {
    id: '3',
    title: 'Addis Gourmet Experience',
    category: 'Wellness & Culture',
    region: 'Addis Ababa',
    location: 'Bole, Addis Ababa',
    rating: 4.7,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-restaurant-0412902a-1774535344395.webp',
    description: 'A traditional dining experience featuring the finest Injera and coffee ceremonies in a cultural setting.',
    gallery: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-restaurant-0412902a-1774535344395.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/listing-hotel-32add5f5-1774535352957.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/destination-bishoftu-cb28e0a7-1774535344484.webp'
    ],
    features: ['Traditional Music', 'Coffee Ceremony', 'Authentic Menu'],
    isVerified: true
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'lalibela',
    title: 'Lalibela',
    tagline: 'The Living Stone Miracle',
    description: '11 monolithic churches carved from solid rock in the 12th century.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/destination-lalibela-c565940c-1774535345483.webp'
  },
  {
    id: 'danakil',
    title: 'Danakil Depression',
    tagline: 'A journey to another planet',
    description: 'Sulfur springs, lava lakes, and one of the lowest points on Earth.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/destination-danakil-4ff503c0-1774535349647.webp'
  },
  {
    id: 'bishoftu',
    title: 'Bishoftu',
    tagline: 'Luxury retreats and crater lakes',
    description: 'Serene volcanic lakes surrounded by world-class resorts and spas.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/destination-bishoftu-cb28e0a7-1774535344484.webp'
  }
];