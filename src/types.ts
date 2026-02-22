export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  benefit: string;
}

export interface NavItem {
  label: string;
  labelAr: string;
  href: string;
}
