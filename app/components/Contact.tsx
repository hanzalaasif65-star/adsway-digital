"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-16 md:py-24">

      {/* Background */}

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -right-20 top-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mx-auto max-w-2xl text-center"
        >

          <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-xs font-bold tracking-[2px] text-purple-700">
            CONTACT ADSWAY DIGITAL
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-gray-900 md:text-6xl">

            Let's Create

            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">

              Something Extraordinary

            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600">
            Ready to grow your business? We'd love to hear about your project
            and help turn your ideas into measurable results.
          </p>

        </motion.div>

        {/* Featured WhatsApp Card */}

        <motion.a
          href="https://wa.me/923107885938"
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          whileHover={{
            y: -5,
          }}
          className="group relative mt-12 overflow-hidden rounded-[30px] border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-green-400 hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]"
        >

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
          <div className="flex items-center justify-between gap-5">

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">

                <Phone size={24} />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-900">
                  WhatsApp
                </h3>

                <p className="mt-1 font-semibold text-green-600">
                  +92 310 7885938
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Usually replies within 10 minutes
                </p>

              </div>

            </div>

            <ArrowUpRight
              size={22}
              className="text-gray-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-600"
            />

          </div>

        </motion.a>

        {/* Email + Office */}

        <div className="mt-5 grid grid-cols-2 gap-4">
                    {/* Email Card */}

          <motion.a
            href="mailto:info.adswaydigital@gmail.com"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="group rounded-[24px] border border-gray-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-purple-500 hover:shadow-[0_20px_50px_rgba(124,58,237,.12)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
              <Mail size={20} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Email
            </h3>

            <p className="mt-2 break-all text-sm font-medium text-purple-600">
              info.adswaydigital@gmail.com
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Business inquiries
            </p>
          </motion.a>

          {/* Office Card */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="group rounded-[24px] border border-gray-200 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-orange-400 hover:shadow-[0_20px_50px_rgba(249,115,22,.12)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
              <MapPin size={20} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Office
            </h3>

            <p className="mt-2 text-sm font-medium text-purple-600">
              Karachi, Pakistan
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Worldwide Clients
            </p>
          </motion.div>

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-10 overflow-hidden rounded-[30px] bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 p-6 text-white shadow-[0_25px_70px_rgba(124,58,237,.25)]"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
              <h3 className="text-2xl font-black md:text-3xl">
                Ready to start your next project?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-white/90 md:text-base">
                Let's discuss your goals and build a marketing strategy that
                helps your business stand out, generate more leads and grow
                consistently.
              </p>
            </div>

            <div className="flex items-center rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-xl">
              <Clock3
                size={20}
                className="mr-3"
              />

              <div>
                <p className="text-sm font-semibold">
                  Average Response Time
                </p>

                <p className="text-xs text-white/80">
                  Under 30 Minutes
                </p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}