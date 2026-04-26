"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Phone, MapPin } from "lucide-react";
import Image from "next/image";

// Internal InfoIcon component
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  const icons = {
    website: <Globe className="h-4 w-4 text-accent-gold" />,
    phone: <Phone className="h-4 w-4 text-accent-gold" />,
    address: <MapPin className="h-4 w-4 text-accent-gold" />,
  };
  return <div className="mr-3 flex-shrink-0">{icons[type]}</div>;
};

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <>
      <motion.section
        id="home"
        className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen text-[#152542]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        style={{
          backgroundImage: "url('/hero/1000060570.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* White Overlay Layer */}
        <div className="absolute inset-0 bg-white/90 z-0" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(174,137,58,0.05)_0%,_transparent_70%)] z-[1]" />

        {/* Main Content Container */}
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center px-8 pt-32 pb-20">
          
          {/* Top Section: Logo & Brand */}
          <motion.header className="mb-12 lg:mb-16" variants={itemVariants}>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <Image
                  src="/logo/logo.png"
                  alt="Fortis & Co Logo"
                  width={64}
                  height={64}
                  className="relative z-10 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-xl font-playfair font-bold text-[#152542] tracking-tight">Fortis & Co.</p>
                <p className="text-xs tracking-[0.3em] text-accent-gold uppercase font-semibold mt-1">Legal Services</p>
              </div>
            </div>
          </motion.header>

          {/* Hero Body */}
          <motion.main className="flex flex-col items-center" variants={containerVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold leading-[1.1] text-[#152542] max-w-4xl"
              variants={itemVariants}
            >
              Legal Support Built for <br />
              <span className="text-accent-gold italic">Student Entrepreneurs</span>
            </motion.h1>
            
            <motion.div 
              className="my-10 h-1.5 w-24 bg-accent-gold/40 rounded-full" 
              variants={itemVariants}
            />
            
            <motion.div
              className="mb-12 max-w-[65ch] text-lg lg:text-xl text-[#152542]/80 font-light leading-relaxed space-y-6"
              variants={itemVariants}
            >
              <p>
                Fortis & Co is a legal services and business consulting platform designed
                specifically for students, young entrepreneurs, and early-stage businesses.
              </p>
              <p>
                We help student-led ventures build stronger legal foundations through accessible
                consultation, practical guidance, and business protection solutions.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#152542] text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-accent-gold hover:text-white shadow-lg"
              >
                Start Free Consultation
              </a>
            </motion.div>
          </motion.main>

          {/* Footer Contact Info */}
          <motion.footer className="mt-24 w-full max-w-3xl" variants={itemVariants}>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#152542]/10 to-transparent mb-8" />
            <div className="grid grid-cols-1 gap-8 text-sm text-[#152542]/60 font-light sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <InfoIcon type="website" />
                <span className="font-medium">fortisandco.my.id</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <InfoIcon type="phone" />
                <span className="font-medium">+62 877 8059 3612</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <InfoIcon type="address" />
                <span className="font-medium">Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.footer>
        </div>
      </motion.section>

      {/* Supporting Statement Section */}
      <div className="w-full bg-primary-dark text-white py-24 relative overflow-hidden border-t border-white/5">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[65ch] mx-auto flex flex-col items-center"
          >
            <div className="w-12 h-px bg-accent-gold/40 mb-10" />
            
            <div className="space-y-6 text-lg md:text-xl font-playfair italic leading-[1.8] tracking-wide text-white/90">
              <p>"Student entrepreneurs are building faster than ever.</p>
              <p>But many are growing businesses without legal structure, protection, or guidance.</p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10 w-full max-w-md">
              <p className="text-accent-gold font-bold not-italic text-sm md:text-base tracking-[0.2em] uppercase leading-relaxed">
                Fortis & Co exists to close that gap by making legal services more accessible, practical, and understandable for the next generation of business owners."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
