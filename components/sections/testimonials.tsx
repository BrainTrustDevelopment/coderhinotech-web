"use client"

import { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { Separator } from '@/components/ui/separator';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with CodeRhino Tech transformed our business. Their mobile app solution increased our customer engagement by 45% within the first quarter.",
    author: "Sarah Johnson",
    role: "CEO, HealthPlus",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "The AI integration that CodeRhino developed for our platform has revolutionized how we analyze customer data. Impressive technical expertise!",
    author: "Michael Chen",
    role: "CTO, DataSmart Analytics",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "We approached CodeRhino for a complete website redesign, and they delivered beyond our expectations. Our conversion rate has increased by 28%.",
    author: "Elena Rodriguez",
    role: "Marketing Director, StyleTrend",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const clientLogos = [
  "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/adobe.svg",
  "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/airbnb.svg",
  "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
  "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dropbox.svg",
  "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/netflix.svg",
  "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/slack.svg",
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
                
                <div className="flex items-center">
                  <div className="rounded-full overflow-hidden w-12 h-12 mr-4 border-2 border-sky-500/20">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Separator className="bg-slate-800 mb-12" />
          
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">Trusted by Industry Leaders</h3>
            <p className="text-slate-400 text-sm">We've helped companies of all sizes achieve their technology goals</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img src={logo} alt={`Client logo ${index + 1}`} className="h-8 md:h-10 invert" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}