import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedDestinations from '../components/sections/FeaturedDestinations';
import { ListingCard } from '../components/directory/ListingCard';
import { TestimonialSlider } from '../components/sections/TestimonialSlider';
import { LISTINGS } from '../data/mock';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLeadMagnet = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Checklist sent to your email!');
  };

  return (
    <div>
      <Hero />
      
      <section className="py-24 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B3621] mb-4">Trusted Travel Partners</h2>
              <p className="text-gray-500">Curated accommodations and tour operators you can trust.</p>
            </div>
            <Link to="/directory" className="text-[#4B3621] font-bold border-b-2 border-[#FCD116] pb-1 hover:text-[#FCD116] transition-colors">
              Explore Entire Directory
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LISTINGS.map(listing => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                onClick={(l) => navigate(`/listing/${l.id}`)} 
              />
            ))}
          </div>
        </div>
      </section>

      <FeaturedDestinations />

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-[#4B3621] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative group">
            {/* Decorative background circle */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#FCD116] rounded-full opacity-5 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Explore the <span className="text-[#FCD116]">Land of Origins?</span></h2>
              <p className="text-gray-300 text-lg mb-2">Download our <span className="text-[#FCD116] font-bold">2026 Ultimate Preparation Guide</span>.</p>
              <p className="text-white/40 text-sm">Over 10,000 travelers have already used our guide this year.</p>
            </div>
            <form onSubmit={handleLeadMagnet} className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email" required className="px-6 py-4 rounded-2xl focus:outline-none w-full sm:w-80 text-[#4B3621] font-medium shadow-inner" />
              <button type="submit" className="bg-[#FCD116] text-[#4B3621] font-bold px-8 py-4 rounded-2xl hover:bg-[#e6bf14] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#FCD116]/20">Get My Copy</button>
            </form>
          </div>
        </div>
      </section>

      <TestimonialSlider />
    </div>
  );
};

export default Home;