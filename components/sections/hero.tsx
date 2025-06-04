"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from '@/lib/motion-wrapper';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas into <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
                  Digital Reality
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded"></span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto"
          >
            We craft innovative digital solutions tailored to your business needs. Our expertise in App Development, Mobile Solutions, Web Design, and AI Integration drives your success in the digital landscape.
          </motion.p>
          
         {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 text-white px-8"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 px-8"
            >
              View Our Work
            </Button>
          </motion.div>*/}
        </div>
        
        {/* Floating device mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-2xl border border-slate-700/50 bg-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-slate-900/20 backdrop-blur-sm"></div>
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Dashboard interface" 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Mobile device mockup */}
            <div className="absolute -right-8 -bottom-12 md:-right-16 md:-bottom-16 w-1/4 shadow-2xl rounded-2xl border-4 border-slate-700/50 overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mobile app interface" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Tablet device mockup */}
            <div className="absolute -left-8 -bottom-8 md:-left-16 md:-bottom-12 w-1/3 shadow-2xl rounded-xl border-4 border-slate-700/50 overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Tablet interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}