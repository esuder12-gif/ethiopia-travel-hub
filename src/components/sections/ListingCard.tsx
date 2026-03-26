import React from 'react';
import { Star, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Listing } from '../../lib/types';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={listing.image} 
          alt={listing.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#4B3621] flex items-center gap-1">
          <Star size={14} className="fill-[#FCD116] text-[#FCD116]" />
          {listing.rating}
        </div>
        {listing.isVerified && (
          <div className="absolute top-4 left-4 bg-[#FCD116] px-3 py-1 rounded-full text-xs font-bold text-[#4B3621] flex items-center gap-1">
            <ShieldCheck size={14} />
            Pro-Verified
          </div>
        )}
      </div>
      
      <div className="p-6">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 block">
          {listing.category}
        </span>
        <h3 className="text-xl font-bold text-[#4B3621] mb-2 line-clamp-1">{listing.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          {listing.location}
        </div>
        
        <Link 
          to={`/directory/${listing.id}`}
          className="block w-full text-center py-3 rounded-xl border-2 border-[#FCD116] text-[#4B3621] font-bold hover:bg-[#FCD116] transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;