"use client";

import { motion } from "framer-motion";
import { Scale, ShieldAlert, FileWarning, Users, BookOpen, Smartphone } from "lucide-react";

// Add unique icons to each to make them more eye-catching
const problems = [
  {
    title: "Business Started Without Legal Structure",
    desc: "Many student businesses launch quickly without registration or compliance planning. We help organize the legal foundation needed for growth.",
    icon: Scale
  },
  {
    title: "No Business Permit or Registration",
    desc: "Operating without permits can limit business expansion and create long-term risk. We help guide businesses toward proper registration.",
    icon: FileWarning
  },
  {
    title: "Brand Name Already Used by Others",
    desc: "A business may unknowingly use a name that already belongs to another party. This creates risk for rebranding, disputes, or legal warning.",
    icon: ShieldAlert
  },
  {
    title: "No Agreements Between Partners",
    desc: "Many businesses start among friends without written agreements. This often creates conflict over ownership, profit sharing, or responsibilities.",
    icon: Users
  },
  {
    title: "Lack of Legal Understanding",
    desc: "Many young entrepreneurs do not know which legal steps matter at the beginning. We simplify legal information into understandable guidance.",
    icon: BookOpen
  },
  {
    title: "Digital Business Without Protection",
    desc: "Businesses operating through Instagram, TikTok, or delivery platforms often lack refund policies, consumer protection, or clear business terms.",
    icon: Smartphone
  }
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 bg-primary-dark text-white relative overflow-hidden">
      {/* Elegant background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <div className="inline-block px-4 py-1 border border-accent-gold/50 text-accent-gold text-sm font-semibold tracking-widest uppercase mb-6 bg-accent-gold/5 rounded-sm">
              Challenges
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
              Common Legal Challenges We Handle
            </h2>
            <p className="text-lg text-white/70 font-light mb-8 leading-relaxed">
              Navigating the complexities of modern law doesn't have to be overwhelming. We identify and solve these frequent roadblocks before they harm your business.
            </p>
            <div className="hidden lg:block w-20 h-1 bg-accent-gold/30 rounded-full" />
          </motion.div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {problems.map((prob, i) => {
                const Icon = prob.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-accent-gold/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-accent-gold/0 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/30 transition-colors duration-500">
                        <Icon className="text-accent-gold/70 group-hover:text-accent-gold transition-colors duration-500" size={24} />
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">
                        {prob.title}
                      </h3>
                      <p className="text-sm text-white/60 font-light leading-relaxed">
                        {prob.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
