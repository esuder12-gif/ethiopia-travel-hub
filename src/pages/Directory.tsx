import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListingCard } from '../components/directory/ListingCard';
import { LISTINGS } from '../data/mock';
import { Listing } from '../lib/types';
import { Search, SlidersHorizontal, Navigation } from 'lucide-react';
import { toast } from 'sonner';

const Directory: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredListings, setFilteredListings] = useState<Listing[]>(LISTINGS);
  const [isLocating, setIsLocating] = useState(false);

  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('cat') || '';
  const regionParam = searchParams.get('reg') || '';

  const [search, setSearch] = useState(queryParam);
  const [category, setCategory] = useState(categoryParam);
  const [region, setRegion] = useState(regionParam);

  useEffect(() => {
    let result = LISTINGS;

    if (queryParam) {
      result = result.filter(item => 
        item.title.toLowerCase().includes(queryParam.toLowerCase()) || 
        item.description.toLowerCase().includes(queryParam.toLowerCase())
      );
    }

    if (categoryParam) {
      result = result.filter(item => item.category === categoryParam);
    }

    if (regionParam && regionParam !== 'near-me') {
      result = result.filter(item => item.region === regionParam);
    }

    setFilteredListings(result);
  }, [queryParam, categoryParam, regionParam]);

  const handleApplyFilters = () => {
    setSearchParams({ q: search, cat: category, reg: region });
  };

  const handleNearMe = () => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false);
          setRegion('near-me');
          setSearchParams({ q: search, cat: category, reg: 'near-me' });
          toast.success("Showing businesses near your location!");
        },
        (error) => {
          setIsLocating(false);
          toast.error("Location access denied. Please select a region manually.");
        }
      );
    } else {
      setIsLocating(false);
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] pt-24 pb-20">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-[#4B3621] mb-4">Travel Directory</h1>
          <p className="text-gray-500">Browse through the best travel services in Ethiopia.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="bg-white p-8 rounded-3xl shadow-sm h-fit space-y-8 sticky top-28">
            <div className="flex items-center gap-2 mb-2">
              <SlidersHorizontal size={20} className="text-[#FCD116]" />
              <h3 className="font-bold text-lg">Filters</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Search</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input 
                    type="text" 
                    placeholder="Keywords..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#FCD116] text-sm transition-all"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Category</label>
                <select 
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#FCD116] text-sm transition-all cursor-pointer"
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

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Region</label>
                <div className="space-y-2">
                  <select 
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#FCD116] text-sm transition-all cursor-pointer"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="">All Regions</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Amhara">Amhara</option>
                    <option value="Oromia">Oromia</option>
                    <option value="Tigray">Tigray</option>
                    <option value="Afar">Afar</option>
                    <option value="near-me">Near Me (GPS)</option>
                  </select>
                  <button 
                    onClick={handleNearMe}
                    disabled={isLocating}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#4B3621] border border-dashed border-[#FCD116] rounded-xl hover:bg-[#FCD116]/10 transition-colors disabled:opacity-50"
                  >
                    <Navigation size={14} className={isLocating ? "animate-pulse" : ""} />
                    {isLocating ? "Locating..." : "Use Current Location"}
                  </button>
                </div>
              </div>

              <button 
                onClick={handleApplyFilters}
                className="w-full py-4 bg-[#4B3621] text-white font-bold rounded-xl hover:bg-[#322416] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#4B3621]/10"
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} onClick={() => window.location.href=`/listing/${listing.id}`} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl text-center shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-300" />
                </div>
                <p className="text-gray-500 text-lg mb-6">No listings found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearch('');
                    setCategory('');
                    setRegion('');
                    setSearchParams({});
                  }}
                  className="text-[#FCD116] font-bold border-b-2 border-[#FCD116] hover:text-[#4B3621] hover:border-[#4B3621] transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;