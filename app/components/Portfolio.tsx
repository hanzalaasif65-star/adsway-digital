import Image from "next/image";

const projects = [
  {
    title: "The Red Tree",
    image: "/portfolio/redtree.jpg",
    category: "Guest House Marketing",
  },
  {
    title: "Creamy Dreamy",
    image: "/portfolio/creamy-dreamy.jpg",
    category: "Food Branding",
  },
  {
    title: "Burato",
    image: "/portfolio/burato.jpg",
    category: "Restaurant Marketing",
  },
  {
    title: "HFC",
    image: "/portfolio/hfc.jpg",
    category: "Social Media Marketing",
  },
  {
    title: "ALAZA",
    image: "/portfolio/alaza.jpg",
    category: "Clothing Brand",
  },
  {
    title: "Zamzam Creations",
    image: "/portfolio/zamzam.jpg",
    category: "Product Branding",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-purple-600 font-semibold uppercase tracking-[0.25em]">
          Our Portfolio
        </p>

        <h2 className="text-5xl font-extrabold text-center mt-4">
          Work That Speaks For Itself
        </h2>

        <p className="text-gray-500 text-center mt-6 max-w-3xl mx-auto leading-8">
          Every brand has a story. Here are some of the businesses we've helped
          grow through premium content, branding, graphic design and digital
          marketing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                <div className="absolute bottom-5 left-5">
                  <span className="bg-white/90 backdrop-blur-md text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-500 mt-3 leading-7">
                  Social Media Management, Graphic Design, Branding and Digital
                  Marketing solutions tailored for business growth.
                </p>

                <button className="mt-6 text-purple-600 font-semibold hover:text-purple-800 transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}