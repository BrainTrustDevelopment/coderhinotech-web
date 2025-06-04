"use client"

import { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { Check } from 'lucide-react';

export default function FeatureHighlight() {
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
    
    const section = document.getElementById('feature-highlight');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  const features = [
    'Scalable architecture for growing businesses',
    'Enterprise-grade security protocols',
    'Cross-platform compatibility',
    'Comprehensive API integration',
    'Continuous deployment pipeline',
    'Responsive support and maintenance'
  ];

  return (
    <section id="feature-highlight" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute left-0 top-1/3 w-full h-1/2 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent mix-blend-overlay"></div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaborating on digital solutions" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-slate-900 rounded-xl p-4 shadow-xl border border-slate-800 max-w-xs">
              <div className="flex items-start space-x-4">
                <div className="bg-sky-500/20 rounded-full p-2">
                  <Check className="h-6 w-6 text-sky-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Enterprise-Ready</h4>
                  <p className="text-slate-400 text-sm">Our solutions scale with your business, ensuring long-term success.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cutting-Edge Technology, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Future-Ready Solutions</span>
            </h2>
            <p className="text-slate-400 mb-8">
              At CodeRhino Tech, we combine innovative thinking with technical excellence to deliver solutions that don't just meet today's requirements but anticipate tomorrow's challenges. Our development approach focuses on scalability, security, and user experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-sky-500" />
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}