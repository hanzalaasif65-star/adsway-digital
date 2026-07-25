"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Monitor,
  Megaphone,
  Search,
  Globe,
  Palette,
  Clapperboard,
  Camera,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Build a consistent online presence with engaging content that keeps your audience connected.",
    icon: Monitor,
  },
  {
    title: "Meta Ads",
    description:
      "Generate quality leads and sales through high-converting Facebook & Instagram campaigns.",
    icon: Megaphone,
  },
  {
    title: "Google Ads",
    description:
      "Capture customers actively searching for your products and services.",
    icon: Search,
  },
  {
    title: "Website Development",
    description:
      "Modern, responsive websites designed to convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "Graphic Design",
    description:
      "Premium social media creatives, branding, menus, flyers and marketing assets.",
    icon: Palette,
  },
  {
    title: "Video Editing",
    description:
      "Professional reels and promotional videos that stop the scroll.",
    icon: Clapperboard,
  },
  {
    title: "Content Creation",
    description:
      "Creative photography and content that makes your brand stand out.",
    icon: Camera,
  },
  {
    title: "Brand Identity",
    description:
      "Create a memorable brand with professional visual identity and strategy.",
    icon: Sparkles,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const service = services[active];
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-16 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="absolute -left-20 top-1/3 h-52 w-52 rounded-full bg-blue-400/10 blur-[100px]" />

      <div className="absolute -right-20 bottom-20 h-52 w-52 rounded-full bg-purple-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">

            OUR SERVICES

          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">

            Everything You Need
            <br />
            To Grow Online

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">

            Premium marketing solutions designed to help your business
            attract more customers and grow faster.

          </p>

        </div>

        {/* Premium Glass Card */}

        <div className="relative mt-16 overflow-hidden rounded-[40px] border border-white/60 bg-white/70 p-8 shadow-[0_30px_80px_rgba(124,58,237,0.12)] backdrop-blur-2xl md:p-14">
                  {/* Decorative Glow */}

          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Animated Icon */}

            <AnimatePresence mode="wait">

              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  y: [0, -8, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: 20,
                }}
                transition={{
                  duration: 0.6,
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
                className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-[0_20px_60px_rgba(124,58,237,0.35)]"
              >

                <Icon size={44} />

              </motion.div>

            </AnimatePresence>

            {/* Service Text */}

            <AnimatePresence mode="wait">

              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="mt-10"
              >

                <h3 className="text-3xl font-black text-gray-900 md:text-5xl">

                  {service.title}

                </h3>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">

                  {service.description}

                </p>

              </motion.div>

            </AnimatePresence>

            {/* Counter */}

            <div className="mt-10 text-sm font-semibold tracking-[0.3em] text-purple-600">

              {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}

            </div>
                        {/* Progress Bar */}

            <div className="mt-8 w-full max-w-md overflow-hidden rounded-full bg-gray-200">

              <motion.div
                key={active}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "linear",
                }}
                className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
              />

            </div>

            {/* Navigation */}

            <div className="mt-10 flex items-center gap-5">

              <button
                onClick={() =>
                  setActive(
                    active === 0 ? services.length - 1 : active - 1
                  )
                }
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:bg-purple-50 hover:shadow-xl"
              >

                <ChevronLeft
                  size={22}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

              </button>

              <div className="flex gap-2">

                {services.map((_, index) => (

                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      active === index
                        ? "w-10 bg-gradient-to-r from-purple-600 to-blue-600"
                        : "w-2.5 bg-gray-300 hover:bg-purple-300"
                    }`}
                  />

                ))}

              </div>

              <button
                onClick={() =>
                  setActive(
                    (active + 1) % services.length
                  )
                }
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:bg-purple-50 hover:shadow-xl"
              >

                <ChevronRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </div>
                      </div>

        </div>

      </div>

    </section>
  );
}