import Image from "next/image";

const clients = [
  "/clients/alaza.jpg",
  "/clients/burato.jpg",
  "/clients/creamy-dreamy.jpg",
  "/clients/hfc.jpg",
  "/clients/redtree.jpg",
  "/clients/zarqun.jpg",
];

export default function Clients() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Trusted By Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border p-6 flex items-center justify-center h-32"
            >
              <Image
                src={logo}
                alt="Client Logo"
                width={120}
                height={60}
                className="object-contain max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}