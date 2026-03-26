export type Category = 'Accommodations' | 'Tour Operators' | 'Transportation' | 'Wellness & Culture';
export type Region = 'Addis Ababa' | 'Amhara' | 'Tigray' | 'Oromia' | 'Afar' | 'SNNPR' | 'Multi-region' | 'near-me';

export interface Listing {
  id: string;
  title: string;
  category: Category;
  region: string;
  location: string;
  rating: number;
  image: string;
  thumbnail?: string;
  gallery: string[];
  description: string;
  features: string[];
  isVerified: boolean;
  priceRange?: string;
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  tagline?: string;
}