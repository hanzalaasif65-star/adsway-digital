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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-14 md:py-24">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl md:h-[420px] md:w-[420px]" />

      {/* Dots */}

      <div className="absolute left-8 top-14 hidden grid-cols-5 gap-2 opacity-30 lg:grid">
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

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold tracking-wide text-purple-700 md:px-5 md:text-sm">

            TRUSTED BY LEADING BRANDS

          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-gray-900 md:mt-6 md:text-5xl">

            Businesses That{" "}

            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">

              Trust Adsway Digital

            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-8">

            From startups to established businesses, we help brands build
            stronger online presence through creative content,
            performance marketing and premium branding.

          </p>

        </div>

        {/* Logo Slider */}

        <div className="relative mt-12 overflow-hidden md:mt-20">

          <div className="animate-marquee flex w-max gap-4 md:gap-8">

            {[...clients, ...clients].map((logo, index) => (

              <div
                key={index}
                className="group flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.18)] md:h-32 md:w-52 md:rounded-3xl md:p-8"
              >

                <Image
                  src={logo}
                  alt="Client Logo"
                  width={170}
                  height={90}
                  className="max-h-14 w-auto object-contain grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 md:max-h-20"
                />

              </div>

            ))}

          </div>

        </div>

        {/* Trust Cards */}

        <div className="mt-12 grid gap-5 md:mt-20 md:gap-8 md:grid-cols-3">
                    <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.18)] md:rounded-3xl md:p-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 md:h-16 md:w-16">

              <BadgeCheck size={26} className="md:h-[30px] md:w-[30px]" />

            </div>

            <h3 className="mt-5 text-center text-xl font-bold text-gray-900 md:mt-6 md:text-2xl">

              Trusted Results

            </h3>

            <p className="mt-3 text-center text-sm leading-7 text-gray-600 md:mt-4 md:text-base">

              Every project is focused on helping businesses achieve measurable
              growth through creative marketing and performance-driven
              strategies.

            </p>

          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.18)] md:rounded-3xl md:p-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 md:h-16 md:w-16">

              <Handshake size={26} className="md:h-[30px] md:w-[30px]" />

            </div>

            <h3 className="mt-5 text-center text-xl font-bold text-gray-900 md:mt-6 md:text-2xl">

              Long-Term Partnerships

            </h3>

            <p className="mt-3 text-center text-sm leading-7 text-gray-600 md:mt-4 md:text-base">

              We believe in building lasting relationships and becoming a trusted
              marketing partner for every business we work with.

            </p>

          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.18)] md:rounded-3xl md:p-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 md:h-16 md:w-16">

              <MessageCircleMore size={26} className="md:h-[30px] md:w-[30px]" />

            </div>

            <h3 className="mt-5 text-center text-xl font-bold text-gray-900 md:mt-6 md:text-2xl">

              Fast Communication

            </h3>

            <p className="mt-3 text-center text-sm leading-7 text-gray-600 md:mt-4 md:text-base">

              Clear communication, quick responses and reliable support from the
              first meeting to the final delivery.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}