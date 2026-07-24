import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row lg:py-32">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            🚀 Digital Marketing Agency
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
            Helping Businesses
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Grow Through
            </span>
            <br />
            Digital Marketing
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0">
            We help restaurants, cafés, guest houses and growing brands
            generate more customers through social media, content creation and
            Meta Ads.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition hover:border-purple-500 hover:text-purple-600"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Meta</h3>
              <p className="mt-1 text-sm text-gray-500">Ads</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Social</h3>
              <p className="mt-1 text-sm text-gray-500">Media</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">Creative</h3>
              <p className="mt-1 text-sm text-gray-500">Content</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex flex-1 justify-center">
          <div className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />

          <div className="relative w-full max-w-lg rounded-[32px] border border-gray-200 bg-white p-6 shadow-2xl">
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white">
              <p className="text-sm opacity-80">Adsway Digital</p>

              <h3 className="mt-3 text-3xl font-bold">
                Creative Marketing
              </h3>

              <p className="mt-4 text-purple-100">
                Social Media • Meta Ads • Branding • Content Creation
              </p>

              <div className="mt-8 rounded-xl bg-white/10 p-4 backdrop-blur">
                <div className="mb-3 h-2 rounded-full bg-white/20"></div>
                <div className="mb-3 h-2 w-4/5 rounded-full bg-white/30"></div>
                <div className="h-2 w-3/5 rounded-full bg-white/20"></div>
              </div>
            </div>

            <div className="absolute -left-8 top-8 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">
              <p className="text-xs text-gray-500">Meta Ads</p>
              <h4 className="font-bold text-gray-900">Lead Generation</h4>
            </div>

            <div className="absolute -right-8 bottom-8 hidden rounded-2xl bg-white p-4 shadow-xl lg:block">
              <p className="text-xs text-gray-500">Content</p>
              <h4 className="font-bold text-gray-900">Reels & Designs</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}