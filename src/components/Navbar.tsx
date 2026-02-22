import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NAV_ITEMS, CLINIC_INFO } from '../constants';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Navbar = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-brown/10">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo className="w-14 h-8" />
          <div className="hidden sm:block">
            <h1 className="text-lg font-serif leading-tight">{CLINIC_INFO.doctor}</h1>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Ophtalmologie Dar Bouazza</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-brand-green transition-colors"
            >
              {t(item.label, item.labelAr)}
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter border border-brand-brown/20 px-3 py-1 rounded-full hover:bg-brand-brown hover:text-white transition-all"
          >
            <Globe size={14} />
            {language === 'fr' ? 'العربية' : 'Français'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
            className="p-2"
          >
            <Globe size={20} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-beige border-b border-brand-brown/10 p-6 flex flex-col gap-4"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif"
              >
                {t(item.label, item.labelAr)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
