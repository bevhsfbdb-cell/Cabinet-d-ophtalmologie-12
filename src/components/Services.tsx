import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../constants';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-brand-beige">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green mb-4">
            {t("Nos Services", "خدماتنا")}
          </h2>
          <h3 className="text-4xl font-serif mb-6">
            {t(
              "Soins complets.",
              "رعاية شاملة."
            )}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Eye;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-brand-brown/5 group"
              >
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <IconComponent size={24} />
                </div>
                <h4 className="text-xl font-serif mb-4">
                  {t(service.title, service.titleAr)}
                </h4>
                <p className="text-sm opacity-70 leading-relaxed">
                  {t(service.description, service.descriptionAr)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
