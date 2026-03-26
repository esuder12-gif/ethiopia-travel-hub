import React from 'react';
import { Listing } from '../../lib/types';
import { ArrowLeft, Star, MapPin, BadgeCheck, Phone, Mail, Calendar, Users, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ListingDetailsProps {
  listing: Listing;
  onBack: () => void;
}

export const ListingDetails: React.FC<ListingDetailsProps> = ({ listing, onBack }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    toast.success('Inquiry sent! The operator will contact you shortly.');
    reset();
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#4B3621] font-bold hover:text-[#FCD116] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Directory
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px]">
              <div className="h-full">
                <img 
                  src={listing.gallery[0]} 
                  alt={listing.title} 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="grid grid-rows-2 gap-4 h-full">
                <img 
                  src={listing.gallery[1]} 
                  alt={listing.title} 
                  className="w-full h-full object-cover rounded-3xl"
                />
                <img 
                  src={listing.gallery[2]} 
                  alt={listing.title} 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Info */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#FCD116]/10 text-[#4B3621] text-xs font-bold px-4 py-1.5 rounded-full">
                      {listing.category}
                    </span>
                    {listing.isVerified && (
                      <span className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full border border-green-100">
                        <BadgeCheck className="w-4 h-4" />
                        Pro-Verified
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold text-[#4B3621]">{listing.title}</h1>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-5 h-5 fill-[#FCD116] text-[#FCD116]" />
                    <span className="text-2xl font-bold text-[#4B3621]">{listing.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Customer Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-500 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{listing.location}, {listing.region}</span>
                </div>
              </div>

              <div className="prose prose-brown max-w-none">
                <h3 className="text-2xl font-bold text-[#4B3621] mb-4">About this service</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {listing.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-4">
                  Ethiopia is a land of wonder and ancient history. When you book with a Pro-Verified operator like {listing.title}, you're ensuring that your journey is handled by experts who understand the cultural nuances and logistical requirements of traveling in this beautiful nation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <aside className="w-full lg:w-[400px]">
            <div className="sticky top-32 bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-50">
              <h3 className="text-2xl font-bold text-[#4B3621] mb-6">Contact Now</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-[#4B3621] block mb-2">Your Name</label>
                  <input 
                    {...register('name', { required: true })}
                    className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-[#4B3621] block mb-2">Email Address</label>
                  <input 
                    {...register('email', { required: true })}
                    type="email"
                    className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-[#4B3621] block mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        {...register('date')}
                        type="date"
                        className="w-full bg-[#F4F4F4] border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#FCD116]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-[#4B3621] block mb-2">Group Size</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        {...register('size')}
                        type="number"
                        min="1"
                        className="w-full bg-[#F4F4F4] border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#FCD116]"
                        placeholder="1"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-[#4B3621] block mb-2">Message</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    className="w-full bg-[#F4F4F4] border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#FCD116]"
                    placeholder="I would like to inquire about..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#FCD116] text-[#4B3621] font-bold py-4 rounded-xl shadow-lg hover:shadow-[#FCD116]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Operator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email directly</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};