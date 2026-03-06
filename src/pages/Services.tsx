import { CONTENT } from '@/constants';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Calendar, RefreshCw, FileText, MessageSquare, BarChart3 } from 'lucide-react';
import { useEffect } from 'react';

const icons = [Zap, Calendar, RefreshCw, FileText, MessageSquare, BarChart3];

export default function Services() {
  useEffect(() => {
    document.title = "Services | AutomaEstate";
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight">
            {CONTENT.services.headline}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {CONTENT.services.intro}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid gap-8">
          {CONTENT.services.items.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-blue-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
                
                <div className="relative z-10 grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                    <div className="h-1 w-12 bg-slate-200 rounded-full group-hover:bg-blue-600 transition-colors duration-500"></div>
                  </div>

                  <div className="space-y-8">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-colors duration-300">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        Includes
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {service.includes}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Ready to automate your agency?
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Book your free audit and let's identify your biggest opportunities for growth.
            </p>
            <div className="pt-4">
              <a 
                href={CONTENT.brand.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
              >
                Book Free Audit
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
