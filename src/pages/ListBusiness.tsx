import React from 'react';
import { toast } from 'sonner';
import { Building2, CheckCircle2 } from 'lucide-react';

const ListBusiness: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted! Our team will review your business details.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-[#4B3621] p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Building2 size={120} className="text-white" />
             </div>
             <h1 className="text-4xl font-bold text-white mb-4 relative z-10">Grow Your Travel Business</h1>
             <p className="text-gray-300 max-w-xl mx-auto relative z-10">
               Join Ethiopia's most trusted travel directory and reach thousands of travelers every month.
             </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#4B3621]">Why list with us?</h3>
                <ul className="space-y-4">
                  {['Increase visibility', 'Direct inquiries', 'High-quality galleries', 'Pro-Verified badge'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Company Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#FCD116]" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Category</label>
                  <select required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#FCD116]">
                    <option value="">Select Category</option>
                    <option value="Accommodations">Accommodations</option>
                    <option value="Tour Operators">Tour Operators</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#FCD116]" />
                </div>
                <div className="flex items-start gap-3 py-4">
                  <input type="checkbox" id="terms" required className="mt-1 accent-[#FCD116]" />
                  <label htmlFor="terms" className="text-sm text-gray-500 leading-tight cursor-pointer">
                    I agree to the Terms & Conditions.
                  </label>
                </div>
                <button type="submit" className="w-full py-4 bg-[#FCD116] text-[#4B3621] font-bold rounded-xl hover:bg-[#e6bf14] transition-all">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBusiness;