import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Building2, Globe, FileText, CheckCircle } from 'lucide-react';

export const BusinessSubmission: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    toast.success('Application submitted! We will review your business within 48 hours.');
    reset();
  };

  return (
    <div className="py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#4B3621] mb-4">Grow Your Business</h1>
            <p className="text-xl text-gray-600">Join Ethiopia's most trusted travel network and connect with global travelers.</p>
          </div>

          <div className="bg-white rounded-[3rem] p-12 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#4B3621] flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-[#FCD116]" />
                    Company Info
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-bold text-[#4B3621] block mb-2">Business Name</label>
                      <input {...register('bizName', {required: true})} className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]" placeholder="e.g. Abyssinia Tours" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-[#4B3621] block mb-2">Business Category</label>
                      <select {...register('category')} className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]">
                        <option>Accommodations</option>
                        <option>Tour Operators</option>
                        <option>Transportation</option>
                        <option>Wellness & Culture</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold text-[#4B3621] block mb-2">Region of Operation</label>
                      <input {...register('region')} className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]" placeholder="Addis Ababa, etc." />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#4B3621] flex items-center gap-3">
                    <Globe className="w-6 h-6 text-[#FCD116]" />
                    Online Presence
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-bold text-[#4B3621] block mb-2">Website URL</label>
                      <input {...register('website')} className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]" placeholder="https://..." />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-[#4B3621] block mb-2">Contact Email</label>
                      <input {...register('contactEmail', {required: true})} type="email" className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]" placeholder="info@..." />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-[#4B3621] block mb-2">Phone Number</label>
                      <input {...register('phone')} className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]" placeholder="+251 ..." />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-[#4B3621] flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#FCD116]" />
                  Business Description
                </h3>
                <textarea {...register('description')} rows={5} className="w-full bg-[#F4F4F4] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#FCD116]" placeholder="Tell us about your services, history, and why travelers should choose you..." />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 rounded text-[#FCD116] focus:ring-[#FCD116]" />
                  <span className="text-sm text-gray-500">I agree to the Terms & Conditions and represent that all information provided is accurate and my business is legally registered in Ethiopia.</span>
                </div>
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-[#FCD116] text-[#4B3621] font-bold px-12 py-4 rounded-xl shadow-lg hover:shadow-[#FCD116]/20 transition-all"
                >
                  Submit Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};