import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B14] py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[110px]" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30">

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-purple-600/0 via-purple-500/10 to-blue-500/0 opacity-0 transition duration-700 group-hover:opacity-100" />

          {/* Moving Light */}
          <div className="absolute -left-1/2 top-0 h-full w-40 rotate-12 bg-white/10 blur-xl transition-all duration-[2200ms] group-hover:left-[130%]" />

          <div className="relative">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-xl">
              <Sparkles className="text-white" size={28} />
            </div>

            <span className="mt-5 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-purple-300">
              ADSWAY DIGITAL
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              Let's Build Something
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              Ready to grow your business? We create content, run ads and build
              marketing strategies that bring more customers and real results.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="https://wa.me/923107885938"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight className="ml-3" size={20} />
              </a>

              <a
                href="https://wa.me/923107885938"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-green-500 hover:bg-white/15"
              >
                <MessageCircle className="mr-3 text-green-400" size={20} />
                WhatsApp Us
              </a>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-6 text-sm text-gray-300">

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Free Strategy Call
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                Fast Response
              </span>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                Trusted by Growing Businesses
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}