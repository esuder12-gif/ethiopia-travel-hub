import React from 'react';
import { DESTINATIONS } from '../../data/mock';
import { ArrowRight } from 'lucide-react';

const FeaturedDestinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B3621] mb-4">Featured Destinations</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Discover the most breathtaking landscapes and historic sites that Ethiopia has to offer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div 
              key={dest.id} 
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-white text-2xl font-bold mb-2">{dest.title}</h3>
                <p className="text-[#FCD116] font-semibold text-sm mb-3">{dest.tagline}</p>
                <p className="text-gray-200 text-sm line-clamp-2 mb-6">
                  {dest.description}
                </p>
                <button className="flex items-center gap-2 text-white font-bold group/btn">
                  Explore More 
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;