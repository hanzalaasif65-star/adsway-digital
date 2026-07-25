"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#09090F] py-14 md:py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-purple-600 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-blue-500/20 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [20, -20, 20],
            y: [15, -15, 15],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 top-0 h-60 w-60 rounded-full bg-purple-500/20 blur-[100px]"
        />

      </div>

      <div className="relative mx-auto max-w-4xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] px-7 py-10 text-center backdrop-blur-3xl md:px-12"
        >

          {/* Hover Glow */}

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 transition duration-700 group-hover:opacity-100" />

          {/* Animated Light */}

          <motion.div
            animate={{
              x: ["-120%", "240%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-24 rotate-12 bg-white/10 blur-xl"
          />

          <div className="relative">

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_15px_40px_rgba(124,58,237,0.45)]"
            >
              <Sparkles
                className="text-white"
                size={24}
              />
            </motion.div>

            <span className="mt-5 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[3px] text-purple-300">
              ADSWAY DIGITAL
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">

              Let's Build

              <span className="mt-1 block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Something Amazing
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300">
              From strategy and content creation to paid advertising,
              we help businesses grow faster with marketing that delivers
              real results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <motion.a
                href="https://wa.me/923107885938"
                target="_blank"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-[0_15px_40px_rgba(124,58,237,0.35)] transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[180%] group-hover/button:translate-x-[180%] transition-transform duration-1000" />

                <span className="relative flex items-center">
                  Book Free Consultation

                  <ArrowRight
                    size={18}
                    className="ml-3 transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </span>
              </motion.a>

              <motion.a
                href="https://wa.me/923107885938"
                target="_blank"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group/wa inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-green-400/40 hover:bg-white/10"
              >
                <MessageCircle
                  size={19}
                  className="mr-3 text-green-400 transition-transform duration-300 group-hover/wa:scale-110"
                />

                WhatsApp Us
              </motion.a>

            </div>

            {/* Reply Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
              }}
              className="mt-7 flex items-center justify-center gap-3"
            >
              <span className="relative flex h-3 w-3">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />

              </span>

              <p className="text-sm font-medium text-gray-300">
                Usually replies within
                <span className="ml-1 font-bold text-white">
                  10 minutes
                </span>
              </p>

            </motion.div>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-gray-400">
                            <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                Free Strategy Call
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
                Fast Response
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-purple-400 animate-pulse" />
                Trusted by Growing Businesses
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}