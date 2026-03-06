import { CONTENT } from '@/constants';
import { motion } from 'motion/react';
import { ArrowRight, Users, Award, Clock, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About Us | AutomaEstate";
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-6 block">Our Mission</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-12 leading-[1.1]">
            {CONTENT.about.headline}
          </h1>
          
          <div className="prose prose-xl prose-slate text-slate-600 max-w-3xl leading-relaxed">
            {CONTENT.about.body.map((paragraph, idx) => (
              <p key={idx} className="mb-8">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {CONTENT.about.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-slate-600 max-w-2xl">The principles that guide every automation we build.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {CONTENT.about.values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-blue-100 transition-colors"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Meet The Experts</h2>
            <p className="text-xl text-slate-600">Real estate veterans and automation engineers working together.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {CONTENT.about.team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center"
              >
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                  {/* Placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">Ready to work with us?</h2>
          <a 
            href={CONTENT.brand.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105 shadow-xl"
          >
            Book Your Free Audit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
