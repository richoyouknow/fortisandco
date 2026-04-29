"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Globe, ShoppingBag, Users } from "lucide-react";

const articles = [
  {
    title: "Indonesia: The Largest Food Delivery Market in Southeast Asia",
    desc: "In 2025, Indonesia solidified its position as the leading food delivery market in the region, reaching a staggering value of US$6.4 billion. This growth reflects the rapid digital transformation and shifting consumer habits across the archipelago.",
    source: "The Jakarta Post",
    url: "https://www.thejakartapost.com",
    icon: <Globe className="h-6 w-6" />,
    category: "Market Insights",
    questioners: "General public who like to shop online, students, housewives"
  },
  {
    title: "Sustained Growth: Online Food Delivery Sales Up 18%",
    desc: "Online food delivery sales in Indonesia continue their upward trajectory, seeing an 18% increase in 2025 compared to the previous year. This consistent growth signals a robust ecosystem that shows no signs of slowing down.",
    source: "Databoks",
    url: "https://databoks.katadata.co.id",
    icon: <TrendingUp className="h-6 w-6" />,
    category: "Industry Trends",
    questioners: "General public who like to shop online, students, housewives"
  },
  {
    title: "Why Consumers Choose Online Delivery: Practicality & Value",
    desc: "Practicality, time-saving benefits, and aggressive promotions remain the primary drivers for Indonesian consumers. In an increasingly fast-paced world, the convenience of online delivery has become a lifestyle necessity.",
    source: "Jakpat Insight",
    url: "https://insight.jakpat.net",
    icon: <ShoppingBag className="h-6 w-6" />,
    category: "Consumer Behavior",
    questioners: "General public who like to shop online, students, housewives"
  }
];

export default function Articles() {
  return (
    <section id="articles" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1 border border-accent-gold text-accent-gold text-sm font-semibold tracking-widest uppercase mb-6">
              Latest Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-dark">
              Market Intelligence & <br /> <span className="text-accent-gold italic">Industry Perspectives</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-muted font-light max-w-sm"
          >
            Stay informed with the data and trends shaping the future of Indonesia's digital economy and food industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group bg-white border border-border p-10 hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold/20 group-hover:bg-accent-gold transition-colors duration-500" />
              
              <div className="mb-8 flex items-center justify-between">
                <div className="text-accent-gold bg-accent-gold/5 p-3 rounded-lg group-hover:bg-accent-gold group-hover:text-white transition-all duration-500">
                  {article.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                  {article.category}
                </span>
              </div>
              
              <div className="flex-grow">
                <p className="text-accent-gold text-xs font-bold uppercase tracking-widest mb-4">
                  {article.source}
                </p>
                <h3 className="text-2xl font-playfair font-bold text-primary-dark mb-4 leading-tight group-hover:text-accent-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted font-light text-sm leading-relaxed mb-6 text-justify">
                  {article.desc}
                </p>

                {/* Questioners / Audience Section */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-3 w-3 text-accent-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold">
                      Inquired By / Audience
                    </span>
                  </div>
                  <p className="text-xs text-muted font-medium italic">
                    {article.questioners}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-dark text-xs font-bold uppercase tracking-widest border-b border-primary-dark/20 pb-1 hover:border-accent-gold hover:text-accent-gold transition-all"
                >
                  Read Full Article <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
