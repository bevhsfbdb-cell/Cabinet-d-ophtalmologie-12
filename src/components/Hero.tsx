import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../constants';
import { Star, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="input_file_2.png" 
          alt="Reception" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/50 to-brand-beige" />
      </div>
      
      <div className="container-custom grid lg:grid-cols-5 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-medium opacity-60">
              {CLINIC_INFO.googleRating} ({CLINIC_INFO.reviewsCount} avis Google)
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
            {t(
              "Vision & Expertise.",
              "الرؤية والخبرة."
            )}
          </h1>
          
          <p className="text-lg opacity-80 mb-8 max-w-xl">
            {t(
              "Technologie moderne et approche humaine à Dar Bouazza.",
              "تكنولوجيا حديثة ونهج إنساني في دار بوعزة."
            )}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-3 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              {t("Cabinet Ouvert", "العيادة مفتوحة")}
            </div>
            <div className="flex items-center gap-3 text-sm font-medium opacity-60">
              <Star size={14} className="text-brand-gold" fill="currentColor" />
              {t("Technologie de pointe", "تكنولوجيا متقدمة")}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-brand-brown/5 relative">
            <div className="absolute -top-4 -right-4 bg-brand-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {t("Rendez-vous", "موعد")}
            </div>
            <h4 className="text-2xl font-serif mb-6">{t("Réserver une consultation", "حجز استشارة")}</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t("Nom complet", "الاسم الكامل")}
                  className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 focus:outline-none focus:border-brand-green bg-brand-beige/20"
                />
                <input
                  type="tel"
                  placeholder={t("Numéro de téléphone", "رقم الهاتف")}
                  className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 focus:outline-none focus:border-brand-green bg-brand-beige/20"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-brand-brown/10 focus:outline-none focus:border-brand-green bg-brand-beige/20 text-sm opacity-70">
                  <option>{t("Type de consultation", "نوع الاستشارة")}</option>
                  <option>{t("Consultation générale", "فحص عام")}</option>
                  <option>{t("Contrôle de la vue", "قياس البصر")}</option>
                  <option>{t("Urgence", "حالة مستعجلة")}</option>
                </select>
              </div>
              <button type="submit" className="w-full btn-primary mt-4 flex justify-center items-center gap-2">
                {t("Confirmer la demande", "تأكيد الطلب")}
                <ArrowRight size={18} className={isRTL ? "rotate-180" : ""} />
              </button>
              <p className="text-[10px] text-center opacity-40 mt-4 uppercase tracking-widest">
                {t("Réponse sous 24h ouvrées", "الرد خلال 24 ساعة عمل")}
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
