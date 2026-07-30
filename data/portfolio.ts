export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;

  image: string;
  gallery: string[];

  featured?: boolean;

  description: string;

  challenge: string;

  solution: string;

  services: string[];

  result: string;

  results: string[];

  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

export const portfolio: PortfolioProject[] = [
      {
    id: 1,

    slug: "creamy-dreamy",

    title: "Creamy Dreamy",

    category: "Dessert Brand",

    year: "2026",

    featured: true,

image: "/portfolio/creamy-dreamy.jpg",

gallery: [
  "/portfolio/creamy-dreamy.jpg",
],

description:
  "Premium food content creation and social media marketing that transformed Creamy Dreamy's online presence.",

    challenge:
      "Creamy Dreamy had great products but lacked premium branding and engaging social media content. The goal was to create visuals that matched the quality of their desserts and helped the brand stand out in a competitive market.",

    solution:
      "Adsway Digital developed a complete content strategy, including professional food photography, cinematic reels, branded social media creatives, and Meta advertising to build a premium online identity.",

    services: [
      "Brand Strategy",
      "Food Photography",
      "Social Media Management",
      "Graphic Design",
      "Reels",
      "Meta Ads",
    ],

    result: "3.5M+ Views",

    results: [
      "3.5M+ Organic Views",
      "Millions of People Reached",
      "Premium Brand Identity",
      "High Performing Reels",
      "Consistent Social Media Presence",
    ],

    testimonial: {
      quote:
        "Adsway Digital completely transformed our social media presence with premium content and creative marketing.",
      author: "Management",
      company: "Creamy Dreamy",
    },
  },
    {
    id: 2,

    slug: "burato",

    title: "Burato",

    category: "Restaurant",

    year: "2026",

    image: "/portfolio/burato.jpg",

gallery: [
  "/portfolio/burato.jpg",
],

    description:
      "A complete restaurant branding and content marketing project focused on increasing brand awareness and attracting more customers.",

    challenge:
      "Burato needed a stronger digital identity with consistent branding and high-quality content that reflected the restaurant's food, atmosphere and overall customer experience.",

    solution:
      "Adsway Digital developed a complete visual strategy including restaurant photography, social media creatives, promotional campaigns and engaging short-form video content to strengthen Burato's online presence.",

    services: [
      "Brand Identity",
      "Social Media Management",
      "Graphic Design",
      "Food Photography",
      "Reels",
      "Content Strategy",
    ],

    result: "Restaurant Brand Growth",

    results: [
      "Professional Brand Identity",
      "Consistent Social Media Presence",
      "High Quality Food Photography",
      "Engaging Promotional Campaigns",
      "Premium Visual Content Library",
    ],

    testimonial: {
      quote:
        "The content perfectly represents our restaurant and has elevated our brand image.",
      author: "Management",
      company: "Burato",
    },
  },
    {
    id: 3,

    slug: "red-tree",

    title: "The Red Tree",

    category: "Guest House",

    year: "2026",

    image: "/portfolio/redtree.jpg",

gallery: [
  "/portfolio/redtree.jpg",
],

    description:
      "A premium hospitality branding project focused on creating a modern online presence through cinematic visuals, social media content and digital marketing.",

    challenge:
      "The Red Tree wanted to stand out in Karachi's competitive hospitality market with a stronger visual identity and premium digital presence that reflected the quality of the guest house.",

    solution:
      "Adsway Digital planned and executed a complete content production strategy including professional photography, cinematic reels, branding, graphic design and Meta advertising to position The Red Tree as a premium guest house.",

    services: [
      "Brand Identity",
      "Photography",
      "Videography",
      "Reels",
      "Graphic Design",
      "Social Media Management",
      "Meta Ads",
    ],

    result: "Professional Hospitality Branding",

    results: [
      "Premium Brand Positioning",
      "Luxury Visual Identity",
      "Professional Photo & Video Library",
      "High Quality Social Media Content",
      "Consistent Digital Branding",
    ],

    testimonial: {
      quote:
        "The new branding and content completely changed how people perceive our guest house online.",
      author: "Management",
      company: "The Red Tree",
    },
  },
    {
    id: 4,

    slug: "hfc",

    title: "HFC",

    category: "Fast Food",

    year: "2026",

    image: "/portfolio/hfc.jpg",

gallery: [
  "/portfolio/hfc.jpg",
],

    description:
      "Creative branding and content marketing designed to strengthen HFC's digital presence and attract more customers through engaging visuals.",

    challenge:
      "HFC needed eye-catching promotional content and a consistent visual identity that reflected the quality of its food while increasing engagement across social media.",

    solution:
      "Adsway Digital created a complete visual content strategy including promotional graphics, menu creatives, food photography, short-form videos and social media management.",

    services: [
      "Brand Identity",
      "Graphic Design",
      "Food Photography",
      "Content Creation",
      "Reels",
      "Social Media Management",
    ],

    result: "Creative Brand Campaigns",

    results: [
      "Modern Food Branding",
      "Professional Marketing Creatives",
      "Consistent Social Media Design",
      "Improved Online Presence",
      "High Quality Promotional Content",
    ],

    testimonial: {
      quote:
        "Adsway Digital helped us present our brand with a much more professional and modern look.",
      author: "Management",
      company: "HFC",
    },
  },
];