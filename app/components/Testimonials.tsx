const testimonials = [
  {
    name: "Sajjad Ali",
    company: "The Red Tree Guest House",
    review:
      "Adsway Digital completely transformed our social media presence. The content quality and marketing strategy exceeded our expectations.",
  },
  {
    name: "Huzaifa",
    company: "Burato",
    review:
      "Professional team with creative ideas. We noticed a significant improvement in our online engagement.",
  },
  {
    name: "Areeb Ali",
    company: "Creamy Dreamy",
    review:
      "Highly recommended! Their content creation and branding helped us attract more customers.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-purple-600 font-semibold text-center uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          What Our Clients Say
        </h2>

        <p className="text-gray-500 text-center mt-5 max-w-2xl mx-auto">
          We don't just create content—we build long-term partnerships that help businesses grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 rounded-3xl p-8 border hover:border-purple-500 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-6">⭐️⭐️⭐️⭐️⭐️</div>

              <p className="text-gray-600 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-purple-600">
                  {item.company}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}