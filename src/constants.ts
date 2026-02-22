import { NavItem, Service, Technology } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", labelAr: "الرئيسية", href: "#home" },
  { label: "Le Cabinet", labelAr: "العيادة", href: "#about" },
  { label: "Services", labelAr: "الخدمات", href: "#services" },
  { label: "Technologie", labelAr: "التكنولوجيا", href: "#tech" },
  { label: "Contact", labelAr: "اتصل بنا", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "consultation",
    title: "Consultation",
    titleAr: "فحص",
    description: "Bilan complet de la vision.",
    descriptionAr: "فحص شامل للرؤية.",
    icon: "Eye",
  },
  {
    id: "refraction",
    title: "Réfraction",
    titleAr: "قياس البصر",
    description: "Mesure précise via auto-réfractomètre.",
    descriptionAr: "قياس دقيق عبر جهاز قياس الانكسار.",
    icon: "Glasses",
  },
  {
    id: "tension",
    title: "Tension",
    titleAr: "ضغط العين",
    description: "Dépistage du glaucome.",
    descriptionAr: "فحص الجلوكوما.",
    icon: "Activity",
  },
  {
    id: "segment-anterieur",
    title: "Segment Antérieur",
    titleAr: "الجزء الأمامي",
    description: "Examen à la lampe à fente.",
    descriptionAr: "فحص بالمصباح الشقي.",
    icon: "Zap",
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: "auto-refractor",
    name: "Auto-réfractomètre",
    description: "Mesure automatique des défauts visuels.",
    benefit: "Précision optique.",
  },
  {
    id: "slit-lamp",
    name: "Lampe à Fente HD",
    description: "Observation détaillée des structures.",
    benefit: "Diagnostic précoce.",
  },
  {
    id: "tonometer",
    name: "Tonomètre à Air",
    description: "Mesure de pression sans contact.",
    benefit: "Confort total.",
  },
];

export const CLINIC_INFO = {
  name: "Cabinet d'ophtalmologie Dr. NASROUNI Rihab",
  doctor: "Dr. NASROUNI Rihab",
  address: "DARB Business Center, N1 DALIA, 2ème étage, Route d’Azemour, Dar Bouazza, Casablanca",
  phones: ["+212 6 14 13 18 17", "+212 5 22 29 26 43"],
  email: "nasrouni.rihab@gmail.com",
  hours: {
    monFri: "09:00 – 18:00",
    sat: "09:00 – 13:00",
    sun: "Fermé",
  },
  googleRating: "4.6/5",
  reviewsCount: "70+",
};
