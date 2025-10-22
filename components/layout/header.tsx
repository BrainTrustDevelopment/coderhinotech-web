"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X, Code, Cpu, Brain } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '/#services' },
 // { name: 'Work', href: '#case-studies' },
  { name: 'Testimonials', href: '/#testimonials' },
//  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 text-white group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-500/20 to-purple-500/20 rounded-lg group-hover:from-sky-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              <Code className="w-6 h-6 text-sky-500" aria-hidden="true" />
              <Cpu className="absolute w-4 h-4 text-sky-400 animate-pulse" aria-hidden="true" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">
                CodeRhino<span className="text-sky-500">Tech</span>
              </span>
              <span className="text-slate-600 text-lg font-light">/</span>
              <span className="text-sm font-semibold tracking-tight text-purple-400 group-hover:text-purple-300 transition-colors">
                The BrainTrust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-sky-500 after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100 py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* The BrainTrust Button - Visually Distinct */}
            <Link href="/braintrust">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
                <Brain className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <div className="flex flex-col">
                  <span className="text-xs text-purple-400 group-hover:text-purple-300 font-medium transition-colors">AI Consulting</span>
                  <span className="text-[10px] text-purple-500/70 -mt-0.5">The BrainTrust</span>
                </div>
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg border-t border-slate-800 p-4">
          <nav className="py-2">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-2 text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* The BrainTrust - Mobile */}
              <li className="pt-4 border-t border-slate-800">
                <Link
                  href="/braintrust"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <div className="flex flex-col">
                      <span className="text-sm text-purple-400 font-medium">AI Consulting</span>
                      <span className="text-xs text-purple-500/70">The BrainTrust</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}