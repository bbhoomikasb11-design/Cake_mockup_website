export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  chapterNumber: string;
  image: string;
  placeholderFilename: string;
  subtitle?: string;
  description?: string;
  occasion?: string;
}

export interface DetailCloseUp {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  placeholderFilename: string;
}

export interface CelebrationPhoto {
  id: string;
  caption: string;
  image: string;
  placeholderFilename: string;
  tilt: string;
}

export const galleryCategories = [
  { id: "all", name: "ALL", iconName: "flower" },
  { id: "birthday", name: "BIRTHDAY", iconName: "ribbon" },
  { id: "themed", name: "THEMED", iconName: "sparkles" },
  { id: "floral", name: "FLORAL", iconName: "leaf" },
  { id: "kids", name: "KIDS", iconName: "teddy" },
  { id: "couple", name: "COUPLE", iconName: "heart" },
  { id: "minimal", name: "MINIMAL", iconName: "feather" },
  { id: "corporate", name: "CORPORATE", iconName: "briefcase" },
  { id: "special", name: "SPECIAL OCCASIONS", iconName: "pearl" },
];

export const featuredCoverFlowItems: GalleryItem[] = [
  {
    id: "grace-in-white",
    title: "Grace in White",
    category: "minimal",
    chapterNumber: "01",
    image: "/images/gallery/grace-in-white.jpg",
    placeholderFilename: "gallery/grace-in-white.jpg",
    subtitle: "ELEGANT",
    description: "Multi-tiered classic ivory structure with hand-placed baby blue sugar petals.",
  },
  {
    id: "hearts-and-happiness",
    title: "Hearts & Happiness",
    category: "special",
    chapterNumber: "02",
    image: "/images/gallery/hearts-and-happiness.jpg",
    placeholderFilename: "gallery/hearts-and-happiness.jpg",
    subtitle: "SPECIAL OCCASION",
    description: "Deep rose piped velvet swirls adorned with delicate edible pearls.",
  },
  {
    id: "princess-in-bloom",
    title: "A Princess in Bloom",
    category: "birthday",
    chapterNumber: "03",
    image: "/images/cakes/princess-doll.jpg",
    placeholderFilename: "cakes/princess-doll.jpg",
    subtitle: "BIRTHDAY CAKE",
    description: "Handcrafted sugar doll dressed in a rainbow ombre ballgown surrounded by garden roses.",
  },
  {
    id: "wild-imaginations",
    title: "Wild Imaginations",
    category: "kids",
    chapterNumber: "04",
    image: "/images/gallery/wild-imaginations.jpg",
    placeholderFilename: "gallery/wild-imaginations.jpg",
    subtitle: "KIDS CAKE",
    description: "Jungle safari adventure with hand-sculpted fondant lion, elephant, and giraffe.",
  },
  {
    id: "floral-poetry",
    title: "Floral Poetry",
    category: "floral",
    chapterNumber: "05",
    image: "/images/gallery/floral-poetry.jpg",
    placeholderFilename: "gallery/floral-poetry.jpg",
    subtitle: "FLORAL",
    description: "Soft pink wafer-paper blossoms cascading over brushed gold leaf tiers.",
  },
];

export const fullGalleryItems: GalleryItem[] = [
  ...featuredCoverFlowItems,
  {
    id: "fairy-tales",
    title: "Fairy Tales",
    category: "themed",
    chapterNumber: "06",
    image: "/images/cakes/fairy-tales.jpg",
    placeholderFilename: "cakes/fairy-tales.jpg",
    subtitle: "THEMED",
    description: "Whimsical forest fairy figurine seated on sugar bloom garden.",
  },
  {
    id: "quirky-heart",
    title: "Anatomical Love",
    category: "special",
    chapterNumber: "07",
    image: "/images/cakes/quirky-fun.jpg",
    placeholderFilename: "cakes/quirky-fun.jpg",
    subtitle: "QUIRKY & FUN",
    description: "Bold glossy crimson heart sculpt with realistic sugar piping.",
  },
  {
    id: "chocolate-box",
    title: "Indulgence Box",
    category: "corporate",
    chapterNumber: "08",
    image: "/images/cakes/indulgence.jpg",
    placeholderFilename: "cakes/indulgence.jpg",
    subtitle: "DESSERT TABLE",
    description: "Customized Belgian artisan brownies and chocolate bites with message tiles.",
  },
  {
    id: "tuxedo-gentleman",
    title: "The Gentleman's Tux",
    category: "special",
    chapterNumber: "09",
    image: "/images/cakes/mens-classics.jpg",
    placeholderFilename: "cakes/mens-classics.jpg",
    subtitle: "MILESTONE",
    description: "Sharp black and white tuxedo cake with crimson bowtie and gold accents.",
  },
  {
    id: "candy-wonderland",
    title: "Candylicious Dream",
    category: "kids",
    chapterNumber: "10",
    image: "/images/about/neha-candy-cake.jpg",
    placeholderFilename: "about/neha-candy-cake.jpg",
    subtitle: "KIDS CELEBRATION",
    description: "Three-tier rainbow lollipop and ice-cream wonderland.",
  },
  {
    id: "swan-romance",
    title: "Swan Lake Serenade",
    category: "couple",
    chapterNumber: "11",
    image: "/images/about/neha-decorating-swan.jpg",
    placeholderFilename: "about/neha-decorating-swan.jpg",
    subtitle: "ANNIVERSARY / WEDDING",
    description: "Grand 4-tier blue floral architectural cake with illuminated swan alcove.",
  },
  {
    id: "travel-bmw",
    title: "Wanderlust & Wheels",
    category: "themed",
    chapterNumber: "12",
    image: "/images/about/neha-travel-cake.jpg",
    placeholderFilename: "about/neha-travel-cake.jpg",
    subtitle: "CUSTOM THEME",
    description: "Sky-blue milestone cake with airplane, luggage toppers, and BMW emblem.",
  },
];

export const detailCloseUps: DetailCloseUp[] = [
  {
    id: "textures",
    title: "TEXTURES",
    subtitle: "Petals & Sugar Ruffles",
    image: "/images/details/textures.jpg",
    placeholderFilename: "details/textures.jpg",
  },
  {
    id: "florals",
    title: "FLORALS",
    subtitle: "Handcrafted 24k Gold Accents",
    image: "/images/details/florals.jpg",
    placeholderFilename: "details/florals.jpg",
  },
  {
    id: "figurines",
    title: "PEARLS",
    subtitle: "Lustrous Edible Pearls",
    image: "/images/details/pearls.jpg",
    placeholderFilename: "details/pearls.jpg",
  },
  {
    id: "finishes",
    title: "FIGURINES",
    subtitle: "Hand-sculpted Teddy Topper",
    image: "/images/details/figurines.jpg",
    placeholderFilename: "details/figurines.jpg",
  },
  {
    id: "details",
    title: "RUFFLES",
    subtitle: "Petal-soft Whip Layering",
    image: "/images/details/details.jpg",
    placeholderFilename: "details/details.jpg",
  },
];

export const celebrationPolaroids: CelebrationPhoto[] = [
  {
    id: "jungle-safari",
    caption: "The 1st Birthday Joy ♡",
    image: "/images/gallery/celebration-1.jpg",
    placeholderFilename: "gallery/celebration-1.jpg",
    tilt: "-rotate-3",
  },
  {
    id: "sweet-surprises",
    caption: "Handmade Box of Joy",
    image: "/images/gallery/celebration-2.jpg",
    placeholderFilename: "gallery/celebration-2.jpg",
    tilt: "rotate-2",
  },
  {
    id: "heart-cake",
    caption: "Quirky Red Heart",
    image: "/images/gallery/celebration-3.jpg",
    placeholderFilename: "gallery/celebration-3.jpg",
    tilt: "-rotate-2",
  },
  {
    id: "romantic-blooms",
    caption: "Blush Floral Tier",
    image: "/images/gallery/celebration-4.jpg",
    placeholderFilename: "gallery/celebration-4.jpg",
    tilt: "rotate-3",
  },
  {
    id: "gentleman-tux",
    caption: "A Gentleman's Toast",
    image: "/images/gallery/celebration-5.jpg",
    placeholderFilename: "gallery/celebration-5.jpg",
    tilt: "-rotate-1",
  },
];
