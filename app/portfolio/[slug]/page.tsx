import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

import { portfolio } from "@/data/portfolio";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const project = portfolio.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

          <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          {/* Back */}

          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700"
          >
            ← Back to Portfolio
          </Link>

          {/* Category */}

          <span className="mt-10 inline-flex rounded-full bg-purple-100 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-purple-700">

            {project.category}

          </span>

          {/* Title */}

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-gray-900 md:text-7xl">

            {project.title}

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">

            {project.description}

          </p>

          {/* Cover */}

          <div className="relative mt-16 overflow-hidden rounded-[36px]">

            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* Challenge & Solution */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Challenge */}

            <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                🎯
              </div>

              <h2 className="mt-8 text-3xl font-black text-gray-900">
                The Challenge
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {project.challenge}
              </p>

            </div>

            {/* Solution */}

            <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                ✨
              </div>

              <h2 className="mt-8 text-3xl font-black text-gray-900">
                Our Solution
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {project.solution}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Services & Results */}
            <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Services */}

            <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm">

              <span className="text-sm font-bold uppercase tracking-[3px] text-purple-600">
                WHAT WE DID
              </span>

              <h2 className="mt-4 text-3xl font-black text-gray-900">
                Services Delivered
              </h2>

              <div className="mt-8 flex flex-wrap gap-4">

                {project.services.map((service) => (

                  <span
                    key={service}
                    className="rounded-full border border-purple-200 bg-purple-50 px-5 py-3 text-sm font-semibold text-purple-700"
                  >
                    {service}
                  </span>

                ))}

              </div>

            </div>

            {/* Results */}

            <div className="rounded-[32px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-10 text-white shadow-xl">

              <span className="text-sm font-bold uppercase tracking-[3px] text-white/80">
                RESULTS
              </span>

              <h2 className="mt-4 text-3xl font-black">
                Project Impact
              </h2>

              <div className="mt-8 space-y-4">

                {project.results.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-purple-600">
                      ✓
                    </div>

                    <p className="text-base font-medium">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Gallery */}
            <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-purple-700">
              PROJECT GALLERY
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900">
              Behind The Work
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              A glimpse into the creative assets and visuals we produced
              throughout this project.
            </p>

          </div>

          {/* Gallery */}

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {project.gallery.map((image, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] bg-white shadow-sm"
              >

                <Image
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  width={900}
                  height={700}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            ))}

          </div>

          {/* Testimonial */}

          {project.testimonial && (

            <div className="mt-24 rounded-[36px] bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-10 text-white">

              <div className="max-w-4xl">

                <p className="text-3xl leading-relaxed font-light">

                  “{project.testimonial.quote}”

                </p>

                <div className="mt-10">

                  <h4 className="text-xl font-bold">

                    {project.testimonial.author}

                  </h4>

                  <p className="mt-2 text-white/80">

                    {project.testimonial.company}

                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

      {/* CTA */}
            <CTA />

      <Contact />

      <Footer />

    </>
  );
}