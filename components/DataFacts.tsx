"use client";

import { motion } from "framer-motion";

const insights = [
  {
    stat: "70-80%",
    title: "Operate Informally",
    desc: "Many businesses start without registration, legal documentation, or operational compliance. Student-led businesses are highly represented due to low startup barriers and rapid business growth."
  },
  {
    stat: "65-75%",
    title: "Incomplete Permits",
    desc: "This includes missing NIB, operational licensing, and business compliance requirements. Many businesses begin generating revenue before legal preparation is completed."
  },
  {
    stat: "20-30%",
    title: "Professional Support",
    desc: "Most businesses rely on informal advice or self-learning. This increases exposure to legal mistakes, unclear agreements, and avoidable risks."
  },
  {
    stat: "60-70%",
    title: "Unregistered Trademarks",
    desc: "Without protection, businesses may face duplicate branding, ownership conflicts, or forced rebranding. This is especially common among student-owned food brands."
  },
  {
    stat: "40-50%",
    title: "Student Interest",
    desc: "Many students are motivated to start businesses while studying. However, only a portion build with proper legal preparation."
  },
  {
    stat: "80%+",
    title: "Digital Dependency",
    desc: "Instagram, TikTok, and online delivery services are common business channels. Yet many businesses still lack terms & conditions, refund systems, or consumer protection policies."
  },
  {
    stat: "75-85%",
    title: "Lack Legal Literacy",
    desc: "Legal awareness often comes only after a problem occurs. This creates unnecessary risk that could have been prevented earlier."
  }
];

export default function DataFacts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1 border border-primary-dark text-primary-dark text-sm font-semibold tracking-widest uppercase mb-6">
            Data & Facts
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-6 max-w-4xl">
            The Reality of Student-Led Businesses and UMKM in Indonesia
          </h2>
          <p className="text-xl text-muted font-light max-w-3xl">
            Indonesia has more than 65 million UMKM, contributing over 60% to the national economy. However, a large percentage still operate without complete legal structure.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 mb-20">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
            >
              <h3 className="text-5xl font-playfair font-bold text-accent-gold mb-4 group-hover:text-primary-dark transition-colors">
                {insight.stat}
              </h3>
              <h4 className="text-xl font-bold text-primary-dark mb-3">
                {insight.title}
              </h4>
              <p className="text-muted font-light text-sm leading-relaxed">
                {insight.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary-dark text-cream p-12 text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-playfair italic mb-6">
            "Student entrepreneurs are building real businesses at a young age. But without legal protection, they are also scaling real risk."
          </p>
          <p className="text-lg text-accent-gold font-medium uppercase tracking-widest">
            Fortis & Co helps bridge the gap between business ambition and legal readiness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
