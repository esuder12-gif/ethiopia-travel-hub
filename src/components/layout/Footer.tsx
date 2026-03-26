import React from 'react';
import { Mail, ExternalLink, Globe, MessageCircle, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: Globe, label: 'Website' },
    { Icon: Mail, label: 'Email' },
    { Icon: MessageCircle, label: 'Social' },
    { Icon: Share2, label: 'Share' },
  ];

  const habeshaPatternUrl = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5cbb3ad1-17e0-4008-865e-70477793160d/habesha-pattern-e65f1142-1774538039305.webp";

  return (
    <footer className="relative bg-[#4B3621] text-white pt-24 pb-12 overflow-hidden">
      {/* Habesha Kemis Style Pattern Watermark Background */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ 
          backgroundImage: `url('${habeshaPatternUrl}')`,
          backgroundSize: '250px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Decorative Border Line (Top) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FCD116] opacity-30"></div>
      
      {/* Subtle bottom pattern accent */}
      <div 
        className="absolute bottom-0 left-0 w-full h-16 opacity-[0.08] pointer-events-none"
        style={{ 
          backgroundImage: `url('${habeshaPatternUrl}')`,
          backgroundSize: '150px',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FCD116] rounded-lg flex items-center justify-center font-bold text-[#4B3621] text-xl shadow-lg">
                TE
              </div>
              <span className="text-xl font-bold tracking-tight">Travel Ethiopia</span>
            </div>
            <p className="text-white/60 mb-8 leading-relaxed">
              The premier digital directory connecting travelers with verified Ethiopian services. Land of Origins, authentically yours.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((social, i) => (
                <a key={i} href="#" aria-label={social.label} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FCD116] hover:text-[#4B3621] transition-all group">
                  <social.Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FCD116]">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>Home</button></li>
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>Destinations</button></li>
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>Service Directory</button></li>
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>List Your Business</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FCD116]">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>Traveler's FAQ</button></li>
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>Privacy Policy</button></li>
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>Terms of Service</button></li>
              <li><button className="hover:text-[#FCD116] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[1px] bg-[#FCD116] transition-all"></span>Contact Support</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FCD116]">Newsletter</h4>
            <p className="text-sm text-white/60 mb-6">Get monthly updates on new destinations and verified operators.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FCD116] transition-colors placeholder:text-white/20"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-[#FCD116] text-[#4B3621] rounded-lg hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © 2024 Travel Ethiopia. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 px-4 py-2 bg-white/5 rounded-full border border-white/5">
             <div className="w-3 h-3 bg-[#FCD116] rounded-full"></div>
             <div className="w-3 h-3 bg-red-600 rounded-full"></div>
             <div className="w-3 h-3 bg-green-600 rounded-full"></div>
             <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold ml-2">Pride of Ethiopia</span>
          </div>
          <p className="text-white/40 text-[10px] text-center md:text-right max-w-md leading-relaxed">
            Travel Ethiopia is a directory platform. We facilitate connections but are not liable for services provided by third-party operators.
          </p>
        </div>
      </div>
    </footer>
  );
};