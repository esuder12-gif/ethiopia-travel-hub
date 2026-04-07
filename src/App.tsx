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
useEffect(() => {
    (function() {
      var config = {
        agentId: '830688f4-d422-4684-bdfa-274cd55080bc',
        widgetUrl: 'https://dala.gebeya.com/agents/830688f4-d422-4684-bdfa-274cd55080bc/embed?primaryColor=%232E7D32&secondaryColor=%23D4AF37&greeting=Welcome+to+Travel+Ethiopia&hideHeader=false&agentName=Selam',
        primaryColor: '#2E7D32',
        position: 'bottom-right',
        agentName: 'Selam | TE Guide'
      };
      
      var script = document.createElement('script');
      script.innerHTML = `
        (function() {
          var config = ${JSON.stringify(config)};
          // ... your bubble widget logic here ...
          var button = document.createElement('div');
          button.id = 'ai-chat-bubble';
          button.style.cssText = 'position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px; border-radius: 50%; background: ' + config.primaryColor + '; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 9999;';
          button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
          
          var chatWindow = document.createElement('div');
          chatWindow.style.cssText = 'position: fixed; bottom: 90px; right: 20px; width: 400px; height: 600px; border-radius: 12px; display: none; z-index: 10000; background: white; box-shadow: 0 8px 40px rgba(0,0,0,0.2); overflow: hidden;';
          var iframe = document.createElement('iframe');
          iframe.src = config.widgetUrl;
          iframe.style.cssText = 'width: 100%; height: 100%; border: none;';
          chatWindow.appendChild(iframe);

          button.onclick = function() {
            chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
          };

          document.body.appendChild(button);
          document.body.appendChild(chatWindow);
        })();
      `;
      document.body.appendChild(script);
    })();
  }, []);
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
