import React from 'react';
import { FileDown, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const Checklist: React.FC = () => {
  const handleDownload = () => {
    toast.success('Downloading your Travel Ethiopia 2026 Checklist...');
  };

  const categories = [
    { title: 'Documentation', items: ['Valid Passport', 'E-Visa', 'Travel Insurance'] },
    { title: 'Health', items: ['Yellow Fever Certificate', 'Malaria Prophylaxis'] },
    { title: 'Packing', items: ['Layered clothing', 'Hiking boots', 'Sunscreen'] }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4B3621] mb-4">Traveler’s Checklist</h1>
          <p className="text-gray-500 text-lg">Prepare for your journey to the Land of Origins.</p>
        </div>

        <div className="bg-[#FCD116]/10 border-2 border-[#FCD116] rounded-3xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#FCD116] rounded-2xl flex items-center justify-center text-[#4B3621]">
              <FileDown size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#4B3621]">2026 Ultimate Preparation Guide</h3>
              <p className="text-gray-600">A detailed PDF guide.</p>
            </div>
          </div>
          <button onClick={handleDownload} className="px-8 py-4 bg-[#4B3621] text-white font-bold rounded-xl hover:bg-[#322416] transition-all">
            Download Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {categories.map((cat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-[#4B3621] mb-6 border-b-2 border-[#FCD116] w-fit pb-1">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#FCD116] shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-3 text-amber-600 mb-4">
                <AlertTriangle size={24} />
                <h4 className="font-bold">Important Notice</h4>
              </div>
              <p className="text-gray-600 text-sm">Carry USD or Euros and exchange them at the airport.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;