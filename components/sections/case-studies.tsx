"use client"

import { useState, useEffect } from 'react';
import { motion } from '@/lib/motion-wrapper';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'app', name: 'App Development' },
  { id: 'mobile', name: 'Mobile Solutions' },
  { id: 'web', name: 'Website Design' },
  { id: 'ai', name: 'AI Integration' },
];

const projects = [
  {
    id: 1,
    title: 'Health Track App',
    category: 'app',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/1543417/pexels-photo-1543417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive health tracking application with personalized insights and analytics.'
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'web',
    tags: ['React', 'D3.js', 'Firebase'],
    imageUrl: 'https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Interactive financial dashboard with real-time data visualization and analytics.'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    category: 'ai',
    tags: ['Python', 'TensorFlow', 'Next.js'],
    imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Smart content creation platform powered by advanced natural language processing.'
  },
  {
    id: 4,
    title: 'E-Commerce Mobile App',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Feature-rich mobile shopping experience with seamless payment integration.'
  },
  {
    id: 5,
    title: 'Smart Home IoT Platform',
    category: 'app',
    tags: ['IoT', 'React', 'Node.js'],
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Integrated platform for managing smart home devices with automated workflows.'
  },
  {
    id: 6,
    title: 'Predictive Analytics Tool',
    category: 'ai',
    tags: ['Python', 'PyTorch', 'Django'],
    imageUrl: 'https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Enterprise solution for predictive analytics using machine learning algorithms.'
  },
];

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
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
    
    const section = document.getElementById('case-studies');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="case-studies" className="py-20 md:py-28 relative bg-slate-950">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Explore our portfolio of successful projects across various industries and technologies.
          </motion.p>
        </div>
        
        {/* Filter Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-900/50 transition-all duration-300 h-full hover:translate-y-[-4px] shadow-lg">
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70 z-10"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-slate-800/80 backdrop-blur-sm text-slate-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-sky-500 hover:text-sky-400 hover:bg-sky-500/10 group"
                    >
                      View Case Study
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            className="border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}