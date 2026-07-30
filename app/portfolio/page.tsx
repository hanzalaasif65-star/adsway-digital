"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { portfolio } from "@/data/portfolio";

export default function PortfolioPage() {
  const featured = portfolio.find((project) => project.featured);

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

          <div className="absolute -left-24 top-44 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

        </div>

        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center justify-center px-6 py-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-4xl text-center"
          >

            <span className="inline-flex rounded-full border border-purple-200 bg-white/80 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-purple-700 shadow-lg backdrop-blur-xl">
              OUR WORK
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 md:text-7xl">

              Creative Work That

              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">

                Delivers Results

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">

              Discover how Adsway Digital helps restaurants, cafés,
              dessert brands and hospitality businesses stand out with
              premium branding, engaging content and performance marketing.

            </p>

            <a
              href="#featured"
              className="mt-10 inline-flex rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(124,58,237,.25)] transition hover:-translate-y-1"
            >
              View Our Work
            </a>

          </motion.div>

        </div>

      </section>

      {/* Featured Project */}
            {featured && (
        <section
          id="featured"
          className="py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-6">

            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-xs font-bold tracking-[2px] text-purple-700">
                FEATURED PROJECT
              </span>

              <h2 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
                {featured.title}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                {featured.description}
              </p>

            </motion.div>

            {/* Card */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{ y: -5 }}
              className="group mt-14 overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_30px_80px_rgba(124,58,237,.08)]"
            >

              <div className="grid lg:grid-cols-2">

                {/* Image */}

                <div className="relative h-[340px] md:h-[500px]">

                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Content */}

                <div className="flex flex-col justify-center p-8 md:p-12">

                  <span className="inline-flex w-fit rounded-full bg-purple-100 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-purple-700">
                    {featured.category}
                  </span>

                  <h3 className="mt-6 text-4xl font-black text-gray-900">
                    {featured.title}
                  </h3>

                  <p className="mt-6 leading-8 text-gray-600">
                    {featured.description}
                  </p>

                  {/* Services */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {featured.services.map((service) => (

                      <span
                        key={service}
                        className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"
                      >
                        {service}
                      </span>

                    ))}

                  </div>

                  {/* Result */}

                  <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">

                    <p className="text-sm uppercase tracking-[2px] opacity-80">
                      Highlight
                    </p>

                    <h4 className="mt-2 text-4xl font-black">
                      {featured.result}
                    </h4>

                  </div>

                  <Link
  href={`/portfolio/${featured.slug}`}
  className="mt-8 w-fit rounded-2xl border border-purple-200 px-6 py-3 font-semibold text-purple-600 transition hover:bg-purple-600 hover:text-white"
>
  View Case Study →
</Link>

                </div>

              </div>

            </motion.div>

          </div>
        </section>
      )}

      {/* Portfolio Grid */}
            <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-xs font-bold tracking-[2px] text-blue-700">
              SELECTED WORK
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
              More Projects
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Every project is built with strategy, creativity and measurable
              business goals in mind.
            </p>
          </motion.div>

          {/* Grid */}

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {portfolio
              .filter((project) => !project.featured)
              .map((project, index) => (

                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .6,
                    delay: index * .08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition-all hover:shadow-[0_30px_70px_rgba(124,58,237,.12)]"
                >

                  {/* Image */}

                  <div className="relative h-64 overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-900 backdrop-blur">
                      {project.category}
                    </span>

                  </div>

                  {/* Content */}

                  <div className="p-7">

                    <h3 className="text-3xl font-black text-gray-900">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {project.description}
                    </p>

                    {/* Services */}

                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.services.slice(0, 3).map((service) => (

                        <span
                          key={service}
                          className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700"
                        >
                          {service}
                        </span>

                      ))}

                    </div>

                    {/* Result */}

                    <div className="mt-7 rounded-2xl bg-gray-50 p-4">

                      <p className="text-xs uppercase tracking-[2px] text-gray-500">
                        Result
                      </p>

                      <h4 className="mt-2 text-2xl font-black text-purple-600">
                        {project.result}
                      </h4>

                    </div>

                    <Link
  href={`/portfolio/${project.slug}`}
  className="mt-7 inline-flex font-semibold text-purple-600 transition hover:translate-x-1"
>
  View Case Study →
</Link>

                  </div>

                </motion.div>

              ))}

          </div>

        </div>

      </section>

      {/* Why Choose Adsway */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white py-24">

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >

            <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold tracking-[2px] text-purple-700 shadow">
              WHY ADSWAY DIGITAL
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
              Creativity Meets Performance
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              We don't just create beautiful content. Every project is backed
              by strategy, storytelling and performance-focused marketing.
            </p>

          </motion.div>

          {/* Stats */}

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                number: "20+",
                title: "Brands Worked With",
              },
              {
                number: "5M+",
                title: "Content Views",
              },
              {
                number: "100+",
                title: "Creative Assets",
              },
              {
                number: "100%",
                title: "Custom Strategy",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-[30px] border border-white/70 bg-white/80 p-8 text-center shadow-lg backdrop-blur-xl"
              >

                <h3 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-5xl font-black text-transparent">
                  {item.number}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

          {/* Features */}

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {[
              {
                title: "Strategy First",
                description:
                  "Every project starts with understanding your audience, goals and brand before creating content.",
              },
              {
                title: "Content That Converts",
                description:
                  "Professional photography, reels and branding designed to capture attention and drive engagement.",
              },
              {
                title: "Growth Focused",
                description:
                  "We measure success by helping businesses grow through stronger branding and better marketing.",
              },
            ].map((feature) => (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-[0_20px_60px_rgba(124,58,237,.08)]"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-xl font-bold text-white">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <CTA />
      <Contact />
      <Footer />

    </>
  );
}