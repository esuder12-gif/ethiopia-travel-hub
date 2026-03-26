import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Download, CheckCircle2 } from 'lucide-react';

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const LeadMagnet: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    toast.success('Checklist sent to your email!');
    reset();
  };

  return (
    <section className="py-24 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <div className="bg-[#4B3621] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCD116]/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FCD116]/10 rounded-full -ml-20 -mb-20 blur-3xl" />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready for your <br /> Ethiopian Adventure?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md">
              Download the 2026 Ultimate Preparation Checklist (PDF) and travel with confidence.
            </p>
            <div className="space-y-4">
              {['Packing List', 'Visa Info', 'Local Customs', 'Emergency Contacts'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/90 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-[#FCD116]" />
                  <span>{item} Included</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#FCD116] focus:border-transparent transition-all"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message as string}</p>}
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#FCD116] text-[#4B3621] font-bold py-4 rounded-xl shadow-lg hover:shadow-[#FCD116]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Get Free Checklist
                </button>
                <p className="text-xs text-center text-white/50">
                  By signing up, you agree to our Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};