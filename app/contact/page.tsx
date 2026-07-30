import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white py-28">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-purple-600">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl font-black text-gray-900 md:text-7xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Have a project in mind? We'd love to hear about it. Let's discuss
            how Adsway Digital can help grow your business.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-black text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you're launching a new brand, looking to grow your
              restaurant, or need a reliable marketing partner, we're here
              to help.
            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">📧 Email</h3>
                <p className="mt-2 text-gray-600">
                  hello@adswaydigital.com
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">📱 Phone</h3>
                <p className="mt-2 text-gray-600">
                  +92 XXX XXXXXXX
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">📍 Office</h3>
                <p className="mt-2 text-gray-600">
                  Karachi, Pakistan
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-lg">

            <h2 className="text-3xl font-black text-gray-900">
              Send Us a Message
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-purple-500"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-purple-500"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-purple-500"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">
            <span className="font-semibold uppercase tracking-[3px] text-purple-600">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-14 space-y-6">

            {[
              {
                q: "How quickly do you respond?",
                a: "Usually within 24 hours on business days.",
              },
              {
                q: "Do you only work with restaurants?",
                a: "Restaurants are our specialty, but we also work with growing businesses across different industries.",
              },
              {
                q: "Do you manage paid advertising?",
                a: "Yes. We create, manage, and optimize Meta and Google Ads campaigns.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {item.q}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.a}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}