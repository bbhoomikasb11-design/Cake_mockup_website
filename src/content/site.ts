export interface SiteConfig {
  brandName: string;
  tagline: string;
  scriptTagline: string;
  location: string;
  whatsappNumber: string;
  email: string;
  socials: {
    instagram: string;
    whatsapp: string;
    youtube: string;
    pinterest: string;
  };
  defaultWhatsappMessage: string;
}

export const siteConfig: SiteConfig = {
  brandName: "Cream On Top",
  tagline: "More than a cake, it's a feeling.",
  scriptTagline: "Good Cakes Happier People ♡",
  location: "Bengaluru, India",
  whatsappNumber: "+919743008816",
  email: "nehats2002@gmail.com",
  socials: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919743008816",
    youtube: "https://youtube.com",
    pinterest: "https://pinterest.com",
  },
  defaultWhatsappMessage: "Hi Neha! I would love to order a custom cake from Cream On Top for an upcoming celebration.",
};
