import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { FeaturedDestinations } from './components/home/FeaturedDestinations';
import { LeadMagnet } from './components/home/LeadMagnet';
import { DirectoryGrid } from './components/directory/DirectoryGrid';
import { ListingDetails } from './components/directory/ListingDetails';
import { BusinessSubmission } from './components/forms/BusinessSubmission';
import { Footer } from './components/layout/Footer';
import { Listing } from './lib/types';
import { motion, AnimatePresence } from 'framer-motion';

type View = 'home' | 'directory' | 'details' | 'submission';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [searchParams, setSearchParams] = useState({ query: '', category: '' });

  const handleSearch = (query: string, category: string) => {
    setSearchParams({ query, category });
    setCurrentView('directory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectListing = (listing: Listing) => {
    setSelectedListing(listing);
    setCurrentView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#4B3621]">
      <Toaster position="top-center" expand={true} richColors />
      <Navbar onNavigate={(v) => navigateTo(v as View)} currentView={currentView} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero onSearch={handleSearch} />
              <FeaturedDestinations />
              <LeadMagnet />
            </motion.div>
          )}

          {currentView === 'directory' && (
            <motion.div
              key="directory"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="py-20 bg-[#F4F4F4]">
                <div className="container mx-auto px-4 text-center">
                  <h1 className="text-5xl font-bold mb-4">Service Directory</h1>
                  <p className="text-gray-600">Discover top-rated travel services across Ethiopia</p>
                </div>
              </div>
              <DirectoryGrid 
                initialSearch={searchParams.query}
                initialCategory={searchParams.category}
                onSelectListing={handleSelectListing}
              />
            </motion.div>
          )}

          {currentView === 'details' && selectedListing && (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <ListingDetails 
                listing={selectedListing} 
                onBack={() => navigateTo('directory')} 
              />
            </motion.div>
          )}

          {currentView === 'submission' && (
            <motion.div
              key="submission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <BusinessSubmission />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;