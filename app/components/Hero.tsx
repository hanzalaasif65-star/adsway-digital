export default function Hero() {
  return (
    <section className="h-[500px] flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">
          ADSWAY <span className="text-purple-600">DIGITAL</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          We help businesses grow through Social Media Management,
          Meta Ads, Google Ads, Branding, Website Development,
          Graphic Design and Content Creation.
        </p>

        <a
          href="https://wa.me/923107885938"
          className="inline-block mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}