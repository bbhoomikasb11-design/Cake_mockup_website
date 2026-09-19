export interface CakeCategory {
  id: string;
  name: string;
  iconName: string; // Icon representation
  description: string;
}

export interface CakeItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  image: string;
  placeholderFilename: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const cakeCategories: CakeCategory[] = [
  { id: "birthday", name: "BIRTHDAY CAKES", iconName: "flower", description: "Vibrant & joyful bespoke birthday designs" },
  { id: "themed", name: "THEMED CAKES", iconName: "ribbon", description: "Imaginative themes crafted with artistic precision" },
  { id: "custom", name: "CUSTOM CREATIONS", iconName: "heart", description: "Tailor-made for your unique story" },
  { id: "special", name: "SPECIAL OCCASIONS", iconName: "macaron", description: "Milestones, anniversaries & grand moments" },
  { id: "kids", name: "KIDS CAKES", iconName: "teddy", description: "Whimsical figurines and fairytale characters" },
  { id: "minimal", name: "MINIMAL & ELEGANT", iconName: "feather", description: "Clean lines, subtle textures & timeless grace" },
  { id: "cupcakes", name: "CAKE + CUPCAKES", iconName: "butterfly", description: "Matching dessert tables and signature bites" },
  { id: "corporate", name: "CORPORATE & EVENTS", iconName: "pearl", description: "Sophisticated branding and luxury event centerpieces" },
];

export const featuredCakes: CakeItem[] = [
  {
    id: "fairy-tales",
    title: "Fairy Tales",
    category: "Themed Cakes",
    subtitle: "For the dreamers",
    image: "/images/cakes/fairy-tales.jpg",
    placeholderFilename: "cakes/fairy-tales.jpg",
    featured: true,
  },
  {
    id: "quirky-fun",
    title: "Quirky & Fun",
    category: "Custom Creations",
    subtitle: "For the different ones",
    image: "/images/cakes/quirky-fun.jpg",
    placeholderFilename: "cakes/quirky-fun.jpg",
    featured: true,
  },
  {
    id: "indulgence",
    title: "Indulgence",
    category: "Special Occasions",
    subtitle: "For the sweet moments",
    image: "/images/cakes/indulgence.jpg",
    placeholderFilename: "cakes/indulgence.jpg",
    featured: true,
  },
  {
    id: "little-joys",
    title: "Little Joys",
    category: "Kids Cakes",
    subtitle: "For the little ones",
    image: "/images/cakes/little-joys.jpg",
    placeholderFilename: "cakes/little-joys.jpg",
    featured: true,
  },
  {
    id: "statement-cakes",
    title: "Statement Cakes",
    category: "Minimal & Elegant",
    subtitle: "For unforgettable days",
    image: "/images/cakes/statement-cakes.jpg",
    placeholderFilename: "cakes/statement-cakes.jpg",
    featured: true,
  },
  {
    id: "mens-classics",
    title: "Men's Classics",
    category: "Special Occasions",
    subtitle: "For his special milestone",
    image: "/images/cakes/mens-classics.jpg",
    placeholderFilename: "cakes/mens-classics.jpg",
    featured: true,
  },
];

export const clientFavourites: CakeItem[] = [
  {
    id: "kids-party",
    title: "Kids Party Cakes",
    category: "Kids",
    subtitle: "Playful wonderland designs",
    image: "/images/cakes/kids-party.jpg",
    placeholderFilename: "cakes/kids-party.jpg",
  },
  {
    id: "floral-cakes",
    title: "Floral Cakes",
    category: "Floral",
    subtitle: "Hand-sculpted sugar flowers",
    image: "/images/cakes/floral-cakes.jpg",
    placeholderFilename: "cakes/floral-cakes.jpg",
  },
  {
    id: "chocolate-indulgence",
    title: "Chocolate Indulgence",
    category: "Special",
    subtitle: "Rich Belgian chocolate ganache",
    image: "/images/cakes/chocolate-indulgence.jpg",
    placeholderFilename: "cakes/chocolate-indulgence.jpg",
  },
  {
    id: "couple-cakes",
    title: "Couple Cakes",
    category: "Couple",
    subtitle: "Romantic anniversary & wedding tier cakes",
    image: "/images/cakes/couple-cakes.jpg",
    placeholderFilename: "cakes/couple-cakes.jpg",
  },
  {
    id: "elegant-designs",
    title: "Elegant Designs",
    category: "Minimal",
    subtitle: "Subtle gold leaf and ivory tones",
    image: "/images/cakes/elegant-designs.jpg",
    placeholderFilename: "cakes/elegant-designs.jpg",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Idea",
    description: "Tell us your occasion, theme, preferred flavours, or inspiration photos via WhatsApp.",
  },
  {
    number: "02",
    title: "We Design",
    description: "Neha curates a bespoke concept, color palette, and design tailored to your celebration.",
  },
  {
    number: "03",
    title: "We Craft",
    description: "Handmade with premium ingredients, precision, love, and intricate sugar artistry.",
  },
  {
    number: "04",
    title: "You Celebrate",
    description: "A showstopping cake delivered fresh in Bengaluru that leaves your guests in awe.",
  },
];

export const occasionsList = [
  "Birthdays",
  "Anniversaries",
  "Baby Showers",
  "Bridal Showers",
  "Corporate Events",
  "Festive Celebrations",
  "Just Because",
];
