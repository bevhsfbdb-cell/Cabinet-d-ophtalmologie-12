import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("Précision Technologique", "دقة تكنولوجية"),
      desc: t("Équipements de dernière génération pour des diagnostics exacts.", "أحدث المعدات لتشخيص دقيق.")
    },
    {
      title: t("Confort Patient", "راحة المريض"),
      desc: t("Un espace chaleureux et une organisation fluide pour votre sérénité.", "مساحة دافئة وتنظيم سلس لراحتكم.")
    },
    {
      title: t("Expertise Médicale", "خبرة طبية"),
      desc: t("Le Dr. NASROUNI Rihab vous accompagne avec rigueur et empathie.", "الدكتورة نصروني رحاب ترافقكم بدقة وتعاطف.")
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-4">
              <img
                src="input_file_2.png"
                alt="Reception"
                className="rounded-2xl shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
              <img
                src="input_file_0.png"
                alt="Consultation"
                className="rounded-2xl shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green mb-4">
              {t("Le Cabinet", "العيادة")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">
              {t(
                "Santé visuelle.",
                "صحة العين."
              )}
            </h3>
            <p className="text-lg opacity-80 mb-8">
              {t(
                "Un cadre professionnel et apaisant au cœur de Dar Bouazza.",
                "إطار مهني ومريح في قلب دار بوعزة."
              )}
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 text-brand-green">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{pillar.title}</h4>
                    <p className="opacity-70">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
