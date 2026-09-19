export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  chapterNumber: string;
  image: string;
  placeholderFilename: string;
  subtitle?: string;
}

export interface DetailCloseUp {
  id: string;
  title: string;
  image: string;
  placeholderFilename: string;
}

export interface CelebrationPhoto {
  id: string;
  caption: string;
  image: string;
  placeholderFilename: string;
  tilt: string; // Tailwind rotate class e.g. -rotate-2
}

export const galleryCategories = [
  { id: "all", name: "ALL" },
  { id: "birthday", name: "BIRTHDAY" },
  { id: "themed", name: "THEMED" },
  { id: "floral", name: "FLORAL" },
  { id: "kids", name: "KIDS" },
  { id: "couple", name: "COUPLE" },
  { id: "minimal", name: "MINIMAL" },
  { id: "corporate", name: "CORPORATE" },
  { id: "special", name: "SPECIAL OCCASIONS" },
];

export const featuredGalleryItems: GalleryItem[] = [
  {
    id: "grace-in-white",
    title: "Grace in White",
    category: "minimal",
    chapterNumber: "01",
    image: "/images/gallery/grace-in-white.jpg",
    placeholderFilename: "gallery/grace-in-white.jpg",
    subtitle: "ELEGANT",
  },
  {
    id: "hearts-and-happiness",
    title: "Hearts & Happiness",
    category: "special",
    chapterNumber: "02",
    image: "/images/gallery/hearts-and-happiness.jpg",
    placeholderFilename: "gallery/hearts-and-happiness.jpg",
    subtitle: "SPECIAL OCCASION",
  },
  {
    id: "princess-in-bloom",
    title: "A Princess in Bloom",
    category: "birthday",
    chapterNumber: "03",
    image: "/images/gallery/princess-in-bloom.jpg",
    placeholderFilename: "gallery/princess-in-bloom.jpg",
    subtitle: "BIRTHDAY CAKE",
  },
  {
    id: "wild-imaginations",
    title: "Wild Imaginations",
    category: "kids",
    chapterNumber: "04",
    image: "/images/gallery/wild-imaginations.jpg",
    placeholderFilename: "gallery/wild-imaginations.jpg",
    subtitle: "KIDS CAKE",
  },
  {
    id: "floral-poetry",
    title: "Floral Poetry",
    category: "floral",
    chapterNumber: "05",
    image: "/images/gallery/floral-poetry.jpg",
    placeholderFilename: "gallery/floral-poetry.jpg",
    subtitle: "FLORAL",
  },
];

export const detailCloseUps: DetailCloseUp[] = [
  {
    id: "textures",
    title: "TEXTURES",
    image: "/images/details/textures.jpg",
    placeholderFilename: "details/textures.jpg",
  },
  {
    id: "florals",
    title: "FLORALS",
    image: "/images/details/florals.jpg",
    placeholderFilename: "details/florals.jpg",
  },
  {
    id: "figurines",
    title: "FIGURINES",
    image: "/images/details/figurines.jpg",
    placeholderFilename: "details/figurines.jpg",
  },
  {
    id: "finishes",
    title: "FINISHES",
    image: "/images/details/finishes.jpg",
    placeholderFilename: "details/finishes.jpg",
  },
  {
    id: "details",
    title: "DETAILS",
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
