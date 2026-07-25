"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MousePointer2,
  BadgeCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#F8FAFF]">

      {/* Animated Background */}

      <div className="absolute inset-0 -z-20 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [-30, 30, -30],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/25 blur-[120px]"
        />

        <motion.div
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-10 lg:flex-row lg:px-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="w-full lg:w-1/2"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-[11px] font-semibold text-violet-700 shadow-lg">

            <Sparkles size={14} />

            Restaurant Marketing Agency

          </div>

          <h1 className="mt-6 text-[40px] font-black leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl">

            Grow More

            <span className="block bg-gradient-to-r from-violet-700 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent">

              Customers.

            </span>

          </h1>

          <h2 className="mt-3 text-2xl font-bold text-slate-700">

            Not Just Followers.

          </h2>

          <p className="mt-5 max-w-md text-[15px] leading-7 text-slate-600">

            We help restaurants grow with premium branding,
            content creation and Meta Ads that increase sales.

          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <button className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-blue-600 px-6 font-semibold text-white shadow-xl transition hover:scale-105">

              Book Consultation

              <ArrowRight className="ml-2 h-4 w-4"/>

            </button>

            <button className="flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-700">

              View Portfolio

            </button>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">

              <BadgeCheck className="h-4 w-4 text-violet-600"/>

              <span className="text-sm">

                Meta Ads

              </span>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow">

              <MousePointer2 className="h-4 w-4 text-blue-600"/>

              <span className="text-sm">

                Viral Reels

              </span>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="relative mt-14 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[280px] w-[280px] rounded-full border border-violet-300/40"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[220px] w-[220px] rounded-full border border-blue-300/50"
          />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-[0_25px_60px_rgba(15,23,42,.15)]"
          >
            {/* Center Logo */}

            <div className="flex flex-col items-center">

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-blue-600 shadow-[0_0_45px_rgba(109,40,217,.45)]"
              >

                <Sparkles className="h-9 w-9 text-white" />

              </motion.div>

              <h3 className="mt-5 text-xl font-black tracking-wider text-slate-900">

                ADSWAY

              </h3>

              <p className="mt-1 text-center text-xs text-slate-500">

              </p>

            </div>

          </motion.div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-0 top-6 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl"
          >

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">

              Creative

            </p>

            <h4 className="mt-1 font-bold text-slate-900">

              Branding

            </h4>

          </motion.div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-4 right-0 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl"
          >

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">

              Growth

            </p>

            <h4 className="mt-1 font-bold text-slate-900">

              Meta Ads

            </h4>

          </motion.div>

        </div>

      </div>

    </section>

  );
}