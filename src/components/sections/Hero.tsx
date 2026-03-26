import React, { useState } from 'react';
import { Search, MapPin, Grid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [region, setRegion] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/directory?q=${query}&cat=${category}&reg=${region}`);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/hero-simien-mountains-9c041635-1774535349517.webp)' }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Experience Ethiopia. <br />
          <span className="text-[#FCD116]">Authentically.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Connecting you to the Land of Origins. Find trusted hotels, guides, and tours.
        </p>

        {/* Search Bar */}
        <form 
          onSubmit={handleSearch}
          className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex-1 w-full flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <Search className="text-[#4B3621]/40 mr-3" size={20} />
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full focus:outline-none text-[#4B3621]"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          
          <div className="flex-1 w-full flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <Grid className="text-[#4B3621]/40 mr-3" size={20} />
            <select 
              className="w-full focus:outline-none text-[#4B3621] bg-transparent appearance-none"
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

          <div className="flex-1 w-full flex items-center px-4 py-2">
            <MapPin className="text-[#4B3621]/40 mr-3" size={20} />
            <select 
              className="w-full focus:outline-none text-[#4B3621] bg-transparent appearance-none"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">All Regions</option>
              <option value="Amhara">Amhara</option>
              <option value="Tigray">Tigray</option>
              <option value="Oromia">Oromia</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Afar">Afar</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#FCD116] text-[#4B3621] font-bold rounded-xl md:rounded-full hover:bg-[#e6bf14] transition-all"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;