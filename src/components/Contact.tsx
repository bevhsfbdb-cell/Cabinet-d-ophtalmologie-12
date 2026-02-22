import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green mb-4">
              {t("Contact & Accès", "الاتصال والوصول")}
            </h2>
            <h3 className="text-4xl font-serif mb-8">
              {t(
                "Nous sommes à votre écoute.",
                "نحن في خدمتكم."
              )}
            </h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t("Adresse", "العنوان")}</h4>
                  <p className="opacity-70 text-sm leading-relaxed">{CLINIC_INFO.address}</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-green uppercase tracking-widest mt-2 inline-block hover:underline"
                  >
                    {t("Voir sur Google Maps", "عرض على خرائط جوجل")}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-green shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t("Téléphones", "الهواتف")}</h4>
                  <div className="flex flex-col gap-1">
                    {CLINIC_INFO.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="opacity-70 text-sm hover:text-brand-green transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center text-brand-green shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{t("Horaires d'ouverture", "ساعات العمل")}</h4>
                  <div className="text-sm opacity-70">
                    <p>{t("Lundi – Vendredi : ", "الاثنين - الجمعة: ")} {CLINIC_INFO.hours.monFri}</p>
                    <p>{t("Samedi : ", "السبت: ")} {CLINIC_INFO.hours.sat}</p>
                    <p>{t("Dimanche : ", "الأحد: ")} {CLINIC_INFO.hours.sun}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-brand-brown/5 bg-brand-green/5 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-brand-green mx-auto mb-4" />
                <p className="font-serif text-xl mb-2">{t("Dar Bouazza", "دار بوعزة")}</p>
                <p className="text-sm opacity-60">{CLINIC_INFO.address}</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-brown text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
                {t("Stationnement", "موقف السيارات")}
              </p>
              <p className="text-sm opacity-80">
                {t("Parking gratuit disponible.", "مواقف مجانية للسيارات متوفرة.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
