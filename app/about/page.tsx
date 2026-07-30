import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white py-28">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-purple-600">
            About Adsway Digital
          </span>

          <h1 className="mt-8 text-5xl font-black text-gray-900 md:text-7xl">
            We Build Brands That
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              People Remember
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Adsway Digital is a creative digital marketing agency helping
            restaurants and growing businesses build stronger brands,
            attract more customers, and achieve long-term growth through
            strategy, content, and performance marketing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <span className="font-semibold uppercase tracking-[3px] text-purple-600">
              Our Story
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900">
              More Than Just Another Marketing Agency
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              We started Adsway Digital with one simple goal—to help
              businesses grow through creative content, premium branding,
              and marketing strategies that actually deliver results.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Instead of chasing trends, we focus on understanding each
              client's business, creating high-quality content, and running
              campaigns that generate real business growth.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">
              What We Do
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Social Media Management",
                "Content Creation",
                "Professional Video Editing",
                "Graphic Design",
                "Meta Advertising",
                "Google Ads",
                "Brand Strategy",
                "Performance Marketing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-purple-600 font-bold">
                    ✓
                  </div>

                  <span className="text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <div className="text-5xl">🎯</div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              To help businesses grow through creative marketing,
              premium content, and performance-driven strategies that
              create measurable results.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <div className="text-5xl">🚀</div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              To become one of Pakistan's most trusted digital marketing
              agencies by delivering creative work, exceptional service,
              and real business growth for every client.
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <span className="font-semibold uppercase tracking-[3px] text-purple-600">
              Our Values
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900">
              What Drives Everything We Do
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Creativity",
                text: "Fresh ideas and unique content that helps brands stand out.",
              },
              {
                title: "Results",
                text: "Every strategy is built to generate measurable business growth.",
              },
              {
                title: "Transparency",
                text: "Clear communication and honest reporting in every project.",
              },
              {
                title: "Partnership",
                text: "We work with clients as long-term partners, not just service providers.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-7">
                  {value.text}
                </p>
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