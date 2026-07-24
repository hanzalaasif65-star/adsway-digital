import Image from "next/image";
import {
  BadgeCheck,
  Handshake,
  MessageCircleMore,
} from "lucide-react";

const clients = [
  "/clients/redtree.jpg",
  "/clients/alaza.jpg",
  "/clients/zarqun.jpg",
  "/clients/creamy-dreamy.jpg",
  "/clients/burato.jpg",
  "/clients/hfc.jpg",
];

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Dots */}
      <div className="absolute left-10 top-16 hidden grid-cols-5 gap-2 opacity-30 lg:grid">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-purple-400" />
        ))}
      </div>

      <div className="absolute bottom-16 right-10 hidden grid-cols-5 gap-2 opacity-30 lg:grid">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-purple-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold tracking-wide text-purple-700">
            TRUSTED BY LEADING BRANDS
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">
            Businesses That{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Trust Adsway Digital
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From startups to established businesses, we help brands build
            stronger online presence through creative content,
            performance marketing and premium branding.
          </p>

        </div>

        {/* Logo Marquee */}

        <div className="relative mt-20 overflow-hidden">

          <div className="animate-marquee flex w-max gap-8">

            {[...clients, ...clients].map((logo, index) => (

              <div
                key={index}
                className="group flex h-32 w-52 shrink-0 items-center justify-center rounded-3xl border border-gray-200 bg-white/80 p-8 backdrop-blur-xl shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]"
              >

                <Image
                  src={logo}
                  alt="Client Logo"
                  width={170}
                  height={90}
                  className="max-h-20 w-auto object-contain grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />

              </div>

            ))}

          </div>

        </div>

        {/* Trust Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
                    <div className="group rounded-3xl border border-gray-200 bg-white/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <BadgeCheck size={30} />
            </div>

            <h3 className="mt-6 text-center text-2xl font-bold text-gray-900">
              Trusted Results
            </h3>

            <p className="mt-4 text-center leading-7 text-gray-600">
              Every project is focused on helping businesses achieve measurable
              growth through creative marketing and performance-driven
              strategies.
            </p>

          </div>

          <div className="group rounded-3xl border border-gray-200 bg-white/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Handshake size={30} />
            </div>

            <h3 className="mt-6 text-center text-2xl font-bold text-gray-900">
              Long-Term Partnerships
            </h3>

            <p className="mt-4 text-center leading-7 text-gray-600">
              We believe in building lasting relationships and becoming a trusted
              marketing partner for every business we work with.
            </p>

          </div>

          <div className="group rounded-3xl border border-gray-200 bg-white/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <MessageCircleMore size={30} />
            </div>

            <h3 className="mt-6 text-center text-2xl font-bold text-gray-900">
              Fast Communication
            </h3>

            <p className="mt-4 text-center leading-7 text-gray-600">
              Clear communication, quick responses and reliable support from the
              first meeting to the final delivery.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
