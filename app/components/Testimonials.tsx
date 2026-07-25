"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sajjad Ali",
    company: "The Red Tree Guest House",
    review:
      "Adsway Digital completely transformed our social media presence. From branding to content creation.",
    result: "271+ Leads Generated",
  },
  {
    name: "Huzaifa",
    company: "Burato Restaurant",
    review:
      "Professional, creative and always available. Their team understands restaurant marketing and delivers results.",
    result: "Higher Footfall & Reach",
  },
  {
    name: "Areeb Ali",
    company: "Creamy Dreamy",
    review:
      "From branding to content creation, everything exceeded our expectations.",
    result: "Stronger Brand Presence",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFlipped(false);
      }, 700);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 to-white py-20">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Trusted By Businesses
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            We don't just manage social media. We help businesses grow,
            generate leads and build brands people remember.
          </p>

        </div>

        {/* Card */}

        <div className="mt-14 flex justify-center">

          <div className="h-[240px] w-[330px] [perspective:1400px] sm:h-[250px] sm:w-[360px]">

            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative h-full w-full"
            >

              {/* FRONT */}

              <div
                style={{
                  backfaceVisibility: "hidden",
                }}
                className="absolute inset-0 rounded-[28px] border border-white/60 bg-white/80 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
              >

                {/* Premium Stars */}

                <div className="flex gap-1">

                  {[1,2,3,4,5].map((star) => (

                    <motion.div
                      key={star}
                      initial={{
                        opacity:0,
                        scale:0,
                      }}
                      animate={{
                        opacity:1,
                        scale:1,
                        y:[0,-2,0],
                      }}
                      transition={{
                        delay:star*0.08,
                        duration:0.4,
                        y:{
                          repeat:Infinity,
                          duration:2,
                          delay:star*0.12,
                        }
                      }}
                    >

                      <Star
                        size={18}
                        fill="currentColor"
                        className="text-yellow-400"
                      />

                    </motion.div>

                  ))}

                </div>

                <Quote
                  size={42}
                  className="absolute right-6 top-6 text-purple-200"
                />

                <p className="mt-6 text-[15px] italic leading-7 text-gray-600">
                  "{item.review}"
                </p>

                <div className="mt-7 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-white">

                    {item.name.charAt(0)}

                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-purple-600">
                      {item.company}
                    </p>

                  </div>

                </div>

              </div>
                            {/* BACK */}

              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 overflow-hidden rounded-[28px] bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 p-6 text-white shadow-[0_25px_70px_rgba(124,58,237,0.25)]"
              >
                {/* Floating Glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.45, 0.25],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"
                />

                <div className="relative flex h-full flex-col items-center justify-center text-center">

                  <motion.div
                    animate={{
                      rotate: [0, 8, -8, 0],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur"
                  >
                    <Quote size={30} />
                  </motion.div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.company}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    {item.name}
                  </p>

                  <div className="my-5 h-px w-20 bg-white/30" />

                  <p className="text-sm leading-7 text-white/90">
                    {item.result}
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}