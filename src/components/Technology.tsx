import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TECHNOLOGIES } from '../constants';
import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

export const Technology = () => {
  const { t } = useLanguage();

  return (
    <section id="tech" className="py-24 bg-brand-brown text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
              {t("Plateau Technique", "المنصة التقنية")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">
              {t(
                "Précision.",
                "الدقة."
              )}
            </h3>
            <p className="text-lg opacity-70 mb-12">
              {t(
                "Dernières innovations pour des résultats fiables.",
                "أحدث الابتكارات لضمان نتائج موثوقة."
              )}
            </p>

            <div className="space-y-8">
              {TECHNOLOGIES.map((tech, idx) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Cpu size={24} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-brand-gold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-60 mb-1">{tech.description}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                      {t("Bénéfice : ", "الفائدة: ")} {tech.benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full border border-white/10 absolute -top-10 -right-10 w-full h-full animate-pulse" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="input_file_1.png"
                alt="Technologie Médicale"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
