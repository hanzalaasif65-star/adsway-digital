import { services } from "@/data/services";

import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white py-28">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-purple-600">
            Our Services
          </span>

          <h1 className="mt-8 text-5xl font-black text-gray-900 md:text-7xl">
            Digital Marketing That
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Actually Grows Businesses
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            From social media management to paid advertising, we help
            restaurants and businesses build stronger brands, attract more
            customers, and grow consistently.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl"
              >
                <div className="text-5xl">{service.icon}</div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="text-purple-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-purple-600">
            Our Process
          </span>

          <h2 className="mt-5 text-4xl font-black text-gray-900">
            Simple. Transparent. Effective.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              "Discovery",
              "Strategy",
              "Content Creation",
              "Growth",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <div className="text-4xl font-black text-purple-600">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step}
                </h3>
              </div>
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