"use client";

import { motion } from "framer-motion";

const clients = [
  {
    title: "Student Entrepreneurs",
    desc: "Students building side businesses, food brands, online shops, or startups."
  },
  {
    title: "F&B Businesses",
    desc: "Small food and beverage businesses that require licensing, branding, and operational legal readiness."
  },
  {
    title: "Startup Founders",
    desc: "Early-stage founders who need structured legal preparation."
  },
  {
    title: "Freelancers",
    desc: "Independent workers who require agreements, project protection, or client documentation."
  },
  {
    title: "Digital Creators",
    desc: "Creators and online businesses who need protection for collaborations, brand identity, and business activities."
  },
  {
    title: "UMKM Owners",
    desc: "Micro and small business owners who require affordable legal support and guidance."
  }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1 border border-accent-gold text-accent-gold-hover text-sm font-semibold tracking-widest uppercase mb-6">
            Who We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-6">
            Potential Clients
          </h2>
          <p className="text-xl text-muted font-light">
            Fortis & Co focuses on supporting individuals and small businesses that are often underserved by traditional legal services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 border-t-4 border-primary-dark shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4">
                {client.title}
              </h3>
              <p className="text-muted font-light">
                {client.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
