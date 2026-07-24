import {
  Monitor,
  Megaphone,
  Search,
  Globe,
  Palette,
  Clapperboard,
  Camera,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Build a consistent online presence with engaging content that keeps your audience connected.",
    icon: Monitor,
  },
  {
    title: "Meta Ads",
    description:
      "Generate quality leads and sales through high-converting Facebook & Instagram campaigns.",
    icon: Megaphone,
  },
  {
    title: "Google Ads",
    description:
      "Capture customers actively searching for your products and services.",
    icon: Search,
  },
  {
    title: "Website Development",
    description:
      "Modern, responsive websites designed to convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "Graphic Design",
    description:
      "Premium social media creatives, branding, menus, flyers and marketing assets.",
    icon: Palette,
  },
  {
    title: "Video Editing",
    description:
      "Professional reels and promotional videos that stop the scroll.",
    icon: Clapperboard,
  },
  {
    title: "Content Creation",
    description:
      "Creative photography and content that makes your brand stand out.",
    icon: Camera,
  },
  {
    title: "Brand Identity",
    description:
      "Create a memorable brand with professional visual identity and strategy.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Everything You Need
            <br />
            To Grow Online
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From strategy to execution, Adsway Digital helps businesses attract
            more customers, build stronger brands and increase revenue.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center font-semibold text-purple-600">
                  Learn More
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}