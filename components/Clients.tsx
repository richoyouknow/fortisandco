"use client";

import { motion } from "framer-motion";
import { Utensils, Coffee, Cake, Wine, Truck } from "lucide-react";

const clientCategories = [
  {
    title: "Restaurants",
    desc: "Full-service dining establishments requiring operational legal structures and compliance.",
    icon: <Utensils className="h-6 w-6" />
  },
  {
    title: "Cafés",
    desc: "Boutique coffee shops and social spaces building their brand identity and licensing.",
    icon: <Coffee className="h-6 w-6" />
  },
  {
    title: "Bakeries",
    desc: "Pastry and bread businesses focusing on production standards and retail protection.",
    icon: <Cake className="h-6 w-6" />
  },
  {
    title: "Beverage Vendors",
    desc: "Modern drink brands and stall-based businesses scaling through online channels.",
    icon: <Wine className="h-6 w-6" />
  },
  {
    title: "Catering Services",
    desc: "Event-based food providers requiring clear service agreements and liability protection.",
    icon: <Truck className="h-6 w-6" />
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1 border border-accent-gold text-accent-gold-hover text-sm font-semibold tracking-widest uppercase mb-6">
            Our Clients
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-6">
            Strategic Partnerships
          </h2>
          <p className="text-xl text-muted font-light leading-relaxed">
            Our clients: food businesses that may collaborate with us in the future, such as restaurants, cafés, bakeries, beverage vendors, and catering services.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {clientCategories.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-10 border-t-4 border-accent-gold shadow-sm hover:shadow-2xl transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] flex flex-col items-center text-center group"
            >
              <div className="mb-6 text-accent-gold bg-accent-gold/5 p-4 rounded-full group-hover:bg-accent-gold group-hover:text-white transition-all duration-500">
                {client.icon}
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4">
                {client.title}
              </h3>
              <p className="text-muted font-light text-sm leading-relaxed">
                {client.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
