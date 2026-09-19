export interface NavItem {
  label: string;
  path: string;
}

export interface FlavourItem {
  name: string;
  pricePerKg: number;
  category: string;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Cake", path: "/cake" },
  { label: "Gallery", path: "/gallery" },
];

export const sideKeywords = [
  "CAKES",
  "PEOPLE",
  "STORIES",
  "HAPPINESS",
  "YOU",
];

export const footerKeywords = [
  "CELEBRATIONS",
  "PEOPLE",
  "MEMORIES",
  "FLAVOURS",
  "ALL IN ONE CAKE",
];

export const menuFlavours: FlavourItem[] = [
  { name: "Pineapple", pricePerKg: 1200, category: "Fruit" },
  { name: "Blackforest", pricePerKg: 1200, category: "Chocolate" },
  { name: "Butterscotch", pricePerKg: 1300, category: "Classic" },
  { name: "Lychee", pricePerKg: 1300, category: "Fruit" },
  { name: "Vanilla", pricePerKg: 1300, category: "Classic" },
  { name: "Strawberry", pricePerKg: 1300, category: "Fruit" },
  { name: "Chocolate Truffle", pricePerKg: 1500, category: "Chocolate" },
  { name: "Whiteforest", pricePerKg: 1600, category: "Special" },
  { name: "German Chocolate", pricePerKg: 1600, category: "Chocolate" },
  { name: "Red Velvet", pricePerKg: 2000, category: "Signature" },
  { name: "Chocolate Oreo", pricePerKg: 2000, category: "Signature" },
];

export const occasionOptions = [
  "Birthday",
  "Anniversary",
  "Baby Shower",
  "Bridal Shower",
  "Kids Party",
  "Corporate Event",
  "Milestone Celebration",
  "Just Because",
];

export const weightOptions = [
  { label: "0.5 kg", value: 0.5 },
  { label: "1 kg", value: 1 },
  { label: "1.5 kg", value: 1.5 },
  { label: "2 kg", value: 2 },
  { label: "3 kg", value: 3 },
  { label: "4 kg", value: 4 },
  { label: "5+ kg (Tier)", value: 5 },
];
