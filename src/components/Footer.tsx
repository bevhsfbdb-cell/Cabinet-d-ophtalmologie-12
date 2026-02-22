import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO, NAV_ITEMS } from '../constants';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-brown text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-20 h-12" />
              <div>
                <h2 className="text-xl font-serif">{CLINIC_INFO.doctor}</h2>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Ophtalmologie Dar Bouazza</p>
              </div>
            </div>
            <p className="opacity-60 max-w-sm mb-8">
              {t(
                "Votre santé visuelle est notre priorité. Nous vous accueillons dans un cadre moderne et chaleureux pour des soins d'excellence.",
                "صحة عيونكم هي أولويتنا. نرحب بكم في إطار حديث ودافئ لتقديم رعاية متميزة."
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-brown transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-brown transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-brown transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-brand-gold">{t("Navigation", "التنقل")}</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="opacity-60 hover:opacity-100 hover:text-brand-gold transition-all text-sm">
                    {t(item.label, item.labelAr)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm text-brand-gold">{t("Légal", "قانوني")}</h4>
            <ul className="space-y-4 opacity-60 text-sm">
              <li>{t("Mentions Légales", "إشعار قانوني")}</li>
              <li>{t("Confidentialité", "الخصوصية")}</li>
              <li>{t("Cookies", "ملفات تعريف الارتباط")}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <p>{t("Conçu avec excellence pour votre vision.", "صمم بتميز من أجل رؤيتكم.")}</p>
        </div>
      </div>
    </footer>
  );
};
