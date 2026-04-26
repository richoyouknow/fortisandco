"use client";

import { motion } from "framer-motion";
import { Scale, FileCheck, BookOpen, FileText, Shield, Briefcase } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Legal Consultation",
    description: "Receive accessible consultation for business-related legal concerns. We help students and entrepreneurs understand legal risks, business requirements, and practical next steps.",
  },
  {
    icon: FileCheck,
    title: "Business Licensing Assistance",
    description: "We provide guidance for obtaining legal permits and registration required for operating a business.",
    list: ["NIB Registration", "Business Documentation", "Operational Licensing", "Basic Compliance Requirements"]
  },
  {
    icon: BookOpen,
    title: "Legal Education",
    description: "Legal knowledge should be understandable. We provide practical educational content designed to increase legal awareness.",
    list: ["Business legality basics", "Contracts and agreements", "Intellectual property awareness", "Digital business compliance", "Consumer protection understanding"]
  },
  {
    icon: FileText,
    title: "Document Templates",
    description: "Access ready-to-use templates that support business activities.",
    list: ["Partnership agreements", "Collaboration agreements", "Terms & conditions", "Refund policies", "Business consent letters"]
  },
  {
    icon: Shield,
    title: "Trademark Guidance",
    description: "Brand identity is one of the most valuable business assets. We help businesses understand trademark registration and protection processes to reduce risks of duplication or disputes.",
  },
  {
    icon: Briefcase,
    title: "Student Business Support",
    description: "Fortis & Co is designed to support businesses commonly operated by students.",
    list: ["F&B businesses", "Digital creators", "Freelancers", "Startup founders", "Online shop owners", "Campus-based businesses"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1 border border-primary-dark text-primary-dark text-sm font-semibold tracking-widest uppercase mb-6">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted font-light">
            Comprehensive legal support designed specifically for the needs of early-stage
            and student-led ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-cream-dark p-8 group hover:bg-primary-dark transition-colors duration-500 flex flex-col h-full"
            >
              <service.icon className="w-12 h-12 text-accent-gold mb-6 group-hover:text-cream transition-colors duration-500" />
              <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4 group-hover:text-accent-gold transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-muted font-light mb-6 group-hover:text-cream/80 transition-colors duration-500 flex-grow">
                {service.description}
              </p>
              
              {service.list && (
                <ul className="space-y-2 mt-auto">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-primary-dark font-medium group-hover:text-cream transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
