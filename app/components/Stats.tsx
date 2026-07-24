const stats = [
  {
    number: "20+",
    title: "Happy Clients",
  },
  {
    number: "50+",
    title: "Projects Completed",
  },
  {
    number: "100+",
    title: "Campaigns Managed",
  },
  {
    number: "8+",
    title: "Services Offered",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20"
            >
              <h2 className="text-6xl font-extrabold text-white">
                {item.number}
              </h2>

              <p className="text-white/80 text-lg mt-4">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}