import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sajjad Ali",
    company: "The Red Tree Guest House",
    review:
      "Adsway Digital completely transformed our social media presence. Their creative strategy and marketing helped us generate more inquiries and build a premium online presence.",
  },
  {
    name: "Huzaifa",
    company: "Burato Restaurant",
    review:
      "Professional, creative and always available. Their team understands restaurant marketing and delivers content that actually attracts customers.",
  },
  {
    name: "Areeb Ali",
    company: "Creamy Dreamy",
    review:
      "From branding to content creation, everything exceeded our expectations. We saw higher engagement and stronger customer trust.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 to-white py-28">

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Trusted By Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We don't just manage social media. We help businesses grow,
            generate leads and build brands people remember.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.15)]"
            >

              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-500 group-hover:scale-x-100"></div>

              <div className="flex items-center justify-between">

                <div className="flex gap-1 text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 transition group-hover:rotate-12">
                  <Quote className="text-purple-600" size={26} />
                </div>

              </div>

              <p className="mt-8 text-lg italic leading-8 text-gray-600">
                "{item.review}"
              </p>

              <div className="mt-10 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-purple-600 font-medium">
                    {item.company}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}