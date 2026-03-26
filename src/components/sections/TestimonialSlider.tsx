import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "The Simien Lodge experience was absolutely breathtaking. Travel Ethiopia made it so easy to verify that we were booking with a legitimate and eco-conscious partner.",
    author: "Sarah Jenkins",
    location: "United Kingdom",
    rating: 5
  },
  {
    quote: "Finding a reliable tour operator for the Danakil Depression was our biggest concern. The 'Verified' badges gave us the confidence we needed for a life-changing trip.",
    author: "Marc & Elena",
    location: "Spain",
    rating: 5
  },
  {
    quote: "Authentic, reliable, and incredibly helpful. The traveler's checklist saved us from several common mistakes. Truly the best resource for Ethiopia!",
    author: "Dr. Abdi Tadesse",
    location: "USA",
    rating: 5
  }
];

export const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B3621] mb-4">Voices from the Journey</h2>
          <div className="w-24 h-1.5 bg-[#FCD116] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-12 -left-8 text-[#FCD116]/20">
            <Quote size={120} fill="currentColor" />
          </div>

          <div className="relative z-10 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FCD116] text-[#FCD116]" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl text-[#4B3621] font-medium italic leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-[#4B3621]">{testimonials[current].author}</h4>
                  <p className="text-gray-500">{testimonials[current].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-8 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#4B3621] hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-[#FCD116] w-8' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#4B3621] hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};