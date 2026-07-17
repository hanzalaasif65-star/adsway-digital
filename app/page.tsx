import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <p className="text-purple-600 font-semibold uppercase tracking-widest">
              Digital Marketing Agency
            </p>

            <h1 className="mt-5 text-6xl font-extrabold leading-tight text-gray-900">
              We Build
              <br />
              Brands That
              <span className="text-purple-600"> Grow.</span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
              Adsway Digital helps businesses grow through
              social media marketing, Meta Ads, Google Ads,
              content creation, branding and premium websites.
            </p>

            <div className="mt-10 flex gap-5">

              <button className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition">
                Book Free Consultation
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition">
                View Portfolio
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-[500px] h-[500px] rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 shadow-2xl flex items-center justify-center">

              <div className="bg-white rounded-2xl p-10 shadow-xl text-center">

                <h2 className="text-3xl font-bold">
                  ADSWAY DIGITAL
                </h2>

                <p className="mt-4 text-gray-500">
                  Premium Digital Marketing Agency
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}