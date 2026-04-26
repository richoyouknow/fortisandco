"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* About Fortis & Co */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-accent-gold text-accent-gold-hover text-sm font-semibold tracking-widest uppercase mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-8">
              About Fortis & Co
            </h2>
            <div className="space-y-6 text-lg text-muted font-light leading-relaxed">
              <p>
                Fortis & Co is a legal services and business consulting platform created to
                support students and young entrepreneurs who are actively building businesses.
              </p>
              <p>
                We understand that many student-led ventures begin with creativity, passion,
                and speed — but often without the legal structure needed to support long-term
                growth.
              </p>
              <p>
                Our mission is to simplify legal access by providing affordable, approachable,
                and practical legal support designed specifically for early-stage entrepreneurs.
              </p>
              <p className="font-medium text-primary-dark text-xl pt-4 border-t border-border">
                We believe legal protection should not only belong to large corporations.
                Every business deserves the opportunity to grow with clarity, security, and
                confidence.
              </p>
            </div>
          </motion.div>

          {/* Vision, Mission, Why We Exist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            {/* Vision */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-gold block"></span>
                Our Vision
              </h3>
              <p className="text-lg text-muted font-light pl-11">
                To become a trusted legal ecosystem for students and emerging businesses in
                Indonesia.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-gold block"></span>
                Our Mission
              </h3>
              <ul className="space-y-4 pl-11">
                {[
                  "Make legal support accessible for student entrepreneurs",
                  "Improve legal awareness among young business owners",
                  "Provide practical solutions for licensing, compliance, and protection",
                  "Build a safe starting point for legally sustainable businesses",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-muted font-light">
                    <CheckCircle2 className="text-accent-gold shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why We Exist */}
            <div className="bg-white p-8 border-l-4 border-accent-gold shadow-sm">
              <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4">
                Why Fortis & Co Exists
              </h3>
              <div className="space-y-4 text-muted font-light">
                <p>
                  Behind every successful business is not only creativity and innovation, but
                  also legal certainty.
                </p>
                <p>
                  Without legal protection, businesses become vulnerable to disputes, compliance
                  risks, brand conflicts, and operational uncertainty.
                </p>
                <p className="font-medium text-primary-dark">
                  Fortis & Co exists to bridge the gap between legal complexity and business
                  accessibility. We simplify the legal process so students can focus on
                  growing their ideas with stronger foundations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
