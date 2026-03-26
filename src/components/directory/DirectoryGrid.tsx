import React from 'react';
import { Listing } from '../../lib/types';
import { LISTINGS } from '../../lib/data';
import { ListingCard } from './ListingCard';
import { Search, Filter, X } from 'lucide-react';

interface DirectoryGridProps {
  initialSearch?: string;
  initialCategory?: string;
  onSelectListing: (listing: Listing) => void;
}

export const DirectoryGrid: React.FC<DirectoryGridProps> = ({ initialSearch = '', initialCategory = '', onSelectListing }) => {
  const [searchQuery, setSearchQuery] = React.useState(initialSearch);
  const [activeCategory, setActiveCategory] = React.useState(initialCategory);
  const [activeRegion, setActiveRegion] = React.useState('');

  const categories = ['Accommodations', 'Tour Operators', 'Transportation', 'Wellness & Culture'];
  const regions = ['Addis Ababa', 'Amhara', 'Tigray', 'Oromia', 'Afar', 'SNNPR'];

  const filteredListings = LISTINGS.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? listing.category === activeCategory : true;
    const matchesRegion = activeRegion ? listing.region === activeRegion : true;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-80 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#4B3621]">Filters</h3>
              {(activeCategory || activeRegion || searchQuery) && (
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory(''); setActiveRegion('');}}
                  className="text-xs text-red-500 font-bold hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-bold text-[#4B3621] block mb-3">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search keywords..." 
                    className="w-full pl-10 pr-4 py-2 bg-[#F4F4F4] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#FCD116]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-[#4B3621] block mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(activeCategory === cat ? '' : cat)}
                      className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-all ${
                        activeCategory === cat ? 'bg-[#FCD116] text-[#4B3621] font-bold' : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-[#4B3621] block mb-3">Region</label>
                <select 
                  className="w-full bg-[#F4F4F4] border-none rounded-xl text-sm py-2 px-4 focus:ring-2 focus:ring-[#FCD116]"
                  value={activeRegion}
                  onChange={(e) => setActiveRegion(e.target.value)}
                >
                  <option value="">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Listings Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500">
              Showing <span className="font-bold text-[#4B3621]">{filteredListings.length}</span> verified services
            </p>
          </div>

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.map(listing => (
                <ListingCard 
                  key={listing.id} 
                  listing={listing} 
                  onClick={onSelectListing}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-[#4B3621] mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};