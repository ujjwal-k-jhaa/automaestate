import { CONTENT } from '@/constants';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import FaqAccordion from '@/components/FaqAccordion';
import CalEmbed from '@/components/CalEmbed';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const blobY = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    document.title = "AutomaEstate | Real Estate Automation Agency";
  }, []);

  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        ></motion.div>
        <motion.div 
          style={{ y: blobY }}
          className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-8">
              {CONTENT.hero.badge}
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
              {CONTENT.hero.headline}
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              {CONTENT.hero.subheadline}
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CONTENT.brand.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-slate-900/20"
              >
                {CONTENT.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                {CONTENT.hero.ctaSecondary}
                <ChevronDown className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200 pt-12">
            {CONTENT.hero.trustBar.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <item.icon className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">{CONTENT.problem.label}</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 mb-6">
                {CONTENT.problem.headline}
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-6">{CONTENT.problem.body.split('\n\n')[0]}</p>
                <p className="font-semibold text-slate-900">{CONTENT.problem.body.split('\n\n')[1]}</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {CONTENT.problem.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-4xl font-display font-bold text-blue-600">{stat.value}</span>
                    <span className="text-lg font-semibold text-slate-900">{stat.label}</span>
                  </div>
                  <p className="text-slate-500">{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">{CONTENT.solution.label}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              {CONTENT.solution.headline}
            </h2>
            <p className="text-xl text-slate-400">
              {CONTENT.solution.body}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONTENT.solution.pillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors text-blue-400">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">{CONTENT.process.label}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4">
              {CONTENT.process.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>

            {CONTENT.process.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center mx-auto mb-8 shadow-sm text-2xl font-display font-bold text-blue-600 z-10 relative">
                  {step.step}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">
              {CONTENT.process.badge}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESULTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">{CONTENT.results.label}</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 mb-12">
                {CONTENT.results.headline}
              </h2>
              
              <div className="grid grid-cols-2 gap-8">
                {CONTENT.results.cards.map((card, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-6">
                    <div className="text-3xl font-display font-bold text-slate-900 mb-1">{card.metric}</div>
                    <div className="font-semibold text-slate-900 mb-1">{card.label}</div>
                    <div className="text-sm text-slate-500">{card.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {CONTENT.results.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg text-slate-700 italic mb-6">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OFFER / CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-3xl p-8 md:p-16 shadow-2xl border border-blue-500/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-blue-200 font-bold tracking-wider text-sm uppercase">{CONTENT.offer.label}</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6">
                  {CONTENT.offer.headline}
                </h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  {CONTENT.offer.subheadline}
                </p>
                <div className="space-y-3 mb-8">
                  {CONTENT.offer.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-300 shrink-0" />
                      <span className="text-blue-50">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl text-slate-900 shadow-xl overflow-hidden h-[600px]">
                <CalEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <FaqAccordion items={CONTENT.faq} />
        </div>
      </section>
    </div>
  );
}
