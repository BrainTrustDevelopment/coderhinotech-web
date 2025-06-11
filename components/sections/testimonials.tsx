"use client"

import { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Partnering with CodeRhino Tech streamlined our entire app development process. Their team brought clarity, speed, and precision—taking our concept from idea to launch in record time. We were finally able to focus on innovation instead of chasing bugs and bottlenecks.",
    author: "Dr. Von Hommer",
    role: "CEO, HX Innovations",
    rating: 5,
  },
  {
    id: 2,
    content: "CodeRhino Tech provided invaluable guidance as we developed our internal AI strategy. Their consultative approach helped us identify high-impact use cases and align our team around scalable solutions. It was exactly the strategic support we needed.",
    author: "Karla Trotman",
    role: "CEO, Electrosoft Inc",
    rating: 5,
  },
{
  id: 3,
  content: "We're working with CodeRhino Tech to build our internal AI platform, and the experience has been outstanding. Their team quickly understood our operations and translated them into scalable, intelligent workflows. It’s setting a new foundation for how we work.",
  author: "Mike Miller",
  role: "CEO, Prolific Holdings Inc.",
  rating: 5,
}
];


export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Client Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about our solutions.
          </motion.p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-6 h-full relative">
                <div className="absolute -top-3 -left-3 text-sky-500 bg-slate-900 rounded-full p-2">
                  <Quote className="h-5 w-5" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-slate-300 mb-6 text-sm italic">{testimonial.content}</p>
                
                <div>
                  <h4 className="text-white font-medium">{testimonial.author}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}