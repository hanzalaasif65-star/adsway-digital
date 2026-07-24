import {
  TrendingUp,
  Lightbulb,
  Palette,
  Zap,
  ShieldCheck,
  Target,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Results That Matter",
    description:
      "Every strategy is built to generate more leads, increase sales and grow your business.",
    icon: TrendingUp,
  },
  {
    title: "Creative Strategy",
    description:
      "Fresh ideas combined with proven marketing strategies that actually convert.",
    icon: Lightbulb,
  },
  {
    title: "Premium Design",
    description:
      "Modern visuals that instantly increase trust and brand value.",
    icon: Palette,
  },
  {
    title: "Fast Support",
    description:
      "Quick communication, fast revisions and reliable support.",
    icon: Zap,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-28">

      <div className="absolute -top-32 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="absolute left-8 top-12 grid grid-cols-5 gap-2 opacity-30">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-purple-400"
          />
        ))}
      </div>

      <div className="absolute bottom-12 right-8 grid grid-cols-5 gap-2 opacity-30">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-purple-400"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-6 py-2 text-sm font-semibold tracking-wide text-purple-700">
            WHY ADSWAY DIGITAL
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
            More Than An Agency,
            <br />
            Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Growth Partner
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            We combine creativity, strategy and performance marketing
            to help businesses scale with confidence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
              >

                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-500 group-hover:scale-x-100"></div>

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition duration-500 group-hover:scale-110 group-hover:rotate-6">

                  <Icon
                    size={36}
                    className="text-purple-600"
                  />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500 group-hover:w-24"></div>

                <p className="mt-6 leading-8 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center font-semibold text-purple-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-2"
                  />
                </div>

              </div>

            );
          })}

        </div>
        
        <div className="mt-10">

          <div className="group relative overflow-hidden rounded-[36px] border border-gray-200 bg-white/80 p-10 backdrop-blur-xl shadow-lg transition-all duration-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              <div>

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition duration-500 group-hover:scale-110">

                  <ShieldCheck
                    size={40}
                    className="text-purple-600"
                  />

                </div>

                <h3 className="mt-8 text-4xl font-bold text-gray-900">
                  Your Growth Partner
                </h3>

                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  From branding and content creation to websites,
                  paid advertising and social media management,
                  everything is managed under one roof by one
                  dedicated team.
                </p>

                <button className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105">
                  Work With Us
                  <ArrowRight size={18} className="ml-2" />
                </button>

              </div>

              <div className="relative flex justify-center">

                <div className="absolute h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

                <div className="relative flex h-72 w-72 items-center justify-center">

                  <div className="absolute h-60 w-60 rounded-full border-[18px] border-purple-200"></div>

                  <div className="absolute h-40 w-40 rounded-full border-[16px] border-purple-300"></div>

                  <div className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-xl"></div>

                  <Target
                    size={130}
                    strokeWidth={1.4}
                    className="absolute text-purple-400"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}