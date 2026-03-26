import React from 'react';
import { Star, MapPin, BadgeCheck, ShieldCheck } from 'lucide-react';
import { Listing } from '../../lib/types';

interface ListingCardProps {
  listing: Listing;
  onClick: (listing: Listing) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => onClick(listing)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={listing.image} 
          alt={listing.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#4B3621] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {listing.category}
          </span>
        </div>
        {listing.isVerified && (
          <div className="absolute top-4 right-4">
            <div className="bg-[#FCD116] p-1.5 rounded-full shadow-sm" title="Pro-Verified">
              <BadgeCheck className="w-5 h-5 text-[#4B3621]" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-[#FCD116] text-[#FCD116]" />
          <span className="text-sm font-bold text-[#4B3621]">{listing.rating}</span>
          <span className="text-sm text-gray-400 font-medium ml-1">(Verified)</span>
        </div>
        
        <h3 className="text-xl font-bold text-[#4B3621] mb-1 group-hover:text-[#FCD116] transition-colors">
          {listing.title}
        </h3>

        <div className="flex items-center gap-1 text-[#FCD116] font-bold text-xs uppercase mb-4">
          <ShieldCheck size={14} />
          <span>Verified Partner</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6">
          <MapPin className="w-4 h-4" />
          {listing.location}, {listing.region}
        </div>

        <button className="w-full py-3 rounded-xl border-2 border-[#F4F4F4] text-[#4B3621] font-bold group-hover:border-[#FCD116] group-hover:bg-[#FCD116]/5 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};