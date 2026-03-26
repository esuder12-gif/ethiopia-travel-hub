import React from 'react';
import { Search, MapPin, Grid } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string, category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('');

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/simien-mountains-hero-5013bf76-1774535670079.webp" 
          alt="Simien Mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Experience Ethiopia. <br /> Authentically.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Connecting you to the Land of Origins. Find trusted hotels, guides, and tours.
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="flex-1 flex items-center gap-3 px-6 py-2 w-full">
            <Search className="text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full bg-transparent border-none focus:ring-0 text-[#4B3621] placeholder:text-gray-400 py-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          <div className="hidden md:block w-px h-8 bg-gray-200" />

          <div className="flex-1 flex items-center gap-3 px-6 py-2 w-full">
            <Grid className="text-gray-400 w-5 h-5" />
            <select 
              className="w-full bg-transparent border-none focus:ring-0 text-[#4B3621] py-2 cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Accommodations">Accommodations</option>
              <option value="Tour Operators">Tour Operators</option>
              <option value="Transportation">Transportation</option>
              <option value="Wellness & Culture">Wellness & Culture</option>
            </select>
          </div>

          <button 
            onClick={() => onSearch(query, category)}
            className="w-full md:w-auto bg-[#FCD116] text-[#4B3621] font-bold px-10 py-4 rounded-xl md:rounded-full hover:bg-[#e2bc14] transition-all whitespace-nowrap"
          >
            Find Services
          </button>
        </div>
      </div>
    </section>
  );
};