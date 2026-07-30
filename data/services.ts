export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Social Media Management",
    slug: "social-media-management",
    icon: "📱",
    description:
      "We manage your social media accounts to build a strong brand, increase engagement, and keep your audience active.",
    features: [
      "Content Planning",
      "Content Calendar",
      "Post Scheduling",
      "Community Management",
      "Monthly Reports",
    ],
  },

  {
    id: 2,
    title: "Content Creation",
    slug: "content-creation",
    icon: "📸",
    description:
      "Professional photography and videography that makes your restaurant look premium online.",
    features: [
      "Food Photography",
      "Restaurant Photography",
      "Reels",
      "Short Videos",
      "Lifestyle Content",
    ],
  },

  {
    id: 3,
    title: "Video Editing",
    slug: "video-editing",
    icon: "🎬",
    description:
      "High-quality edits designed to capture attention and increase engagement across social platforms.",
    features: [
      "Instagram Reels",
      "TikTok Videos",
      "Transitions",
      "Color Grading",
      "Motion Graphics",
    ],
  },

  {
    id: 4,
    title: "Graphic Design",
    slug: "graphic-design",
    icon: "🎨",
    description:
      "Creative designs that strengthen your brand identity and improve your social media presence.",
    features: [
      "Social Media Posts",
      "Story Designs",
      "Menus",
      "Flyers",
      "Brand Assets",
    ],
  },

  {
    id: 5,
    title: "Meta Advertising",
    slug: "meta-ads",
    icon: "📈",
    description:
      "Run highly targeted Facebook and Instagram ad campaigns that generate leads and sales.",
    features: [
      "Campaign Setup",
      "Audience Research",
      "Retargeting",
      "A/B Testing",
      "Performance Reports",
    ],
  },

  {
    id: 6,
    title: "Google Ads",
    slug: "google-ads",
    icon: "🔍",
    description:
      "Reach customers actively searching for your business with optimized Google Ads campaigns.",
    features: [
      "Search Ads",
      "Display Ads",
      "Keyword Research",
      "Conversion Tracking",
      "Optimization",
    ],
  },

  {
    id: 7,
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    icon: "🤝",
    description:
      "Connect your restaurant with the right influencers to build trust and reach new audiences.",
    features: [
      "Influencer Research",
      "Collaboration Management",
      "Campaign Planning",
      "Performance Tracking",
      "Reporting",
    ],
  },

  {
    id: 8,
    title: "Brand Strategy",
    slug: "brand-strategy",
    icon: "🚀",
    description:
      "Create a consistent brand identity that makes your business memorable and trusted.",
    features: [
      "Brand Positioning",
      "Marketing Strategy",
      "Visual Identity",
      "Content Direction",
      "Growth Planning",
    ],
  },
];