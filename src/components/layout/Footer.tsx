import { Link } from 'react-router-dom';
import { CONTENT } from '@/constants';
import { ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-24">
          
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 text-white group w-fit">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-950 font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                A
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                {CONTENT.brand.name}
              </span>
            </Link>
            <p className="text-lg leading-relaxed text-slate-400 max-w-sm">
              {CONTENT.brand.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'About Us', path: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors block py-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-wider mb-8">Get in touch</h3>
            <div className="space-y-8">
              <div>
                <p className="text-sm text-slate-500 mb-2">Email us</p>
                <a 
                  href={`mailto:${CONTENT.brand.email}`} 
                  className="text-lg font-bold text-white hover:text-blue-500 transition-colors block"
                >
                  {CONTENT.brand.email}
                </a>
              </div>
              
              <a 
                href={CONTENT.brand.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Book an Audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {CONTENT.brand.name}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
