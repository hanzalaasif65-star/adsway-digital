"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Lightbulb,
  Palette,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Results That Matter",
    description: "More leads. More sales.",
    icon: TrendingUp,
  },
  {
    title: "Creative Strategy",
    description: "Ideas backed by data.",
    icon: Lightbulb,
  },
  {
    title: "Premium Design",
    description: "Designs that build trust.",
    icon: Palette,
  },
  {
    title: "Fast Support",
    description: "Always quick to respond.",
    icon: Zap,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const pill = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white py-16 md:py-24">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      {/* Content */}

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-purple-700 md:text-sm">

            WHY ADSWAY DIGITAL

          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-gray-900 md:text-5xl">

            More Than An Agency

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">

            We combine creativity, strategy and performance
            marketing to help businesses grow with confidence.

          </p>

        </div>

        {/* Expanding Pills */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
                    {features.slice(0, 2).map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={pill}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="flex items-center gap-4 rounded-full border border-gray-200 bg-white/80 p-3 backdrop-blur-xl shadow-sm transition-all duration-500 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)]">

                  {/* Animated Icon */}

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg"
                  >
                    <Icon size={26} />
                  </motion.div>

                  {/* Expanding Content */}

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                    }}
                    className="overflow-hidden"
                  >
                    <h3 className="whitespace-nowrap text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <div className="mt-2 h-[2px] w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500 group-hover:w-24" />

                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>

                </div>

              </motion.div>
            );
          })}
                    {features.slice(2).map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={pill}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="flex items-center gap-4 rounded-full border border-gray-200 bg-white/80 p-3 backdrop-blur-xl shadow-sm transition-all duration-500 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)]">

                  {/* Animated Icon */}

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                      rotate: [0, 4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg"
                  >

                    <Icon size={26} />

                  </motion.div>

                  {/* Expanding Content */}

                  <motion.div
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      width: "100%",
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                    }}
                    className="overflow-hidden"
                  >

                    <h3 className="whitespace-nowrap text-lg font-bold text-gray-900">

                      {item.title}

                    </h3>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 70 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.35,
                      }}
                      className="mt-2 h-[2px] rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                    />

                    <p className="mt-2 whitespace-nowrap text-sm text-gray-600">

                      {item.description}

                    </p>

                  </motion.div>

                </div>

              </motion.div>

            );
          })}
                  </motion.div>

      </div>

    </section>
  );
}