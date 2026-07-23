const features = [
  {
    title: "Results That Matter",
    description:
      "We focus on leads, sales and business growth—not just likes and followers.",
    size: "lg:col-span-2 lg:row-span-2",
    emoji: "📈",
  },
  {
    title: "Creative Strategy",
    description:
      "Every campaign is designed to capture attention and convert customers.",
    size: "",
    emoji: "💡",
  },
  {
    title: "Premium Design",
    description:
      "Modern visuals that build trust and make your brand stand out.",
    size: "",
    emoji: "🎨",
  },
  {
    title: "Fast Support",
    description:
      "Quick communication and reliable support whenever you need us.",
    size: "",
    emoji: "⚡",
  },
  {
    title: "Everything Under One Roof",
    description:
      "From branding to websites and paid ads—we handle everything.",
    size: "lg:col-span-2",
    emoji: "🚀",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-purple-600 font-semibold text-center">
          WHY ADSWAY DIGITAL
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          Why Choose Us?
        </h2>

        <p className="text-gray-500 text-center mt-6 max-w-2xl mx-auto">
          We combine creativity, marketing strategy and technology
          to help businesses grow faster.
        </p>

        <div className="grid lg:grid-cols-4 gap-6 mt-16 auto-rows-[220px]">

          {features.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl p-8 bg-gradient-to-br from-white to-gray-100 border border-gray-200 hover:border-purple-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${item.size}`}
            >
              <div className="text-5xl">
                {item.emoji}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}