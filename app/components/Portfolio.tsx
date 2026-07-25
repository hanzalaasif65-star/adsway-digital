"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    title: "The Red Tree",
    image: "/portfolio/redtree.jpg",
    category: "Guest House Marketing",
  },
  {
    title: "Creamy Dreamy",
    image: "/portfolio/creamy-dreamy.jpg",
    category: "Food Branding",
  },
  {
    title: "Burato",
    image: "/portfolio/burato.jpg",
    category: "Restaurant Marketing",
  },
  {
    title: "HFC",
    image: "/portfolio/hfc.jpg",
    category: "Social Media Marketing",
  },
  {
    title: "ALAZA",
    image: "/portfolio/alaza.jpg",
    category: "Clothing Brand",
  },
  {
    title: "Zamzam Creations",
    image: "/portfolio/zamzam.jpg",
    category: "Product Branding",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const project = projects[active];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-16 md:py-28"
    >

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-xs font-semibold tracking-[0.25em] text-purple-700 md:text-sm">

            OUR PORTFOLIO

          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-gray-900 md:mt-6 md:text-6xl">

            Work That Speaks
            <br />
            For Itself

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-8">

            Every brand has a story. Explore some of the businesses
            we've helped grow through premium branding, content and
            performance marketing.

          </p>

        </div>

        {/* Premium Showcase */}

        <div className="relative mt-12 overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_30px_80px_rgba(124,58,237,0.12)] backdrop-blur-2xl md:mt-16 md:p-8">
                  {/* Animated Project */}

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Image */}

            <AnimatePresence mode="wait">

              <motion.div
                key={project.image}
                initial={{ opacity: 0, x: -60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative h-[260px] overflow-hidden rounded-3xl md:h-[420px]"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[3000ms] hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-purple-700 backdrop-blur-xl">

                    {project.category}

                  </span>

                </div>

              </motion.div>

            </AnimatePresence>

            {/* Content */}

            <div className="flex flex-col justify-center">

              <AnimatePresence mode="wait">

                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -35 }}
                  transition={{ duration: 0.45 }}
                >

                  <div className="mb-4 text-sm font-semibold tracking-[0.25em] text-purple-600">

                    PROJECT {String(active + 1).padStart(2, "0")}

                  </div>

                  <h3 className="text-3xl font-black text-gray-900 md:text-5xl">

                    {project.title}

                  </h3>

                  <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">

                    We helped this business grow through premium branding,
                    high-quality content creation, social media management,
                    paid advertising and performance-focused marketing
                    strategies.

                  </p>

                  {/* Service Tags */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {[
                      "Branding",
                      "Social Media",
                      "Content",
                      "Marketing",
                    ].map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700"
                      >

                        {tag}

                      </span>

                    ))}

                  </div>
                                    {/* View Project */}

                  <button className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(124,58,237,0.30)] transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_70px_rgba(124,58,237,0.40)]">

                    View Project

                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </button>

                </motion.div>

              </AnimatePresence>

              {/* Progress */}

              <div className="mt-12 w-full overflow-hidden rounded-full bg-gray-200">

                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                  }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                />

              </div>

              {/* Navigation */}

              <div className="mt-8 flex items-center justify-between">

                <div className="flex gap-2">

                  {projects.map((_, index) => (

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

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      setActive(
                        active === 0 ? projects.length - 1 : active - 1
                      )
                    }
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:bg-purple-50"
                  >

                    <ChevronLeft
                      size={20}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                  </button>

                  <button
                    onClick={() =>
                      setActive((active + 1) % projects.length)
                    }
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:bg-purple-50"
                  >

                    <ChevronRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </div>

            </div>
                      </div>

        </div>

      </div>

    </section>
  );
}