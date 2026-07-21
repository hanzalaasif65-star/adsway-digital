const services = [
  {
    title: "Social Media Management",
    description: "Grow your brand with consistent, engaging social media content.",
    icon: "📱",
  },
  {
    title: "Meta Ads",
    description: "Generate high-quality leads with Facebook & Instagram advertising.",
    icon: "🎯",
  },
  {
    title: "Google Ads",
    description: "Reach customers actively searching for your products and services.",
    icon: "🔍",
  },
  {
    title: "Website Development",
    description: "Modern, fast and responsive business websites that convert.",
    icon: "💻",
  },
  {
    title: "Graphic Design",
    description: "Premium branding, social posts, menus, flyers and creatives.",
    icon: "🎨",
  },
  {
    title: "Video Editing",
    description: "Professional reels, ads and promotional videos that grab attention.",
    icon: "🎬",
  },
  {
    title: "Content Creation",
    description: "Creative content that connects your brand with your audience.",
    icon: "📸",
  },
  {
    title: "Branding",
    description: "Build a memorable identity with professional branding solutions.",
    icon: "✨",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-purple-600 font-semibold text-center">
          WHAT WE DO
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          Our Services
        </h2>

        <p className="text-gray-500 text-center max-w-2xl mx-auto mt-6">
          Everything your business needs to grow online under one roof.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-purple-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}