export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold tracking-tight">
          ADSWAY <span className="text-indigo-600">DIGITAL</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 transition">
          Book a Call
        </button>

      </div>
    </header>
  );
}