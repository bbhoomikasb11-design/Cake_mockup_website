export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  verified: boolean;
}

export const achievementsList: AchievementItem[] = [
  {
    id: "tedx-speaker",
    title: "TEDx Speaker",
    subtitle: "Shared inspiring journey of entrepreneurship & creativity",
    iconName: "mic",
    verified: false,
  },
  {
    id: "josh-talks",
    title: "Josh Talks Speaker",
    subtitle: "Motivated thousands of young aspiring women bakers",
    iconName: "video",
    verified: false,
  },
  {
    id: "media-feature",
    title: "Featured in leading business & culinary platforms",
    subtitle: "Recognised for innovation in bespoke baking",
    iconName: "star",
    verified: false,
  },
  {
    id: "corporate-collab",
    title: "Collaborations with top corporate brands",
    subtitle: "Curated premium cake experiences for milestone events",
    iconName: "briefcase",
    verified: false,
  },
  {
    id: "more-milestones",
    title: "And many more milestones...",
    subtitle: "Grateful for every single client story and memory made",
    iconName: "dots",
    verified: false,
  },
];

export const featuredAward = {
  title: "Trailblazer in Homebaking",
  organization: "BMK Awards",
  image: "/images/about/award-trophy.png",
  placeholderFilename: "about/award-trophy.png",
  verified: false,
};
