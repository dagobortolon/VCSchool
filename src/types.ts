export interface Course {
  title: string;
  desc: string;
  expandedDesc?: string;
  image?: string;
  level: string;
  lang: string;
  software: string;
  duration: string;
  price: string;
  learn: string[];
  checkout: string;
  comingSoon?: boolean;
  isNew?: boolean;
}

export interface Bundle {
  title: string;
  desc: string;
  image?: string;
  price: string;
  includes: string[];
  checkout: string;
}

export interface Testimonial {
  name: string;
  country?: string;
  course?: string;
  photo?: string;
  text: string;
}

export interface SocialLink {
  name: string;
  href: string;
}
