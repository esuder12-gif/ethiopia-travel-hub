import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LISTINGS } from '../data/mock';
import { Star, MapPin, ShieldCheck, Check, Send, Map as MapIcon } from 'lucide-react';
import { toast } from 'sonner';

const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const listing = LISTINGS.find(l => l.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Listing not found</h2>
          <Link to="/directory" className="text-[#FCD116] font-bold underline">Back to Directory</Link>
        </div>
      </div>
    );
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your inquiry has been sent! The provider will contact you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header / Gallery Section */}
      <section className="bg-gray-100 h-[400px] md:h-[600px] grid grid-cols-4 grid-rows-2 gap-2 p-2">
        <div className="col-span-4 md:col-span-2 row-span-2 relative overflow-hidden rounded-l-2xl">
          <img 
            src={listing.gallery[activeImage] || listing.image} 
            alt={listing.title} 
            className="w-full h-full object-cover"
          />
        </div>
        {listing.gallery.map((img, idx) => (
          <div 
            key={idx} 
            className={`hidden md:block relative overflow-hidden cursor-pointer rounded-2xl ${idx === activeImage ? 'ring-4 ring-[#FCD116]' : ''}`}
            onClick={() => setActiveImage(idx)}
          >
            <img src={img} alt={`${listing.title} ${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </section>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#FCD116]/20 text-[#4B3621] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {listing.category}
              </span>
              {listing.isVerified && (
                <span className="bg-[#4B3621] text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#FCD116]" />
                  Pro-Verified Partner
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#4B3621] mb-4">{listing.title}</h1>
            
            <div className="flex items-center gap-6 mb-8 text-gray-500">
              <div className="flex items-center gap-1">
                <Star size={20} className="fill-[#FCD116] text-[#FCD116]" />
                <span className="font-bold text-[#4B3621]">{listing.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={20} />
                <span>{listing.location}, {listing.region}</span>
              </div>
            </div>

            <hr className="mb-8 border-gray-100" />

            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <h3 className="text-[#4B3621] font-bold text-2xl mb-4">About this {listing.category}</h3>
              <p className="leading-relaxed">{listing.description}</p>
            </div>

            <div className="mb-12">
              <h3 className="text-[#4B3621] font-bold text-2xl mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <Check size={18} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mb-12">
              <h3 className="text-[#4B3621] font-bold text-2xl mb-6 flex items-center gap-2">
                <MapIcon size={24} className="text-[#FCD116]" />
                Location
              </h3>
              <div className="w-full h-80 bg-gray-100 rounded-3xl border border-gray-200 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 mx-auto animate-bounce">
                    <MapPin size={32} className="text-[#FCD116]" />
                  </div>
                  <p className="text-[#4B3621] font-bold text-lg">{listing.location}, {listing.region}</p>
                  <p className="text-gray-500 text-sm">Addis Ababa, Ethiopia</p>
                  <button className="mt-4 px-6 py-2 bg-[#4B3621] text-white rounded-full text-sm font-bold">
                    Open in Google Maps
                  </button>
                </div>
                {/* Decorative lines for "map" look */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/40"></div>
                <div className="absolute top-0 left-1/3 w-px h-full bg-white/40"></div>
                <div className="absolute top-0 left-2/3 w-px h-full bg-white/40"></div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 lg:sticky lg:top-28 transition-all hover:shadow-3xl">
              <h3 className="text-2xl font-bold text-[#4B3621] mb-6">Contact Now</h3>
              <p className="text-sm text-gray-500 mb-6">Directly message the provider for availability and custom rates.</p>
              <form onSubmit={handleInquiry} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FCD116] focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FCD116] focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Travel Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FCD116] focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Group Size</label>
                    <input type="number" min="1" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FCD116] focus:border-transparent transition-all" placeholder="1" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Your Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FCD116] focus:border-transparent transition-all" placeholder="Tell us about your trip..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#FCD116] text-[#4B3621] font-bold rounded-xl hover:bg-[#e6bf14] hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#FCD116]/20 flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Inquiry
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;