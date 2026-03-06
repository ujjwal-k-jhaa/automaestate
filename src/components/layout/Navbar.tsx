import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONTENT } from '@/constants';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/70 backdrop-blur-2xl border-b border-slate-200/60 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.04)]" 
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-xl shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               {/* Abstract A Logo Mark */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transform translate-y-0.5">
                 <path d="M12 2L3 20H21L12 2Z" fill="white"/>
                 <path d="M12 8L7.5 17H16.5L12 8Z" fill="#3B82F6"/> 
               </svg>
            </div>
            <span className={cn(
              "font-display font-bold text-xl tracking-tight transition-colors duration-300",
              scrolled ? "text-slate-900" : "text-slate-900"
            )}>
              {CONTENT.brand.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-all duration-200",
                    location.pathname === link.path 
                      ? "text-slate-900 font-semibold" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a 
              href={CONTENT.brand.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 duration-300"
            >
              Book Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-slate-50",
                    location.pathname === link.path ? "text-blue-600" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={CONTENT.brand.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-5 py-3 rounded-lg text-center font-medium mt-4"
              >
                Book Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
