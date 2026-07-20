import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-28">

          {/* Background Blur */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full"></div>

          <div className="relative grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <div>

              <span className="inline-block px-5 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-700 font-semibold mb-8">
                🚀 Premium Digital Marketing Agency
              </span>

              <h1 className="text-6xl lg:text-8xl font-black leading-tight text-gray-900">
                We Build
                <br />
                Brands That
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                  Grow.
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-600 leading-10 max-w-xl">
                We help businesses dominate online through
                social media marketing, Meta Ads, Google Ads,
                branding, premium websites and content creation
                that actually converts.
              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="px-9 py-5 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl hover:scale-105 duration-300">
                  Book Free Consultation
                </button>

                <button className="px-9 py-5 rounded-2xl border border-gray-300 font-semibold hover:bg-gray-100 duration-300">
                  View Portfolio
                </button>

              </div>

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>
                  <h3 className="text-4xl font-bold text-gray-900">
                    50+
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-gray-900">
                    20+
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Happy Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-gray-900">
                    5M+
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Reach Generated
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}
            <div>

              <div className="relative h-[620px] rounded-[40px] bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 shadow-[0_40px_120px_rgba(98,0,255,0.35)] flex items-center justify-center">

                <div className="absolute inset-8 rounded-[32px] bg-white p-10">

                  <div className="flex justify-between items-center">

                    <div>
                      <p className="text-gray-500">
                        Monthly Growth
                      </p>

                      <h2 className="text-5xl font-black mt-2">
                        +387%
                      </h2>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500"></div>

                  </div>

                  <div className="mt-12 h-52 rounded-3xl bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">

                    <h3 className="text-3xl font-bold text-gray-800">
                      ADSWAY DIGITAL
                    </h3>

                  </div>

                  <div className="grid grid-cols-2 gap-5 mt-10">

                    <div className="rounded-2xl bg-gray-100 p-6">

                      <p className="text-gray-500">
                        Meta Ads
                      </p>

                      <h4 className="text-3xl font-bold mt-3">
                        ROAS 6.4x
                      </h4>

                    </div>

                    <div className="rounded-2xl bg-gray-100 p-6">

                      <p className="text-gray-500">
                        Google Ads
                      </p>

                      <h4 className="text-3xl font-bold mt-3">
                        2M+
                      </h4>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}