"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from '@/lib/motion-wrapper';
import { Smartphone, Globe, Code, Cpu, Server, Lock, LineChart, Cloud } from 'lucide-react';

const services = [
  {
    title: 'App Development',
    description: 'From concept to deployment, we create powerful, scalable applications that solve real business problems.',
    icon: Code,
  },
  {
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
    icon: Smartphone,
  },
  {
    title: 'Website Design',
    description: 'Beautiful, responsive websites optimized for performance, search engines, and conversions.',
    icon: Globe,
  },
  {
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence to automate processes and gain valuable insights.',
    icon: Cpu,
  },
 
];

export default function Services() {
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
    
    const section = document.getElementById('services');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            We offer comprehensive digital solutions to help your business thrive in the modern technological landscape.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-sky-900/50 transition-all duration-300 h-full hover:translate-y-[-4px] group">
                <CardHeader>
                  <div className="bg-sky-500/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-sky-500" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}