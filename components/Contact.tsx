"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary-dark text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-accent-gold text-accent-gold text-sm font-semibold tracking-widest uppercase mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-6">
              Need legal support for your business?
            </h2>
            <p className="text-xl text-cream/70 font-light mb-12 max-w-lg">
              Whether you are starting your first business, growing a student venture, or looking for legal guidance, Fortis & Co is here to support your journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-cream/10 rounded-full shrink-0">
                  <Mail className="text-accent-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-cream/60 uppercase tracking-widest mb-1">Email</p>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=fortis.co25@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-accent-gold transition-colors"
                  >
                    fortis.co25@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-cream/10 rounded-full shrink-0">
                  <Phone className="text-accent-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-cream/60 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                  <a 
                    href="https://wa.me/6281398506109" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-accent-gold transition-colors"
                  >
                    +62 813 9850 6109
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-cream/10 rounded-full shrink-0">
                  <MapPin className="text-accent-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm text-cream/60 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream text-primary-dark p-8 md:p-12 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-playfair font-bold mb-4">Start with a free consultation</h3>
            <p className="text-muted font-light mb-8 text-lg">
              Discover how Fortis & Co can help protect your next step. Fill out the form below or contact us directly.
            </p>

            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const status = formData.get('status');
              const message = formData.get('message');
              
              const text = `Halo Fortis & Co,\n\nNama: ${name}\nEmail: ${email}\nStatus Bisnis: ${status}\n\nPesan:\n${message}`;
              const whatsappUrl = `https://wa.me/6281398506109?text=${encodeURIComponent(text)}`;
              
              window.open(whatsappUrl, '_blank');
            }}>
              <div>
                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-primary-dark/30 py-3 focus:outline-none focus:border-primary-dark transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-primary-dark/30 py-3 focus:outline-none focus:border-primary-dark transition-colors"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Business Status</label>
                <select name="status" className="w-full bg-transparent border-b border-primary-dark/30 py-3 focus:outline-none focus:border-primary-dark transition-colors appearance-none">
                  <option value="Student Entrepreneur">Student Entrepreneur</option>
                  <option value="F&B Business">F&B Business</option>
                  <option value="Startup Founder">Startup Founder</option>
                  <option value="Freelancer / Digital Creator">Freelancer / Digital Creator</option>
                  <option value="Other UMKM">Other UMKM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-primary-dark/30 py-3 focus:outline-none focus:border-primary-dark transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="group w-full flex items-center justify-between px-8 py-4 bg-primary-dark text-cream font-medium hover:bg-primary-light transition-colors mt-8"
              >
                <span>Contact Us Today</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
