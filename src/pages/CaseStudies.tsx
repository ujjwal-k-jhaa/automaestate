import { CONTENT } from '@/constants';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MapPin, Quote } from 'lucide-react';
import { useEffect } from 'react';

export default function CaseStudies() {
  useEffect(() => {
    document.title = "Case Studies | AutomaEstate";
  }, []);

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Real Results. Real Agencies.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            See how top real estate agencies are using automation to save time and close more deals.
          </motion.p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-24">
          {CONTENT.caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">
                    {study.client}
                  </h2>
                  
                  <div className="space-y-8 mb-10">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs">1</span>
                        The Problem
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">2</span>
                        The Solution
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative">
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200" />
                    <p className="text-slate-700 italic mb-4 relative z-10">"{study.testimonial.quote}"</p>
                    <div>
                      <div className="font-bold text-slate-900">{study.testimonial.author}</div>
                      <div className="text-sm text-slate-500">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold mb-10 text-center lg:text-left">Key Results Achieved</h3>
                  <div className="grid gap-8">
                    {study.results.map((result, rIdx) => (
                      <div key={rIdx} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
                        <div className="flex items-end gap-4">
                          <span className="text-4xl md:text-5xl font-display font-bold text-blue-400 leading-none">
                            {result.metric}
                          </span>
                          <span className="text-slate-300 font-medium pb-1">
                            {result.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-slate-800 text-center lg:text-left">
                    <p className="text-slate-400 text-sm mb-4">Ready to achieve similar results?</p>
                    <a 
                      href={CONTENT.brand.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors"
                    >
                      Book your audit now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="bg-blue-600 text-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Join these successful agencies</h2>
            <p className="text-blue-100 mb-8 text-lg">Book your free audit and start automating your growth today.</p>
            <a 
              href={CONTENT.brand.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Book Free Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
