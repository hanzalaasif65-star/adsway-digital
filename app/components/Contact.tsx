import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      title: "WhatsApp",
      value: "+92 310 7885938",
      subtitle: "Usually replies within minutes",
      href: "https://wa.me/923107885938",
      icon: Phone,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Email",
      value: "info.adswaydigital@gmail.com",
      subtitle: "For business inquiries",
      href: "mailto:info.adswaydigital@gmail.com",
      icon: Mail,
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Office",
      value: "Karachi, Pakistan",
      subtitle: "Serving clients worldwide",
      href: "#",
      icon: MapPin,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-32">
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[130px]" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Dots */}
      <div className="absolute left-10 top-16 hidden grid-cols-5 gap-2 opacity-30 lg:grid">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-purple-400"
          />
        ))}
      </div>

      <div className="absolute bottom-16 right-10 hidden grid-cols-5 gap-2 opacity-30 lg:grid">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-purple-400"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold tracking-wide text-purple-700">
            CONTACT ADSWAY DIGITAL
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
            Let's Create Something
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Ready to grow your business? We'd love to hear about your project
            and help turn your ideas into measurable results.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-500 group-hover:scale-x-100" />

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 break-all text-lg font-medium text-purple-600">
                  {item.value}
                </p>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.subtitle}
                </p>

                <div className="mt-8 flex items-center font-semibold text-gray-900 transition group-hover:text-purple-600">
                  Get in touch

                  <ArrowUpRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 overflow-hidden rounded-[36px] border border-purple-200 bg-gradient-to-r from-purple-600 to-blue-600 p-10 text-white shadow-[0_30px_80px_rgba(124,58,237,.25)]">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-4xl font-black">
                Ready to start your next project?
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                Let's discuss your goals and build a marketing strategy that
                helps your business stand out and grow.
              </p>
            </div>

            <div className="flex items-center rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
              <Clock3 className="mr-3" size={22} />
              <span className="font-semibold">
                Average response: Under 30 minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}