export interface Course {
  title: string;
  desc: string;
  level: string;
  lang: string;
  software: string;
  duration: string;
  price: string;
  learn: string[];
  checkout: string;
}

export interface Bundle {
  title: string;
  desc: string;
  price: string;
  includes: string[];
  checkout: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface SocialLink {
  name: string;
  href: string;
}
