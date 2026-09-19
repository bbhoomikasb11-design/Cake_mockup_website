export interface StoryChapter {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  placeholderFilename: string;
}

export interface TimelinePolaroid {
  id: string;
  caption: string;
  handwrittenCaption: string;
  image: string;
  placeholderFilename: string;
  tilt: string;
  stage: string;
}

export const storyChapters: StoryChapter[] = [
  {
    number: "01",
    eyebrow: "THE SPARK",
    title: "A little girl and a big dream.",
    description: "It started with a curiosity, a microwave, and a lot of imagination. What began as a 12-year-old's fascination with cakes, turned into a lifelong journey.",
    image: "/images/about/spark.jpg",
    placeholderFilename: "about/spark.jpg",
  },
  {
    number: "02",
    eyebrow: "THE CRAFT",
    title: "Where imagination takes shape.",
    description: "From delicate details to gravity-defying designs, every cake is crafted with precision, creativity, and a whole lot of love.",
    image: "/images/hero/craft.jpg",
    placeholderFilename: "hero/craft.jpg",
  },
  {
    number: "03",
    eyebrow: "THE WOMAN BEHIND IT",
    title: "Hi, I'm Neha.",
    description: "A baker. An entrepreneur. A storyteller. From home baking to building Cream On Top, from custom cakes to social initiatives — this journey has always been about creating joy, spreading kindness, and believing in bigger dreams.",
    image: "/images/about/neha-portrait.jpg",
    placeholderFilename: "about/neha-portrait.jpg",
  },
];

export const timelinePolaroids: TimelinePolaroid[] = [
  {
    id: "first-bake",
    caption: "The first cake (around 12)",
    handwrittenCaption: "The first cake (around 12)",
    image: "/images/about/timeline-1.jpg",
    placeholderFilename: "about/timeline-1.jpg",
    tilt: "-rotate-3",
    stage: "CURIOSITY",
  },
  {
    id: "sixteen-dreaming",
    caption: "16 & Dreaming",
    handwrittenCaption: "16 & Dreaming",
    image: "/images/about/timeline-2.jpg",
    placeholderFilename: "about/timeline-2.jpg",
    tilt: "rotate-2",
    stage: "LEARNING",
  },
  {
    id: "building-cot",
    caption: "Building Cream On Top",
    handwrittenCaption: "Building Cream On Top",
    image: "/images/about/timeline-3.jpg",
    placeholderFilename: "about/timeline-3.jpg",
    tilt: "-rotate-2",
    stage: "CREATING",
  },
  {
    id: "journey-continues",
    caption: "And the journey continues",
    handwrittenCaption: "And the journey continues ♡",
    image: "/images/about/timeline-4.jpg",
    placeholderFilename: "about/timeline-4.jpg",
    tilt: "rotate-3",
    stage: "GIVING BACK",
  },
];

export const socialInitiative = {
  eyebrow: "BEYOND CAKES",
  title: "A sweeter world together.",
  quote: "A cake can bring joy to one day, but kindness can change many.",
  description: "For the 5th anniversary of Cream On Top, we started Expedition Annapurna — donating a meal for every order, and supporting ashrams and NGOs across Bangalore. Because to me, sweetness is meant to be shared.",
  ctaText: "Our Social Initiatives",
  image: "/images/about/social-initiative.jpg",
  placeholderFilename: "about/social-initiative.jpg",
};
