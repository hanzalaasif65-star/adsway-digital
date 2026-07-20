export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        <h1 className="text-4xl font-extrabold">
          ADSWAY{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            DIGITAL
          </span>
        </h1>

        <nav className="hidden md:flex gap-12 text-xl text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="px-7 py-4 rounded-2xl text-white text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 duration-300 shadow-lg">
          Book a Call
        </button>

      </div>
    </header>
  );
}