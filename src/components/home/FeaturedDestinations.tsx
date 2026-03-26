import React from 'react';
import { DESTINATIONS } from '../../lib/data';
import { ChevronRight } from 'lucide-react';

export const FeaturedDestinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4B3621] mb-4">Must-Visit Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From ancient historical sites to breathtaking natural wonders, explore the very best of Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <div 
              key={dest.id}
              className="group relative h-[450px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{dest.title}</h3>
                <p className="text-white/80 mb-4 line-clamp-2">{dest.description}</p>
                <div className="inline-flex items-center gap-2 text-[#FCD116] font-bold group-hover:gap-4 transition-all">
                  Explore Now <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};