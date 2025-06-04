import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">CodeRhino Tech</h3>
            <p className="mb-4">Crafting innovative digital solutions that empower businesses to thrive in the digital age.</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-sky-500" />
                <a href="mailto:hello@coderhino.tech" className="hover:text-white transition-colors">hello@coderhinotech.com</a>
              </div>
              {/*<div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-sky-500" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </div>*/}
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-sky-500" />
                <span>221 W 10th Street 3rd & 4th Floors, Wilmington, DE 19801</span>
              </div>
            </div>
          </div>
          
          {/* Services 
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">App Development</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Mobile Solutions</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Website Design</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">AI Integrations</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">DevOps Solutions</Link>
              </li>
            </ul>
          </div>
          
          {/* Company 
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Press Kit</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources 
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Knowledge Base</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">API Reference</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Tutorials</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Support</Link>
              </li>
            </ul>
          </div>*/}
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>
        
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} CodeRhino Tech. All rights reserved.</p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}