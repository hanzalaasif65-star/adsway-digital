import Image from "next/image";

const projects = [
  {
    title: "Alaza",
    image: "/clients/alaza.jpg",
    category: "Brand Identity",
  },
  {
    title: "Burato",
    image: "/clients/burato.jpg",
    category: "Restaurant Marketing",
  },
  {
    title: "Creamy Dreamy",
    image: "/clients/creamy-dreamy.jpg",
    category: "Dessert Brand",
  },
  {
    title: "HFC",
    image: "/clients/hfc.jpg",
    category: "Fast Food Marketing",
  },
  {
    title: "Red Tree",
    image: "/clients/redtree.jpg",
    category: "Guest House Marketing",
  },
  {
    title: "Zarqun",
    image: "/clients/zarqun.jpg",
    category: "Brand Design",
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-purple-600 font-semibold text-center uppercase tracking-widest">
          Our Work
        </p>

        <h2 className="text-5xl font-bold text-center mt-3">
          Portfolio
        </h2>

        <p className="text-gray-500 text-center mt-5 max-w-2xl mx-auto">
          We've helped businesses build stronger brands through creative
          content, social media marketing and advertising.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="relative h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8"
                />
              </div>

              <div className="p-6 border-t">

                <p className="text-sm text-purple-600 font-semibold">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {project.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}